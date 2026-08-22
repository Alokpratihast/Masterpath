import { prisma } from "../src/lib/prisma";
import { BlogService } from "../src/services/blogs.service";

const categories = [
  {
    name: "Web Development",
    slug: "web-development",
    description:
      "Articles about modern web development, frameworks, APIs, and best practices.",
  },
  {
    name: "Next.js",
    slug: "next-js",
    description:
      "Guides and tutorials about Next.js and modern React applications.",
  },
  {
    name: "React",
    slug: "react",
    description:
      "React development, components, hooks, patterns, and performance.",
  },
  {
    name: "JavaScript",
    slug: "javascript",
    description:
      "JavaScript fundamentals, advanced concepts, and practical development.",
  },
  {
    name: "TypeScript",
    slug: "typescript",
    description:
      "Type-safe application development with TypeScript.",
  },
  {
    name: "Backend Development",
    slug: "backend-development",
    description:
      "Backend APIs, databases, authentication, and server-side development.",
  },
  {
    name: "Cloud & Deployment",
    slug: "cloud-deployment",
    description:
      "Cloud deployment, DevOps, hosting, AWS, Vercel, and production systems.",
  },
  {
    name: "AI & Machine Learning",
    slug: "ai-machine-learning",
    description:
      "Artificial intelligence, machine learning, and modern AI development.",
  },
  {
    name: "Career",
    slug: "career",
    description:
      "Career advice, interviews, skills, and opportunities for developers.",
  },
  {
    name: "SEO",
    slug: "seo",
    description:
      "Search engine optimization and website visibility strategies.",
  },
];

