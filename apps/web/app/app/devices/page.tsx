import { ModulePage } from "@/components/module-page";

export default function DevicesPage() {
  return (
    <ModulePage
      eyebrow="Devices"
      title="Device Manager"
      description="Track creator hardware, setup health, profiles, and future native device integrations."
      primaryAction="Scan Setup"
      stats={[
        { title: "Connected Devices", status: "8", description: "Mocked devices across audio, camera, console, and lighting." },
        { title: "Setup Health", status: "86%", description: "Overall device readiness for content production." },
        { title: "Issues", status: "2", description: "Minor checks recommended before going live." }
      ]}
      items={[
        { title: "PS5 Console", status: "Online", description: "Console capture workflow detected. Verify audio monitoring before stream." },
        { title: "USB Microphone", status: "Ready", description: "Primary voice input profile available for stream and recording mix." },
        { title: "Capture Card", status: "Ready", description: "Gameplay capture path assigned to Console Hub profile." },
        { title: "Camera", status: "Check", description: "Camera feed available. White balance preset needs review." },
        { title: "Smart Lights", status: "Ready", description: "Lighting Hub scene presets available for live, record, and BRB scenes." },
        { title: "Headphones", status: "Ready", description: "Monitoring output profile assigned to creator mix." }
      ]}
    />
  );
}
