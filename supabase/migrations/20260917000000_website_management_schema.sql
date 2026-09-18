-- W3.5B: PostgreSQL Schema + RLS Design for Website Management

-- Enable UUID extension if not enabled (Supabase usually has it, but safe to include)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. AUTH & PERMISSION READINESS
CREATE TABLE website_user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name TEXT,
  status TEXT NOT NULL DEFAULT 'ACTIVE',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE website_roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  role_name TEXT UNIQUE NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE website_permissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  permission_name TEXT UNIQUE NOT NULL,
  description TEXT
);

CREATE TABLE website_role_permissions (
  role_id UUID REFERENCES website_roles(id) ON DELETE CASCADE,
  permission_id UUID REFERENCES website_permissions(id) ON DELETE CASCADE,
  PRIMARY KEY (role_id, permission_id)
);

CREATE TABLE website_role_assignments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role_id UUID REFERENCES website_roles(id) ON DELETE CASCADE,
  assigned_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(user_id, role_id)
);

-- RLS Helper
CREATE OR REPLACE FUNCTION has_website_permission(perm_name TEXT)
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM website_role_assignments wra
    JOIN website_role_permissions wrp ON wra.role_id = wrp.role_id
    JOIN website_permissions wp ON wrp.permission_id = wp.id
    WHERE wra.user_id = auth.uid() AND wp.permission_name = perm_name
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- 2. CORE CMS TABLES
CREATE TABLE website_pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  canonical_path TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  page_type TEXT NOT NULL,
  status TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_website_pages_canonical_path ON website_pages(canonical_path);

CREATE TABLE website_sections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  page_id UUID REFERENCES website_pages(id) ON DELETE CASCADE,
  section_key TEXT NOT NULL,
  name TEXT NOT NULL,
  section_type TEXT NOT NULL,
  display_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(page_id, section_key)
);
CREATE INDEX idx_website_sections_page_id ON website_sections(page_id);

CREATE TABLE website_content_entries (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  section_id UUID REFERENCES website_sections(id) ON DELETE CASCADE,
  field_key TEXT NOT NULL,
  field_type TEXT NOT NULL,
  label TEXT NOT NULL,
  description TEXT,
  required BOOLEAN NOT NULL DEFAULT false,
  source_type TEXT NOT NULL,
  source_reference TEXT,
  coverage_status TEXT NOT NULL,
  current_version_id UUID, -- FK added after versions table
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(section_id, field_key)
);
CREATE INDEX idx_website_content_entries_section_id ON website_content_entries(section_id);

CREATE TABLE website_content_versions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_entry_id UUID REFERENCES website_content_entries(id) ON DELETE CASCADE,
  version_number INTEGER NOT NULL,
  values_by_locale JSONB NOT NULL DEFAULT '{}'::jsonb,
  translation_status_by_locale JSONB NOT NULL DEFAULT '{}'::jsonb,
  content_status TEXT NOT NULL,
  source_baseline_id TEXT,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(content_entry_id, version_number)
);
CREATE INDEX idx_website_content_versions_entry_id ON website_content_versions(content_entry_id);

-- Add deferred FK for draft pointer
ALTER TABLE website_content_entries
  ADD CONSTRAINT fk_current_version 
  FOREIGN KEY (current_version_id) 
  REFERENCES website_content_versions(id) ON DELETE SET NULL;


-- 3. MEDIA & ASSETS
CREATE TABLE website_assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  file_name TEXT,
  asset_type TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'UNCATEGORIZED',
  mime_type TEXT,
  storage_mode TEXT NOT NULL,
  bucket TEXT,
  storage_path TEXT,
  external_url TEXT,
  width INTEGER,
  height INTEGER,
  aspect_ratio NUMERIC,
  size_bytes BIGINT,
  checksum TEXT,
  alt JSONB NOT NULL DEFAULT '{}'::jsonb,
  caption JSONB NOT NULL DEFAULT '{}'::jsonb,
  is_decorative BOOLEAN NOT NULL DEFAULT false,
  requires_sanitization BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_website_assets_status ON website_assets(status);
CREATE INDEX idx_website_assets_type ON website_assets(asset_type);

