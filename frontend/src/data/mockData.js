// Mock data for Mohamed Azimal's portfolio website

export const personalInfo = {
  name: "Mohamed Azimal Azimydeen",
  jobTitle: "AI Workflow Developer | Automation & Control Systems Engineer",
  tagline: "Bridging Industrial Control with AI Automation",
  email: "mohamedazimal27@gmail.com",
  phone: "+65 8921 3585",
  location: "Singapore",
  linkedin: "https://linkedin.com/in/mohamed-azimal-azimydeen-86a38278",
  github: "https://github.com/mohamedazimal27",
  heroImage: "https://images.unsplash.com/photo-1652105425180-3cc628d303cf"
};

export const aboutMe = {
  title: "About Me",
  content: [
    "With over 7 years of experience in industrial automation, I have successfully transitioned into the exciting world of AI automation and workflow development. My unique background combines deep understanding of industrial control systems with cutting-edge artificial intelligence technologies.",
    "I specialize in creating intelligent automation solutions using platforms like n8n, OpenAI, and TensorFlow Lite. My experience spans from PLC programming and HMI development to building sophisticated AI-powered applications and voice agents.",
    "My passion lies in bridging the gap between traditional industrial systems and modern AI capabilities, creating solutions that are both robust and innovative. I'm particularly focused on developing AI workflows that can transform business processes and enhance operational efficiency."
  ],
  skills: [
    "7+ years in industrial automation",
    "AI workflow development with n8n",
    "OpenAI API integration",
    "TensorFlow Lite mobile deployment",
    "PLC & HMI programming",
    "Voice agent development"
  ]
};

export const services = [
  {
    id: 1,
    title: "AI Workflow Automation",
    description: "Design and implement intelligent automation workflows using n8n, OpenAI, and custom AI models to streamline business processes.",
    icon: "🤖",
    technologies: ["n8n", "OpenAI API", "LangChain", "Webhooks"]
  },
  {
    id: 2,
    title: "PLC & HMI Integration",
    description: "Develop robust industrial control systems with seamless integration between PLCs, HMIs, and modern AI capabilities.",
    icon: "⚙️",
    technologies: ["TwinCAT", "Weintek HMI", "Rockwell PLC", "SCADA"]
  },
  {
    id: 3,
    title: "AI-powered Mobile Apps",
    description: "Create intelligent mobile applications with on-device AI capabilities for real-time processing and analysis.",
    icon: "📱",
    technologies: ["Flutter", "TensorFlow Lite", "Firebase", "OpenCV"]
  },
  {
    id: 4,
    title: "API Integration & Automation Tools",
    description: "Build comprehensive automation solutions that connect various APIs and services for seamless data flow and process optimization.",
    icon: "🔗",
    technologies: ["REST APIs", "Zapier", "Make.com", "Custom Integrations"]
  }
];

