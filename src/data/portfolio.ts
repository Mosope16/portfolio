export const portfolioData = {
  hero: {
    headline: "Building intelligence and scalability.",
    credibilityTag: "Computer Engineering student building AI and full-stack systems.",
    valueProposition: "I specialize in bridging the gap between hardware, low-level systems, and modern web applications to create scalable, high-performance solutions.",
    ctaText: "View My Projects"
  },
  
  about: {
    availability: "Available for internships and freelance work"
  },

  skills: {
    main: [
      { name: "React / Next.js", icon: "react" },
      { name: "Python", icon: "python" },
      { name: "C++", icon: "cpp" },
      { name: "Node.js", icon: "node" }
    ],
    tools: [
      "TypeScript", "Tailwind CSS", "Docker", "Git", "PostgreSQL", "Linux", "AWS", "Framer Motion", "REST APIs"
    ]
  },

  projects: [
    {
      id: "operant",
      title: "Operant CMMS",
      description: "An enterprise-grade, multi-tenant Computerized Maintenance Management System (CMMS) featuring asset lifecycle tracking, preventive maintenance schedules, interactive work order dispatching, parts inventory, and audit logging.",
      category: "Web",
      tech: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL"],
      image: "/operant.jpg",
      link: "https://myoperant.vercel.app/",
      liveUrl: "https://myoperant.vercel.app/",
      github: "https://github.com/Mosope16/operant"
    },
    {
      id: "dove-tv-portal",
      title: "Dove TV Portal",
      description: "A full-scale broadcast network Operations Management System featuring studio booking, equipment checkout, and shift management.",
      category: "Web",
      tech: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL"],
      image: "/dove-tv-portal.png",
      link: "https://github.com/Mosope16/dove-tv-portal",
      github: "https://github.com/Mosope16/dove-tv-portal"
    },
    {
      id: "jarvis",
      title: "Jarvis (AI Voice Assistant)",
      description: "An intelligent voice-controlled desktop assistant featuring real-time speech recognition, LLM intelligence, OS task automation, and a custom UI.",
      category: "Systems",
      tech: ["Python", "CustomTkinter", "OpenAI API", "SpeechRecognition", "PyAutoGUI"],
      image: "/jarvis.jpg",
      link: "https://github.com/Mosope16/Jarvis"
    },
    {
      id: "habit-garden",
      title: "Habit Garden",
      description: "A gamified habit tracker that visualizes daily consistency as a growing virtual garden, featuring XP leveling, streak tracking, and interactive analytics.",
      category: "Web",
      tech: ["Next.js 15", "React 19", "Supabase", "Tailwind CSS", "TanStack Query"],
      image: "/habit-garden.png",
      link: "https://github.com/Mosope16/habit_garden"
    },
    {
      id: "campus-study-spot-finder",
      title: "Campus Study Spot Finder",
      description: "A full-stack campus discovery platform featuring interactive Leaflet maps, live crowd density voting, desk/outlet schematics, and focus timers.",
      category: "Web",
      tech: ["Next.js", "TypeScript", "Leaflet", "Tailwind CSS", "Supabase"],
      image: "/campus.png",
      link: "https://github.com/Mosope16/campus-study-spot-finder"
    }
  ],

  currentlyBuilding: {
    name: "Attendance Management System",
    progress: 100, // percentage
    learning: "Building a digital attendance MVP with React Native, Expo, Neon, Better Auth, and NativeWind styling."
  },

  education: {
    degree: "B.S. Computer Engineering",
    institution: "Redeemer's University",
    graduationYear: "2027",
    gpa: "",
    coursework: ["Object-Oriented Programming", "Data Structures & Algorithms", "Computer Networks"]
  },

  contact: {
    email: "ainamosope87@gmail.com",
    github: "https://github.com/repos",
    linkedin: "https://www.linkedin.com/in/mosopefoluwa-aina-797663298",
    twitter: "https://twitter.com"
  }
};