CREATE TABLE website_asset_usages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  asset_id UUID REFERENCES website_assets(id) ON DELETE CASCADE,
  usage_type TEXT NOT NULL,
  page_id UUID REFERENCES website_pages(id) ON DELETE CASCADE,
  section_id UUID REFERENCES website_sections(id) ON DELETE CASCADE,
  content_entry_id UUID REFERENCES website_content_entries(id) ON DELETE CASCADE,
  theme_id UUID, -- Will define FK after themes
  layout_node_id TEXT,
  usage_role TEXT,
  is_draft_usage BOOLEAN NOT NULL DEFAULT false,
  is_published_usage BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_website_asset_usages_asset_id ON website_asset_usages(asset_id);


-- 4. THEMES & LAYOUTS
CREATE TABLE website_themes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  status TEXT NOT NULL,
  active_version_id UUID, -- FK added after theme_versions
  thumbnail_asset_id UUID REFERENCES website_assets(id) ON DELETE SET NULL,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE website_theme_versions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  theme_id UUID REFERENCES website_themes(id) ON DELETE CASCADE,
  version_number INTEGER NOT NULL,
  schema_version TEXT NOT NULL DEFAULT '1.0',
  layout_tree JSONB NOT NULL DEFAULT '{}'::jsonb,
  design_tokens JSONB NOT NULL DEFAULT '{}'::jsonb,
  status TEXT NOT NULL,
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(theme_id, version_number)
);

ALTER TABLE website_themes
  ADD CONSTRAINT fk_active_theme_version 
  FOREIGN KEY (active_version_id) 
  REFERENCES website_theme_versions(id) ON DELETE SET NULL;

ALTER TABLE website_asset_usages
  ADD CONSTRAINT fk_asset_usage_theme 
  FOREIGN KEY (theme_id) 
  REFERENCES website_themes(id) ON DELETE CASCADE;

CREATE TABLE website_content_bindings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  theme_id UUID REFERENCES website_themes(id) ON DELETE CASCADE,
  layout_node_id TEXT NOT NULL,
  content_entry_id UUID REFERENCES website_content_entries(id) ON DELETE CASCADE,
  semantic_key TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE(theme_id, layout_node_id)
);


-- 5. SYSTEM BLOCKS & PUBLICATION
CREATE TABLE website_system_blocks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  block_key TEXT NOT NULL UNIQUE,
  block_type TEXT NOT NULL,
  name TEXT NOT NULL,
  version TEXT NOT NULL,
  integration_status TEXT NOT NULL,
  event_contract_id TEXT,
  schema_reference TEXT,
  required BOOLEAN NOT NULL DEFAULT false,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE website_publications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  publication_type TEXT NOT NULL,
  schema_version TEXT NOT NULL DEFAULT '1.0',
  content_snapshot JSONB NOT NULL,
  theme_snapshot JSONB NOT NULL,
  theme_version_id UUID REFERENCES website_theme_versions(id) ON DELETE SET NULL,
  published_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  previous_publication_id UUID REFERENCES website_publications(id) ON DELETE SET NULL,
  status TEXT NOT NULL
);

CREATE TABLE website_publication_state (
  id TEXT PRIMARY KEY DEFAULT 'global',
  active_publication_id UUID REFERENCES website_publications(id) ON DELETE SET NULL,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  CHECK (id = 'global')
);


-- 6. AUDIT LOGS
CREATE TABLE website_audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  actor_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  actor_source TEXT NOT NULL,
  action TEXT NOT NULL,
  entity_type TEXT NOT NULL,
  entity_id UUID NOT NULL,
  before_state JSONB,
  after_state JSONB,
  metadata JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_website_audit_logs_created_at ON website_audit_logs(created_at);
CREATE INDEX idx_website_audit_logs_entity ON website_audit_logs(entity_type, entity_id);


-- 7. ROW LEVEL SECURITY (RLS) - DEFAULT DENY

-- Enable RLS on all tables
ALTER TABLE website_user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_role_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_role_assignments ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_content_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_content_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_assets ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_asset_usages ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_themes ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_theme_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_content_bindings ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_system_blocks ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_publication_state ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_audit_logs ENABLE ROW LEVEL SECURITY;

