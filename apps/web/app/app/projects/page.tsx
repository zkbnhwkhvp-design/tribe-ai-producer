import { ModulePage } from "@/components/module-page";

export default function ProjectsPage() {
  return (
    <ModulePage
      eyebrow="Projects"
      title="Creator Projects"
      description="Plan streams, videos, clips, podcasts, campaigns, and creator workflows from one operational board."
      primaryAction="Create Project"
      stats={[
        { title: "Active Projects", status: "12", description: "Across streams, shorts, and content campaigns." },
        { title: "Due This Week", status: "7", description: "Tasks requiring creator or AI Workforce action." },
        { title: "Ready To Publish", status: "3", description: "Assets that passed the production checklist." }
      ]}
      items={[
        { title: "Friday Night Stream", status: "Planning", description: "PS5 gameplay stream with audio check, intro scene, and clip plan." },
        { title: "Dad Gamer Recruitment", status: "Draft", description: "Content and outreach campaign for recruiting consistent gamer creators." },
        { title: "Setup Tour Short", status: "Editing", description: "Short-form content showing Tribe GG OS dashboard and gaming setup." },
        { title: "Sponsor Test Package", status: "Review", description: "Media kit, deliverables, and outreach language for brand partners." },
        { title: "AI Workforce Demo", status: "Ready", description: "Demo project showcasing Executive Producer and Audio Engineer flow." },
        { title: "Weekly Clips Batch", status: "Queued", description: "Clip list, thumbnail ideas, captions, and publish order." }
      ]}
    />
  );
}
