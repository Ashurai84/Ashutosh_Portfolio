// Portfolio Constants - Ashutosh Pankaj Rai
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  express,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  postauraImg,
  shayakImg,
  krishiImg,
  asrlabImg,
  smarthomeImg,
  reautoImg,
  hackathonImg,
  fabricIqImg,
  user1,
  user2,
  user3,
  poonam,
  arti,
  teja,
  teachBba,
  teachMba,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Personal Info
export const PERSONAL_INFO = {
  name: "Ashutosh Pankaj Rai",
  shortName: "Ashutosh",
  role: "Founder of PostAura · Full-Stack Developer",
  subRole: "AI & Automation Builder · Educator",
  headline: "I build AI-powered products, automation workflows, and full-stack systems that turn ideas into impactful real-world solutions.",
  aboutHeadline: "I don't just learn technology. I build with it.",
  tagline: "Builder • Creator • Educator",
  email: "Ashutoshrai.contact@gmail.com",
  location: "Navi Mumbai, India",
  university: "ITM Skills University",
  degree: "B.Tech in Computer Science and Engineering (2024 – 2028)",
  github: "https://github.com/Ashurai84",
  linkedin: "https://linkedin.com/in/ashutosh-pankaj-rai",
  postaura: "https://postaura.dev/",
  resumeUrl: "/Ashutosh.pdf",
};

// Navigation Links
export const NAV_LINKS = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "journey", title: "Journey" },
  { id: "projects", title: "Projects" },
  { id: "achievements", title: "Achievements" },
  { id: "teaching", title: "Teaching" },
  { id: "skills", title: "Skills" },
  { id: "github", title: "GitHub" },
  { id: "contact", title: "Contact" },
] as const;

// 3D Nodes metadata
export const HERO_3D_NODES = [
  {
    id: "code",
    title: "CODE",
    label: "</>",
    description: "Turning ideas into clean code",
    accent: "#f97316", // Orange
    glowClass: "from-orange-500 to-amber-500",
    bgClass: "bg-orange-500/10 border-orange-500/40 text-orange-400",
    icon: "code",
  },
  {
    id: "ai",
    title: "AI",
    label: "🧠",
    description: "Building intelligent solutions",
    accent: "#a855f7", // Violet / Magenta
    glowClass: "from-purple-500 to-pink-500",
    bgClass: "bg-purple-500/10 border-purple-500/40 text-purple-400",
    icon: "brain",
  },
  {
    id: "automation",
    title: "AUTOMATION",
    label: "⚡",
    description: "Workflow automation with n8n & AI",
    accent: "#10b981", // Emerald / Green
    glowClass: "from-emerald-500 to-green-500",
    bgClass: "bg-emerald-500/10 border-emerald-500/40 text-emerald-400",
    icon: "workflow",
  },
  {
    id: "product",
    title: "PRODUCT",
    label: "🚀",
    description: "Building products people love",
    accent: "#00f0ff", // Electric Cyan
    glowClass: "from-cyan-500 to-blue-500",
    bgClass: "bg-cyan-500/10 border-cyan-500/40 text-cyan-400",
    icon: "rocket",
  },
  {
    id: "learning",
    title: "LEARNING",
    label: "📖",
    description: "Always learning. Always growing.",
    accent: "#eab308", // Gold / Yellow
    glowClass: "from-yellow-500 to-amber-500",
    bgClass: "bg-yellow-500/10 border-yellow-500/40 text-yellow-400",
    icon: "book",
  },
] as const;

