# Tribe GG Database Schema

## Platform
Supabase PostgreSQL

## Tables

### profiles
```sql
create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  handle text unique,
  avatar_url text,
  creator_type text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

### workspaces
```sql
create table workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique,
  owner_id uuid references profiles(id) on delete cascade,
  created_at timestamptz default now()
);
```

### workspace_members
```sql
create table workspace_members (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references workspaces(id) on delete cascade,
  user_id uuid references profiles(id) on delete cascade,
  role text not null default 'member',
  created_at timestamptz default now(),
  unique(workspace_id, user_id)
);
```

### projects
```sql
create table projects (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references workspaces(id) on delete cascade,
  name text not null,
  type text not null,
  status text not null default 'draft',
  description text,
  created_by uuid references profiles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

### ai_agents
```sql
create table ai_agents (
  id text primary key,
  name text not null,
  role text not null,
  description text,
  icon text,
  is_active boolean default true
);
```

### ai_recommendations
```sql
create table ai_recommendations (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references workspaces(id) on delete cascade,
  project_id uuid references projects(id) on delete set null,
  agent_id text references ai_agents(id),
  summary text,
  priority text,
  recommendations jsonb default '[]'::jsonb,
  tasks jsonb default '[]'::jsonb,
  risks jsonb default '[]'::jsonb,
  next_step text,
  created_at timestamptz default now()
);
```

### devices
```sql
create table devices (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references workspaces(id) on delete cascade,
  name text not null,
  type text not null,
  brand text,
  model text,
  status text default 'unknown',
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);
```

### readiness_checks
```sql
create table readiness_checks (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references workspaces(id) on delete cascade,
  score int not null default 0,
  audio_status text,
  camera_status text,
  lighting_status text,
  network_status text,
  device_status text,
  notes jsonb default '[]'::jsonb,
  created_at timestamptz default now()
);
```

### content_tasks
```sql
create table content_tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references projects(id) on delete cascade,
  title text not null,
  status text default 'todo',
  assignee_agent_id text references ai_agents(id),
  due_at timestamptz,
  created_at timestamptz default now()
);
```

## Security
- Enable Row Level Security on all user-owned tables.
- Users can access data only through their workspace memberships.
- Service role handles trusted backend operations.

## Seed Data
Seed AI agents, demo devices, and dashboard readiness checks for local development.
