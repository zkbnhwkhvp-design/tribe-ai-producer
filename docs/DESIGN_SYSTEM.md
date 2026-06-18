# Tribe GG Design System

## Design System Goal
Create a reusable UI foundation for the website, web app, desktop app, and future mobile companion.

## Foundations

### Grid
- Base spacing: 8px
- Compact spacing: 4px
- Page max width: 1200px marketing, fluid dashboard
- Desktop app shell: 1440px primary design width

### Radius
```txt
xs: 6px
sm: 8px
md: 12px
lg: 16px
xl: 24px
pill: 999px
```

### Shadows
```txt
card: subtle 0 8 24 rgba(0,0,0,0.12)
panel: 0 16 40 rgba(0,0,0,0.20)
glow-orange: 0 0 32 rgba(255,122,26,0.25)
```

### Component Inventory

#### Core
- Button
- IconButton
- Input
- Textarea
- Select
- Checkbox
- Radio
- Switch
- Slider
- Tabs
- Tooltip
- Modal
- Drawer
- Toast
- Badge
- Avatar

#### Layout
- AppShell
- Sidebar
- Topbar
- PageHeader
- SectionHeader
- Card
- StatCard
- EmptyState
- CommandPanel

#### Product Components
- CreatorReadinessCard
- AIAgentCard
- AIAgentRoster
- DeviceStatusCard
- HardwareHealthPanel
- ProjectCard
- QuickActionGrid
- NotificationFeed
- WorkflowStepCard
- ModuleNavCard
- AnalyticsMetricCard

#### Marketing Components
- HeroSection
- FeatureGrid
- ProductPreview
- PricingCard
- TestimonialCard
- LogoCloud
- FAQAccordion
- CTASection
- Footer

## Theme Strategy
- Dark mode first for dashboard.
- Light/chrome mode for marketing.
- Support shared tokens between both.

## Interaction Guidelines
- Primary actions use Tribe Orange.
- Secondary actions are neutral glass/outline.
- Destructive actions use red and confirmation.
- System status should be visible at a glance.
- Dashboard should prioritize clarity over decoration.

## Accessibility
- Maintain readable contrast.
- Do not rely on color alone for status.
- Keyboard-accessible controls.
- Visible focus states.
- Minimum 44px tap targets for mobile.

## Figma Build Requirements
- Use Auto Layout for all cards and sections.
- Use variables for colors, spacing, radius, and typography.
- Create components before screens.
- Build desktop and mobile variants.
- Use reusable cards for AI agents, devices, and modules.
