import { ModulePage } from "@/components/module-page";

export default function LightingPage() {
  return (
    <ModulePage
      eyebrow="Lighting Hub"
      title="Scene Lighting System"
      description="Build lighting presets for live streams, recordings, BRB scenes, product shots, and calm creator sessions."
      primaryAction="Create Lighting Scene"
      stats={[
        { title: "Active Scene", status: "Live", description: "Primary stream lighting preset is active." },
        { title: "Brightness", status: "82%", description: "Balanced for camera exposure and eye comfort." },
        { title: "Mood", status: "Orange", description: "Tribe GG accent lighting profile selected." }
      ]}
      items={[
        { title: "Live Gameplay", status: "Ready", description: "Balanced creator lighting with soft orange accent and low background noise." },
        { title: "Recording Mode", status: "Ready", description: "Brighter neutral lighting for clean talking-head and tutorial content." },
        { title: "BRB Scene", status: "Draft", description: "Lower intensity ambient lighting for intermission and break screens." },
        { title: "Sponsor Shot", status: "Future", description: "Product-friendly lighting preset for hardware and brand deliverables." },
        { title: "Night Session", status: "Ready", description: "Low-glare room lighting for calm late-night gaming content." },
        { title: "Smart Light Sync", status: "Future", description: "Planned integrations for Hue, Govee, Nanoleaf, LIFX, and Matter." }
      ]}
    />
  );
}
