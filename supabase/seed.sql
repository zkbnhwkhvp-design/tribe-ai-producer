insert into public.ai_agents (id, name, role, description, icon, is_active) values
  ('executive-producer', 'Executive Producer', 'Strategy and production leadership', 'Owns priorities, content planning, production schedule, and final recommendations.', 'producer', true),
  ('audio-engineer', 'Audio Engineer', 'Audio setup and mix quality', 'Reviews microphone setup, gain staging, EQ, noise reduction, monitoring, and stream mix.', 'audio', true),
  ('obs-engineer', 'OBS Engineer', 'Scene and broadcast workflow', 'Creates scene structure, capture workflows, stream settings, recording settings, and troubleshooting steps.', 'broadcast', true),
  ('camera-engineer', 'Camera Engineer', 'Camera setup and framing', 'Handles framing, exposure, white balance, focus, and camera polish.', 'camera', true),
  ('lighting-director', 'Lighting Director', 'Lighting scenes and smart presets', 'Designs scene lighting, smart light presets, mood settings, and camera-friendly lighting plans.', 'lighting', true),
  ('video-editor', 'Video Editor', 'Long-form and short-form editing', 'Plans edits, pacing, story structure, hooks, cuts, and clip workflows.', 'video', true),
  ('thumbnail-designer', 'Thumbnail Designer', 'Packaging and visual hierarchy', 'Creates thumbnail concepts, title pairings, and A/B testing ideas.', 'image', true),
  ('content-strategist', 'Content Strategist', 'Content calendar and positioning', 'Builds content calendars, niche strategy, platform plans, and repeatable formats.', 'strategy', true),
  ('analytics-producer', 'Analytics Producer', 'Growth and performance analysis', 'Turns performance data into creator actions and content improvements.', 'analytics', true),
  ('community-manager', 'Community Manager', 'Audience and community growth', 'Builds engagement prompts, Discord workflows, replies, and loyalty systems.', 'community', true),
  ('sponsor-manager', 'Sponsor Manager', 'Brand deals and outreach', 'Tracks sponsor targets, outreach angles, media kit suggestions, and campaign deliverables.', 'sponsor', true),
  ('ai-auto-engineer', 'AI Auto Engineer', 'Diagnostics and workflow automation', 'Diagnoses setup problems, recommends workflows, and coordinates device/profile configuration.', 'automation', true)
on conflict (id) do update set
  name = excluded.name,
  role = excluded.role,
  description = excluded.description,
  icon = excluded.icon,
  is_active = excluded.is_active;
