create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key,
  display_name text,
  handle text unique,
  avatar_url text,
  creator_type text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.workspaces (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique,
  owner_id uuid references public.profiles(id) on delete cascade,
  created_at timestamptz default now()
);

create table if not exists public.workspace_members (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade,
  user_id uuid references public.profiles(id) on delete cascade,
  role text not null default 'member',
  created_at timestamptz default now(),
  unique(workspace_id, user_id)
);

create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade,
  name text not null,
  type text not null,
  status text not null default 'draft',
  description text,
  created_by uuid references public.profiles(id),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.ai_agents (
  id text primary key,
  name text not null,
  role text not null,
  description text,
  icon text,
  is_active boolean default true
);

create table if not exists public.ai_recommendations (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade,
  project_id uuid references public.projects(id) on delete set null,
  agent_id text references public.ai_agents(id),
  summary text,
  priority text,
  recommendations jsonb default '[]'::jsonb,
  tasks jsonb default '[]'::jsonb,
  risks jsonb default '[]'::jsonb,
  next_step text,
  created_at timestamptz default now()
);

create table if not exists public.devices (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade,
  name text not null,
  type text not null,
  brand text,
  model text,
  status text default 'unknown',
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists public.readiness_checks (
  id uuid primary key default gen_random_uuid(),
  workspace_id uuid references public.workspaces(id) on delete cascade,
  score int not null default 0,
  audio_status text,
  camera_status text,
  lighting_status text,
  network_status text,
  device_status text,
  notes jsonb default '[]'::jsonb,
  created_at timestamptz default now()
);

create table if not exists public.content_tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references public.projects(id) on delete cascade,
  title text not null,
  status text default 'todo',
  assignee_agent_id text references public.ai_agents(id),
  due_at timestamptz,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;
alter table public.workspaces enable row level security;
alter table public.workspace_members enable row level security;
alter table public.projects enable row level security;
alter table public.ai_agents enable row level security;
alter table public.ai_recommendations enable row level security;
alter table public.devices enable row level security;
alter table public.readiness_checks enable row level security;
alter table public.content_tasks enable row level security;

create policy "profiles_select_own" on public.profiles for select using (id = auth.uid());
create policy "profiles_update_own" on public.profiles for update using (id = auth.uid());
create policy "profiles_insert_own" on public.profiles for insert with check (id = auth.uid());

create policy "agents_public_read" on public.ai_agents for select using (true);

create policy "workspace_member_read" on public.workspace_members for select using (user_id = auth.uid());
create policy "workspace_read_member" on public.workspaces for select using (
  exists (
    select 1 from public.workspace_members wm
    where wm.workspace_id = workspaces.id and wm.user_id = auth.uid()
  )
);

create policy "projects_read_member" on public.projects for select using (
  exists (
    select 1 from public.workspace_members wm
    where wm.workspace_id = projects.workspace_id and wm.user_id = auth.uid()
  )
);

create policy "devices_read_member" on public.devices for select using (
  exists (
    select 1 from public.workspace_members wm
    where wm.workspace_id = devices.workspace_id and wm.user_id = auth.uid()
  )
);

create policy "readiness_read_member" on public.readiness_checks for select using (
  exists (
    select 1 from public.workspace_members wm
    where wm.workspace_id = readiness_checks.workspace_id and wm.user_id = auth.uid()
  )
);

create policy "recommendations_read_member" on public.ai_recommendations for select using (
  exists (
    select 1 from public.workspace_members wm
    where wm.workspace_id = ai_recommendations.workspace_id and wm.user_id = auth.uid()
  )
);

create policy "tasks_read_project_member" on public.content_tasks for select using (
  exists (
    select 1 from public.projects p
    join public.workspace_members wm on wm.workspace_id = p.workspace_id
    where p.id = content_tasks.project_id and wm.user_id = auth.uid()
  )
);
