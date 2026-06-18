import { ModulePage } from "@/components/module-page";

export default function AIWorkforcePage() {
  return (
    <ModulePage
      eyebrow="AI Workforce"
      title="Specialist Agents"
      description="Coordinate production work through focused AI specialists instead of one generic assistant."
      primaryAction="Ask Executive Producer"
      stats={[
        { title: "Agents Online", status: "10", description: "Production specialists available for creator workflows." },
        { title: "Recommendations", status: "24", description: "Saved action items from recent planning sessions." },
        { title: "Automation Readiness", status: "Alpha", description: "Mock workflows today, live routing next." }
      ]}
      items={[
        { title: "Executive Producer", status: "Online", description: "Owns strategy, schedule, priorities, production planning, and final recommendations." },
        { title: "Audio Engineer", status: "Ready", description: "Reviews mic setup, gain staging, EQ, noise reduction, and monitoring." },
        { title: "OBS Engineer", status: "Ready", description: "Builds scene structure, capture workflows, recording settings, and stream settings." },
        { title: "Camera Engineer", status: "Ready", description: "Handles framing, exposure, focus, white balance, and camera polish." },
        { title: "Lighting Director", status: "Ready", description: "Designs smart lighting presets, scene mood, and camera-friendly lighting setups." },
        { title: "Analytics Producer", status: "Standby", description: "Turns creator metrics into clear next actions for growth and retention." }
      ]}
    />
  );
}
