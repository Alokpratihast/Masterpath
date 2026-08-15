import type { Course } from "@/types/course";

export const pythonCourse: Course = {
  slug: "advanced-python-training",

  title: "Advanced Python Training",

  category: "Technology",

  // Short summary for Hero section
  summary:
    "Master Python through hands-on projects, advanced programming concepts, APIs, databases, automation, and real-world application development.",

  duration: "3 Months",

  mode: "Hybrid",

  level: "Beginner",

  rating: 4.8,

  projects: 10,

  featured: true,

  price: "₹25,000",

  image: "/images/courses/1.webp",

  highlights: [
    "Live Projects",
    "Industry-Focused Curriculum",
    "Hands-on Learning",
    "Interview Preparation",
    "Placement Assistance",
  ],

  // Full description for About Course section
  about:
    "Advanced Python Programming is a comprehensive, industry-focused course designed to help students and professionals build strong Python programming skills and develop real-world applications. The program covers Python fundamentals, advanced programming concepts, APIs, databases, automation, web development, and practical project development. Learners work on hands-on projects designed around real industry requirements.",

  // Detailed curriculum description
  description:
    "Masterpath curriculum covers essential and advanced topics including Python Fundamentals, Object-Oriented Programming (OOP), Data Structures & Algorithms, Exception Handling, File Handling, Modules & Packages, Regular Expressions, Multithreading, API Integration, Database Connectivity (SQL), Web Scraping, Automation using Python, Django/Flask Basics, Git & GitHub, Unit Testing, and Real-Time Projects. Students gain practical experience by working on projects that reflect real-world industry requirements.",

  learning: [
    "Python Fundamentals",
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms",
    "Exception Handling",
    "File Handling",
    "Modules & Packages",
    "Regular Expressions",
    "Multithreading",
    "API Integration",
    "Database Connectivity with SQL",
    "Web Scraping",
    "Automation using Python",
    "Django & Flask Basics",
    "Git & GitHub",
    "Unit Testing",
    "Real-Time Project Development",
    "Interview Preparation",
  ],

  tools: [
    "Python",
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "MySQL",
    "Django",
    "Flask",
  ],

  projectsList: [
    "Library Management System",
    "Weather API",
    "Automation Scripts",
    "Employee Management System",
    "REST API Project",
    "Real-Time Python Application",
  ],

  eligibility: [
    "Students",
    "Freshers",
    "Working Professionals",
  ],

  certification:
    "Industry-recognized Python Certification after successful completion of the course.",

  placementSupport: [
    "Resume Building",
    "Mock Interviews",
    "Coding Interview Preparation",
    "HR Interview Preparation",
    "Career Guidance",
    "Placement Assistance",
  ],

  curriculum: [
    {
      id: 1,
      title: "Python Fundamentals",
      duration: "2 Weeks",
      lessons: [
        "Introduction to Python",
        "Variables & Data Types",
        "Operators",
        "Conditional Statements",
        "Loops",
        "Functions",
      ],
    },

    {
      id: 2,
      title: "Object-Oriented Programming",
      duration: "2 Weeks",
      lessons: [
        "Classes & Objects",
        "Inheritance",
        "Polymorphism",
        "Abstraction",
        "Exception Handling",
      ],
    },

    {
      id: 3,
      title: "Data Structures & Advanced Python",
      duration: "2 Weeks",
      lessons: [
        "Python Data Structures",
        "Lists, Tuples & Sets",
        "Dictionaries",
        "Modules & Packages",
        "Regular Expressions",
        "File Handling",
        "Multithreading",
      ],
    },

    {
      id: 4,
      title: "Database Programming",
      duration: "1 Week",
      lessons: [
        "SQL Basics",
        "MySQL",
        "CRUD Operations",
        "Python Database Connectivity",
      ],
    },

    {
      id: 5,
      title: "APIs, Web Scraping & Automation",
      duration: "1 Week",
      lessons: [
        "API Integration",
        "REST APIs",
        "Postman",
        "Web Scraping",
        "Automation using Python",
      ],
    },

    {
      id: 6,
      title: "Django & REST APIs",
      duration: "2 Weeks",
      lessons: [
        "Django Framework",
        "Flask Basics",
        "Models",
        "Views",
        "REST APIs",
        "Authentication",
      ],
    },

    {
      id: 7,
      title: "Git, GitHub & Testing",
      duration: "1 Week",
      lessons: [
        "Git Fundamentals",
        "GitHub",
        "Version Control",
        "Unit Testing",
        "Project Testing",
      ],
    },

    {
      id: 8,
      title: "Real-Time Projects",
      duration: "2 Weeks",
      lessons: [
        "Library Management System",
        "Weather API",
        "Automation Scripts",
        "Employee Management System",
        "REST API Project",
      ],
    },

    {
      id: 9,
      title: "Interview Preparation",
      duration: "1 Week",
      lessons: [
        "Resume Building",
        "Python Coding Questions",
        "Technical Interview Preparation",
        "Mock Interviews",
        "HR Interview Preparation",
      ],
    },
  ],
};