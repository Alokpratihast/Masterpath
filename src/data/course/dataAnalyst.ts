import type { Course } from "@/types/course";

export const dataAnalystCourse: Course = {
  slug: "data-analyst-training",

  title: "Data Analyst Training",

  category: "Technology",

  summary:
    "The Data Analyst program is designed to help students develop the skills needed to analyze data and generate meaningful insights for businesses. This course covers essential tools and technologies used in modern data analysis, including Python, Power BI, Tableau, and cloud platforms. Students will learn how to collect, process, visualize, and interpret data to support decision-making.\n\nThe program focuses on practical learning through real-world datasets and industry-based projects. By the end of the course, learners will gain the confidence and technical skills required to begin their careers as Data Analysts in the growing data-driven industry.",

  duration: "4 Months",

  mode: "Hybrid",

  level: "Intermediate",

  rating: 4.9,

  projects: 12,

  featured: true,

  price: "₹30,000",

  image: "/courses/data-analyst.jpg",

  highlights: [
    "Portfolio Projects",
    "Dashboard Building",
    "Mock Interviews",
  ],

  about:
    "Become a job-ready Data Analyst by mastering data visualization, SQL, Excel, Python, and business intelligence tools.",

  description:
    "The course focuses on practical analytics, dashboard creation, reporting, and solving business problems using real datasets.",

  learning: [
    "Excel",
    "Advanced SQL",
    "Python",
    "Statistics",
    "Power BI",
    "Data Cleaning",
    "Dashboard Design",
    "Business Analytics",
  ],

  tools: [
    "Excel",
    "SQL Server",
    "Python",
    "Power BI",
    "Jupyter Notebook",
    "Git",
  ],

  projectsList: [
    "Sales Dashboard",
    "HR Analytics",
    "Financial Dashboard",
    "Customer Segmentation",
    "Business KPI Dashboard",
  ],

  eligibility: [
    "Students",
    "Graduates",
    "Working Professionals",
  ],

  certification:
    "Industry-recognized Data Analyst Certification after course completion.",

  placementSupport: [
    "Resume Building",
    "LinkedIn Optimization",
    "Interview Preparation",
    "Placement Assistance",
  ],

  curriculum: [
    {
      id: 1,
      title: "Excel & Data Preparation",
      duration: "2 Weeks",
      lessons: [
        "Excel Fundamentals",
        "Advanced Formulas",
        "Pivot Tables",
        "Data Cleaning",
        "Charts & Visualization",
      ],
    },

    {
      id: 2,
      title: "SQL for Data Analysis",
      duration: "2 Weeks",
      lessons: [
        "SQL Basics",
        "Filtering & Sorting",
        "Joins",
        "Aggregate Functions",
        "Subqueries",
      ],
    },

    {
      id: 3,
      title: "Python for Data Analytics",
      duration: "3 Weeks",
      lessons: [
        "Python Basics",
        "NumPy",
        "Pandas",
        "Data Manipulation",
        "Data Visualization",
      ],
    },

    {
      id: 4,
      title: "Power BI",
      duration: "3 Weeks",
      lessons: [
        "Data Import",
        "Data Modeling",
        "DAX Basics",
        "Interactive Dashboards",
        "Publishing Reports",
      ],
    },

    {
      id: 5,
      title: "Statistics & Business Analytics",
      duration: "2 Weeks",
      lessons: [
        "Descriptive Statistics",
        "Probability",
        "Business KPIs",
        "Decision Making",
      ],
    },

    {
      id: 6,
      title: "Capstone Projects & Placement",
      duration: "2 Weeks",
      lessons: [
        "Sales Dashboard",
        "HR Analytics Dashboard",
        "Financial Reporting",
        "Resume Building",
        "Mock Interviews",
      ],
    },
  ],
};