-- 7.1 PUBLIC READ BOUNDARY (Only published snapshot and state)
CREATE POLICY public_read_publication_state ON website_publication_state
  FOR SELECT USING (true);

CREATE POLICY public_read_publications ON website_publications
  FOR SELECT USING (
    id = (SELECT active_publication_id FROM website_publication_state WHERE id = 'global')
  );

-- 7.2 EDITOR WRITE BOUNDARY (Drafting and Content Management)
-- Pages & Sections
CREATE POLICY editor_manage_pages ON website_pages 
  FOR ALL TO authenticated USING (has_website_permission('EDIT_CONTENT'));
CREATE POLICY editor_manage_sections ON website_sections 
  FOR ALL TO authenticated USING (has_website_permission('EDIT_CONTENT'));
CREATE POLICY editor_manage_entries ON website_content_entries 
  FOR ALL TO authenticated USING (has_website_permission('EDIT_CONTENT'));

-- Versions (Append Only protection)
CREATE POLICY editor_read_versions ON website_content_versions 
  FOR SELECT TO authenticated USING (has_website_permission('EDIT_CONTENT'));
CREATE POLICY editor_insert_versions ON website_content_versions 
  FOR INSERT TO authenticated WITH CHECK (has_website_permission('EDIT_CONTENT'));
-- NOTE: No UPDATE or DELETE policy for versions to enforce append-only safety.

-- Media 
CREATE POLICY editor_manage_assets ON website_assets 
  FOR ALL TO authenticated USING (has_website_permission('EDIT_MEDIA'));
CREATE POLICY editor_manage_asset_usages ON website_asset_usages 
  FOR ALL TO authenticated USING (has_website_permission('EDIT_MEDIA'));

-- 7.3 PRIVILEGED ACTION BOUNDARY (Publishing & Themes)
CREATE POLICY publisher_manage_themes ON website_themes 
  FOR ALL TO authenticated USING (has_website_permission('EDIT_THEME'));
CREATE POLICY publisher_manage_theme_versions ON website_theme_versions 
  FOR ALL TO authenticated USING (has_website_permission('EDIT_THEME'));
CREATE POLICY publisher_manage_bindings ON website_content_bindings 
  FOR ALL TO authenticated USING (has_website_permission('EDIT_THEME'));

-- Publishing operations are heavily restricted. 
-- In a real environment, publication rows should be created by a secure RPC/Edge Function 
-- but we allow users with PUBLISH_CONTENT permission to interact.
CREATE POLICY publisher_read_publications ON website_publications 
  FOR SELECT TO authenticated USING (has_website_permission('VIEW_WEBSITE_ADMIN'));
CREATE POLICY publisher_insert_publications ON website_publications 
  FOR INSERT TO authenticated WITH CHECK (has_website_permission('PUBLISH_CONTENT'));

CREATE POLICY publisher_manage_publication_state ON website_publication_state 
  FOR ALL TO authenticated USING (has_website_permission('PUBLISH_CONTENT'));

-- Audit Logs (Append Only)
CREATE POLICY admin_read_audit ON website_audit_logs 
  FOR SELECT TO authenticated USING (has_website_permission('VIEW_WEBSITE_ADMIN'));
CREATE POLICY system_insert_audit ON website_audit_logs 
  FOR INSERT TO authenticated WITH CHECK (true); -- Insertions usually done by RPC/Triggers securely

-- Profile and Roles
CREATE POLICY admin_manage_roles ON website_roles 
  FOR ALL TO authenticated USING (has_website_permission('MANAGE_ROLES'));
CREATE POLICY admin_manage_permissions ON website_permissions 
  FOR ALL TO authenticated USING (has_website_permission('MANAGE_ROLES'));
CREATE POLICY admin_manage_role_assignments ON website_role_assignments 
  FOR ALL TO authenticated USING (has_website_permission('MANAGE_ROLES'));
CREATE POLICY admin_manage_role_permissions ON website_role_permissions 
  FOR ALL TO authenticated USING (has_website_permission('MANAGE_ROLES'));
CREATE POLICY user_read_own_profile ON website_user_profiles 
  FOR SELECT TO authenticated USING (id = auth.uid());

