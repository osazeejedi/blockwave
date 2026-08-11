export interface ServiceData {
  id: string;
  num: string;
  eyebrow: string;
  title: string;
  titleAccent?: string;
  summary: string;
  ctaLabel: string;
  ctaHref: string;
  deliverables: string[];
  capabilities: { name: string; desc: string }[];
  processLabel: string;
  steps: { num: string; name: string; desc: string }[];
  engagements: {
    type: string;
    name: string;
    desc: string;
    duration: string;
    href?: string;
  }[];
}

export const SERVICES: ServiceData[] = [
  {
    id: "software-engineering",
    num: "01",
    eyebrow: "01 — Software Engineering",
    title: "We build systems",
    titleAccent: "that scale.",
    summary:
      "Blockwave engineers embed with your team to architect, build, and ship production-grade software. From greenfield products to legacy modernisation, AI integration to platform engineering — we bring technical clarity at every layer.",
    ctaLabel: "Start an Engagement →",
    ctaHref: "/contact",
    deliverables: [
      "Architecture Reviews",
      "API Design",
      "AI Integration",
      "Cloud Infrastructure",
      "DevOps & CI/CD",
      "Code Audits",
      "Performance Optimisation",
      "Security Hardening",
    ],
    capabilities: [
      {
        name: "Backend Engineering",
        desc: "Python, Node.js, Go — production-ready APIs, data pipelines, and microservices built for reliability and maintainability.",
      },
      {
        name: "AI & LLM Integration",
        desc: "RAG pipelines, agentic workflows, LLM-powered features — designed for production, not proof of concept.",
      },
      {
        name: "Cloud & Infrastructure",
        desc: "AWS, GCP, Azure — infrastructure as code, containerisation, auto-scaling, and observability from day one.",
      },
      {
        name: "Platform & Developer Tooling",
        desc: "Internal tooling, developer platforms, and automation that multiply the productivity of your engineering team.",
      },
      {
        name: "Legacy Modernisation",
        desc: "Systematic migration from ageing stacks to maintainable, observable, and deployable modern architectures.",
      },
    ],
    processLabel: "How We Engage",
    steps: [
      {
        num: "01",
        name: "Discovery",
        desc: "We map your codebase, architecture, team, and constraints. No assumptions — we read the code.",
      },
      {
        num: "02",
        name: "Proposal",
        desc: "A scoped proposal with clear deliverables, milestones, and ownership. Fixed-price or time-and-materials.",
      },
      {
        num: "03",
        name: "Build",
        desc: "Two-week sprints, daily standups, weekly demos. You see progress every step.",
      },
      {
        num: "04",
        name: "Handoff",
        desc: "Full documentation, runbooks, and knowledge transfer. Your team owns what we build.",
      },
    ],
    engagements: [
      {
        type: "Embedded",
        name: "Team Augmentation",
        desc: "One or more engineers embedded in your team, working in your tools and processes.",
        duration: "4–24 WEEKS · ON-DEMAND",
      },
      {
        type: "Project",
        name: "Fixed-Scope Delivery",
        desc: "A defined product, feature, or system delivered end-to-end by a Blockwave team.",
        duration: "6–16 WEEKS · FIXED-PRICE",
      },
      {
        type: "Advisory",
        name: "Architecture Review",
        desc: "A deep technical review with a prioritised set of recommendations and a remediation plan.",
        duration: "1–2 WEEKS · REPORT DELIVERABLE",
      },
    ],
  },
  {
    id: "tech-consulting",
    num: "02",
    eyebrow: "02 — Tech Consulting",
    title: "We solve the",
    titleAccent: "hard problems.",
    summary:
      "Blockwave advisors work with CTOs, founders, and engineering leaders to make the decisions that matter most — technology strategy, team structure, AI adoption, and build-vs-buy choices grounded in first principles, not frameworks.",
    ctaLabel: "Book a Strategy Call →",
    ctaHref: "/contact",
    deliverables: [
      "Tech Strategy",
      "AI Roadmapping",
      "Org Design",
      "Due Diligence",
      "Vendor Evaluation",
      "Build vs Buy",
      "CTO Advisory",
      "Hiring Strategy",
    ],
    capabilities: [
      {
        name: "Technology Strategy",
        desc: "Multi-year technology roadmaps aligned to business goals. We make the trade-offs explicit and defensible.",
      },
      {
        name: "AI Adoption Roadmap",
        desc: "Where AI creates real leverage in your business — and where it doesn't. A practical, phased adoption plan.",
      },
      {
        name: "Engineering Org Design",
        desc: "Team topology, hiring plans, and engineering culture — structured to support the product you're building.",
      },
      {
        name: "Technical Due Diligence",
        desc: "Pre-investment or pre-acquisition assessment of codebases, architecture, technical debt, and team capability.",
      },
      {
        name: "Fractional CTO",
        desc: "Senior technical leadership on a part-time basis — for startups that need CTO-level thinking without a full-time hire.",
      },
    ],
    processLabel: "Advisory Process",
    steps: [
      {
        num: "01",
        name: "Intake Call",
        desc: "30-minute call to understand your challenge, goals, and timeline. No pitch — just listening.",
      },
      {
        num: "02",
        name: "Diagnosis",
        desc: "We review materials, interview stakeholders, and map the problem space with rigour.",
      },
      {
        num: "03",
        name: "Strategy",
        desc: "A clear, written set of recommendations with rationale, risks, and implementation sequencing.",
      },
      {
        num: "04",
        name: "Support",
        desc: "Implementation support, stakeholder communication, and accountability through execution.",
      },
    ],
    engagements: [
      {
        type: "Workshop",
        name: "Strategy Sprint",
        desc: "Intensive 2-day facilitated session to align leadership and produce a clear technology direction.",
        duration: "2 DAYS · FIXED-PRICE",
      },
      {
        type: "Retainer",
        name: "Ongoing Advisory",
        desc: "Monthly retainer for continuous access to senior Blockwave advisors — for strategic decisions as they arise.",
        duration: "MONTHLY · ROLLING CONTRACT",
      },
      {
        type: "Project",
        name: "Fractional CTO",
        desc: "Part-time CTO service for early-stage or growing companies — 2 to 4 days per week.",
        duration: "3–12 MONTHS · PART-TIME",
      },
    ],
  },
  {
    id: "ai-automation",
    num: "04",
    eyebrow: "04 — AI Automation",
    title: "We automate the",
    titleAccent: "work slowing you down.",
    summary:
      "Most businesses are sitting on hundreds of hours of manual, repetitive work — reporting, approvals, data entry, customer responses, and internal processes that could be handled in seconds. Blockwave identifies exactly where AI creates real leverage in your business and builds the automations that free your team to focus on what only humans can do.",
    ctaLabel: "Get an Automation Audit →",
    ctaHref: "/contact",
    deliverables: [
      "Process Automation",
      "AI Assistants",
      "Report Generation",
      "Customer Workflows",
      "Data Processing",
      "Document Intelligence",
      "AI Integration",
      "Workflow Design",
    ],
    capabilities: [
      {
        name: "Business Process Automation",
        desc: "We map your most time-consuming workflows and replace manual steps with intelligent automations that run 24/7 without error.",
      },
      {
        name: "AI-Powered Assistants",
        desc: "Custom AI assistants trained on your business knowledge — handling customer queries, internal FAQs, and document search without adding headcount.",
      },
      {
        name: "Automated Reporting & Insights",
        desc: "Turn raw data into polished reports and dashboards automatically. Your team gets the answers they need, when they need them — without the manual work.",
      },
      {
        name: "Document & Data Intelligence",
        desc: "Extract, classify, and act on information locked in PDFs, emails, spreadsheets, and forms. Reduce processing time from hours to seconds.",
      },
      {
        name: "System & Tool Integration",
        desc: "Connect your existing tools — CRMs, ERPs, spreadsheets, communication platforms — so data flows automatically and nothing falls through the cracks.",
      },
    ],
    processLabel: "How We Engage",
    steps: [
      {
        num: "01",
        name: "Map",
        desc: "We spend time understanding your current workflows, bottlenecks, and where your team's time actually goes. No guesswork.",
      },
      {
        num: "02",
        name: "Prioritise",
        desc: "We identify the automations with the highest ROI — quick wins first, then a structured roadmap for the rest.",
      },
      {
        num: "03",
        name: "Build",
        desc: "We build, test, and deploy automations in weeks, not months. You see results before the engagement ends.",
      },
      {
        num: "04",
        name: "Hand Over",
        desc: "Full handover with documentation. Your team can manage and extend what we build.",
      },
    ],
    engagements: [
      {
        type: "Audit",
        name: "Automation Audit",
        desc: "A structured review of your business operations to identify the top automation opportunities and expected time and cost savings.",
        duration: "2 WEEKS · FIXED-PRICE REPORT",
        href: "/contact",
      },
      {
        type: "Project",
        name: "Build & Deploy",
        desc: "We design and deliver a set of automations end-to-end — integrated into your existing tools and ready for day-one use.",
        duration: "4–10 WEEKS · FIXED-PRICE",
        href: "/contact",
      },
      {
        type: "Setup",
        name: "AI Assistant Setup",
        desc: "A custom AI assistant for your business — customer-facing or internal — trained on your content, policies, and processes.",
        duration: "3–6 WEEKS · FIXED-PRICE",
        href: "/contact",
      },
    ],
  },
  {
    id: "professional-training",
    num: "03",
    eyebrow: "03 — Professional Training",
    title: "We develop the",
    titleAccent: "next generation.",
    summary:
      "Structured, project-led programmes that take individuals from fundamentals to industry-ready in 3 months. All training is delivered online and part-time — built for working professionals. Cohorts are intentionally small to protect quality.",
    ctaLabel: "Explore Programmes →",
    ctaHref: "/courses",
    deliverables: [
      "AI & Automation Engineering",
      "Data Science for Business",
      "Cybersecurity",
      "Corporate Training",
      "Team Upskilling",
    ],
    capabilities: [
      {
        name: "Individual Programmes",
        desc: "Three open-enrolment tracks — AI Engineering, Data Science, and Cybersecurity — with structured cohorts starting September 2025.",
      },
      {
        name: "Corporate Upskilling",
        desc: "Custom training programmes delivered to your team — aligned to your stack, tools, and business context. Group pricing available for teams of 3+.",
      },
      {
        name: "Live Workshops",
        desc: "Standalone 2–4 hour workshops on specific topics: prompt engineering, data storytelling, security fundamentals. Available for internal events.",
      },
      {
        name: "Curriculum Partnerships",
        desc: "We work with universities, bootcamps, and HR teams to design and co-deliver technical curricula aligned to hiring outcomes.",
      },
      {
        name: "Career Transition Support",
        desc: "Portfolio review, mock interviews, and job search strategy — included in all individual programmes at no extra cost.",
      },
    ],
    processLabel: "Open Programmes — Cohort Starting September 2025",
    steps: [],
    engagements: [
      {
        type: "Track 01",
        name: "AI & Automation Engineering",
        desc: "5 phases from Python fundamentals to production agentic AI. 11+ shipped projects. Industry-ready in 3 months.",
        duration: "3 MONTHS · ONLINE · COHORT OF 40",
        href: "/courses#ai-engineering",
      },
      {
        type: "Track 02",
        name: "Data Science for Business",
        desc: "From spreadsheets to ML systems. Real datasets, stakeholder-facing deliverables, and deployed capstone project.",
        duration: "3 MONTHS · ONLINE · COHORT OF 30",
        href: "/courses#data-science",
      },
      {
        type: "Track 03",
        name: "Cybersecurity",
        desc: "Ethical hacking, defensive security, and incident response. Graduate with a professional pentest report and detection lab.",
        duration: "3 MONTHS · ONLINE · COHORT OF 25",
        href: "/courses#cybersecurity",
      },
    ],
  },
];
