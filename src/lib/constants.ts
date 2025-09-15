
import { 
  TableCellsIcon, 
  GlobeAltIcon, 
  CpuChipIcon,
  ArrowPathIcon,
  DocumentChartBarIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";

export const services = [
  {
    id: "reporting",
    title: "Automated Reporting",
    description: "Daily/weekly client reports without copy/paste",
    outcome: "Daily/weekly client reports without copy/paste",
    icon: DocumentChartBarIcon,
    features: ["GA4 + Meta + Google Ads → Sheet/PDF", "Scheduled 6am send", "Slack/Email alerts", "Error handling"],
    timesSaved: "5-15 hours/week",
    pricing: "Starter-friendly ($199)",
    timeline: "5–7 days",
    demoLink: true,
    icons: ["/icons/google_analytics.png", "/icons/meta.png", "/icons/google_sheets.png", "/icons/slack.png"]
  },
  {
    id: "lead-sourcing",
    title: "Lead Sourcing & Monitoring",
    description: "Fresh prospects and competitor intel, auto-updated",
    outcome: "Fresh prospects and competitor intel, auto-updated",
    icon: GlobeAltIcon,
    features: ["Clutch/G2/Maps scrape", "Dedupe + change alerts", "Push to Sheets/HubSpot", "Respect site ToS, prefer APIs"],
    timesSaved: "8-20 hours/week",
    pricing: "Starter ($199) or Pro if enrichment",
    timeline: "5–7 days",
    demoLink: true,
    compliance: "We respect site ToS and prefer official APIs",
    icons: ["/icons/google_sheets.png", "/icons/hubspot.png", "/icons/slack.png"]
  },
  {
    id: "ops-automation",
    title: "Ops & File Automation",
    description: "Move/rename/convert files and create tasks automatically",
    outcome: "Move/rename/convert files and create tasks automatically",
    icon: ArrowPathIcon,
    features: ["Rename/convert assets", "Route to Drive", "Create ClickUp/Asana tasks", "Notify on success/failure"],
    timesSaved: "3-12 hours/week",
    pricing: "Starter-friendly ($199)",
    timeline: "5–7 days",
    icons: ["/icons/clickup.png", "/icons/google_sheets.png", "/icons/slack.png"]
  },
  {
    id: "spreadsheet-dashboards",
    title: "Spreadsheet Cleanup & Dashboards", 
    description: "Turn messy CSVs into client‑ready dashboards",
    outcome: "Turn messy CSVs into client‑ready dashboards",
    icon: TableCellsIcon,
    features: ["Merge sources", "Dedupe/validate", "Chart tab + export PDF", "Scheduled refresh"],
    timesSaved: "4-15 hours/week",
    pricing: "Starter ($199) for single source; Pro for multi-source",
    timeline: "5–7 days",
    icons: ["/icons/google_sheets.png", "/icons/google_analytics.png"]
  },
  {
    id: "ai-assist",
    title: "AI Assist for Client Ops",
    description: "Use LLMs to summarize, tag, and draft—no spam",
    outcome: "Use LLMs to summarize, tag, and draft—no spam",
    icon: CpuChipIcon,
    features: ["Summarize emails to ClickUp", "Generate briefs from links", "Tag/classify tickets", "QC checks"],
    timesSaved: "2-10 hours/week",
    pricing: "Starter ($199) for single-step; Pro for pipelines",
    timeline: "5–7 days",
    icons: ["/icons/clickup.png", "/icons/slack.png", "/icons/google_sheets.png"]
  },
  {
    id: "custom",
    title: "Custom Automations",
    description: "Bespoke workflows, multi‑source, or advanced integrations",
    outcome: "Bespoke workflows, multi‑source, or advanced integrations",
    icon: RocketLaunchIcon,
    features: ["Multi-account rollups", "API integrations", "AI pipelines", "Scalable architecture"],
    timesSaved: "Variable",
    pricing: "From $1,200",
    timeline: "2–4 weeks",
    isCustom: true,
    icons: ["/icons/shopify.png", "/icons/hubspot.png", "/icons/clickup.png"]
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Tell Me Your Problem",
    description: "Describe the repetitive task that's wasting your time. No technical jargon needed - just explain what you're doing manually that could be automated.",
    details: [
      "Fill out a simple form or send me a message",
      "Explain your current manual process", 
      "Share any files/tools you're currently using",
      "I'll ask clarifying questions if needed"
    ],
    timeframe: "5-10 minutes",
  },
  {
    step: 2,
    title: "I Build Your Solution",
    description: "I create a custom automation tailored to your exact needs, test it thoroughly, and package everything you need to run it yourself.",
    details: [
      "Custom code built from scratch for your use case",
      "Thorough testing with sample data",
      "Complete setup documentation included",
      "Video walkthrough of how it works"
    ],
    timeframe: "Days, not weeks",
  },
  {
    step: 3,
    title: "Deploy & Start Saving Time",
    description: "Install the automation following my step-by-step guide, then watch it handle your repetitive tasks automatically while you focus on what matters.",
    details: [
      "Easy installation with detailed instructions",
      "One-time setup, then runs automatically",
      "Full source code ownership - it's yours forever",
      "30 days of free support and adjustments"
    ],
    timeframe: "15-30 minutes setup",
  },
];

export const features = [
  "✅ Money-back guarantee",
  "✅ Full source code included", 
  "✅ Setup documentation",
  "✅ 30 days free maintenance",
  "✅ Works on Windows/Mac/Linux",
  "✅ No monthly subscriptions"
];

export const testimonials = [
  {
    name: "Sarah K.",
    role: "E-commerce Owner",
    content: "Saved me 15 hours per week on inventory management. The automation just works!",
    rating: 5
  },
  {
    name: "Mike R.", 
    role: "Marketing Agency",
    content: "AutoMate.One automated our reporting process. What took 3 hours now takes 5 minutes.",
    rating: 5
  },
  {
    name: "Lisa M.",
    role: "Content Creator", 
    content: "The social media automation doubled my posting efficiency. Worth every penny!",
    rating: 5
  }
];