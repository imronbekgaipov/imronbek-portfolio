import { Project, TechItem, TimelineMilestone } from '../types';

export const PERSONAL_INFO = {
  name: "Imronbek",
  fullName: "Imronbek",
  role: "Aspiring Software Engineer & Frontend Developer",
  tagline: "I build digital experiences through code and creativity.",
  bio: "Currently pursuing a degree in Software Engineering at Fergana State Technical University in Uzbekistan. Passionate about modern web architecture, responsive interfaces, and transforming conceptual ideas into functional, elegant digital solutions.",
  status: "Available for internships & collaborations",
  location: "Fergana, Uzbekistan",
  university: "Fergana State Technical University",
  degree: "B.S. in Software Engineering",
  interests: ["React Ecosystem", "JavaScript (ES6+)", "Creative Web Design", "Frontend Engineering", "UI/UX Systems"],
  
  // Contact & Social Placeholders (Easily update with your details)
  contacts: {
    github: "https://github.com/imronbekgaipov",
    githubUsername: "imronbekgaipov",
    linkedin: "https://linkedin.com/in/your-profile", // [EDITABLE PLACEHOLDER]
    telegram: "https://t.me/your-telegram-handle",   // [EDITABLE PLACEHOLDER]
    email: "your.email@example.com",                  // [EDITABLE PLACEHOLDER]
  }
};