const blogs = [
  {
    title:
      "Complete Guide to Modern Web Development",
    slug:
      "complete-guide-to-modern-web-development",
    category: "web-development",
    tags: [
      "web-development",
      "frontend",
      "backend",
    ],
  },

  {
    title:
      "Getting Started with Next.js",
    slug:
      "getting-started-with-nextjs",
    category: "next-js",
    tags: [
      "next.js",
      "react",
      "typescript",
    ],
  },

  {
    title:
      "Next.js App Router Explained",
    slug:
      "nextjs-app-router-explained",
    category: "next-js",
    tags: [
      "next.js",
      "app-router",
      "react",
    ],
  },

  {
    title:
      "Server Components vs Client Components",
    slug:
      "server-components-vs-client-components",
    category: "next-js",
    tags: [
      "next.js",
      "react",
      "server-components",
    ],
  },

  {
    title:
      "Building SEO Friendly Next.js Applications",
    slug:
      "building-seo-friendly-nextjs-applications",
    category: "next-js",
    tags: [
      "next.js",
      "seo",
      "metadata",
    ],
  },

  {
    title:
      "React Hooks Every Developer Should Know",
    slug:
      "react-hooks-every-developer-should-know",
    category: "react",
    tags: [
      "react",
      "hooks",
      "javascript",
    ],
  },

  {
    title:
      "Understanding React Server Rendering",
    slug:
      "understanding-react-server-rendering",
    category: "react",
    tags: [
      "react",
      "ssr",
      "frontend",
    ],
  },

  {
    title:
      "React Performance Optimization Techniques",
    slug:
      "react-performance-optimization-techniques",
    category: "react",
    tags: [
      "react",
      "performance",
      "frontend",
    ],
  },

  {
    title:
      "Reusable React Component Architecture",
    slug:
      "reusable-react-component-architecture",
    category: "react",
    tags: [
      "react",
      "components",
      "architecture",
    ],
  },

  {
    title:
      "JavaScript Closures Explained",
    slug:
      "javascript-closures-explained",
    category: "javascript",
    tags: [
      "javascript",
      "closures",
      "frontend",
    ],
  },

  {
    title:
      "Understanding the JavaScript Event Loop",
    slug:
      "understanding-javascript-event-loop",
    category: "javascript",
    tags: [
      "javascript",
      "event-loop",
      "async",
    ],
  },

  {
    title:
      "Promises and Async Await in JavaScript",
    slug:
      "promises-and-async-await-in-javascript",
    category: "javascript",
    tags: [
      "javascript",
      "promises",
      "async-await",
    ],
  },

  {
    title:
      "JavaScript Array Methods You Must Know",
    slug:
      "javascript-array-methods-you-must-know",
    category: "javascript",
    tags: [
      "javascript",
      "arrays",
      "programming",
    ],
  },

  {
    title:
      "Advanced JavaScript Objects",
    slug:
      "advanced-javascript-objects",
    category: "javascript",
    tags: [
      "javascript",
      "objects",
      "advanced-javascript",
    ],
  },

  {
    title:
      "TypeScript for JavaScript Developers",
    slug:
      "typescript-for-javascript-developers",
    category: "typescript",
    tags: [
      "typescript",
      "javascript",
      "types",
    ],
  },

  {
    title:
      "TypeScript Interfaces vs Types",
    slug:
      "typescript-interfaces-vs-types",
    category: "typescript",
    tags: [
      "typescript",
      "interfaces",
      "types",
    ],
  },

  {
    title:
      "Generics in TypeScript Explained",
    slug:
      "generics-in-typescript-explained",
    category: "typescript",
    tags: [
      "typescript",
      "generics",
      "programming",
    ],
  },

  {
    title:
      "Type Safe APIs with TypeScript",
    slug:
      "type-safe-apis-with-typescript",
    category: "typescript",
    tags: [
      "typescript",
      "api",
      "backend",
    ],
  },

  {
    title:
      "Building REST APIs with Node.js",
    slug:
      "building-rest-apis-with-nodejs",
    category: "backend-development",
    tags: [
      "node.js",
      "rest-api",
      "backend",
    ],
  },

  {
    title:
      "Express.js API Architecture",
    slug:
      "expressjs-api-architecture",
    category: "backend-development",
    tags: [
      "express.js",
      "node.js",
      "api",
    ],
  },

  {
    title:
      "Understanding REST API Authentication",
    slug:
      "understanding-rest-api-authentication",
    category: "backend-development",
    tags: [
      "authentication",
      "jwt",
      "api",
    ],
  },

  {
    title:
      "JWT Authentication Explained",
    slug:
      "jwt-authentication-explained",
    category: "backend-development",
    tags: [
      "jwt",
      "authentication",
      "security",
    ],
  },

  {
    title:
      "Database Design for Modern Applications",
    slug:
      "database-design-for-modern-applications",
    category: "backend-development",
    tags: [
      "database",
      "backend",
      "sql",
    ],
  },

  {
    title:
      "Prisma ORM Complete Guide",
    slug:
      "prisma-orm-complete-guide",
    category: "backend-development",
    tags: [
      "prisma",
      "orm",
      "database",
    ],
  },

  {
    title:
      "PostgreSQL Best Practices",
    slug:
      "postgresql-best-practices",
    category: "backend-development",
    tags: [
      "postgresql",
      "database",
      "sql",
    ],
  },

  {
    title:
      "Deploying Next.js Applications on Vercel",
    slug:
      "deploying-nextjs-applications-on-vercel",
    category: "cloud-deployment",
    tags: [
      "next.js",
      "vercel",
      "deployment",
    ],
  },

  {
    title:
      "AWS Deployment Guide for Beginners",
    slug:
      "aws-deployment-guide-for-beginners",
    category: "cloud-deployment",
    tags: [
      "aws",
      "cloud",
      "deployment",
    ],
  },

  {
    title:
      "Production Deployment Checklist",
    slug:
      "production-deployment-checklist",
    category: "cloud-deployment",
    tags: [
      "deployment",
      "production",
      "devops",
    ],
  },

  {
    title:
      "Environment Variables in Production",
    slug:
      "environment-variables-in-production",
    category: "cloud-deployment",
    tags: [
      "environment-variables",
      "deployment",
      "security",
    ],
  },

  {
    title:
      "Docker for Full Stack Developers",
    slug:
      "docker-for-full-stack-developers",
    category: "cloud-deployment",
    tags: [
      "docker",
      "devops",
      "full-stack",
    ],
  },

  {
    title:
      "Introduction to Artificial Intelligence",
    slug:
      "introduction-to-artificial-intelligence",
    category: "ai-machine-learning",
    tags: [
      "ai",
      "machine-learning",
      "technology",
    ],
  },

  {
    title:
      "Machine Learning vs Deep Learning",
    slug:
      "machine-learning-vs-deep-learning",
    category: "ai-machine-learning",
    tags: [
      "machine-learning",
      "deep-learning",
      "ai",
    ],
  },

  {
    title:
      "How Generative AI is Changing Software Development",
    slug:
      "how-generative-ai-is-changing-software-development",
    category: "ai-machine-learning",
    tags: [
      "generative-ai",
      "ai",
      "software-development",
    ],
  },

  {
    title:
      "Building AI Powered Web Applications",
    slug:
      "building-ai-powered-web-applications",
    category: "ai-machine-learning",
    tags: [
      "ai",
      "web-development",
      "llm",
    ],
  },

  {
    title:
      "AI Tools Every Developer Should Know",
    slug:
      "ai-tools-every-developer-should-know",
    category: "ai-machine-learning",
    tags: [
      "ai-tools",
      "developers",
      "productivity",
    ],
  },

  {
    title:
      "How to Prepare for a Full Stack Developer Interview",
    slug:
      "how-to-prepare-for-full-stack-developer-interview",
    category: "career",
    tags: [
      "career",
      "interview",
      "full-stack",
    ],
  },

  {
    title:
      "Top Skills for Full Stack Developers",
    slug:
      "top-skills-for-full-stack-developers",
    category: "career",
    tags: [
      "career",
      "full-stack",
      "skills",
    ],
  },

  {
    title:
      "How to Build a Strong Developer Portfolio",
    slug:
      "how-to-build-a-strong-developer-portfolio",
    category: "career",
    tags: [
      "portfolio",
      "career",
      "developers",
    ],
  },

  {
    title:
      "Best Projects for a Fresher Developer Resume",
    slug:
      "best-projects-for-fresher-developer-resume",
    category: "career",
    tags: [
      "resume",
      "projects",
      "career",
    ],
  },

  {
    title:
      "How to Improve Your Technical Interview Skills",
    slug:
      "how-to-improve-technical-interview-skills",
    category: "career",
    tags: [
      "interview",
      "career",
      "programming",
    ],
  },

  {
    title:
      "SEO Basics for Developers",
    slug:
      "seo-basics-for-developers",
    category: "seo",
    tags: [
      "seo",
      "web-development",
      "google",
    ],
  },

  {
    title:
      "Technical SEO Checklist for Websites",
    slug:
      "technical-seo-checklist-for-websites",
    category: "seo",
    tags: [
      "seo",
      "technical-seo",
      "website",
    ],
  },

  {
    title:
      "How Metadata Improves SEO",
    slug:
      "how-metadata-improves-seo",
    category: "seo",
    tags: [
      "seo",
      "metadata",
      "next.js",
    ],
  },

  {
    title:
      "Core Web Vitals and Website Performance",
    slug:
      "core-web-vitals-and-website-performance",
    category: "seo",
    tags: [
      "seo",
      "performance",
      "core-web-vitals",
    ],
  },

  {
    title:
      "SEO Friendly URL Structure",
    slug:
      "seo-friendly-url-structure",
    category: "seo",
    tags: [
      "seo",
      "urls",
      "web-development",
    ],
  },

  {
    title:
      "Frontend vs Backend Development",
    slug:
      "frontend-vs-backend-development",
    category: "web-development",
    tags: [
      "frontend",
      "backend",
      "web-development",
    ],
  },

  {
    title:
      "Full Stack Development Roadmap",
    slug:
      "full-stack-development-roadmap",
    category: "web-development",
    tags: [
      "full-stack",
      "roadmap",
      "web-development",
    ],
  },

  {
    title:
      "How Modern Web Applications Work",
    slug:
      "how-modern-web-applications-work",
    category: "web-development",
    tags: [
      "web-development",
      "frontend",
      "backend",
    ],
  },

  {
    title:
      "Responsive Web Design Best Practices",
    slug:
      "responsive-web-design-best-practices",
    category: "web-development",
    tags: [
      "responsive-design",
      "css",
      "frontend",
    ],
  },

  {
    title:
      "Website Performance Optimization Guide",
    slug:
      "website-performance-optimization-guide",
    category: "web-development",
    tags: [
      "performance",
      "web-development",
      "optimization",
    ],
  },
];


