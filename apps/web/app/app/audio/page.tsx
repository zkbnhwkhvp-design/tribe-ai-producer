import { ModulePage } from "@/components/module-page";

export default function AudioPage() {
  return (
    <ModulePage
      eyebrow="Audio Hub"
      title="Creator Audio Pipeline"
      description="Manage microphones, console audio, monitoring, EQ, compression, routing, and AI cleanup workflows."
      primaryAction="Create Audio Profile"
      stats={[
        { title: "Voice Mix", status: "Good", description: "Primary mic profile is production-ready." },
        { title: "Console Audio", status: "Check", description: "PS5 routing needs monitoring validation." },
        { title: "Noise Control", status: "Active", description: "AI cleanup and noise gate profile enabled." }
      ]}
      items={[
        { title: "Mic Input", status: "Ready", description: "USB microphone profile with EQ, compressor, and limiter chain." },
        { title: "Console Input", status: "Review", description: "PS5 audio capture needs level check against voice mix." },
        { title: "Monitor Mix", status: "Ready", description: "Creator headphone mix for gameplay, alerts, and voice monitoring." },
        { title: "Stream Mix", status: "Ready", description: "Audience-facing mix with voice clarity and controlled game audio." },
        { title: "Recording Mix", status: "Ready", description: "Local recording track profile for cleaner edit flexibility." },
        { title: "AI Cleanup", status: "Active", description: "Noise reduction, room tone control, and loudness recommendations." }
      ]}
    />
  );
}