// 4 Floating Achievement Strip Cards Under Hero
export const HERO_ACHIEVEMENT_STRIP = [
  {
    id: "hackathon",
    icon: "🏆",
    title: "Best Innovation Award",
    subtitle: "Hack With Mumbai 2.0 · Bombay.Bytes",
    accentColor: "from-pink-500 via-rose-500 to-orange-500",
    badgeBg: "bg-pink-500/15 text-pink-400 border-pink-500/30",
    linkText: "View Post →",
    url: "https://www.linkedin.com/posts/ashutosh-pankaj-rai_bestinnovationaward-hackwithmumbai-bombaybytes-activity-7427016824233549824-EEZ2",
  },
  {
    id: "fabric-iq",
    icon: "🏅",
    title: "GitHub Invertocat Gold Pin",
    subtitle: "Microsoft Fabric IQ — Hyderabad",
    accentColor: "from-amber-500 via-orange-500 to-yellow-500",
    badgeBg: "bg-amber-500/15 text-amber-400 border-amber-500/30",
    linkText: "View Post →",
    url: "https://www.linkedin.com/posts/ashutosh-pankaj-rai_microsoftfabric-fabriciq-aiagents-activity-7455191076803510272-FSzt",
  },
  {
    id: "mentor",
    icon: "🎓",
    title: "Educator & Mentor",
    subtitle: "BBA & MBA AI Automation Workshops",
    accentColor: "from-purple-500 via-violet-500 to-indigo-500",
    badgeBg: "bg-purple-500/15 text-purple-400 border-purple-500/30",
    linkText: "View More →",
    url: "#teaching",
  },
  {
    id: "repos",
    icon: "⌘",
    title: "110+ Repositories",
    subtitle: "GitHub Active Builder · ASR LABS",
    accentColor: "from-cyan-500 via-blue-500 to-teal-500",
    badgeBg: "bg-cyan-500/15 text-cyan-400 border-cyan-500/30",
    linkText: "View GitHub →",
    url: "https://github.com/Ashurai84",
  },
] as const;

// The Journey Stages (Full spectrum color transition: Pink → Orange → Yellow → Green → Cyan → Blue → Purple → Pink)
export const JOURNEY_STAGES = [
  {
    stage: 1,
    year: "2023",
    title: "The Beginning",
    description: "Started my journey in Computer Science with intense curiosity, excitement, and a commitment to build beyond classrooms.",
    color: "#ec4899", // Pink
    colorName: "Pink",
    gradient: "from-pink-500 to-rose-500",
    borderColor: "border-pink-500/40",
    shadowColor: "shadow-pink-500/20",
    badgeColor: "bg-pink-500/15 text-pink-300 border-pink-500/30",
    icon: "🚀",
  },
  {
    stage: 2,
    year: "2023",
    title: "Exploring & Learning",
    description: "Dived into development fundamentals, DSA problem solving, modern JavaScript/TypeScript, and building functional UI systems.",
    color: "#f97316", // Orange
    colorName: "Orange",
    gradient: "from-orange-500 to-amber-500",
    borderColor: "border-orange-500/40",
    shadowColor: "shadow-orange-500/20",
    badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    icon: "💻",
  },
  {
    stage: 3,
    year: "2024",
    title: "Building Projects",
    description: "Built end-to-end full-stack applications, integrated REST APIs, explored LLM integrations, and started shipping real solutions.",
    color: "#eab308", // Yellow
    colorName: "Yellow",
    gradient: "from-yellow-500 to-amber-400",
    borderColor: "border-yellow-500/40",
    shadowColor: "shadow-yellow-500/20",
    badgeColor: "bg-yellow-500/15 text-yellow-300 border-yellow-500/30",
    icon: "📦",
  },
  {
    stage: 4,
    year: "2024",
    title: "Automation & AI",
    description: "Discovered n8n workflow automation and engineered intelligent multi-step AI pipelines (Resume matchers, lead gen bots, SMTP automations).",
    color: "#10b981", // Green
    colorName: "Green",
    gradient: "from-emerald-500 to-teal-500",
    borderColor: "border-emerald-500/40",
    shadowColor: "shadow-emerald-500/20",
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    icon: "⚡",
  },
  {
    stage: 5,
    year: "2025/2026",
    title: "Hackathons & Wins",
    description: "Won the Best Innovation Award at Hack With Mumbai 2.0 (30-hour national offline hackathon) with team Bombay.Bytes building Sahayak.",
    color: "#00f0ff", // Cyan / Blue
    colorName: "Cyan",
    gradient: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/40",
    shadowColor: "shadow-cyan-500/20",
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    icon: "🏆",
  },
  {
    stage: 6,
    year: "2025/2026",
    title: "Teaching & Mentoring",
    description: "Conducted hands-on workshops for BBA students (No-Code & Prompt Engineering) and MBA students (n8n Workflow Automation).",
    color: "#a855f7", // Purple / Violet
    colorName: "Purple",
    gradient: "from-purple-500 to-violet-600",
    borderColor: "border-purple-500/40",
    shadowColor: "shadow-purple-500/20",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/30",
    icon: "🎓",
  },
  {
    stage: 7,
    year: "CURRENT",
    title: "Building PostAura",
    description: "Building PostAura (postaura.dev) — an AI LinkedIn writing workspace designed to turn messy ideas into authentic, viral content.",
    color: "#ec4899", // Magenta / Pink
    colorName: "Magenta",
    gradient: "from-pink-500 via-rose-500 to-purple-600",
    borderColor: "border-pink-500/40",
    shadowColor: "shadow-pink-500/20",
    badgeColor: "bg-pink-500/15 text-pink-300 border-pink-500/30",
    icon: "✨",
    isLiveProduct: true,
    link: "https://postaura.dev/",
  },
] as const;

