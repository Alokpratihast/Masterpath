import type {
  ProcessStep,
  Service,
  ServiceStat,
  SoftwareCompany
} from "@/types/service";

/* =========================================================
   EDUCATION SERVICES
========================================================= */

export const educationServices: Service[] = [
  {
    id: "professional-training",
    title: "Professional Training",
    shortTitle: "Training",
    description:
      "Industry-focused training programs designed to build practical technical skills and prepare learners for real-world career opportunities.",
    icon: "GraduationCap",
    category: "Education",
    href: "/courses",
    features: [
      "Industry-focused curriculum",
      "Hands-on learning",
      "Expert guidance",
      "Interview preparation",
    ],
  },

  {
    id: "live-project-training",
    title: "Live Project Training",
    shortTitle: "Live Projects",
    description:
      "Gain practical experience by working on real-world projects that help you understand development workflows and build a stronger portfolio.",
    icon: "Laptop",
    category: "Education",
    features: [
      "Real-world projects",
      "Practical development",
      "Portfolio building",
      "Industry workflows",
    ],
  },

  {
    id: "interview-preparation",
    title: "Interview Preparation",
    shortTitle: "Interview Prep",
    description:
      "Prepare for technical and HR interviews with structured guidance, coding practice, mock interviews and interview-focused preparation.",
    icon: "MessageSquareText",
    category: "Education",
    features: [
      "Technical interview preparation",
      "Coding practice",
      "Mock interviews",
      "HR interview preparation",
    ],
  },

  {
    id: "career-counselling",
    title: "Career Counselling",
    shortTitle: "Career Guidance",
    description:
      "Get personalized career guidance to identify the right learning path, technology stack and career direction based on your goals.",
    icon: "Compass",
    category: "Education",
    features: [
      "Career roadmap",
      "Technology guidance",
      "Course selection",
      "Personalized support",
    ],
  },

  {
    id: "resume-profile-building",
    title: "Resume & Profile Building",
    shortTitle: "Profile Building",
    description:
      "Build a professional profile that communicates your skills, projects and experience effectively to recruiters and hiring teams.",
    icon: "FileText",
    category: "Education",
    features: [
      "Resume building",
      "ATS-friendly resume",
      "LinkedIn guidance",
      "Project presentation",
    ],
  },

  {
    id: "in-house-placement",
    title: "In-House Placement Support",
    shortTitle: "Placement Support",
    description:
      "Our in-house placement team supports learners throughout their career journey with interview opportunities, preparation and hiring assistance.",
    icon: "BriefcaseBusiness",
    category: "Education",
    features: [
      "Placement assistance",
      "Hiring opportunities",
      "Interview coordination",
      "Career support",
    ],
  },
];

/* =========================================================
   SOFTWARE SERVICES
========================================================= */

export const softwareServices: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    description:
      "Build fast, responsive and scalable websites and web applications using modern technologies and development practices.",
    icon: "Globe",
    category: "Software",
    features: [
      "Business websites",
      "Web applications",
      "Responsive UI",
      "Scalable architecture",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
    ],
  },

  {
    id: "custom-software",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    description:
      "Develop custom software solutions tailored to your business processes, workflows and operational requirements.",
    icon: "Code2",
    category: "Software",
    features: [
      "Custom business solutions",
      "API development",
      "Database integration",
      "Scalable architecture",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "ASP.NET Core",
    ],
  },

  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    description:
      "Create modern mobile applications designed for performance, usability and scalable business growth.",
    icon: "Smartphone",
    category: "Software",
    features: [
      "Android applications",
      "iOS applications",
      "API integration",
      "User-focused experiences",
    ],
    technologies: [
      "React Native",
      "Flutter",
      "Node.js",
      "REST APIs",
    ],
  },

  {
    id: "saas-development",
    title: "SaaS Development",
    shortTitle: "SaaS",
    description:
      "Turn your product idea into a scalable SaaS platform with modern architecture, authentication, APIs and cloud deployment.",
    icon: "CloudCog",
    category: "Software",
    features: [
      "MVP development",
      "Multi-user systems",
      "Authentication",
      "Cloud deployment",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "AWS",
    ],
  },

  {
    id: "ai-automation",
    title: "AI & Automation",
    shortTitle: "AI Solutions",
    description:
      "Integrate AI and automation into business workflows to reduce repetitive work, improve efficiency and create intelligent digital experiences.",
    icon: "BrainCircuit",
    category: "Software",
    features: [
      "AI integrations",
      "Workflow automation",
      "Intelligent assistants",
      "Data-driven solutions",
    ],
    technologies: [
      "Python",
      "AI APIs",
      "LangChain",
      "LangGraph",
    ],
  },

  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    description:
      "Deploy, manage and scale applications using modern cloud infrastructure, CI/CD pipelines and reliable deployment practices.",
    icon: "Cloud",
    category: "Software",
    features: [
      "Cloud deployment",
      "CI/CD pipelines",
      "Application scaling",
      "Deployment automation",
    ],
    technologies: [
      "AWS",
      "Docker",
      "GitHub Actions",
      "Vercel",
    ],
  },
];

