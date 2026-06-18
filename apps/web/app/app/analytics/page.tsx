import { ModulePage } from "@/components/module-page";

export default function AnalyticsPage() {
  return (
    <ModulePage
      eyebrow="Analytics"
      title="Creator Growth Intelligence"
      description="Turn content performance, audience signals, and publishing data into clear production decisions."
      primaryAction="Generate Weekly Report"
      stats={[
        { title: "Content Score", status: "78%", description: "Mock score based on consistency, clarity, and engagement." },
        { title: "Publishing Streak", status: "5 Days", description: "Current simulated content consistency streak." },
        { title: "Next Growth Lever", status: "Clips", description: "Short-form distribution should be the next priority." }
      ]}
      items={[
        { title: "Retention Review", status: "Ready", description: "Identify where viewers leave and convert that into editing improvements." },
        { title: "Title Testing", status: "Draft", description: "Compare hooks, titles, and packaging angles for upcoming uploads." },
        { title: "Thumbnail Notes", status: "Ready", description: "Send visual hierarchy recommendations to the Thumbnail Designer agent." },
        { title: "Platform Split", status: "Mock", description: "Track YouTube, Twitch, TikTok, Instagram, and Discord performance." },
        { title: "Sponsor Readiness", status: "Future", description: "Calculate brand deal readiness from audience, consistency, and niche clarity." },
        { title: "Weekly Actions", status: "Ready", description: "Summarize the three highest-value creator actions for the week." }
      ]}
    />
  );
}