// Core Pillars (About section)
export const CORE_PILLARS = [
  {
    title: "Product Founder",
    description: "Creator of PostAura (AI LinkedIn writing workspace) and Sahayak (AI accessibility safety suite).",
    icon: creator,
    color: "from-pink-500 to-rose-600",
    accent: "#ec4899",
  },
  {
    title: "AI & Agentic Architect",
    description: "Engineering autonomous agentic workflows, Model Context Protocol (MCP), and multilingual speech/LLM systems.",
    icon: backend,
    color: "from-purple-500 to-indigo-600",
    accent: "#a855f7",
  },
  {
    title: "Automation & Workflows",
    description: "Designing enterprise n8n workflow automations, AI Resume-JD matchers, and lead generation pipelines.",
    icon: mobile,
    color: "from-emerald-500 to-teal-400",
    accent: "#10b981",
  },
  {
    title: "Full-Stack Engineer",
    description: "Building production web & cloud platforms with Next.js 14, React, TypeScript, Node.js, Express, and Tailwind CSS.",
    icon: web,
    color: "from-cyan-500 to-blue-600",
    accent: "#00f0ff",
  },
] as const;

// Experience Timeline
export const EXPERIENCES = [
  {
    title: "Founder / Creator",
    company_name: "PostAura (postaura.dev)",
    type: "Startup / Live Product",
    icon: creator,
    iconBg: "#180d24",
    date: "2025 - Present",
    badge: "Startup / Live Product",
    accentColor: "from-pink-500 to-purple-600",
    link: "https://postaura.dev/",
    points: [
      "Built PostAura, an AI LinkedIn writing workspace that turns raw thoughts into voice-matched, algorithm-rewarded LinkedIn posts.",
      "Developed the proprietary Antigravity Scoring Engine to analyze hook engagement, readability, and call-to-action strength.",
      "Integrated Google Gemini API for personalized content rewriting, tone alignment, and viral format optimization.",
      "Designed a responsive workspace using Next.js 14, TypeScript, Tailwind CSS, Express.js backend, and Framer Motion.",
    ],
  },
  {
    title: "Area Sales Engineer",
    company_name: "Sparks International",
    type: "Internship",
    icon: backend,
    iconBg: "#0f172a",
    date: "Feb 2026 – Aug 2026 · 7 mos",
    badge: "Technical Sales & Product",
    accentColor: "from-emerald-500 to-teal-600",
    link: "https://www.linkedin.com/in/ashutosh-pankaj-rai",
    points: [
      "Developing in-depth understanding of technical products, client engineering requirements, and end-to-end sales processes.",
      "Assisting with technical and commercial quotations, client proposals, and product-related engineering communications.",
      "Collaborating on technical product positioning, requirement analysis, and cross-functional client relationship management.",
    ],
  },
  {
    title: "Hackathon Winner — Best Innovation Award",
    company_name: "Hack With Mumbai 2.0 (Team Bombay.Bytes)",
    type: "Hackathon",
    icon: backend,
    iconBg: "#0f172a",
    date: "Feb 7–8, 2026",
    badge: "🏆 1st Prize Innovation",
    accentColor: "from-cyan-500 to-blue-600",
    link: "https://www.linkedin.com/posts/ashutosh-pankaj-rai_bestinnovationaward-hackwithmumbai-bombaybytes-activity-7427016824233549824-EEZ2",
    points: [
      "Won the Best Innovation Award at a 30-hour national-level offline hackathon at Bharati Vidyapeeth, Navi Mumbai.",
      "Architected 'Sahayak', an AI-powered accessibility and safety platform with emergency workflows and multimodal support.",
      "Collaborated with teammate Grishma Thakare under high-pressure constraints to deliver a production-ready MVP.",
      "Recognized by enterprise judges and industry mentors for real-world impact, rapid execution, and technical excellence.",
    ],
  },
  {
    title: "AI & Systems Engineer — Open Source Lab",
    company_name: "ASR LABS",
    type: "Engineering Lab",
    icon: web,
    iconBg: "#0f172a",
    date: "2024 - Present",
    badge: "110+ Repositories",
    accentColor: "from-blue-500 to-cyan-500",
    link: "https://asr-labs.vercel.app/",
    points: [
      "Founded and actively maintain an open-source engineering lab with 110+ repositories tracking real-time architectural decisions and agentic experiments.",
      "Engineered Model Context Protocol (MCP) integrations with GitHub Copilot enabling autonomous agent tool-calling for developer workflows.",
      "Explored Microsoft Fabric IQ context layers and high-performance computing architectures.",
      "Built and shipped multiple open developer utilities, automated email bots (Python/SMTP), and full-stack web platforms.",
    ],
  },
  {
    title: "Frontend & UI/UX Developer",
    company_name: "LearnVox",
    type: "EdTech Platform / Product",
    icon: mobile,
    iconBg: "#17142b",
    date: "2024 - 2025",
    badge: "EdTech Platform",
    accentColor: "from-purple-500 to-indigo-600",
    link: "https://github.com/Ashurai84/new-websits-of-learnvox",
    points: [
      "Designed and developed accessible, high-performance web interfaces for an educational platform used by students.",
      "Built a design system and high-fidelity prototypes in Figma, translating them into modular, reusable React.js components.",
      "Optimized Core Web Vitals, load performance, and responsiveness across mobile and desktop devices.",
      "Implemented interactive learning workflow UI elements to improve student engagement and navigation.",
    ],
  },
  {
    title: "B.Tech in Computer Science & Engineering",
    company_name: "ITM Skills University",
    type: "Education",
    icon: creator,
    iconBg: "#1e140a",
    date: "2024 - 2028",
    badge: "Undergraduate",
    accentColor: "from-amber-500 to-orange-600",
    link: "https://github.com/Ashurai84",
    points: [
      "Specializing in Software Engineering, Full-Stack Architecture, AI Systems, and Distributed Computing.",
      "Leading peer coding sessions, hackathon squads, and community tech workshops across colleges.",
    ],
  },
] as const;

// Major Achievements (Proof of Work)
export const ACHIEVEMENTS = [
  {
    id: "hackwithmumbai",
    badge: "🏆 National Hackathon Award",
    title: "Best Innovation Award",
    event: "Hack With Mumbai 2.0 (Team Bombay.Bytes)",
    date: "7–8 February 2026",
    location: "Bharati Vidyapeeth, Navi Mumbai",
    accentGradient: "from-pink-500 via-rose-500 to-orange-500",
    summary:
      "Secured the Best Innovation Award at a 30-hour national-level offline hackathon. Built 'Sahayak', an AI-powered accessibility and safety platform providing intelligent emergency assistance and multimodal support.",
    highlights: [
      "30-Hour National Offline Hackathon",
      "Team Bombay.Bytes (Ashutosh & Grishma)",
      "AI Emergency Assistance & Accessibility",
      "Jury & Industry Mentor Recognition",
    ],
    postLink:
      "https://www.linkedin.com/posts/ashutosh-pankaj-rai_bestinnovationaward-hackwithmumbai-bombaybytes-activity-7427016824233549824-EEZ2",
    image: hackathonImg,
    icon: "trophy",
  },
  {
    id: "fabric-iq",
    badge: "🎖️ Enterprise AI Honor",
    title: "GitHub Invertocat Gold Lapel Pin",
    event: "Microsoft Fabric IQ & Copilot Dev Days",
    date: "Hyderabad Dev Session",
    location: "Microsoft Office, Hyderabad",
    accentGradient: "from-amber-500 via-orange-500 to-yellow-500",
    summary:
      "Received a limited-edition GitHub Invertocat Gold Lapel Pin after attending an exclusive Microsoft Fabric IQ and Agentic AI session hosted by India Microsoft Fabric User Group & HDAC at Microsoft's Hyderabad Office.",
    highlights: [
      "Microsoft Fabric IQ Context Layers",
      "Autonomous Agentic Workflows & Tool-calling",
      "Enterprise AI & Data Intelligence",
      "Discussions with Industry AI CEOs",
    ],
    postLink:
      "https://www.linkedin.com/posts/ashutosh-pankaj-rai_microsoftfabric-fabriciq-aiagents-activity-7455191076803510272-FSzt",
    image: fabricIqImg,
    icon: "award",
  },
] as const;

// Teaching & Mentorship
export const TEACHING_EXPERIENCES = [
  {
    title: "No-Code & Prompt Engineering Workshop",
    audience: "BBA Students",
    organization: "ITM Skills University",
    accentColor: "from-orange-500 to-amber-500",
    image: teachBba,
    description:
      "Conducted an interactive, practical workshop teaching business undergraduates how to build web applications without code and leverage structured AI prompting.",
    topics: [
      "No-Code Web Development (Glide)",
      "Structured Prompting (C.A.P.E.S Framework)",
      "Google Gemini for Content & Analysis",
      "Rapid Application Prototyping",
      "Learning by Building Live Projects",
    ],
    recognition:
      "Recognized by Faculty Mentor Poonam Khanvilkar for hands-on student coaching.",
    linkText: "View Recognition →",
    linkUrl: "https://www.linkedin.com/in/ashutosh-pankaj-rai/",
  },
  {
    title: "AI Automation Workshop",
    audience: "MBA / Business Analytics Students",
    organization: "ITM Skills University",
    accentColor: "from-emerald-500 to-teal-500",
    image: teachMba,
    description:
      "Led a hands-on n8n workflow automation masterclass showing MBA students how to build autonomous business systems that eliminate repetitive manual work across sales, marketing, and HR.",
    topics: [
      "n8n Fundamentals & Node Architecture",
      "AI Resume–JD Matcher Workflow",
      "Automated LinkedIn Post Generation",
      "Lead Generation & Qualification Pipelines",
      "Enterprise Workflow Debugging",
    ],
    recognition:
      "Bridging technology with practical business analytics through intelligent workflow automation.",
    linkText: "Explore Automation Workflows →",
    linkUrl: "https://github.com/Ashurai84",
  },
] as const;

// Projects Showcase
export const PROJECTS = [
  {
    id: "postaura",
    name: "PostAura",
    tagline: "AI LinkedIn Writing Workspace",
    category: "AI & Startups",
    accentTheme: "magenta",
    featured: true,
    description:
      "An AI writing workspace that turns raw thoughts into voice-matched, algorithm-rewarded LinkedIn posts. Features the Antigravity Scoring Engine to evaluate hooks, readability, and call-to-action impact in real-time.",
    problem: "Professionals struggle to create consistent, high-performing LinkedIn content without sounding generic or spending hours drafting.",
    solution: "A dedicated workspace that captures authentic personal voice, scores post strength, and optimizes formatting for LinkedIn algorithm reach.",
    keyFeatures: [
      "Antigravity Hook & CTA Scoring Engine",
      "Gemini API personalized post rewriting",
      "Tone customization & voice preservation",
      "Interactive Next.js 14 writing canvas",
    ],
    tags: [
      { name: "nextjs-14", color: "pink-text-gradient" },
      { name: "gemini-api", color: "green-text-gradient" },
      { name: "typescript", color: "blue-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: postauraImg,
    source_code_link: "https://github.com/Ashurai84/Post-Aura",
    live_site_link: "https://postaura.dev/",
  },
  {
    id: "sahayak",
    name: "Sahayak — AI Accessibility Platform",
    tagline: "Best Innovation Award Winner @ Hack With Mumbai 2.0",
    category: "Hackathon Wins",
    accentTheme: "cyan",
    featured: true,
    description:
      "An AI-powered accessibility and personal safety platform designed to assist users with real-world support features, automated emergency triggers, and voice-assisted interaction.",
    problem: "Individuals with accessibility challenges lack integrated, fast-responding digital tools for emergency safety and everyday navigation.",
    solution: "An intelligent, unified web platform that integrates real-time assistive workflows, emergency response dispatch, and AI guidance.",
    keyFeatures: [
      "Real-time emergency assistance workflows",
      "AI-driven accessible user interaction",
      "Emergency alert dispatch & logging",
      "Lightweight responsive frontend",
    ],
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
      { name: "express", color: "blue-text-gradient" },
    ],
    image: shayakImg,
    source_code_link: "https://github.com/Ashurai84",
    live_site_link: "https://github.com/Ashurai84",
  },
  {
    id: "krishiofficer",
    name: "Krishi Officer",
    tagline: "AI Agricultural Advisory Platform",
    category: "AI & Startups",
    accentTheme: "emerald",
    featured: true,
    description:
      "An intelligent agricultural platform providing real-time crop disease diagnosis, weather-based irrigation schedules, soil telemetry analysis, and farmer advisory cards.",
    problem: "Farmers face crop damage and uncertain yields due to delayed disease identification and unoptimized irrigation.",
    solution: "AI computer vision scanning for crop blight detection, soil telemetry tracking, and personalized multi-crop action plans.",
    keyFeatures: [
      "AI Crop Health Diagnosis Scanner",
      "Soil moisture & telemetry analytics",
      "Weather-driven irrigation scheduling",
      "Automated advisory notices for farmers",
    ],
    tags: [
      { name: "react", color: "green-text-gradient" },
      { name: "ai-vision", color: "pink-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
      { name: "vercel", color: "green-text-gradient" },
    ],
    image: krishiImg,
    source_code_link: "https://github.com/Ashurai84/Krishi_officer",
    live_site_link: "https://krishi-officer.vercel.app/",
  },
  {
    id: "asrlabs",
    name: "ASR LABS",
    tagline: "Open Source AI & Systems Engineering Lab",
    category: "Full-Stack",
    accentTheme: "cyan",
    featured: true,
    description:
      "An active open-source engineering lab tracking real-time architectural decisions, live commits, and agentic experiments across 110+ repositories.",
    problem: "Developers and recruiters need transparent visibility into architectural decisions, live agent experiments, and engineering velocity.",
    solution: "Live interactive telemetry portal integrating GitHub commits, Model Context Protocol (MCP) metrics, and autonomous agent pipelines.",
    keyFeatures: [
      "Real-time commit telemetry pipeline",
      "Model Context Protocol (MCP) monitoring",
      "AI agentic workflow pipeline visualizer",
      "Architectural Decision Records (ADRs)",
    ],
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "nextjs", color: "pink-text-gradient" },
      { name: "mcp-tools", color: "green-text-gradient" },
      { name: "tailwind", color: "blue-text-gradient" },
    ],
    image: asrlabImg,
    source_code_link: "https://github.com/Ashurai84",
    live_site_link: "https://asr-labs.vercel.app/",
  },
  {
    id: "smarthome",
    name: "Smart Home IoT Dashboard & Backend",
    tagline: "MERN Stack Device Automation Suite",
    category: "Full-Stack",
    accentTheme: "emerald",
    featured: false,
    description:
      "A complete MERN stack smart home backend and real-time dashboard for monitoring, controlling, and logging IoT device states with secure role-based access control.",
    problem: "Managing disparate IoT appliances securely without unified authentication, audit logs, and latency-free controls.",
    solution: "Engineered scalable REST APIs with JWT security, MongoDB device state persistence, and a real-time control interface.",
    keyFeatures: [
      "JWT authentication & role-based permissions",
      "Real-time device state toggling & scheduling",
      "Activity audit logs & telemetry tracking",
      "Cloud-deployed architecture",
    ],
    tags: [
      { name: "mongodb", color: "green-text-gradient" },
      { name: "express", color: "blue-text-gradient" },
      { name: "react", color: "pink-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
    ],
    image: smarthomeImg,
    source_code_link: "https://github.com/Ashurai84",
    live_site_link: "https://github.com/Ashurai84",
  },
  {
    id: "reauto",
    name: "ReAuto — AI Vehicle Valuation",
    tagline: "Claude Vision API Inspection Platform",
    category: "AI & Startups",
    accentTheme: "orange",
    featured: false,
    description:
      "An intelligent vehicle appraisal platform that inspects uploaded vehicle images using Claude Vision API to detect structural damage and generate automated valuation reports.",
    problem: "Manual vehicle damage assessment and valuation is slow, subjective, and prone to estimation errors.",
    solution: "Computer vision analysis powered by Claude Vision API that flags scratches, dents, and wear to estimate accurate market value.",
    keyFeatures: [
      "Multimodal image damage detection",
      "Automated itemized valuation reports",
      "Firebase backend authentication",
      "Modern Tailwind CSS design system",
    ],
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "claude-vision", color: "orange-text-gradient" },
      { name: "firebase", color: "pink-text-gradient" },
    ],
    image: reautoImg,
    source_code_link: "https://github.com/Ashurai84",
    live_site_link: "https://github.com/Ashurai84",
  },
] as const;

// Technical Skills Grouped Clusters
export const SKILLS_CATEGORIES = [
  {
    title: "DEVELOPMENT",
    theme: "orange",
    accentColor: "from-orange-500 to-amber-500",
    icon: "code",
    skills: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "SQL", "Dart", "HTML5", "CSS3", "React.js", "Next.js 14", "Tailwind CSS", "Node.js", "Express.js"],
  },
  {
    title: "AI & AGENTIC SYSTEMS",
    theme: "purple",
    accentColor: "from-purple-500 to-pink-500",
    icon: "cpu",
    skills: ["Google Gemini API", "Claude Vision API", "Groq AI", "Sarvam AI (STT/TTS)", "Model Context Protocol (MCP)", "Prompt Engineering", "LLaMA", "Agentic Workflows"],
  },
  {
    title: "AUTOMATION & WORKFLOWS",
    theme: "green",
    accentColor: "from-emerald-500 to-teal-500",
    icon: "workflow",
    skills: ["n8n Workflow Automation", "AI Resume-JD Matcher", "Lead Gen Automation", "Email Bots (SMTP)", "Webhook Pipelines", "Glide (No-Code)", "Structured Prompting"],
  },
  {
    title: "TOOLS & CLOUD",
    theme: "cyan",
    accentColor: "from-cyan-500 to-blue-500",
    icon: "layout",
    skills: ["Git", "GitHub (110+ Repos)", "VS Code", "Docker", "Postman", "Vercel", "Render", "AWS", "Figma", "Lovable"],
  },
  {
    title: "DATABASES",
    theme: "gold",
    accentColor: "from-yellow-500 to-amber-500",
    icon: "database",
    skills: ["MongoDB", "Firebase Firestore", "PostgreSQL", "REST APIs", "JWT Authentication", "WebSockets"],
  },
] as const;

// Verified LinkedIn Posts
export const LINKEDIN_POSTS = [
  {
    title: "🏆 Securing Best Innovation Award at Hack With Mumbai 2.0",
    date: "February 2026",
    summary:
      "30 hours. One team. One win. Team Bombay.Bytes won the Best Innovation Award at Hack With Mumbai 2.0 (Bharati Vidyapeeth, Navi Mumbai).",
    url: "https://www.linkedin.com/posts/ashutosh-pankaj-rai_bestinnovationaward-hackwithmumbai-bombaybytes-activity-7427016824233549824-EEZ2",
    badge: "Hackathon Win",
    accent: "#ec4899",
    image: hackathonImg,
  },
  {
    title: "🧠 Microsoft Fabric IQ & Context Layers for Multi-Agent Systems",
    date: "February 2026",
    summary:
      "Mumbai → Hyderabad for an exclusive session on Microsoft Fabric IQ and the context layer that makes AI models exponentially smarter.",
    url: "https://www.linkedin.com/posts/ashutosh-pankaj-rai_microsoftfabric-fabriciq-aiagents-activity-7455191076803510272-FSzt",
    badge: "Enterprise AI",
    accent: "#f59e0b",
    image: fabricIqImg,
  },
  {
    title: "🤖 GitHub Copilot Dev Days: Why Agentic AI is the Next Big Wave",
    date: "February 2026",
    summary:
      "Attended GitHub Copilot Dev Days at Microsoft Office Hyderabad. Exploring autonomous workflows and moving beyond basic prompting.",
    url: "https://www.linkedin.com/posts/ashutosh-pankaj-rai_agenticai-genztech-futureofwork-activity-7454753565874561024-6bHQ",
    badge: "Agentic AI",
    accent: "#a855f7",
    image: teachBba,
  },
] as const;

// Testimonials & Endorsements
export const TESTIMONIALS = [
  {
    testimonial:
      "Ashutosh was recognized for his hands-on delivery in guiding students from foundational learning to actively teaching and building No-Code & Prompt Engineering applications.",
    name: "Poonam Khanvilkar",
    designation: "Faculty & Workshop Mentor",
    company: "ITM Skills University",
    linkedin: "https://www.linkedin.com/in/poonam-khanvilkar4/",
    image: poonam,
  },
  {
    testimonial:
      "Ashutosh exemplifies the builder mindset. His drive to transform technical problem-solving into real-world hackathon winning innovations like Sahayak sets a stellar standard.",
    name: "Dr. Aarti Pardeshi",
    designation: "Faculty",
    company: "ITM Skills University",
    linkedin: "https://www.linkedin.com/in/dr-aarti-pardeshi-2b998561/",
    image: arti,
  },
  {
    testimonial:
      "Ashutosh’s curiosity around Microsoft Fabric IQ and Agentic AI context layers dives deep into enterprise data engineering topics that most people haven't even begun to explore yet.",
    name: "Surya Teja Josyula",
    designation: "Developer Lead",
    company: "Microsoft Fabric IQ Community",
    linkedin: "https://www.linkedin.com/in/surya-teja-josyula/",
    image: teja,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://linkedin.com/in/ashutosh-pankaj-rai",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Ashurai84",
  },
  {
    name: "PostAura",
    icon: creator,
    link: "https://postaura.dev/",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://x.com",
  },
] as const;

export const TECHNOLOGIES = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Express JS", icon: express },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Figma", icon: figma },
] as const;

export const SERVICES = CORE_PILLARS;
