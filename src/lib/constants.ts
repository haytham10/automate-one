
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
    id: "excel",
    title: "Excel & Data Transformation",
    description: "Transform messy spreadsheets into beautiful, auto-updating dashboards. Connect multiple data sources and create real-time reporting systems.",
    icon: TableCellsIcon,
    features: ["Live dashboards", "Data cleaning", "Automated reports", "Multi-source integration"],
    timesSaved: "15+ hours/week"
  },
  {
    id: "scraping",
    title: "Web Scraping & Monitoring",
    description: "Automatically collect competitor prices, product reviews, job listings, or any web data. Get alerts when changes happen.",
    icon: GlobeAltIcon,
    features: ["Price monitoring", "Data extraction", "Change alerts", "Daily reports"],
    timesSaved: "20+ hours/week"
  },
  {
    id: "ai",
    title: "AI & Workflow Automation",
    description: "Connect ChatGPT and AI tools to your existing apps. Auto-generate content, analyze data, and streamline complex workflows.",
    icon: CpuChipIcon,
    features: ["Content generation", "Data analysis", "Smart workflows", "API integrations"],
    timesSaved: "10+ hours/week"
  },
  {
    id: "processes",
    title: "Process Automation",
    description: "Automate repetitive business processes like data entry, file management, email responses, and system integrations.",
    icon: ArrowPathIcon,
    features: ["File automation", "Email workflows", "Data entry", "System sync"],
    timesSaved: "25+ hours/week"
  },
  {
    id: "reporting",
    title: "Automated Reporting",
    description: "Generate and distribute reports automatically. Connect to databases, APIs, and files to create scheduled business intelligence.",
    icon: DocumentChartBarIcon,
    features: ["Scheduled reports", "Multi-format export", "Stakeholder distribution", "KPI tracking"],
    timesSaved: "12+ hours/week"
  },
  {
    id: "custom",
    title: "Custom Solutions",
    description: "Have a unique challenge? I build tailored automation solutions for your specific business needs and requirements.",
    icon: RocketLaunchIcon,
    features: ["Tailored solutions", "Business-specific", "Scalable architecture", "Full documentation"],
    timesSaved: "Variable",
    isCustom: true
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
    timeframe: "24-48 hours",
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