/* =========================================================
   EDUCATION PROCESS
========================================================= */

export const educationProcess: ProcessStep[] = [
  {
    id: 1,
    title: "Understand",
    description:
      "We understand your career goals, current skills and learning requirements.",
    icon: "Target",
  },

  {
    id: 2,
    title: "Learn",
    description:
      "Build strong technical foundations through structured and industry-focused training.",
    icon: "BookOpen",
  },

  {
    id: 3,
    title: "Practice",
    description:
      "Apply your knowledge through coding exercises, assignments and practical projects.",
    icon: "Laptop",
  },

  {
    id: 4,
    title: "Prepare",
    description:
      "Get ready for technical interviews, HR rounds and real-world hiring processes.",
    icon: "ClipboardCheck",
  },

  {
    id: 5,
    title: "Get Hired",
    description:
      "Receive placement assistance and career support to move toward the right opportunity.",
    icon: "BriefcaseBusiness",
  },
];

/* =========================================================
   SOFTWARE PROCESS
========================================================= */

export const softwareProcess: ProcessStep[] = [
  {
    id: 1,
    title: "Discover",
    description:
      "Understand your business objectives, users, requirements and product vision.",
    icon: "Search",
  },

  {
    id: 2,
    title: "Design",
    description:
      "Create the product structure, user experience and technical architecture.",
    icon: "PenTool",
  },

  {
    id: 3,
    title: "Develop",
    description:
      "Build reliable and scalable software using modern development technologies.",
    icon: "Code2",
  },

  {
    id: 4,
    title: "Deploy",
    description:
      "Launch your application using reliable cloud infrastructure and deployment practices.",
    icon: "Rocket",
  },

  {
    id: 5,
    title: "Scale",
    description:
      "Improve, maintain and scale your product as your business and user base grows.",
    icon: "TrendingUp",
  },
];

/* =========================================================
   SERVICES STATS
========================================================= */

export const servicesStats: ServiceStat[] = [
  {
    value: "500+",
    label: "Students Trained",
    description:
      "Learners trained through practical, industry-focused programs.",
  },

  {
    value: "30+",
    label: "Hiring Partners",
    description:
      "Companies connected with our career and placement ecosystem.",
  },

  {
    value: "95%",
    label: "Placement Success",
    description:
      "Strong career outcomes supported by structured placement assistance.",
  },

  {
    value: "10+",
    label: "Projects",
    description:
      "Practical projects and digital solutions across different use cases.",
  },


  
];


export const softwareCompanies: SoftwareCompany[] = [
  {
    id: 1,
    name: "Company One",
    logo: "/images/companies/company-one.webp",
  },
  {
    id: 2,
    name: "Company Two",
    logo: "/images/companies/company-two.webp",
  },
  {
    id: 3,
    name: "Company Three",
    logo: "/images/companies/company-three.webp",
  },
  {
    id: 4,
    name: "Company Four",
    logo: "/images/companies/company-four.webp",
  },
];



