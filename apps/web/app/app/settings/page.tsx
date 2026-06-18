import { ModulePage } from "@/components/module-page";

export default function SettingsPage() {
  return (
    <ModulePage
      eyebrow="Settings"
      title="Workspace Settings"
      description="Configure creator profile, workspace preferences, platform integrations, theme, billing, and AI behavior."
      primaryAction="Save Settings"
      stats={[
        { title: "Workspace", status: "Tribe GG", description: "Primary creator workspace for alpha testing." },
        { title: "Plan", status: "Alpha", description: "Internal build with mock billing state." },
        { title: "Theme", status: "Dark", description: "Dashboard-first tactical theme enabled." }
      ]}
      items={[
        { title: "Creator Profile", status: "Open", description: "Display name, handle, avatar, creator type, and public profile settings." },
        { title: "Workspace", status: "Open", description: "Team name, members, roles, default project settings, and permissions." },
        { title: "AI Preferences", status: "Alpha", description: "Agent tone, routing style, saved prompts, and recommendation behavior." },
        { title: "Integrations", status: "Future", description: "OBS, YouTube, Twitch, TikTok, Discord, Stripe, and smart lights." },
        { title: "Notifications", status: "Open", description: "Production reminders, setup alerts, publishing tasks, and team updates." },
        { title: "Security", status: "Open", description: "Login, session management, workspace access, and account controls." }
      ]}
    />
  );
}
