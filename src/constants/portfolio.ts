// Portfolio constants - All portfolio data

export interface Author {
  _id: string;
  name: string;
  initials: string;
  avatar?: {
    asset?: {
      url?: string;
    };
  };
  description?: any[];
  summary?: any[];
  location?: string;
  skills?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    email?: string;
  };
}

export interface WorkExperience {
  _id: string;
  company: string;
  title: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  location?: string;
  startDate: string;
  endDate?: string;
  description?: any[];
  url?: string;
}

export interface Education {
  _id: string;
  school: string;
  degree: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  startDate: string;
  endDate: string;
  url?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: any[];
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  image?: {
    asset?: {
      url?: string;
    };
  };
  video?: string;
  links?: {
    title: string | null;
    url: string | null;
    type: string | null;
  }[];
}

// Portfolio data
export const AUTHOR: Author = {
  _id: "author-1",
  name: "Ram Chouhan",
  initials: "RSC",
  avatar: {
    asset: {
      url: "/img.png",
    },
  },
  description: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Aspiring Full Stack Developer building scalable web platforms.",
        },
      ],
    },
  ],
  summary: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Aspiring Full Stack Developer and Computer Science undergraduate passionate about building scalable web platforms and intelligent automation systems. Interested in contributing technical expertise in Java, React, and Firebase to dynamic development teams while continuously learning and solving real-world challenges.",
        },
      ],
    },
  ],
  location: "Indore, India",
  skills: [
    "Java",
    "C++",
    "Python",
    "SQL",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
    "Express.js",
    "React.js",
    "MySQL",
    "MongoDB",
    "VS Code",
    "GitHub",
    "Git",
    "DSA",
    "OOP",
    "DBMS",
    "Cryptography",
    "WebSocket",
    "REST APIs"
  ],
  social: {
    github: "https://github.com/distortion-12", // Update with your actual GitHub URL
    linkedin: "https://www.linkedin.com/in/ramchouhan", // Update with your actual LinkedIn URL
    email: "ramchouhan045@gmail.com",
  },
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    _id: "work-1",
    company: "Wormos Pvt. Ltd",
    title: "MERN Stack Intern",
    location: "Greater Noida",
    startDate: "May 2025",
    endDate: "June 2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Outlined feature scope, technical feasibility, and user impact, aiding sprint planning. Enabled component-based design, simplifying entity interactions and future scalability.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Achieved 40% performance boost in inventory operations and improved maintainability. Fixed memory mismanagement in real-time, ensuring uninterrupted functionality.",
          },
        ],
      },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    _id: "edu-1",
    school: "Medi-Caps University, Indore",
    degree: "Bachelor of Technology in Information Technology",
    startDate: "2022",
    endDate: "2026",
  },
];

export const PROJECTS: Project[] = [
  {
    _id: "project-6",
    title: "Researcher.Hut",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Modern research article sharing platform with rich text editor, dark mode, search, ratings, comments, PDF/DOCX export, and anonymous stories section. Admin dashboard with OTP auth, content approval, and social sharing.",
          },
        ],
      },
    ],
    technologies: ["Next.js 14", "TypeScript", "Express.js", "Supabase", "PostgreSQL", "Tailwind CSS", "Tiptap", "Resend"],
    image: {
      asset: {
        url: "/projects/Reasearch Hut.jpg",
      },
    },
    links: [
      {
        title: "Live Demo",
        url: "https://researcher-hut.vercel.app",
        type: "link",
      },
      {
        title: "Source Code",
        url: "https://github.com/distortion-12/researcher-hut",
        type: "code",
      },
    ],
  },
  {
    _id: "project-2",
    title: "Git Repo Visualizer 2.0",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Git repository visualization tool with branch tracking and interactive graphs. Analyze commit patterns and visualize project evolution.",
          },
        ],
      },
    ],
    technologies: ["ReactJS", "NodeJS", "D3js", "JavaScript", "Data Visualization"],
    image: {
      asset: {
        url: "/projects/gource-git.jpg",
      },
    },
    links: [
      {
        title: "Live Demo",
        url: "https://git-repo-visualizer.netlify.app/",
        type: "link",
      },
      {
        title: "Source Code",
        url: "https://github.com/distortion-12/Git-Repo-Visualizer-2.0",
        type: "code",
      },
    ],
  },
  {
    _id: "project-1",
    title: "eSports Live Platform",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Full-stack web app for BGMI and PUBG esports. Features live match data, Firebase auth, real-time WebSocket updates, and admin dashboards.",
          },
        ],
      },
    ],
    technologies: ["Java Spring Boot", "React.JS", "MongoDB", "Firebase", "WebSocket", "Tailwind CSS"],
    image: {
      asset: {
        url: "/projects/bgmi.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/distortion-12/eSports-Arena",
        type: "code",
      },
    ],
  },
  {
    _id: "project-4",
    title: "EaseBookings",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Comprehensive booking management system with streamlined reservation processes and user-friendly interfaces.",
          },
        ],
      },
    ],
    technologies: ["JavaScript", "Booking Management System"],
    image: {
      asset: {
        url: "/projects/Appointease.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/distortion-12/EaseBookings",
        type: "code",
      },
    ],
  },
  {
    _id: "project-3",
    title: "LYRA Voice Assistant",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "AI voice assistant with speech recognition, NLP, and API integrations for weather, web search, and task automation.",
          },
        ],
      },
    ],
    technologies: ["Python", "Speech Recognition", "NLP"],
    image: {
      asset: {
        url: "/projects/AI.jpe",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/distortion-12/Lyra-Virtual-Assistant",
        type: "code",
      },
    ],
  },
  {
    _id: "project-5",
    title: "File Encryptor-Decryptor",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "File encryption system with AES standards, GUI interface, password protection, and batch processing capabilities.",
          },
        ],
      },
    ],
    technologies: ["Java", "Cryptography", "File Handling", "AES"],
    image: {
      asset: {
        url: "/projects/File E & D.png",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/distortion-12/FileEncryptor",
        type: "code",
      },
    ],
  },
];