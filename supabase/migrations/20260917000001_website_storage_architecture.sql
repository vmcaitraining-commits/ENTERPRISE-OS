-- W3.5C: Supabase Storage Architecture & Security Policies for Website Media

-- 1. BUCKET CREATION
-- We create a private bucket for 'website-assets'. 
-- Public delivery of these assets will be handled via signed URLs for drafting, 
-- or a specialized edge cache / public mapping for published snapshots in the future.
INSERT INTO storage.buckets (id, name, public) 
VALUES ('website-assets', 'website-assets', false)
ON CONFLICT (id) DO NOTHING;

-- 2. STORAGE POLICIES
-- Default RLS on storage.objects is enabled by Supabase.

-- 2.1 ADMIN / EDITOR DRAFT PREVIEW (Read)
-- Allows authenticated users with VIEW_WEBSITE_ADMIN to view private assets.
-- Signed URLs do not invoke this policy (they bypass RLS if generated securely).
CREATE POLICY "Admin preview assets" 
  ON storage.objects FOR SELECT 
  TO authenticated 
  USING (
    bucket_id = 'website-assets' 
    AND public.has_website_permission('VIEW_WEBSITE_ADMIN')
  );

-- 2.2 EDITOR UPLOAD (Insert)
-- Requires EDIT_MEDIA permission.
-- Enforces that users can only upload to the website-assets bucket.
CREATE POLICY "Editor upload assets" 
  ON storage.objects FOR INSERT 
  TO authenticated 
  WITH CHECK (
    bucket_id = 'website-assets' 
    AND public.has_website_permission('EDIT_MEDIA')
  );

-- 2.3 EDITOR UPDATE (Update)
-- We strictly restrict updating (overwriting) existing binaries to enforce asset immutability,
-- but we allow it if they have EDIT_MEDIA just in case, though the application logic avoids it.
CREATE POLICY "Editor update assets" 
  ON storage.objects FOR UPDATE 
  TO authenticated 
  USING (
    bucket_id = 'website-assets' 
    AND public.has_website_permission('EDIT_MEDIA')
  );

-- 2.4 EDITOR DELETE (Delete)
-- Deletion is highly restricted. Normal editors should archive assets.
-- The actual physical delete is permitted only for users with EDIT_MEDIA.
-- NOTE: In a mature VMC architecture, physical deletion of an asset referenced by an 
-- active publication should be blocked via a Postgres Trigger or Edge Function.
CREATE POLICY "Editor delete assets" 
  ON storage.objects FOR DELETE 
  TO authenticated 
  USING (
    bucket_id = 'website-assets' 
    AND public.has_website_permission('EDIT_MEDIA')
  );

-- 3. DENY ANONYMOUS ACCESS
-- There are NO policies granting INSERT, UPDATE, or DELETE to 'anon'.
-- Anonymous read access is NOT granted universally here. The public website 
-- will only resolve assets bound to the active publication snapshot.