export const portfolioProjects = [
  {
    id: 1,
    title: "Retell AI Voice Agent – Hair Salon Bot",
    description: "Built an intelligent voice agent for hair salon appointment automation using Retell AI integrated with n8n workflows. The system handles appointment scheduling, customer inquiries, and booking confirmations through natural voice interactions.",
    image: "https://images.unsplash.com/photo-1545063328-c8e3faffa16f",
    technologies: ["Retell AI", "n8n", "Voice Processing", "Appointment API"],
    liveDemo: "#",
    github: "#",
    category: "Voice AI"
  },
  {
    id: 2,
    title: "Multi-Agent Blogging AI",
    description: "Developed a sophisticated multi-agent system for automated blog content creation using n8n, LangChain, and OpenAI. The system researches topics, generates content, and publishes directly to WordPress with SEO optimization.",
    image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg",
    technologies: ["n8n", "LangChain", "OpenAI", "Google Search API", "WordPress API"],
    liveDemo: "#",
    github: "#",
    category: "Content AI"
  },
  {
    id: 3,
    title: "YouTube Horror Narration Bot",
    description: "Created an automated system for generating horror narration videos with AI-generated scripts, text-to-speech conversion, and FFmpeg audio processing for YouTube content creation.",
    image: "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg",
    technologies: ["AI Text Generation", "TTS", "FFmpeg", "YouTube API"],
    liveDemo: "#",
    github: "#",
    category: "Video AI"
  },
  {
    id: 4,
    title: "Quranic Motivation Video Generator",
    description: "Built an automated video generation system using n8n workflows, Quran API integration, and text-to-speech technology to create inspirational Islamic content with professional video editing.",
    image: "https://images.pexels.com/photos/7789851/pexels-photo-7789851.jpeg",
    technologies: ["n8n", "Quran API", "TTS", "Video Automation"],
    liveDemo: "#",
    github: "#",
    category: "Video AI"
  },
  {
    id: 5,
    title: "AI Android Apps",
    description: "Developed mobile applications for skin cancer detection and age/gender estimation using TensorFlow Lite and Flutter, providing real-time AI analysis with on-device processing for privacy and speed.",
    image: "https://images.unsplash.com/photo-1659035260002-11d486d6e9f5",
    technologies: ["TensorFlow Lite", "Flutter", "OpenCV", "Mobile AI"],
    liveDemo: "#",
    github: "#",
    category: "Mobile AI"
  }
];

export const skills = {
  languages: [
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "C++", level: 85 },
    { name: "C#", level: 80 },
    { name: "Apps Script", level: 75 }
  ],
  automation: [
    { name: "n8n", level: 95 },
    { name: "Make.com", level: 85 },
    { name: "Zapier", level: 80 },
    { name: "TwinCAT", level: 90 },
    { name: "Rockwell PLC", level: 85 }
  ],
  aiml: [
    { name: "OpenAI API", level: 95 },
    { name: "TensorFlow Lite", level: 85 },
    { name: "LangChain", level: 90 },
    { name: "Computer Vision", level: 80 },
    { name: "NLP", level: 85 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 85 },
    { name: "VS Code", level: 95 },
    { name: "Firebase", level: 80 },
    { name: "MongoDB", level: 85 }
  ]
};

export const blogPosts = [
  {
    id: 1,
    title: "Transitioning from Industrial Automation to AI: My Journey",
    excerpt: "How I leveraged my 7+ years in industrial automation to build a career in AI workflow development and the key lessons learned along the way.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Career",
    image: "https://images.unsplash.com/photo-1652105425180-3cc628d303cf"
  },
  {
    id: 2,
    title: "Building Voice Agents with Retell AI and n8n",
    excerpt: "A comprehensive guide to creating intelligent voice agents for business automation using Retell AI integrated with n8n workflows.",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "AI Development",
    image: "https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg"
  },
  {
    id: 3,
    title: "The Future of Industrial Automation: AI Integration",
    excerpt: "Exploring how artificial intelligence is transforming traditional industrial control systems and what this means for the future of manufacturing.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Industry Insights",
    image: "https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Operations Manager",
    company: "TechFlow Solutions",
    content: "Mohamed's expertise in bridging industrial automation with AI has been invaluable. His n8n workflows have transformed our operational efficiency by 40%.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b9a4a3d5"
  },
  {
    id: 2,
    name: "David Chen",
    role: "CTO",
    company: "AutomateAI",
    content: "Working with Mohamed on our voice agent project was exceptional. His technical depth and innovative approach delivered results beyond our expectations.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    id: 3,
    name: "Lisa Rodriguez",
    role: "Product Manager",
    company: "InnovateNow",
    content: "Mohamed's ability to integrate complex AI systems with existing infrastructure is remarkable. He delivered a robust solution that scaled perfectly.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export const contactInfo = {
  email: "mohamedazimal27@gmail.com",
  phone: "+65 8921 3585",
  location: "Singapore",
  availability: "Available for freelance and full-time opportunities"
};