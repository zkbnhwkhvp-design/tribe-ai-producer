import { ModulePage } from "@/components/module-page";

export default function CameraPage() {
  return (
    <ModulePage
      eyebrow="Camera Hub"
      title="Creator Camera Control"
      description="Manage camera framing, exposure, white balance, focus, and creator-ready visual presets."
      primaryAction="Create Camera Preset"
      stats={[
        { title: "Camera Feed", status: "Online", description: "Primary camera source is available." },
        { title: "Exposure", status: "Check", description: "Room lighting may need adjustment." },
        { title: "Framing", status: "Good", description: "Creator is centered and crop-safe." }
      ]}
      items={[
        { title: "Face Cam Preset", status: "Ready", description: "Clean face cam crop for live gameplay and chat scenes." },
        { title: "Podcast Preset", status: "Draft", description: "Wider framing for talking-head recordings and interviews." },
        { title: "Focus Control", status: "Ready", description: "Focus lock recommendation for stable creator framing." },
        { title: "White Balance", status: "Review", description: "Adjust warmth to match orange/chrome brand lighting." },
        { title: "Low Light Profile", status: "Ready", description: "Preset for darker gaming rooms and soft monitor glow." },
        { title: "Scene Framing", status: "Ready", description: "Safe zones for overlays, chat, alerts, and webcam border." }
      ]}
    />
  );
}
