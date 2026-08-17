import type { Course } from "@/types/course";

export const fullStackCourse: Course = {
  slug: "full-stack-development",

  title: "Full Stack Development",

  category: "Technology",

  summary:
    "The Full Stack Development program is designed to equip students with the skills required to build modern web applications from front-end to back-end. This course covers essential technologies used in the software industry, including Java, Spring Boot, React or Angular, and cloud platforms. Students will gain hands-on experience in developing scalable applications, working with databases, and managing code using version control systems.\n\nMasterpath program focuses on practical learning through real-time projects and industry-relevant scenarios. By the end of the training, learners will be prepared to start their careers as Full Stack Developers in the software industry.",

  duration: "6 Months",

  mode: "Classroom",

  level: "Beginner",

  rating: 4.9,

  projects: 15,

  featured: true,

  price: "₹64,999",

  image: "/images/courses/3.webp",
  brochure:'/brochures/fullstack.pdf',

  highlights: [
    "React",
    "Node.js",
    "Capstone Project",
  ],

  about:
    "Master frontend and backend development using modern technologies while building production-ready applications.",

  description:
    "Learn HTML, CSS, JavaScript, React, Next.js, Node.js, Express, MongoDB, deployment, authentication, and real-world architecture.",

  learning: [
    "HTML & CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Deployment",
  ],

  tools: [
    "VS Code",
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "GitHub",
  ],

  projectsList: [
    "E-Commerce Website",
    "Admin Dashboard",
    "Learning Management System",
    "Portfolio Website",
    "CRM Project",
  ],

  eligibility: [
    "Students",
    "Freshers",
    "Career Switchers",
  ],

  certification:
    "Industry-recognized Full Stack Development Certification.",

  placementSupport: [
    "Mock Interviews",
    "Resume Building",
    "GitHub Review",
    "Placement Assistance",
  ],

  curriculum: [
    {
      id: 1,
      title: "HTML, CSS & Responsive Design",
      duration: "2 Weeks",
      lessons: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "Grid",
        "Responsive Design",
      ],
    },

    {
      id: 2,
      title: "JavaScript & ES6",
      duration: "3 Weeks",
      lessons: [
        "Variables",
        "Functions",
        "DOM Manipulation",
        "Async JavaScript",
        "Fetch API",
      ],
    },

    {
      id: 3,
      title: "React & Next.js",
      duration: "5 Weeks",
      lessons: [
        "React Fundamentals",
        "Hooks",
        "Context API",
        "Next.js App Router",
        "Authentication",
      ],
    },

    {
      id: 4,
      title: "Backend Development",
      duration: "4 Weeks",
      lessons: [
        "Node.js",
        "Express.js",
        "REST APIs",
        "JWT Authentication",
        "File Upload",
      ],
    },

    {
      id: 5,
      title: "Database & Deployment",
      duration: "3 Weeks",
      lessons: [
        "MongoDB",
        "Mongoose",
        "Cloudinary",
        "Vercel Deployment",
        "Render Deployment",
      ],
    },

    {
      id: 6,
      title: "Capstone Project & Placement",
      duration: "3 Weeks",
      lessons: [
        "E-Commerce Project",
        "Admin Dashboard",
        "Resume Building",
        "Mock Interviews",
        "GitHub Portfolio Review",
      ],
    },
  ],
};