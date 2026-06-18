# Tribe GG OS Technical Architecture

## Architecture Model
Tribe GG OS uses a modular monorepo architecture.

```txt
apps/
  web/            Next.js marketing site and web app
  desktop/        Electron wrapper for desktop experience
packages/
  ui/             Shared React components
  design-system/  Tokens, themes, typography, spacing, icons
  ai-workforce/   Agent definitions, prompts, orchestration contracts
  hardware-sdk/   Device abstraction layer and mock adapters
  shared/         Shared types, utilities, constants
backend/
  supabase/       SQL schema, RLS policies, seed data
  api/            Server functions and API contracts
docs/             Product, architecture, launch, and design docs
```

## Frontend
- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

## Desktop
- Electron shell
- Local settings storage
- Future native device bridge
- Shared web UI rendered in desktop container

## Backend
- Supabase Auth
- Supabase Postgres
- Supabase Storage
- Row Level Security
- Edge Functions for AI and integrations

## AI Layer
The AI layer should be provider-agnostic.

```txt
User Request
  -> AI Workforce Router
  -> Specialist Agent
  -> Tool / Data Context
  -> Structured Output
  -> Saved Project State
```

## Key Services

### Auth Service
Handles login, signup, sessions, workspace access, and user profiles.

### Project Service
Stores creator projects, content plans, stream plans, video plans, assets, and status.

### AI Workforce Service
Routes user requests to the right specialist agent and stores recommendations.

### Hardware Service
Stores connected device records, device health, setup profiles, and mock diagnostics.

### Analytics Service
Stores creator KPIs, publishing metrics, retention notes, and recommendations.

### Billing Service
Future Stripe integration for paid plans.

## Data Model Summary
- users
- profiles
- workspaces
- workspace_members
- projects
- project_assets
- ai_agents
- ai_recommendations
- devices
- device_profiles
- readiness_checks
- content_tasks
- analytics_snapshots

## MVP Deployment
- Web: Vercel
- Database/Auth/Storage: Supabase
- Desktop: Electron distributable later
- Repo: GitHub

## Engineering Principles
- Ship usable increments.
- Keep UI and business logic separated.
- Use shared types across frontend and backend.
- Design for future desktop/native capabilities.
- Use mock adapters before native hardware integrations.
- Avoid vendor lock-in for AI providers.
