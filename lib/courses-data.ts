export interface Phase {
  num: string;
  name: string;
  duration: string;
  desc: string;
  skills: { type: string; text: string }[];
}

export interface InfoRow {
  label: string;
  value: string;
}

export interface CourseData {
  id: string;
  trackLabel: string;
  title: string;
  titleAccent: string;
  summary: string;
  chips: { text: string; highlight?: boolean }[];
  phases: Phase[];
  info: InfoRow[];
  applyNote: string;
}

export const COURSES: CourseData[] = [
  {
    id: "ai-engineering",
    trackLabel: "Track 01 · AI & Automation Engineering",
    title: "From Python to",
    titleAccent: "Production AI.",
    summary:
      "A structured, project-led curriculum taking you from Python fundamentals to production-grade agentic AI systems. Five phases. Thirty-plus capstone projects. One complete engineer.",
    chips: [
      { text: "3 Months", highlight: true },
      { text: "Part-time · Online" },
      { text: "Cohort of 40" },
      { text: "Python" },
      { text: "LLM Engineering" },
      { text: "Agentic AI" },
      { text: "Docker & CI/CD" },
    ],
    phases: [
      {
        num: "PHASE 01",
        name: "Python & Engineering Foundations",
        duration: "2–3 weeks · Build the base",
        desc: "Every AI engineer needs production-grade Python and engineering fundamentals before touching models. We start here — regardless of background.",
        skills: [
          { type: "SKILL", text: "Python — typing, dataclasses, async, error handling" },
          { type: "SKILL", text: "Git & GitHub — branching, PRs, code review workflows" },
          { type: "TOOL", text: "Linux & CLI — bash, grep, ssh, environment management" },
          { type: "SKILL", text: "Testing — pytest, fixtures, mocking, coverage" },
          { type: "TOOL", text: "Poetry / uv — reproducible environments, lockfiles" },
          { type: "SKILL", text: "API Fundamentals — REST, JSON, HTTP semantics" },
        ],
      },
      {
        num: "PHASE 02",
        name: "LLM Engineering",
        duration: "3–4 weeks · Master the models",
        desc: "You'll learn to prompt, chain, retrieve, evaluate, and fine-tune large language models. By the end, you'll ship a RAG-powered chatbot over your own documents.",
        skills: [
          { type: "SKILL", text: "Prompt Engineering — chain-of-thought, few-shot, JSON mode" },
          { type: "SKILL", text: "LLM APIs — OpenAI, Anthropic, Gemini, streaming, function calling" },
          { type: "SKILL", text: "RAG — vector DBs (Pinecone, Chroma), embeddings, chunking" },
          { type: "TOOL", text: "LangChain / LlamaIndex — chains, agents, memory" },
          { type: "TOOL", text: "Evaluation & Testing — evals, hallucination detection, regression tests" },
          { type: "SKILL", text: "Fine-Tuning Basics — LoRA, dataset preparation" },
        ],
      },
      {
        num: "PHASE 03",
        name: "Agentic Systems",
        duration: "2–3 weeks · Autonomous pipelines",
        desc: "Build agents that plan, act, and recover — using the ReAct pattern, MCP servers, multi-agent frameworks, and visual automation tools.",
        skills: [
          { type: "SKILL", text: "AI Agents & Tool Use — ReAct, multi-step reasoning, planning" },
          { type: "TOOL", text: "MCP — Model Context Protocol, connecting agents to APIs" },
          { type: "TOOL", text: "Workflow Orchestration — n8n, Zapier, Make + LLMs" },
          { type: "TOOL", text: "Browser Agents — Playwright + LLM, web scraping" },
          { type: "SKILL", text: "Multi-Agent Systems — CrewAI, AutoGen, orchestrator patterns" },
          { type: "SKILL", text: "Safety & Guardrails — output validation, human-in-the-loop" },
        ],
      },
      {
        num: "PHASE 04",
        name: "Production & Deployment",
        duration: "2–3 weeks · Ship and scale",
        desc: "Most AI projects die in development. Phase 4 changes that. Containerise, deploy, instrument, and optimise real AI applications.",
        skills: [
          { type: "SKILL", text: "FastAPI & Serving — REST endpoints, async handlers, background tasks" },
          { type: "TOOL", text: "Docker & Containers — Dockerise AI apps, multi-service stacks" },
          { type: "TOOL", text: "CI/CD for AI — GitHub Actions, automated evals, model versioning" },
          { type: "TOOL", text: "Observability — LangSmith, Helicone, Langfuse" },
          { type: "SKILL", text: "Cost & Latency Optimisation — caching, batching, model routing" },
          { type: "SKILL", text: "Security for AI Apps — prompt injection, data leakage, access control" },
        ],
      },
      {
        num: "PHASE 05",
        name: "Advanced & Specialisation",
        duration: "1–2 weeks · Go deep",
        desc: "No two engineers finish the same. Choose your specialisation: voice & multimodal, local model deployment, code generation, or enterprise automation.",
        skills: [
          { type: "TRACK", text: "Voice & Multimodal AI — ElevenLabs, Whisper, vision models" },
          { type: "TRACK", text: "Local Models — Ollama, llama.cpp, quantisation" },
          { type: "TRACK", text: "AI for Code Generation — coding assistants, review bots" },
          { type: "TRACK", text: "Business Process Automation — CRM, email, calendar + LLMs" },
          { type: "BUILD", text: "Open Source Contribution — PRs to LangChain, CrewAI" },
          { type: "BUILD", text: "Portfolio & Publishing — GitHub, blog, demo videos" },
        ],
      },
    ],
    info: [
      { label: "Start Date", value: "September 2025" },
      { label: "Duration", value: "3 Months" },
      { label: "Format", value: "Part-time · Online" },
      { label: "Cohort Size", value: "Limited to 40" },
      { label: "Weekly Commitment", value: "~10–15 hrs/week" },
      { label: "Live Sessions", value: "2× weekly workshops" },
      { label: "Capstone Projects", value: "11+ shipped projects" },
    ],
    applyNote: "Applications close August 2025 · Cohort limited to 40",
  },
  {
    id: "data-science",
    trackLabel: "Track 02 · Data Science for Business",
    title: "From data to",
    titleAccent: "decisions.",
    summary:
      "Statistical thinking, machine learning, and business intelligence — taught through real datasets and stakeholder-facing deliverables. For analysts ready to move from spreadsheets to systems.",
    chips: [
      { text: "3 Months", highlight: true },
      { text: "Part-time · Online" },
      { text: "Cohort of 30" },
      { text: "Python" },
      { text: "Machine Learning" },
      { text: "SQL" },
      { text: "Tableau / Power BI" },
    ],
    phases: [
      {
        num: "PHASE 01",
        name: "Python & Data Foundations",
        duration: "3–4 weeks · Build fluency with data",
        desc: "Every data scientist needs a solid foundation in Python, SQL, and statistics before modelling. We start here — regardless of background.",
        skills: [
          { type: "SKILL", text: "Python for Data — NumPy, Pandas, data wrangling" },
          { type: "SKILL", text: "SQL — queries, joins, aggregations, window functions" },
          { type: "SKILL", text: "Statistics Foundations — probability, distributions, hypothesis testing" },
          { type: "TOOL", text: "Jupyter & Git — reproducible analysis, version-controlled notebooks" },
          { type: "SKILL", text: "Data Cleaning — missing values, outliers, type coercion" },
          { type: "TOOL", text: "Exploratory Analysis — Matplotlib, Seaborn, Plotly" },
        ],
      },
      {
        num: "PHASE 02",
        name: "Statistical Analysis & Machine Learning",
        duration: "4 weeks · Build and validate models",
        desc: "The core of the programme. You'll build, tune, and validate predictive models — and learn to explain your findings to non-technical stakeholders.",
        skills: [
          { type: "SKILL", text: "Regression & Classification — linear, logistic, tree-based models" },
          { type: "SKILL", text: "Model Evaluation — cross-validation, precision/recall, AUC" },
          { type: "TOOL", text: "Scikit-learn — pipelines, feature engineering, hyperparameter tuning" },
          { type: "SKILL", text: "Clustering & Segmentation — k-means, DBSCAN, customer profiling" },
          { type: "SKILL", text: "Time Series — forecasting, seasonality, ARIMA, Prophet" },
          { type: "SKILL", text: "Explainability — SHAP, feature importance, communicating models" },
        ],
      },
      {
        num: "PHASE 03",
        name: "Business Intelligence & Visualisation",
        duration: "3 weeks · From analysis to insight",
        desc: "Data only creates value when it changes decisions. You'll build stakeholder-ready dashboards and learn to tell compelling stories with data.",
        skills: [
          { type: "TOOL", text: "Tableau / Power BI — dashboards, calculated fields, drill-downs" },
          { type: "SKILL", text: "Data Storytelling — structure, narrative, executive audiences" },
          { type: "SKILL", text: "KPI Design — defining, tracking, and alerting on business metrics" },
          { type: "TOOL", text: "Cloud Data Warehouses — BigQuery, Snowflake, dbt basics" },
          { type: "SKILL", text: "A/B Testing — experiment design, significance, decision frameworks" },
          { type: "SKILL", text: "Stakeholder Communication — presenting uncertainty, caveats, confidence" },
        ],
      },
      {
        num: "PHASE 04",
        name: "Capstone & Applied Deployment",
        duration: "2–3 weeks · Ship a real product",
        desc: "End with a deployed, stakeholder-ready data product — a live dashboard, a prediction API, or an automated reporting pipeline — built on a real dataset of your choice.",
        skills: [
          { type: "BUILD", text: "End-to-end ML pipeline — ingest, transform, train, serve" },
          { type: "BUILD", text: "Live Dashboard — real-time data product with automated refresh" },
          { type: "SKILL", text: "Model Deployment — FastAPI, Streamlit, or Gradio" },
          { type: "SKILL", text: "Portfolio Presentation — GitHub, write-up, stakeholder demo" },
          { type: "SKILL", text: "Ethics in Data — bias, fairness, privacy considerations" },
          { type: "SKILL", text: "Interview Prep — case studies, take-homes, technical questions" },
        ],
      },
    ],
    info: [
      { label: "Start Date", value: "September 2025" },
      { label: "Duration", value: "3 Months" },
      { label: "Format", value: "Part-time · Online" },
      { label: "Cohort Size", value: "Limited to 30" },
      { label: "Weekly Commitment", value: "~10–12 hrs/week" },
      { label: "Live Sessions", value: "2× weekly workshops" },
      { label: "Capstone", value: "1 deployed data product" },
    ],
    applyNote: "Applications close August 2025 · Cohort limited to 30",
  },
  {
    id: "cybersecurity",
    trackLabel: "Track 03 · Cybersecurity",
    title: "Think like an attacker.",
    titleAccent: "Defend like an engineer.",
    summary:
      "Threat analysis, ethical hacking, and defensive security — grounded in real incident response and compliance frameworks. For engineers stepping into security roles or organisations building their first security function.",
    chips: [
      { text: "3 Months", highlight: true },
      { text: "Part-time · Online" },
      { text: "Cohort of 25" },
      { text: "Ethical Hacking" },
      { text: "Network Security" },
      { text: "SIEM / SOC" },
      { text: "Compliance" },
    ],
    phases: [
      {
        num: "PHASE 01",
        name: "Security Fundamentals & Networking",
        duration: "3 weeks · Build the foundation",
        desc: "Security is impossible without a precise understanding of how systems communicate. Phase 1 establishes the networking and OS foundations every security professional needs.",
        skills: [
          { type: "SKILL", text: "Networking — TCP/IP, DNS, HTTP/S, OSI model, packet analysis" },
          { type: "SKILL", text: "Linux & CLI — permissions, processes, cron, syslog" },
          { type: "SKILL", text: "Cryptography Basics — symmetric, asymmetric, hashing, TLS" },
          { type: "TOOL", text: "Wireshark & nmap — traffic capture, host discovery, port scanning" },
          { type: "SKILL", text: "Authentication & Access Control — OAuth, MFA, RBAC, least-privilege" },
          { type: "SKILL", text: "Security Frameworks — CIA triad, NIST, OWASP Top 10" },
        ],
      },
      {
        num: "PHASE 02",
        name: "Threat Analysis & Ethical Hacking",
        duration: "4 weeks · Offensive mindset",
        desc: "Understand attacks by executing them in a controlled lab environment. You'll learn the attacker's playbook so you can build systems that resist it.",
        skills: [
          { type: "SKILL", text: "Penetration Testing Methodology — recon, scanning, exploitation, reporting" },
          { type: "TOOL", text: "Kali Linux & Metasploit — lab-based exploit development" },
          { type: "SKILL", text: "Web App Attacks — SQLi, XSS, CSRF, IDOR, broken auth" },
          { type: "SKILL", text: "Social Engineering — phishing simulation, pretexting, awareness training" },
          { type: "TOOL", text: "Burp Suite — intercepting proxies, scanning, manual testing" },
          { type: "SKILL", text: "Threat Modelling — STRIDE, attack trees, risk scoring" },
        ],
      },
      {
        num: "PHASE 03",
        name: "Defensive Security & Compliance",
        duration: "3 weeks · Protect and respond",
        desc: "Build the systems that detect, respond, and recover. You'll set up real SIEM environments and work through incident response playbooks.",
        skills: [
          { type: "TOOL", text: "SIEM & Log Analysis — Splunk, Elastic SIEM, threat hunting" },
          { type: "SKILL", text: "Incident Response — detection, containment, eradication, recovery" },
          { type: "SKILL", text: "Endpoint Security — EDR, AV, hardening, patch management" },
          { type: "SKILL", text: "Cloud Security — IAM, S3 policies, GuardDuty, security groups" },
          { type: "SKILL", text: "Compliance Frameworks — GDPR, ISO 27001, SOC 2, PCI-DSS basics" },
          { type: "SKILL", text: "Security Policy Writing — AUP, incident response plans, risk registers" },
        ],
      },
      {
        num: "PHASE 04",
        name: "Capstone: Security Audit & Response",
        duration: "2 weeks · Ship a real deliverable",
        desc: "Graduate with a professional security audit report, a functional detection lab, and a demonstrated ability to lead an incident response exercise.",
        skills: [
          { type: "BUILD", text: "Penetration Test Report — full report on a target lab environment" },
          { type: "BUILD", text: "Detection Lab — SIEM with custom detection rules and dashboards" },
          { type: "BUILD", text: "Incident Response Simulation — live 48-hour tabletop exercise" },
          { type: "SKILL", text: "Cert Prep — CompTIA Security+, eJPT pathway guidance" },
          { type: "SKILL", text: "Career Positioning — SOC analyst, pen tester, security engineer tracks" },
          { type: "BUILD", text: "Portfolio — GitHub write-ups, blog, documented capstone projects" },
        ],
      },
    ],
    info: [
      { label: "Start Date", value: "September 2025" },
      { label: "Duration", value: "3 Months" },
      { label: "Format", value: "Part-time · Online" },
      { label: "Cohort Size", value: "Limited to 25" },
      { label: "Weekly Commitment", value: "~10–14 hrs/week" },
      { label: "Live Sessions", value: "2× weekly workshops" },
      { label: "Capstone", value: "Pentest report + lab" },
    ],
    applyNote: "Applications close August 2025 · Cohort limited to 25",
  },
];

export const OUTCOMES = [
  {
    role: "AI Automation Engineer",
    salary: "$95k – $160k",
    desc: "Build and maintain LLM-powered workflows, agents, and integrations across enterprise tooling.",
  },
  {
    role: "Data Scientist",
    salary: "$90k – $150k",
    desc: "Build and deploy predictive models that drive business decisions across product, finance, and operations.",
  },
  {
    role: "Security Analyst / Engineer",
    salary: "$85k – $140k",
    desc: "Detect threats, respond to incidents, and harden systems in SOC or blue/red team environments.",
  },
  {
    role: "LLM Application Developer",
    salary: "$100k – $175k",
    desc: "Design and ship user-facing AI products — chatbots, assistants, and intelligent search.",
  },
  {
    role: "Business Intelligence Analyst",
    salary: "$75k – $120k",
    desc: "Own the data layer in product and business teams — dashboards, forecasts, and experiment analysis.",
  },
  {
    role: "Penetration Tester",
    salary: "$90k – $160k",
    desc: "Conduct authorised security assessments, write professional reports, and advise on remediation.",
  },
];
