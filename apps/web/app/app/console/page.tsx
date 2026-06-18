import { ModulePage } from "@/components/module-page";

export default function ConsolePage() {
  return (
    <ModulePage
      eyebrow="Console Hub"
      title="Console Capture Workflow"
      description="Manage PS5, Xbox, Switch, capture cards, game audio, recording profiles, and console-first creator setups."
      primaryAction="Create Console Profile"
      stats={[
        { title: "Console", status: "PS5", description: "Primary gaming platform selected." },
        { title: "Capture Path", status: "Ready", description: "Capture card workflow configured for alpha demo." },
        { title: "Game Audio", status: "Review", description: "Audio balance should be checked before live session." }
      ]}
      items={[
        { title: "PS5 Stream Profile", status: "Ready", description: "Gameplay capture, party audio note, and stream scene recommendations." },
        { title: "Recording Profile", status: "Ready", description: "Local recording settings for high-quality gameplay capture." },
        { title: "Audio Monitoring", status: "Check", description: "Validate creator headphone path and audience mix before going live." },
        { title: "Capture Card", status: "Ready", description: "HDMI capture workflow assigned to Console Hub." },
        { title: "Gameplay Scene", status: "Ready", description: "No-facecam and facecam scene patterns available for console gameplay." },
        { title: "Clip Workflow", status: "Draft", description: "Mark key moments and send to Video Editor and Thumbnail Designer agents." }
      ]}
    />
  );
}
