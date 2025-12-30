// Mock data for Mohamed Azimal's portfolio website

export const personalInfo = {
  name: "Mohamed Azimal Azimydeen",
  jobTitle: "AI Automation & Control Systems Engineer",
  tagline: "Control Engineer turned AI Automation Developer",
  email: "mohamedazimal27@gmail.com",
  phone: "+65 8921 3585",
  location: "Singapore",
  linkedin: "https://www.linkedin.com/in/mohamed-azimal-azimydeen-86a38278",
  github: "https://github.com/mohamedazimal27",
  heroImage: "https://images.unsplash.com/photo-1652105425180-3cc628d303cf"
};

export const aboutMe = {
  title: "About Me",
  content: [
    "Control Engineer turned AI Automation Developer with 7 years of experience in system reliability, logic design, and process optimization. Expert in building secure, self-healing workflows using Python, n8n, and LLMs.",
    "Specializes in translating complex business requirements into fault-tolerant automations, bridging the gap between industrial rigor and modern AI capabilities. Proven track record of reducing manual operational load by 90% through intelligent system architecture."
  ],
  skills: [
    "Automation Tools: n8n, Google Sheets, Apps Script",
    "Programming: Python, JavaScript, C#, C++",
    "AI & LLMs: RAG Pipelines (LangChain, ChromaDB), OpenAI API",
    "Agentic Workflows: Prompt Engineering, Vector Search, Local LLMs",
    "Integrations: REST APIs, Webhooks, Google APIs",
    "Industrial Systems: TwinCAT 3, Allen-Bradley, Rockwell PLC"
  ]
};

export const experience = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Sys-Mac Automation Engineering Pte Ltd",
    location: "Singapore",
    period: "May 2024 - Oct 2025",
    description: [
      "Integrated industrial control systems with cloud APIs and Google Sheets.",
      "Provided real-time automation support for machine deployments."
    ]
  },
  {
    id: 2,
    role: "PLC Programmer",
    company: "PBA Group – Robotics & Automation",
    location: "Singapore",
    period: "Aug 2021 – May 2024",
    description: [
      "Co-authored, tested, and optimized PLC code for an automated production line, consistently maintaining a rejection rate of < 2%, while ensuring compliance with all applicable safety requirements.",
      "Improved data transfer efficiency by 30% during Site Acceptance Testing for a $2M NPD project."
    ]
  },
  {
    id: 3,
    role: "Software Engineer",
    company: "Shimano Singapore Pte Ltd",
    location: "Singapore",
    period: "Sep 2020 – Aug 2021",
    description: [
      "Developed PLC, Robot, HMI programs; raised OEE to 85% from 65% in 3 automation cells",
      "Standardized data collection for 30 OT systems, utilized AGV and AMR robots to save 35% storage space"
    ]
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "Sys-Mac Automation Engineering Pte Ltd",
    location: "Singapore",
    period: "Jun 2019 - Sep 2020",
    description: [
      "Formulated logic for PLC, PC, and Robotics to drive Special Purpose Machines (SPM) installation at the customer's site within stipulated timelines."
    ]
  },
  {
    id: 5,
    role: "Robot Application Engineer",
    company: "FANUC India Pvt Ltd",
    location: "India",
    period: "Dec 2016 - Feb 2019",
    description: [
      "Responsible for programming Handling, Welding and Vision robotics application.",
      "Cycle time and Process optimisation."
    ]
  }
];

