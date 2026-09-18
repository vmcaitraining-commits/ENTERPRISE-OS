# Website Management - Supabase Setup (Phase W3.5A)

This document outlines the foundation setup for integrating Supabase into the VMC Website Management System.

## Current Phase Status (W3.5A)
- **Supabase Dependency**: Installed.
- **Environment Contract**: Prepared (using `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`).
- **Client Architecture**: Singleton `SupabaseClientFactory` created.
- **Production Tables**: NOT CREATED YET.
- **Storage Buckets**: NOT CREATED YET.
- **Authentication**: NOT ACTIVATED YET.
- **Repository Mode**: Defaults to `LOCAL_DEVELOPMENT`. 

## Environment Variables
The application expects the following variables in `.env` (or `.env.local`):

```env
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### Safe vs Privileged Keys
- **VITE_PREFIX**: Safe for browser usage. These keys (`URL` and `ANON_KEY`) only allow access to operations explicitly permitted by Row Level Security (RLS) policies.
- **SERVICE_ROLE KEY**: **STRICTLY PROHIBITED** in the browser client. Never use a `VITE_` prefix on the `service_role` key. Never commit it to git. 

## Client vs Privileged Operations Split
- **Client-Safe Operations**: Authenticated draft reads, draft editing, allowed media uploads (governed by RLS).
- **Privileged Operations**: Publish, rollback, destructive operations, permission administration. These will require a secure backend (e.g. Edge Functions or PostgreSQL RPC) and are NOT permitted directly from the browser client via a generic API.

## Future RLS and Permission Model
All future website management production tables will be guarded by Row Level Security (RLS). The public website renderer will only have access to the published data layer, strictly separated from CMS draft tables.

## Future W3.5B-F Sequence
- **W3.5B**: PostgreSQL Schema + RLS Design
- **W3.5C**: Storage & Bucket Configuration
- **W3.5D**: Auth & Role Model
- **W3.5E**: Data Migration 
- **W3.5F**: Repository Switch & Full Connectivity

## W3.5B: Schema and RLS Principles
- **Schema Overview**: The PostgreSQL schema focuses exclusively on the Website Management CMS. It includes `website_pages`, `website_sections`, `website_content_entries`, `website_content_versions`, `website_assets`, `website_themes`, `website_publications`, and `website_audit_logs`.
- **Table Relationships**: `website_pages` owns `website_sections`, which owns `website_content_entries`. `website_content_versions` represents append-only historical values for the entries. The active publication is tracked by a single `global` row in `website_publication_state` pointing to an immutable `website_publications` snapshot.
- **RLS Principles**: Default Deny. Row Level Security is enabled on ALL tables. Anonymous/Public access is STRICTLY limited to reading the active `website_publications` snapshot and `website_publication_state`.
- **Privileged Operation Boundaries**: Routine editor actions (creating drafts) are allowed via client `has_website_permission('EDIT_CONTENT')` RLS policies. High-risk actions (publishing, rollback, permission changes) are heavily restricted, with the database schemas enforcing append-only rules for versions, publications, and audit logs (no UPDATE/DELETE allowed for editors).
- **Publication Model**: Atomic and immutable. The `website_publications` JSONB snapshots freeze the content and themes. A transaction is required to insert the snapshot, update the active state pointer, and write the audit log.
- **Migration Sequence**: The schema is deployed as deterministic SQL migrations (`supabase/migrations/*.sql`) without mixing in unrelated business data.

## W3.5C: Storage Architecture & Security Policies
- **Bucket Architecture**: A dedicated `website-assets` bucket isolates website media from CRM or enterprise documents. It is configured as a PRIVATE bucket.
- **Storage Identity**: The path strictly follows `{environment}/{assetId}/original.{ext}`. We do not use the user's display filename for the identity/path to prevent collisions and path traversal attacks.
- **Draft vs Published Media**: The presence of an asset in the bucket does not mean it is published. Drafts generate short-lived signed URLs for Admin preview. The public rendering will only process assets belonging to the ACTIVE PUBLICATION SNAPSHOT.
- **Upload Flow (TS Boundary)**: `SupabaseWebsiteAssetStorage` implements strict file validation (size limits: 10MB images, 2MB SVG, 150MB video, 20MB docs) and MIME type checking before calling the Supabase SDK. Production upload is currently disabled.
- **SVG Safety**: SVGs are flagged with `requiresSanitization: true`. A sanitizer boundary must be respected before final publication of user SVGs.
- **Delete Flow**: Direct client-side deletion is restricted. Assets should be transitioned to an `ARCHIVED` status. Real physical deletion requires `has_website_permission('EDIT_MEDIA')` and must not delete binaries referenced by historical rollback snapshots.
- **Retention TBD**: Orphan asset cleanup policies and retention durations require Project Owner approval.
- **Signed URL Strategy**: We do not store signed URLs in the database. `website_assets` maps the `storage_path`, and the runtime requests signed URLs securely as needed for Admin preview.
- **W3.5D Dependency**: The Supabase Auth module must be implemented next before production Media Library uploads can be enabled for the end user.

## W3.5D1: Admin Auth Foundation & Session Architecture
- **Auth Identity vs Permission**: Authentication answers "who is the user" (Supabase Auth). Authorization answers "what can they do" (Website RBAC schema).
- **Public Sign-up Disabled**: The Admin Login shell explicitly does NOT expose sign-up or registration. Accounts will be administratively provisioned.
- **Email/Password V1**: Initial auth relies on email/password. Future integration of MFA or SSO remains a documented possibility.
- **Session Architecture**: `SupabaseAdminAuthService` hides SDK details. `AdminAuthProvider` wraps the React context and listens for `SIGNED_OUT`, `TOKEN_REFRESHED` events.
- **Admin Guard Activation**: Currently, `AdminAuthGuard` sits at `PREPARED_NOT_ENFORCED`. The Admin Portal remains open during this preparatory phase to prevent self-lockout during development until W3.5D2 provides a live login mechanism.
- **Token Security**: Tokens are handled securely by the Supabase SDK (default local storage mechanisms). No manual copying of access/refresh tokens to external stores or logs.
- **W3.5D2 Dependency**: Real enforcement, Admin account creation, and environment connection are slated for the final W3.5D2 activation phase.

## W3.5D2: Live Auth Activation & Configuration Standard
- **Client Key Standard**: The browser strictly uses `VITE_SUPABASE_PUBLISHABLE_KEY` (or legacy `VITE_SUPABASE_ANON_KEY` as fallback). We NEVER expose the `service_role` or secret keys to the Vite client.
- **First Admin Process**: We DO NOT support public signup or provide UI to create the first admin. The first admin account must be provisioned via the Supabase Dashboard or an external secure invite process.
- **Guard Enforcement Checkpoint**: Before changing `AuthEnforcementState` to `ENFORCED`, the connection MUST be verified with a real admin user login and session restoration.
- **Emergency Source Rollback Rule**: If `ENFORCED` mode results in self-lockout or failure, the source MUST immediately be reverted to `PREPARED_NOT_ENFORCED`.
- **RBAC Status**: This activation provides a secure IDENTITY GATE only. Full RBAC (Role-Based Access Control) is still pending and will be handled in a later phase.
