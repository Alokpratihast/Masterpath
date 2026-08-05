import type { Course } from "@/types/course";

export const pythonCourse: Course = {
  slug: "advanced-python-training",

  title: "Advanced Python Training",

  category: "Technology",

  summary:
    "Master Python with automation, APIs, web development, and real-world projects.",

  duration: "3 Months",

  mode: "Hybrid",

  level: "Beginner",

  rating: 4.8,

  projects: 10,

  featured: true,

  price: "₹25,000",

  image: "/courses/python.jpg",

  highlights: [
    "Live Projects",
    "Interview Preparation",
    "Placement Assistance",
  ],

  about:
    "This course helps students master Python from fundamentals to advanced application development through practical learning and real industry projects.",

  description:
    "Learn Python programming, automation, APIs, Django basics, database integration, and project development with guidance from experienced mentors.",

  learning: [
    "Python Fundamentals",
    "Object-Oriented Programming",
    "REST APIs",
    "Automation",
    "File Handling",
    "Database Integration",
    "Interview Preparation",
    "Git & GitHub",
  ],

  tools: [
    "Python",
    "VS Code",
    "Git",
    "GitHub",
    "Postman",
    "MySQL",
  ],

  projectsList: [
    "Library Management System",
    "Weather API",
    "Automation Scripts",
    "Employee Management System",
    "REST API Project",
  ],

  eligibility: [
    "Students",
    "Freshers",
    "Working Professionals",
  ],

  certification:
    "Industry-recognized Python Certification after successful completion.",

  placementSupport: [
    "Resume Building",
    "Mock Interviews",
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
      id: 4,
      title: "Django & REST APIs",
      duration: "2 Weeks",
      lessons: [
        "Django Framework",
        "Models",
        "Views",
        "REST APIs",
        "Authentication",
      ],
    },

    {
      id: 5,
      title: "Projects",
      duration: "2 Weeks",
      lessons: [
        "Library Management System",
        "Weather API",
        "Automation Scripts",
        "Employee Management System",
      ],
    },

    {
      id: 6,
      title: "Interview Preparation",
      duration: "1 Week",
      lessons: [
        "Resume Building",
        "Coding Questions",
        "Mock Interviews",
        "HR Interview Preparation",
      ],
    },
  ],
};