/**
 * Unsplash images used for seeded blog featured images.
 * Images are assigned cyclically so every seeded blog has a featured image.
 */
const unsplashImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",
];

function getUnsplashImage(index: number): string {
  return unsplashImages[index % unsplashImages.length];
}

function createExcerpt(title: string) {
  return `${title} — practical insights, examples, and best practices for developers building modern production-ready applications.`;
}

function createContent(title: string) {
  return `# ${title}

Modern software development requires developers to understand both fundamentals and practical engineering patterns.

## Introduction

In this article, we explore ${title.toLowerCase()} and discuss important concepts that developers can apply to real-world projects.

## Why It Matters

Understanding these concepts helps developers build applications that are scalable, maintainable, secure, and easy to improve.

## Key Points

- Understand the fundamentals
- Follow modern development practices
- Focus on performance and security
- Write maintainable code
- Test your application properly
- Monitor production applications

## Practical Approach

Start with a simple implementation and gradually introduce advanced patterns as the application grows.

## Conclusion

Learning ${title.toLowerCase()} is an important step toward becoming a better software developer. Combine theoretical knowledge with practical projects to build strong engineering skills.`;
}

function createSeoDescription(
  title: string
) {
  return `Learn ${title.toLowerCase()} with practical explanations, development tips, best practices, and real-world examples.`;
}