export const services = [
  {
    id: 1,
    title: "AI Automation Workflows",
    description: "Design and deploy self-healing workflows using n8n and Python to automate complex business logic and reduce manual load.",
    icon: "🤖",
    technologies: ["n8n", "Python", "Webhooks", "APIs"]
  },
  {
    id: 2,
    title: "RAG & Document Intelligence",
    description: "Build secure, production-grade RAG systems for Document Q&A with strict user isolation and context-aware responses.",
    icon: "📄",
    technologies: ["LangChain", "ChromaDB", "OpenAI", "FastAPI"]
  },
  {
    id: 3,
    title: "Voice AI Agents",
    description: "Create conversational voice AI agents for booking, scheduling, and customer support with real-time data integration.",
    icon: "🎙️",
    technologies: ["Retell AI", "Make.com", "Airtable"]
  },
  {
    id: 4,
    title: "Industrial Control Systems",
    description: "Bridge the gap between OT and IT by integrating PLCs/HMIs with modern cloud APIs and data pipelines.",
    icon: "🏭",
    technologies: ["TwinCAT 3", "Allen-Bradley", "SCADA", "IoT"]
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: "DocuMind – RAG Document Q&A",
    description: "Engineered a production-grade RAG system with strict user isolation (JWT auth + vector metadata filtering). Implemented ingestion, embeddings, and context-aware LLM responses.",
    image: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=2073&auto=format&fit=crop",
    technologies: ["Python", "FastAPI", "LangChain", "ChromaDB"],
    liveDemo: "https://github.com/mohamedazimal27/rag_docmind", // User provided Github as main link, verifying redirection
    github: "https://github.com/mohamedazimal27/rag_docmind",
    category: "RAG / AI"
  },
  {
    id: 2,
    title: "AI Voice Agent for Salon",
    description: "Designed a conversational voice AI agent handling appointment booking, rescheduling, and FAQs. Integrated real-time availability via Airtable and human hand-off.",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
    technologies: ["Retell AI", "Make.com", "Airtable"],
    liveDemo: "https://www.loom.com/share/0bb9e7eb21b4426ba9ba18f689d9a495",
    github: "#",
    category: "Voice AI"
  },
  {
    id: 3,
    title: "Lead Generation from Google Maps",
    description: "Built an end-to-end lead automation pipeline scraping businesses from Google Maps, enriching data with email extraction, and applying AI lead scoring.",
    image: "https://images.unsplash.com/photo-1557200130-4b7add4e229f?q=80&w=2070&auto=format&fit=crop",
    technologies: ["n8n", "Apify", "Google Maps", "OpenAI"],
    liveDemo: "https://www.loom.com/share/7cf80822d3f74209b8d263f53ca3d8eb",
    github: "#",
    category: "Automation"
  },
  {
    id: 4,
    title: "YouTube Automation Pipeline",
    description: "Fully automated pipeline to generate scripts, narrations, thumbnails, and subtitles using AI. Orchestrated multi-step workflows with Whisper and FFmpeg.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    technologies: ["n8n", "OpenAI", "FFmpeg", "YouTube API"],
    liveDemo: "https://github.com/mohamedazimal27/n8n-youtube-automation",
    github: "https://github.com/mohamedazimal27/n8n-youtube-automation",
    category: "Automation"
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "C++", level: 85 },
    { name: "C#", level: 80 }
  ],
  automation: [
    { name: "n8n", level: 95 },
    { name: "Google Sheets", level: 90 },
    { name: "Apps Script", level: 85 },
    { name: "Apify", level: 85 }
  ],
  aiml: [
    { name: "LangChain", level: 90 },
    { name: "ChromaDB", level: 85 },
    { name: "OpenAI API", level: 95 },
    { name: "Prompt Engineering", level: 90 }
  ],
  industrial: [
    { name: "TwinCAT 3", level: 90 },
    { name: "Allen-Bradley", level: 85 },
    { name: "SCADA", level: 80 },
    { name: "Robot Programming", level: 85 }
  ]
};

export const blogPosts = [
  {
    id: 1,
    title: "Transitioning from Industrial Automation to AI",
    excerpt: "How I leveraged 7+ years in industrial control systems to master AI workflow development.",
    date: "2024-11-15",
    readTime: "5 min read",
    category: "Career",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  }
  // Added a placeholder, as the resume doesn't have specific blog posts, but the section exists in UI.
];

export const contactInfo = {
  email: "mohamedazimal27@gmail.com",
  phone: "+65 8921 3585",
  location: "Singapore",
  availability: "Available for opportunities"
};