export const TECH_STACK: TechItem[] = [
  {
    name: "HTML5",
    category: "Core & Languages",
    level: "Proficient",
    icon: "code",
    accentColor: "#E34F26",
    description: "Semantic document architecture, accessibility standards (a11y), and modern SEO foundations."
  },
  {
    name: "CSS3 / Modern CSS",
    category: "Styling & Motion",
    level: "Proficient",
    icon: "palette",
    accentColor: "#1572B6",
    description: "Responsive layouts, Flexbox, Grid, custom properties, and smooth micro-interactions."
  },
  {
    name: "JavaScript (ES6+)",
    category: "Core & Languages",
    level: "Proficient",
    icon: "file-code",
    accentColor: "#F7DF1E",
    description: "Modern asynchronous JavaScript, DOM manipulation, closures, promises, and functional patterns."
  },
  {
    name: "React",
    category: "Frameworks & Libraries",
    level: "Learning & Building",
    icon: "atom",
    accentColor: "#61DAFB",
    description: "Component architecture, declarative UI state, custom hooks, and modern frontend ecosystems."
  },
  {
    name: "TypeScript",
    category: "Core & Languages",
    level: "Learning & Building",
    icon: "file-type",
    accentColor: "#3178C6",
    description: "Static type systems, strict interfaces, generics, and type-safe component development."
  },
  {
    name: "Tailwind CSS",
    category: "Styling & Motion",
    level: "Proficient",
    icon: "sparkles",
    accentColor: "#38BDF8",
    description: "Utility-first design systems, custom theme configuration, and responsive layout mastery."
  },
  {
    name: "Git",
    category: "Workflow & Tools",
    level: "Proficient",
    icon: "git-branch",
    accentColor: "#F05032",
    description: "Version control, branching workflows, commits, rebasing, and merge conflict resolution."
  },
  {
    name: "GitHub & GitHub CLI",
    category: "Workflow & Tools",
    level: "Proficient",
    icon: "github",
    accentColor: "#818CF8",
    description: "Repository management, automated remote pushes, CLI tooling (`gh`), and collaborative workflows."
  },
  {
    name: "Vite",
    category: "Workflow & Tools",
    level: "Proficient",
    icon: "zap",
    accentColor: "#646CFF",
    description: "Next-generation frontend tooling, lightning-fast HMR, and optimized production bundling."
  },
  {
    name: "Framer Motion",
    category: "Styling & Motion",
    level: "Exploring",
    icon: "motion",
    accentColor: "#EC4899",
    description: "Declarative page transitions, gesture animations, spring physics, and scroll-driven reveals."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Personal Developer Portfolio",
    tagline: "Interactive Portfolio with Agency Aesthetics & 3D Visuals",
    description: "A production-grade, highly responsive developer portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. Features interactive particle canvas, glassmorphic UI, dynamic theme modes, and GitHub automation.",
    category: "Frontend",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    features: [
      "Custom interactive math/physics particle canvas hero element",
      "Editorial typography with Syne and Plus Jakarta Sans",
      "Interactive technology and journey exploration timelines",
      "Validated contact form with simulated submission feedback",
      "Fully responsive down to 375px mobile screens"
    ],
    architecture: "Component-driven React 18 architecture with modular state, strict TypeScript interfaces, and Framer Motion layout transitions.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "https://github.com/imronbekgaipov/imronbek-portfolio",
    githubUrl: "https://github.com/imronbekgaipov/imronbek-portfolio",
    featured: true,
    status: "Completed",
    placeholderNote: "Active live repository. You can customize the content and screenshots anytime!"
  },
  {
    id: "project-2",
    title: "Modern Web Application (Placeholder)",
    tagline: "[Editable Placeholder: Replace with your project title]",
    description: "A placeholder for your upcoming software project or frontend build. Showcase your React components, state management experiments, API integrations, or web utilities here.",
    category: "Web Apps",
    tags: ["React", "JavaScript", "REST API", "Tailwind CSS"],
    features: [
      "[Placeholder Feature 1]: Responsive interface design",
      "[Placeholder Feature 2]: Real-time user interactions",
      "[Placeholder Feature 3]: Clean data fetching and state synchronization"
    ],
    architecture: "Modular frontend structure with custom hooks and reusable UI components.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/imronbekgaipov",
    featured: true,
    status: "Concept Prototype",
    placeholderNote: "Replace this card with your next project (e.g., Task Manager, E-Commerce UI, Weather App)."
  },
  {
    id: "project-3",
    title: "Interactive UI Component System (Placeholder)",
    tagline: "[Editable Placeholder: Replace with your project title]",
    description: "A showcase of custom interactive UI elements, accessible modal dialogues, sleek micro-interactions, and responsive layout patterns crafted with modern CSS and JavaScript.",
    category: "Frontend",
    tags: ["JavaScript", "CSS3", "Design Systems", "a11y"],
    features: [
      "[Placeholder Feature 1]: Accessible keyboard navigation",
      "[Placeholder Feature 2]: Fluid animation and transitions",
      "[Placeholder Feature 3]: Cross-browser compatibility"
    ],
    architecture: "CSS custom properties, semantic markup, and lightweight JavaScript interaction handlers.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/imronbekgaipov",
    featured: false,
    status: "In Progress",
    placeholderNote: "Add your UI library or CSS experiment here."
  },
  {
    id: "project-4",
    title: "Algorithm & Data Structure Lab (Placeholder)",
    tagline: "[Editable Placeholder: Replace with your university coursework project]",
    description: "Visual exploration and implementation of core software engineering algorithms, data structures, and computational thinking developed during university studies.",
    category: "Experiments",
    tags: ["Algorithms", "Software Engineering", "JavaScript"],
    features: [
      "[Placeholder Feature 1]: Visual algorithm step-through",
      "[Placeholder Feature 2]: Complexity analysis comparisons",
      "[Placeholder Feature 3]: Clean documentation and test cases"
    ],
    architecture: "Clean, algorithmic code written for educational demonstration and efficiency.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    demoUrl: "#",
    githubUrl: "https://github.com/imronbekgaipov",
    featured: false,
    status: "In Progress",
    placeholderNote: "Perfect place to link your University coursework or GitHub learning repository."
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "Current",
    period: "2024 — Present",
    title: "Software Engineering Student",
    institution: "Fergana State Technical University",
    location: "Fergana, Uzbekistan",
    description: "Deepening foundational knowledge in computer science, software engineering principles, algorithms, and modern frontend application development.",
    highlights: [
      "Specializing in Software Engineering curriculum",
      "Studying software design, logic, and data architectures",
      "Active self-directed learning in React and JavaScript ecosystems"
    ],
    status: "Current",
    type: "Education"
  },
  {
    year: "Self-Paced",
    period: "2023 — 2024",
    title: "Frontend Development Exploration",
    institution: "Independent Practice & Community Learning",
    location: "Self-Directed",
    description: "Began hands-on programming journey by mastering HTML5 semantics, modern CSS layout techniques (Flexbox, Grid), and foundational JavaScript fundamentals.",
    highlights: [
      "Built responsive web layouts and interface prototypes",
      "Adopted Git and GitHub for version control and project tracking",
      "Transitioned into modern React component architecture"
    ],
    status: "Completed",
    type: "Milestone"
  },
  {
    year: "Future Goals",
    period: "Upcoming",
    title: "Professional Engineering & Fullstack Growth",
    institution: "Future Ambition [Editable Placeholder]",
    location: "Global / Remote",
    description: "Aiming to contribute to impactful software products, collaborate with engineering teams, and expand expertise into fullstack development and scalable systems.",
    highlights: [
      "Open to junior developer roles and engineering internships",
      "Building production-grade open source projects on GitHub",
      "Mastering TypeScript, Next.js, and backend integration"
    ],
    status: "Upcoming",
    type: "Exploration"
  }
];
