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
      id: "dove-tv-portal",
      title: "Dove TV Portal",
      description: "A full-scale broadcast network Operations Management System featuring studio booking, equipment checkout, and shift management.",
      category: "Web",
      tech: ["Next.js", "React", "Tailwind CSS", "Prisma", "PostgreSQL"],
      image: "/dove-tv-portal.png",
      link: "https://github.com/Mosope16/dove-tv-portal"
    },
    {
      id: "campus-eats",
      title: "Campus Eats",
      description: "A full-stack food delivery application designed for university campuses, featuring real-time order tracking and vendor management.",
      category: "Web",
      tech: ["Next.js", "React Native", "TypeScript", "Supabase"],
      image: "/api/placeholder/600/400",
      link: "#"
    },
    {
      id: "luxtune",
      title: "Luxtune (Wave.)",
      description: "A premium mobile audio player featuring local media library integration, advanced playback controls, and fuzzy search.",
      category: "Mobile",
      tech: ["React Native", "Expo", "Zustand", "Track Player"],
      image: "/api/placeholder/600/400",
      link: "#"
    }
  ],

  currentlyBuilding: {
    name: "Attendance Management System",
    progress: 100, // percentage
    learning: "Building a digital attendance MVP with React Native, Expo, Neon, Better Auth, and NativeWind styling."
  },

  education: {
    degree: "B.S. Computer Engineering",
    institution: "Redeemer's University", // Placeholder for user
    graduationYear: "2027",
    coursework: ["Object-Oriented Programming", "Data Structures & Algorithms", "Computer Networks"]
  },

  contact: {
    email: "ainamosope87@gmail.com",
    github: "https://github.com/repos",
    linkedin: "https://www.linkedin.com/in/mosopefoluwa-aina-797663298",
    twitter: "https://twitter.com"
  }
};