async function main() {
  console.log(
    "🌱 Starting blog seed..."
  );

  /**
   * 1. Create / find categories
   */
  const categoryMap =
    new Map<string, string>();

  for (const category of categories) {
    const existing =
      await prisma.category.upsert({
        where: {
          slug: category.slug,
        },
        update: {
          name: category.name,
          description:
            category.description,
        },
        create: {
          name: category.name,
          slug: category.slug,
          description:
            category.description,
        },
      });

    categoryMap.set(
      category.slug,
      existing.id
    );
  }

  console.log(
    `✅ ${categoryMap.size} categories ready`
  );

  /**
   * 2. Find an existing author
   *
   * authorId is optional in your Blog model,
   * so blogs can be created without an author.
   */
  

  /**
   * 3. Create blogs
   */
  let created = 0;
  let skipped = 0;

  for (const [index, blog] of blogs.entries()) {
    const existing =
      await prisma.blog.findUnique({
        where: {
          slug: blog.slug,
        },
      });

    if (existing) {
      skipped++;

      console.log(
        `⏭️ Skipped ${index + 1}/${blogs.length}: ${blog.title}`
      );

      continue;
    }

    const categoryId =
      categoryMap.get(
        blog.category
      );

    if (!categoryId) {
      console.log(
        `⚠️ Category not found for: ${blog.title}`
      );

      continue;
    }

    await BlogService.createBlog({
      title: blog.title,
      slug: blog.slug,

      excerpt:
        createExcerpt(
          blog.title
        ),

      content:
        createContent(
          blog.title
        ),

      featuredImage: getUnsplashImage(index),
      featuredImageAlt: `${blog.title} - MasterPath blog`,
      ogImage: getUnsplashImage(index),

      authorId: undefined,

      categoryId,

      status: "PUBLISHED",

      publishedAt: new Date(
        Date.now() -
          index *
            24 *
            60 *
            60 *
            1000
      ),

      seoTitle: blog.title,

      seoDescription:
        createSeoDescription(
          blog.title
        ),

      focusKeyword:
        blog.tags[0],

      canonicalUrl: `https://masterpath.in/blog/${blog.slug}`,

      noIndex: false,
      noFollow: false,

      tags: blog.tags,
    });

    created++;

    console.log(
      `✅ Created ${index + 1}/${blogs.length}: ${blog.title}`
    );
  }

  console.log("");
  console.log(
    "================================"
  );
  console.log(
    "🎉 Blog seed completed"
  );
  console.log(
    "================================"
  );
  console.log(
    `Created : ${created}`
  );
  console.log(
    `Skipped : ${skipped}`
  );
  console.log(
    `Total   : ${blogs.length}`
  );
}

main()
  .catch((error) => {
    console.error(
      "❌ Blog seed failed:",
      error
    );

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });