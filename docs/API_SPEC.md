# Tribe GG API Specification

## API Style
Use typed service functions first. Add REST or RPC endpoints only where needed.

## Auth
Supabase Auth handles sessions and user identity.

## Core API Domains

### Profiles
```ts
getProfile(userId: string)
updateProfile(userId: string, input: UpdateProfileInput)
```

### Workspaces
```ts
createWorkspace(input: CreateWorkspaceInput)
getWorkspace(workspaceId: string)
listUserWorkspaces(userId: string)
```

### Projects
```ts
createProject(input: CreateProjectInput)
getProject(projectId: string)
listProjects(workspaceId: string)
updateProject(projectId: string, input: UpdateProjectInput)
deleteProject(projectId: string)
```

### AI Workforce
```ts
listAgents()
getAgent(agentId: string)
createRecommendation(input: CreateRecommendationInput)
listRecommendations(projectId: string)
```

### Devices
```ts
listDevices(workspaceId: string)
createDevice(input: CreateDeviceInput)
updateDevice(deviceId: string, input: UpdateDeviceInput)
createDeviceProfile(input: CreateDeviceProfileInput)
```

### Readiness
```ts
getReadiness(workspaceId: string)
createReadinessCheck(input: CreateReadinessCheckInput)
```

### Analytics
```ts
createAnalyticsSnapshot(input: CreateAnalyticsSnapshotInput)
listAnalyticsSnapshots(workspaceId: string)
```

## Standard Response Shape
```ts
type ApiResponse<T> = {
  data: T | null
  error: string | null
}
```

## Error Strategy
- Validate inputs with zod.
- Return user-safe errors.
- Log technical errors server-side.
- Never expose provider secrets.

## Future Integrations
- OpenAI or model provider APIs
- OBS websocket
- YouTube API
- Twitch API
- TikTok API
- Stripe
- Discord
- Smart lighting providers
