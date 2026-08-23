import { prisma } from "../src/lib/prisma";
import { BlogService } from "../src/services/blogs.service";

/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

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
    description: "Type-safe application development with TypeScript.",
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
    description: "Search engine optimization and website visibility strategies.",
  },
];

/* ------------------------------------------------------------------ */
/* Blog list — title / slug / category / tags                         */
/* (unchanged from your original seed, kept for compatibility)         */
/* ------------------------------------------------------------------ */

const blogs = [
  { title: "Complete Guide to Modern Web Development", slug: "complete-guide-to-modern-web-development", category: "web-development", tags: ["web-development", "frontend", "backend"] },
  { title: "Getting Started with Next.js", slug: "getting-started-with-nextjs", category: "next-js", tags: ["next.js", "react", "typescript"] },
  { title: "Next.js App Router Explained", slug: "nextjs-app-router-explained", category: "next-js", tags: ["next.js", "app-router", "react"] },
  { title: "Server Components vs Client Components", slug: "server-components-vs-client-components", category: "next-js", tags: ["next.js", "react", "server-components"] },
  { title: "Building SEO Friendly Next.js Applications", slug: "building-seo-friendly-nextjs-applications", category: "next-js", tags: ["next.js", "seo", "metadata"] },
  { title: "React Hooks Every Developer Should Know", slug: "react-hooks-every-developer-should-know", category: "react", tags: ["react", "hooks", "javascript"] },
  { title: "Understanding React Server Rendering", slug: "understanding-react-server-rendering", category: "react", tags: ["react", "ssr", "frontend"] },
  { title: "React Performance Optimization Techniques", slug: "react-performance-optimization-techniques", category: "react", tags: ["react", "performance", "frontend"] },
  { title: "Reusable React Component Architecture", slug: "reusable-react-component-architecture", category: "react", tags: ["react", "components", "architecture"] },
  { title: "JavaScript Closures Explained", slug: "javascript-closures-explained", category: "javascript", tags: ["javascript", "closures", "frontend"] },
  { title: "Understanding the JavaScript Event Loop", slug: "understanding-javascript-event-loop", category: "javascript", tags: ["javascript", "event-loop", "async"] },
  { title: "Promises and Async Await in JavaScript", slug: "promises-and-async-await-in-javascript", category: "javascript", tags: ["javascript", "promises", "async-await"] },
  { title: "JavaScript Array Methods You Must Know", slug: "javascript-array-methods-you-must-know", category: "javascript", tags: ["javascript", "arrays", "programming"] },
  { title: "Advanced JavaScript Objects", slug: "advanced-javascript-objects", category: "javascript", tags: ["javascript", "objects", "advanced-javascript"] },
  { title: "TypeScript for JavaScript Developers", slug: "typescript-for-javascript-developers", category: "typescript", tags: ["typescript", "javascript", "types"] },
  { title: "TypeScript Interfaces vs Types", slug: "typescript-interfaces-vs-types", category: "typescript", tags: ["typescript", "interfaces", "types"] },
  { title: "Generics in TypeScript Explained", slug: "generics-in-typescript-explained", category: "typescript", tags: ["typescript", "generics", "programming"] },
  { title: "Type Safe APIs with TypeScript", slug: "type-safe-apis-with-typescript", category: "typescript", tags: ["typescript", "api", "backend"] },
  { title: "Building REST APIs with Node.js", slug: "building-rest-apis-with-nodejs", category: "backend-development", tags: ["node.js", "rest-api", "backend"] },
  { title: "Express.js API Architecture", slug: "expressjs-api-architecture", category: "backend-development", tags: ["express.js", "node.js", "api"] },
  { title: "Understanding REST API Authentication", slug: "understanding-rest-api-authentication", category: "backend-development", tags: ["authentication", "jwt", "api"] },
  { title: "JWT Authentication Explained", slug: "jwt-authentication-explained", category: "backend-development", tags: ["jwt", "authentication", "security"] },
  { title: "Database Design for Modern Applications", slug: "database-design-for-modern-applications", category: "backend-development", tags: ["database", "backend", "sql"] },
  { title: "Prisma ORM Complete Guide", slug: "prisma-orm-complete-guide", category: "backend-development", tags: ["prisma", "orm", "database"] },
  { title: "PostgreSQL Best Practices", slug: "postgresql-best-practices", category: "backend-development", tags: ["postgresql", "database", "sql"] },
  { title: "Deploying Next.js Applications on Vercel", slug: "deploying-nextjs-applications-on-vercel", category: "cloud-deployment", tags: ["next.js", "vercel", "deployment"] },
  { title: "AWS Deployment Guide for Beginners", slug: "aws-deployment-guide-for-beginners", category: "cloud-deployment", tags: ["aws", "cloud", "deployment"] },
  { title: "Production Deployment Checklist", slug: "production-deployment-checklist", category: "cloud-deployment", tags: ["deployment", "production", "devops"] },
  { title: "Environment Variables in Production", slug: "environment-variables-in-production", category: "cloud-deployment", tags: ["environment-variables", "deployment", "security"] },
  { title: "Docker for Full Stack Developers", slug: "docker-for-full-stack-developers", category: "cloud-deployment", tags: ["docker", "devops", "full-stack"] },
  { title: "Introduction to Artificial Intelligence", slug: "introduction-to-artificial-intelligence", category: "ai-machine-learning", tags: ["ai", "machine-learning", "technology"] },
  { title: "Machine Learning vs Deep Learning", slug: "machine-learning-vs-deep-learning", category: "ai-machine-learning", tags: ["machine-learning", "deep-learning", "ai"] },
  { title: "How Generative AI is Changing Software Development", slug: "how-generative-ai-is-changing-software-development", category: "ai-machine-learning", tags: ["generative-ai", "ai", "software-development"] },
  { title: "Building AI Powered Web Applications", slug: "building-ai-powered-web-applications", category: "ai-machine-learning", tags: ["ai", "web-development", "llm"] },
  { title: "AI Tools Every Developer Should Know", slug: "ai-tools-every-developer-should-know", category: "ai-machine-learning", tags: ["ai-tools", "developers", "productivity"] },
  { title: "How to Prepare for a Full Stack Developer Interview", slug: "how-to-prepare-for-full-stack-developer-interview", category: "career", tags: ["career", "interview", "full-stack"] },
  { title: "Top Skills for Full Stack Developers", slug: "top-skills-for-full-stack-developers", category: "career", tags: ["career", "full-stack", "skills"] },
  { title: "How to Build a Strong Developer Portfolio", slug: "how-to-build-a-strong-developer-portfolio", category: "career", tags: ["portfolio", "career", "developers"] },
  { title: "Best Projects for a Fresher Developer Resume", slug: "best-projects-for-fresher-developer-resume", category: "career", tags: ["resume", "projects", "career"] },
  { title: "How to Improve Your Technical Interview Skills", slug: "how-to-improve-technical-interview-skills", category: "career", tags: ["interview", "career", "programming"] },
  { title: "SEO Basics for Developers", slug: "seo-basics-for-developers", category: "seo", tags: ["seo", "web-development", "google"] },
  { title: "Technical SEO Checklist for Websites", slug: "technical-seo-checklist-for-websites", category: "seo", tags: ["seo", "technical-seo", "website"] },
  { title: "How Metadata Improves SEO", slug: "how-metadata-improves-seo", category: "seo", tags: ["seo", "metadata", "next.js"] },
  { title: "Core Web Vitals and Website Performance", slug: "core-web-vitals-and-website-performance", category: "seo", tags: ["seo", "performance", "core-web-vitals"] },
  { title: "SEO Friendly URL Structure", slug: "seo-friendly-url-structure", category: "seo", tags: ["seo", "urls", "web-development"] },
  { title: "Frontend vs Backend Development", slug: "frontend-vs-backend-development", category: "web-development", tags: ["frontend", "backend", "web-development"] },
  { title: "Full Stack Development Roadmap", slug: "full-stack-development-roadmap", category: "web-development", tags: ["full-stack", "roadmap", "web-development"] },
  { title: "How Modern Web Applications Work", slug: "how-modern-web-applications-work", category: "web-development", tags: ["web-development", "frontend", "backend"] },
  { title: "Responsive Web Design Best Practices", slug: "responsive-web-design-best-practices", category: "web-development", tags: ["responsive-design", "css", "frontend"] },
  { title: "Website Performance Optimization Guide", slug: "website-performance-optimization-guide", category: "web-development", tags: ["performance", "web-development", "optimization"] },
];

/* ------------------------------------------------------------------ */
/* Unsplash images (unchanged)                                         */
/* ------------------------------------------------------------------ */

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

/* ------------------------------------------------------------------ */
/* REAL, UNIQUE CONTENT — keyed by slug                                 */
/* Each entry has its own excerpt, content (300-400 words), SEO         */
/* description and focus keyword. No two entries share the same text.   */
/* ------------------------------------------------------------------ */

type BlogCopy = {
  excerpt: string;
  content: string;
  seoDescription: string;
  focusKeyword: string;
};

const blogCopy: Record<string, BlogCopy> = {
  "complete-guide-to-modern-web-development": {
    excerpt:
      "A practical overview of how modern websites are actually built today — from rendering strategies to APIs, deployment, and the tools that hold it all together.",
    content: `# Complete Guide to Modern Web Development

Web development in 2026 looks very different from a decade ago. A "website" today is usually a combination of a frontend framework, an API layer, a database, and a cloud hosting pipeline — all working together instead of a single static HTML file.

## The Modern Stack

Most production apps follow a similar shape: React or Next.js on the frontend, Node.js or a similar runtime on the backend, PostgreSQL or MongoDB for data, and a cloud provider like Vercel or AWS for deployment. Knowing how these pieces talk to each other matters more than memorizing any single tool.

## Rendering Strategies

Choosing between client-side rendering, server-side rendering, and static generation affects performance and SEO directly. Frameworks like Next.js let you mix all three on a page-by-page basis, which is why it has become the default choice for many teams.

## APIs Are the Glue

Whether it's a REST API or GraphQL, the API layer is what lets your frontend and backend evolve independently. Designing clean, versioned APIs early saves major rework later.

## Where Beginners Should Start

Get comfortable with HTML, CSS, and JavaScript fundamentals first. Then pick one frontend framework and one backend runtime, and build two or three complete projects before worrying about advanced tooling.

## Conclusion

Modern web development rewards developers who understand the full picture — not just one layer. If you're starting out, MasterPath's Full Stack Development program walks through this exact stack with live projects and mentor support.`,
    seoDescription:
      "An up-to-date guide to modern web development — frontend frameworks, APIs, databases, and deployment explained for beginners and career switchers.",
    focusKeyword: "modern web development",
  },

  "getting-started-with-nextjs": {
    excerpt:
      "A beginner-friendly walkthrough of what Next.js actually does differently from plain React, and how to set up your first project.",
    content: `# Getting Started with Next.js

Next.js is a React framework, not a replacement for React. It adds routing, server-side rendering, and build tooling on top of React so you don't have to configure all of it yourself.

## Why Use Next.js Over Plain React

Plain React (via Vite or Create React App) only handles the UI layer. Next.js adds file-based routing, image optimization, API routes, and built-in SEO support like metadata handling — features almost every production app needs eventually.

## Creating Your First Project

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

This scaffolds a project with the App Router by default, TypeScript support, and Tailwind CSS as options during setup.

## Understanding the File Structure

Routes are created by folders inside the \`app\` directory. A file at \`app/about/page.tsx\` automatically becomes the \`/about\` route — no router configuration needed.

## Data Fetching

Next.js lets you fetch data directly inside Server Components without a separate client-side request, which simplifies loading states and reduces the JavaScript sent to the browser.

## Common Beginner Mistakes

New developers often mix client and server logic in the same component, or forget the \`"use client"\` directive when using hooks like \`useState\`. Understanding this boundary early avoids a lot of confusion later.

## Conclusion

Next.js has a learning curve beyond React basics, but it pays off quickly once you're building anything beyond a toy project. It's the framework taught throughout MasterPath's Full Stack Development course.`,
    seoDescription:
      "Learn what Next.js adds on top of React, how to create your first project, and the core concepts every beginner should understand.",
    focusKeyword: "getting started with Next.js",
  },

  "nextjs-app-router-explained": {
    excerpt:
      "How the Next.js App Router changes routing, layouts, and data fetching compared to the older Pages Router — explained with real examples.",
    content: `# Next.js App Router Explained

The App Router, introduced as the default in recent Next.js versions, changed how routing and rendering work compared to the older Pages Router. Understanding the difference matters if you're reading tutorials from both eras.

## File Conventions

Instead of one file per route, the App Router uses special files inside folders: \`page.tsx\` for the route UI, \`layout.tsx\` for shared wrappers, \`loading.tsx\` for loading states, and \`error.tsx\` for error boundaries — all scoped to that folder.

## Nested Layouts

Layouts persist across navigation within their segment, so a dashboard layout with a sidebar won't re-render every time you switch between dashboard pages. This was awkward to achieve in the Pages Router.

## Server Components by Default

Every component inside \`app\` is a Server Component unless marked with \`"use client"\`. This shifts more rendering work to the server and reduces the JavaScript bundle sent to users.

## Route Groups and Parallel Routes

Folders wrapped in parentheses, like \`(marketing)\`, organize routes without affecting the URL. Parallel routes let you render multiple independent pages in the same layout — useful for things like modals that also work as full pages.

## Migrating from Pages Router

Migration is usually incremental — both routers can coexist during a transition, though most new projects should start directly with the App Router.

## Conclusion

The App Router takes a bit of adjustment but gives far more control over layouts, loading states, and rendering boundaries. It's the standard approach taught in MasterPath's Full Stack Development program.`,
    seoDescription:
      "A clear explanation of the Next.js App Router — file conventions, nested layouts, Server Components, and how it differs from the Pages Router.",
    focusKeyword: "Next.js App Router",
  },

  "server-components-vs-client-components": {
    excerpt:
      "What actually separates a Server Component from a Client Component in Next.js, and how to decide which one your component should be.",
    content: `# Server Components vs Client Components

One of the most confusing parts of modern Next.js is deciding whether a component should run on the server or the client. The distinction isn't stylistic — it changes what the component can and can't do.

## Server Components

By default, every component in the App Router is a Server Component. It renders on the server, can directly query a database or call an API without exposing keys to the browser, and sends zero JavaScript for that component to the client.

## Client Components

Add \`"use client"\` at the top of a file to opt into a Client Component. These support interactivity — \`useState\`, \`useEffect\`, event handlers, and browser-only APIs like \`localStorage\`.

## The Boundary Problem

Once you mark a file as a Client Component, everything it imports also runs on the client. A common mistake is wrapping an entire page in \`"use client"\` just because one small piece needs interactivity, which unnecessarily ships extra JavaScript.

## A Practical Pattern

Keep data-fetching and layout logic in Server Components, and push only the truly interactive pieces — a dropdown, a form, a like button — into small Client Components. This keeps bundles lean.

\`\`\`tsx
// page.tsx (Server Component)
export default async function Page() {
  const data = await getData();
  return <ProductList data={data} />;
}
\`\`\`

## Conclusion

Think of Server Components as the default and Client Components as the exception you reach for only when interactivity is required. This mental model alone will fix most rendering issues you hit in Next.js projects.`,
    seoDescription:
      "Understand the real difference between Server Components and Client Components in Next.js, and when to use each one.",
    focusKeyword: "Server Components vs Client Components",
  },

  "building-seo-friendly-nextjs-applications": {
    excerpt:
      "Practical steps to make a Next.js app rank better — metadata, sitemaps, structured data, and rendering choices that actually affect SEO.",
    content: `# Building SEO Friendly Next.js Applications

Next.js gives developers direct control over the things that matter most for search rankings: page speed, crawlable HTML, and metadata. Here's how to use that control properly.

## Metadata API

The built-in Metadata API lets you define title, description, and Open Graph tags per route without manually managing \`<head>\` tags.

\`\`\`tsx
export const metadata = {
  title: "Course Name — MasterPath",
  description: "A unique, specific description for this exact page.",
};
\`\`\`

Every page should have a unique title and description — duplicated metadata across pages is one of the most common SEO mistakes on template-driven sites.

## Server Rendering Helps Crawlers

Because Server Components render HTML on the server, search engines see fully-formed content immediately, unlike client-only React apps where content loads in after JavaScript executes.

## Sitemaps and Robots

Next.js supports generating \`sitemap.xml\` and \`robots.txt\` directly from code using \`sitemap.ts\` and \`robots.ts\` files, keeping them in sync with your actual routes automatically.

## Structured Data

Adding JSON-LD structured data (Article, BreadcrumbList, Organization) inside a script tag helps search engines understand page context and can enable rich results.

## Core Web Vitals

Image optimization via \`next/image\`, font optimization via \`next/font\`, and avoiding layout shift all directly affect the Core Web Vitals score, which Google uses as a ranking signal.

## Conclusion

SEO in Next.js isn't a plugin you install — it's a set of deliberate choices in metadata, rendering strategy, and page structure made throughout development.`,
    seoDescription:
      "A practical checklist for SEO-friendly Next.js apps: metadata API, sitemaps, structured data, and Core Web Vitals optimization.",
    focusKeyword: "SEO friendly Next.js applications",
  },

  "react-hooks-every-developer-should-know": {
    excerpt:
      "The React hooks you'll actually use in real projects — useState, useEffect, useMemo, useCallback, and useRef — explained with practical examples.",
    content: `# React Hooks Every Developer Should Know

Hooks let function components use state and lifecycle features that used to require class components. A handful of hooks cover almost everything you'll need day-to-day.

## useState

The most common hook — holds a piece of local state and a setter function that triggers a re-render when called.

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect

Runs side effects — data fetching, subscriptions, manual DOM changes — after render. The dependency array controls when it re-runs.

\`\`\`jsx
useEffect(() => {
  fetchData();
}, [userId]);
\`\`\`

## useMemo and useCallback

Both exist to avoid unnecessary recalculation or re-creation on every render. \`useMemo\` memoizes a computed value; \`useCallback\` memoizes a function reference — useful when passing callbacks to memoized child components.

## useRef

Holds a mutable value that doesn't trigger a re-render when changed, commonly used to reference DOM elements directly or store previous values across renders.

## Custom Hooks

Once logic is reused across components — like a \`useDebounce\` or \`useFetch\` — extracting it into a custom hook keeps components clean and logic testable.

## A Common Mistake

Overusing \`useMemo\`/\`useCallback\` everywhere adds complexity without real performance benefit. Reach for them only when you've noticed an actual re-render problem, not by default.

## Conclusion

Most React apps only ever need these five hooks well understood. Master them deeply before reaching for less common ones like \`useReducer\` or \`useImperativeHandle\`.`,
    seoDescription:
      "A practical guide to the most-used React hooks — useState, useEffect, useMemo, useCallback, and useRef — with real code examples.",
    focusKeyword: "React hooks",
  },

  "understanding-react-server-rendering": {
    excerpt:
      "How server-side rendering works in React, why it improves load time and SEO, and where it differs from client-side rendering.",
    content: `# Understanding React Server Rendering

Server-side rendering (SSR) means React generates the initial HTML on the server and sends a fully-formed page to the browser, instead of shipping an empty HTML shell that JavaScript fills in later.

## Why It Matters

With pure client-side rendering, users see a blank page until JavaScript downloads, parses, and runs. On slower connections or devices, that delay is very noticeable. SSR sends visible content immediately.

## SSR vs CSR vs SSG

- **CSR (client-side rendering)**: Browser does all the work. Fast to build, slower first paint.
- **SSR (server-side rendering)**: Server renders HTML per request. Good for dynamic, personalized pages.
- **SSG (static generation)**: HTML is built once at build time. Fastest possible load, best for content that doesn't change per user.

## Hydration

After SSR sends HTML, React "hydrates" it on the client — attaching event listeners and making it interactive. If the server-rendered HTML doesn't match what the client expects, you get hydration errors, a common source of bugs.

## SEO Benefits

Search engine crawlers read HTML directly. SSR ensures your content is present in that initial HTML rather than depending on JavaScript execution, which some crawlers handle inconsistently.

## When Not to Use SSR

Highly interactive, user-specific dashboards that don't need to be indexed by search engines often do fine with client-side rendering, avoiding the extra server load SSR introduces.

## Conclusion

Frameworks like Next.js handle the SSR mechanics for you, but understanding what's actually happening under the hood helps you debug hydration issues and choose the right rendering strategy per page.`,
    seoDescription:
      "Learn how server-side rendering works in React, the difference between SSR, CSR, and SSG, and why hydration matters.",
    focusKeyword: "React server rendering",
  },

  "react-performance-optimization-techniques": {
    excerpt:
      "Real techniques to fix slow React apps — from identifying unnecessary re-renders to code splitting and virtualization.",
    content: `# React Performance Optimization Techniques

Most React performance problems come down to one thing: components re-rendering more often than necessary. Here's how to find and fix that.

## Profile First

Before optimizing anything, use the React DevTools Profiler to see which components re-render and why. Optimizing blindly often wastes time on components that were never the bottleneck.

## React.memo

Wrapping a component in \`React.memo\` prevents it from re-rendering if its props haven't changed — useful for components that receive the same props frequently.

\`\`\`jsx
const ProductCard = React.memo(function ProductCard({ product }) {
  return <div>{product.name}</div>;
});
\`\`\`

## Code Splitting

Loading the entire app bundle upfront slows initial load. \`React.lazy\` and dynamic imports let you split code by route or feature, loading only what's needed.

## List Virtualization

Rendering thousands of DOM nodes for a long list kills performance. Libraries like \`react-window\` render only the visible items, dramatically reducing DOM size.

## Avoid Inline Objects and Functions in Props

Passing a new object or function literal as a prop on every render breaks memoization downstream, since the reference changes even if the values don't.

## Debounce Expensive Operations

Search inputs or resize handlers that trigger expensive work should be debounced so the work runs after the user pauses, not on every keystroke.

## Conclusion

Performance work in React is mostly about controlling *when* things re-render, not making individual renders faster. Measure first, fix the actual bottleneck, and avoid premature optimization.`,
    seoDescription:
      "Practical React performance optimization techniques: profiling, React.memo, code splitting, list virtualization, and avoiding unnecessary re-renders.",
    focusKeyword: "React performance optimization",
  },

  "reusable-react-component-architecture": {
    excerpt:
      "How to structure React components so they stay reusable as a codebase grows — composition patterns, prop design, and folder structure.",
    content: `# Reusable React Component Architecture

As a React codebase grows, poorly structured components turn into a maintenance problem fast. Good component architecture keeps things reusable without becoming over-engineered.

## Composition Over Configuration

Instead of adding more and more props to control a component's behavior, compose smaller components together. A \`Card\` component that accepts \`children\` is more flexible than one with ten boolean props controlling every variation.

\`\`\`jsx
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>
\`\`\`

## Separate Presentational and Container Logic

Keep components that fetch data and manage state separate from components that only render UI. This makes the presentational components easy to reuse and test in isolation.

## Prop Design

Design props around what the component needs to know, not around your data shape. Passing an entire API response object as a prop tightly couples the component to that specific API.

## Folder Structure

Grouping by feature (e.g. \`/features/checkout\`) rather than by file type (\`/components\`, \`/hooks\`, \`/utils\`) scales better in larger apps, since related code stays together.

## Avoid Premature Abstraction

Not every component needs to be infinitely reusable from day one. Building an over-flexible component before you have two or three real use cases usually adds complexity without benefit — extract the abstraction once the pattern repeats.

## Conclusion

Good component architecture is less about clever patterns and more about discipline: clear boundaries, focused responsibilities, and abstracting only when a real second use case appears.`,
    seoDescription:
      "How to design reusable React components with composition patterns, clean prop design, and a folder structure that scales.",
    focusKeyword: "reusable React component architecture",
  },

  "javascript-closures-explained": {
    excerpt:
      "A clear, practical explanation of closures in JavaScript — what they are, why they matter, and where you'll actually use them.",
    content: `# JavaScript Closures Explained

A closure is a function that remembers the variables from the scope it was created in, even after that outer scope has finished executing. It's one of the most asked-about JavaScript interview topics because it's genuinely used everywhere, often without developers realizing it.

## A Simple Example

\`\`\`javascript
function makeCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
\`\`\`

The inner function keeps access to \`count\` even after \`makeCounter\` has returned — that's the closure.

## Why It Works

JavaScript functions carry a reference to their lexical scope, not a snapshot of it. As long as the inner function exists, the variables it depends on stay alive in memory.

## Practical Uses

Closures power private variables (data that can't be accessed directly from outside), event handlers that need to remember specific data, and function factories like the counter example above. They're also the foundation of how React hooks like \`useState\` work internally.

## A Common Pitfall

Closures inside loops using \`var\` often confuse beginners, since \`var\` isn't block-scoped:

\`\`\`javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // logs 3, 3, 3
}
\`\`\`

Switching to \`let\` fixes this, since \`let\` creates a new binding per iteration.

## Conclusion

Closures aren't a special syntax — they're just a natural consequence of how JavaScript scoping works. Understanding them makes concepts like hooks, debouncing, and memoization click much faster.`,
    seoDescription:
      "A practical explanation of JavaScript closures with real code examples, common pitfalls, and why they matter for interviews and real projects.",
    focusKeyword: "JavaScript closures",
  },

  "understanding-javascript-event-loop": {
    excerpt:
      "How JavaScript handles asynchronous code with a single thread — the call stack, task queue, and microtask queue explained simply.",
    content: `# Understanding the JavaScript Event Loop

JavaScript runs on a single thread, yet it handles thousands of asynchronous operations without blocking. The event loop is the mechanism that makes this possible.

## The Call Stack

Every function call is pushed onto the call stack and popped off when it returns. If a function takes too long, it blocks everything else — which is why heavy synchronous code freezes the browser.

## Web APIs and the Task Queue

Asynchronous operations like \`setTimeout\`, DOM events, or network requests aren't handled by the JavaScript engine directly — they're delegated to browser (or Node.js) APIs. Once complete, their callback is placed in a task queue, waiting for the call stack to be empty.

## The Microtask Queue

Promises use a separate microtask queue, which has higher priority than the regular task queue. After each task, the event loop drains the entire microtask queue before moving to the next task — this is why Promise callbacks often run before \`setTimeout\` callbacks, even with a 0ms delay.

\`\`\`javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
// Output: 1, 4, 3, 2
\`\`\`

## Why This Matters

Understanding the event loop explains why UI freezes happen, why \`async/await\` code sometimes executes in an unexpected order, and how to reason about timing bugs in real applications.

## Conclusion

The event loop isn't just a theory question — it directly explains the behavior you'll debug in real async JavaScript code, especially once Promises and timers start interacting.`,
    seoDescription:
      "How the JavaScript event loop works — call stack, task queue, and microtask queue explained with a real code example.",
    focusKeyword: "JavaScript event loop",
  },

  "promises-and-async-await-in-javascript": {
    excerpt:
      "How Promises work under the hood, and how async/await makes asynchronous JavaScript code easier to read and debug.",
    content: `# Promises and Async Await in JavaScript

Before Promises, asynchronous JavaScript relied on nested callbacks — often called "callback hell." Promises, and later \`async/await\`, made async code far more readable.

## What a Promise Represents

A Promise is an object representing a value that may not be available yet. It has three states: pending, fulfilled, or rejected.

\`\`\`javascript
const fetchUser = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve({ name: "Aarav" }), 1000);
  });
\`\`\`

## Chaining with .then()

\`\`\`javascript
fetchUser()
  .then((user) => console.log(user.name))
  .catch((err) => console.error(err));
\`\`\`

Chaining avoids nested callbacks but can still get messy with multiple sequential steps.

## async/await Syntax

\`async/await\` is syntactic sugar over Promises that lets asynchronous code read like synchronous code:

\`\`\`javascript
async function loadUser() {
  try {
    const user = await fetchUser();
    console.log(user.name);
  } catch (err) {
    console.error(err);
  }
}
\`\`\`

## Running Requests in Parallel

A common mistake is \`await\`-ing requests one after another when they don't depend on each other. Use \`Promise.all\` instead to run them concurrently:

\`\`\`javascript
const [user, orders] = await Promise.all([fetchUser(), fetchOrders()]);
\`\`\`

## Error Handling

Every \`await\` call should be wrapped in \`try/catch\`, or the surrounding function should handle rejected promises explicitly — unhandled rejections are a common source of silent bugs in production.

## Conclusion

\`async/await\` doesn't replace Promises — it's built on top of them. Understanding both together makes real-world API calls, database queries, and file operations far easier to write correctly.`,
    seoDescription:
      "Understand JavaScript Promises and async/await with practical examples, including error handling and running requests in parallel.",
    focusKeyword: "async await JavaScript",
  },

  "javascript-array-methods-you-must-know": {
    excerpt:
      "The array methods that show up in almost every JavaScript codebase — map, filter, reduce, find, and more — with practical examples.",
    content: `# JavaScript Array Methods You Must Know

A handful of array methods cover the vast majority of data transformation work in JavaScript. Knowing them well means writing less code and fewer bugs than manual loops.

## map()

Transforms every item in an array and returns a new array of the same length.

\`\`\`javascript
const prices = [100, 200, 300];
const withTax = prices.map((p) => p * 1.18);
\`\`\`

## filter()

Returns a new array containing only the items that pass a condition.

\`\`\`javascript
const inStock = products.filter((p) => p.quantity > 0);
\`\`\`

## reduce()

Combines all array items into a single value — a total, an object, or another array.

\`\`\`javascript
const total = prices.reduce((sum, price) => sum + price, 0);
\`\`\`

\`reduce\` is powerful but can hurt readability if overused — sometimes a simple loop is clearer for complex logic.

## find() and findIndex()

Return the first matching item (or its index), useful when you need exactly one result instead of a filtered array.

## some() and every()

Return a boolean: \`some\` checks if at least one item matches a condition, \`every\` checks if all items do.

\`\`\`javascript
const hasOutOfStock = products.some((p) => p.quantity === 0);
\`\`\`

## Chaining Methods

These methods chain naturally, letting you filter, then map, then reduce in a single readable pipeline instead of multiple separate loops.

## Conclusion

Mastering these methods means you'll rarely need a manual \`for\` loop for array transformations, and your code becomes easier for other developers to scan and understand.`,
    seoDescription:
      "The essential JavaScript array methods — map, filter, reduce, find, some, and every — explained with practical code examples.",
    focusKeyword: "JavaScript array methods",
  },

  "advanced-javascript-objects": {
    excerpt:
      "Beyond basic key-value pairs — object destructuring, spread, property descriptors, and prototypal inheritance in JavaScript.",
    content: `# Advanced JavaScript Objects

Objects in JavaScript go far beyond simple key-value storage once you get into destructuring, prototypes, and property behavior.

## Destructuring and Defaults

\`\`\`javascript
const { name, role = "Student" } = user;
\`\`\`

Destructuring with default values avoids repetitive \`user.name\`, \`user.role\` access and handles missing fields gracefully.

## Spread and Rest

The spread operator copies properties into a new object, commonly used for immutable state updates:

\`\`\`javascript
const updatedUser = { ...user, role: "Instructor" };
\`\`\`

This creates a new object rather than mutating the original — important in frameworks like React where mutation breaks change detection.

## Computed Property Names

\`\`\`javascript
const key = "email";
const user = { [key]: "student@example.com" };
\`\`\`

Useful when a property name is only known at runtime.

## Property Descriptors

\`Object.defineProperty\` lets you control whether a property is writable, enumerable, or configurable — the mechanism frameworks use internally to build reactivity systems.

## Prototypal Inheritance

Every JavaScript object has an internal link to a prototype object it inherits properties and methods from. This is different from classical inheritance in languages like Java, though \`class\` syntax in JavaScript is built on top of prototypes.

\`\`\`javascript
class Course {
  constructor(name) {
    this.name = name;
  }
}
\`\`\`

## Object.freeze and Immutability

\`Object.freeze\` prevents modification of an object's properties, useful for enforcing immutable configuration objects.

## Conclusion

Understanding objects at this depth explains a lot of "magic" behavior in frameworks and libraries, and helps you write more predictable, bug-resistant code.`,
    seoDescription:
      "Go beyond basic objects in JavaScript — destructuring, spread syntax, property descriptors, and how prototypal inheritance actually works.",
    focusKeyword: "advanced JavaScript objects",
  },

  "typescript-for-javascript-developers": {
    excerpt:
      "A practical starting point for JavaScript developers learning TypeScript — what changes, what stays the same, and common early mistakes.",
    content: `# TypeScript for JavaScript Developers

TypeScript is JavaScript with a type system layered on top. Every valid JavaScript file is close to valid TypeScript — the shift is mostly about adding type information, not learning a new language.

## Basic Types

\`\`\`typescript
let name: string = "Aarav";
let age: number = 24;
let isEnrolled: boolean = true;
\`\`\`

## Typing Functions

\`\`\`typescript
function calculateFee(base: number, discount: number): number {
  return base - discount;
}
\`\`\`

Typed function parameters and return values catch a huge class of bugs at compile time instead of runtime.

## Interfaces for Object Shapes

\`\`\`typescript
interface Student {
  name: string;
  course: string;
  enrolled: boolean;
}
\`\`\`

Interfaces describe the shape of data flowing through your app — API responses, component props, function arguments.

## Type Inference

TypeScript doesn't require annotating everything. It infers types automatically in most cases:

\`\`\`typescript
let count = 0; // inferred as number
\`\`\`

Over-annotating obvious types adds noise without benefit.

## Common Early Mistakes

New TypeScript developers often reach for \`any\` to silence errors quickly, which defeats the purpose of using TypeScript at all. Using \`unknown\` instead forces you to narrow the type before using it safely.

## Gradual Adoption

TypeScript can be introduced file-by-file into an existing JavaScript project using \`allowJs\`, so teams don't need a full rewrite to start benefiting from it.

## Conclusion

TypeScript's real value shows up in larger codebases and teams, where catching type mismatches at compile time prevents entire categories of production bugs before they ship.`,
    seoDescription:
      "A practical introduction to TypeScript for JavaScript developers — basic types, interfaces, type inference, and common beginner mistakes.",
    focusKeyword: "TypeScript for JavaScript developers",
  },

  "typescript-interfaces-vs-types": {
    excerpt:
      "Interface or type alias? A practical comparison of when each one makes sense in a real TypeScript codebase.",
    content: `# TypeScript Interfaces vs Types

Both \`interface\` and \`type\` can describe the shape of an object, and for basic cases they're interchangeable. But their differences matter as a codebase grows.

## Basic Syntax

\`\`\`typescript
interface User {
  name: string;
  age: number;
}

type UserType = {
  name: string;
  age: number;
};
\`\`\`

Both work identically here — this is why the choice often feels arbitrary at first.

## Declaration Merging

Interfaces can be declared multiple times and TypeScript merges them automatically:

\`\`\`typescript
interface User {
  email: string;
}
// Now User has name, age, and email
\`\`\`

Type aliases cannot do this — declaring the same type name twice throws an error. This makes interfaces useful for extending third-party types.

## Union and Intersection Types

Type aliases can represent unions, which interfaces cannot:

\`\`\`typescript
type Status = "active" | "inactive" | "pending";
\`\`\`

For anything beyond a plain object shape — unions, tuples, mapped types — you need \`type\`.

## Extending

Both support extension, with slightly different syntax:

\`\`\`typescript
interface Admin extends User { permissions: string[]; }
type AdminType = UserType & { permissions: string[] };
\`\`\`

## A Practical Rule

Use \`interface\` for object shapes that represent entities (props, API models) since they read cleanly and support merging. Use \`type\` when you need unions, primitives, or more complex type logic.

## Conclusion

Neither is strictly "better" — most teams settle on interfaces for object shapes and types for everything else, and consistency matters more than the specific rule chosen.`,
    seoDescription:
      "Interface vs type in TypeScript — the real differences, including declaration merging and union types, with practical guidance on when to use each.",
    focusKeyword: "TypeScript interfaces vs types",
  },

  "generics-in-typescript-explained": {
    excerpt:
      "What generics actually solve in TypeScript, explained with practical examples instead of abstract theory.",
    content: `# Generics in TypeScript Explained

Generics let you write functions and types that work with multiple types while still keeping full type safety — instead of choosing between rigid single-type code or unsafe \`any\`.

## The Problem Without Generics

\`\`\`typescript
function firstItem(arr: any[]): any {
  return arr[0];
}
\`\`\`

This works for any array, but you lose all type information — the return value is typed \`any\`, so TypeScript can't help you afterward.

## The Generic Version

\`\`\`typescript
function firstItem<T>(arr: T[]): T {
  return arr[0];
}

const num = firstItem([1, 2, 3]); // inferred as number
const name = firstItem(["Aarav", "Priya"]); // inferred as string
\`\`\`

\`T\` is a placeholder type, filled in based on what's actually passed — full type safety without writing separate functions per type.

## Generic Interfaces

\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<Student> = { data: student, success: true };
\`\`\`

This pattern is extremely common for typing API responses, since the response shape is consistent but the \`data\` type changes per endpoint.

## Constraints

Generics can be restricted to types with specific properties:

\`\`\`typescript
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}
\`\`\`

## Where You'll See Generics

React's \`useState<T>\`, array methods, and most API client libraries rely heavily on generics — even if you never write your own, you'll use them constantly.

## Conclusion

Generics aren't about making code more abstract for its own sake — they exist to avoid duplicating logic while keeping type safety intact.`,
    seoDescription:
      "A practical explanation of TypeScript generics with real code examples — functions, interfaces, and constraints explained simply.",
    focusKeyword: "TypeScript generics",
  },

  "type-safe-apis-with-typescript": {
    excerpt:
      "How to design API layers in TypeScript so a backend response shape mismatch gets caught before it reaches production.",
    content: `# Type Safe APIs with TypeScript

API calls are one of the most common sources of runtime bugs — a backend field gets renamed, and the frontend silently breaks. TypeScript can catch these mismatches before deployment if the API layer is typed properly.

## Typing the Response Shape

\`\`\`typescript
interface Course {
  id: string;
  title: string;
  durationMonths: number;
}

async function getCourse(id: string): Promise<Course> {
  const res = await fetch(\`/api/courses/\${id}\`);
  return res.json();
}
\`\`\`

This tells TypeScript what shape to expect, so any code using the result gets autocomplete and type checking — though it's worth noting \`.json()\` doesn't validate the data at runtime, only at the type level.

## Runtime Validation with Zod

Since TypeScript types disappear at runtime, pairing them with a schema validator like Zod catches actual malformed API responses, not just type mismatches during development:

\`\`\`typescript
import { z } from "zod";

const CourseSchema = z.object({
  id: z.string(),
  title: z.string(),
  durationMonths: z.number(),
});

const course = CourseSchema.parse(await res.json());
\`\`\`

## Typed API Clients

Generating types directly from your backend (via OpenAPI or Prisma-generated types) keeps frontend and backend in sync automatically, instead of manually maintaining duplicate interfaces.

## Error Handling Types

\`\`\`typescript
type ApiResult<T> = { success: true; data: T } | { success: false; error: string };
\`\`\`

This pattern forces calling code to handle both success and failure cases explicitly, rather than relying on try/catch alone.

## Conclusion

Type-safe APIs aren't just about writing interfaces — they require runtime validation too, since types alone can't protect against a backend actually sending different data than expected.`,
    seoDescription:
      "How to build type-safe APIs in TypeScript using typed responses, runtime validation with Zod, and typed error handling patterns.",
    focusKeyword: "type safe APIs TypeScript",
  },

  "building-rest-apis-with-nodejs": {
    excerpt:
      "The fundamentals of building a REST API with Node.js — routes, request handling, status codes, and structuring a real project.",
    content: `# Building REST APIs with Node.js

A REST API exposes data and actions over HTTP using standard methods — GET, POST, PUT, DELETE — mapped to resources like \`/students\` or \`/courses\`.

## A Minimal Server

\`\`\`javascript
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/courses" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([{ id: 1, name: "Full Stack" }]));
  }
});

server.listen(3000);
\`\`\`

Raw Node.js works but gets unwieldy fast, which is why frameworks like Express exist.

## Resource-Based Routes

\`\`\`
GET    /courses       → list all courses
GET    /courses/:id   → get one course
POST   /courses       → create a course
PUT    /courses/:id   → update a course
DELETE /courses/:id   → delete a course
\`\`\`

Following this convention makes the API predictable for anyone consuming it.

## Status Codes Matter

Returning \`200\` for everything, including errors, makes an API hard to consume. Use \`201\` for created resources, \`400\` for bad input, \`404\` for missing resources, and \`500\` for server errors.

## Request Validation

Never trust incoming data. Validate request bodies before touching a database — a missing or malformed field should return a clear \`400\` error, not crash the server.

## Structuring a Real Project

Separate routes, controllers (business logic), and data access into different layers. This keeps route files thin and makes logic testable independent of HTTP.

## Conclusion

REST API design is mostly about consistency — predictable routes, correct status codes, and clear error responses matter more than clever code.`,
    seoDescription:
      "Learn the fundamentals of building REST APIs with Node.js — routing conventions, status codes, validation, and project structure.",
    focusKeyword: "REST APIs Node.js",
  },

  "expressjs-api-architecture": {
    excerpt:
      "How to structure a real Express.js application — middleware, routers, controllers, and error handling that scales past a single file.",
    content: `# Express.js API Architecture

Express is minimal by design, which means architecture decisions are entirely up to the developer. Here's a structure that scales beyond a single-file API.

## Middleware Pipeline

Every Express request flows through a chain of middleware functions before reaching a route handler:

\`\`\`javascript
app.use(express.json());
app.use(cors());
app.use(authMiddleware);
\`\`\`

Order matters — middleware runs top to bottom, so authentication checks must come before protected routes.

## Router-Based Structure

Instead of defining every route in one file, split them by resource using \`express.Router()\`:

\`\`\`javascript
// routes/courses.js
const router = require("express").Router();
router.get("/", getCourses);
router.post("/", createCourse);
module.exports = router;

// app.js
app.use("/courses", require("./routes/courses"));
\`\`\`

## Controller Layer

Route files should only wire up paths to handler functions. Actual logic belongs in controllers, keeping routing and business logic separate:

\`\`\`javascript
exports.getCourses = async (req, res) => {
  const courses = await CourseService.findAll();
  res.json(courses);
};
\`\`\`

## Centralized Error Handling

Express supports a special error-handling middleware signature with four parameters, placed at the end of the middleware chain:

\`\`\`javascript
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});
\`\`\`

This avoids repeating try/catch error formatting in every route.

## Conclusion

Express doesn't enforce structure, so discipline matters — separating middleware, routes, controllers, and error handling keeps an API maintainable as it grows past a handful of endpoints.`,
    seoDescription:
      "How to structure a scalable Express.js API — middleware pipelines, router organization, controllers, and centralized error handling.",
    focusKeyword: "Express.js API architecture",
  },

  "understanding-rest-api-authentication": {
    excerpt:
      "The common ways REST APIs authenticate requests — sessions, API keys, and tokens — and when to use each.",
    content: `# Understanding REST API Authentication

Authentication answers "who is making this request?" Authorization answers "what are they allowed to do?" REST APIs typically use one of a few standard approaches to handle the first question.

## Session-Based Authentication

The server creates a session on login and stores a session ID in a cookie. The server keeps session data in memory or a database, and the cookie is sent automatically with every request.

This works well for traditional server-rendered apps but requires shared session storage across multiple servers, which adds complexity in distributed systems.

## Token-Based Authentication (JWT)

Instead of server-side session storage, the server issues a signed token containing user information. The client sends this token with every request, usually in an \`Authorization\` header:

\`\`\`
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
\`\`\`

The server verifies the token's signature without needing to look anything up in a database — making it stateless and easier to scale horizontally.

## API Keys

Used mainly for machine-to-machine access rather than individual user login — a fixed key identifies which application or service is calling the API, often with rate limits attached.

## OAuth 2.0

Used when a user wants to grant a third-party app limited access to their account without sharing a password — the "Sign in with Google" pattern is built on OAuth.

## Choosing an Approach

Session-based auth suits traditional web apps with server rendering. Token-based auth suits SPAs, mobile apps, and microservices where statelessness matters.

## Conclusion

There's no single "correct" authentication method — the right choice depends on your app's architecture, not just security preferences.`,
    seoDescription:
      "A practical comparison of REST API authentication methods — sessions, JWT tokens, API keys, and OAuth — and when to use each.",
    focusKeyword: "REST API authentication",
  },

  "jwt-authentication-explained": {
    excerpt:
      "How JWTs actually work — structure, signing, verification, and the security mistakes developers commonly make with them.",
    content: `# JWT Authentication Explained

A JSON Web Token (JWT) is a compact, signed piece of data used to prove a user's identity across requests without the server storing session state.

## The Three Parts

A JWT has three base64-encoded segments separated by dots: \`header.payload.signature\`.

\`\`\`
eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiIxMjMifQ.4f3a1b...
\`\`\`

The **header** describes the signing algorithm, the **payload** holds claims (like user ID and expiry), and the **signature** proves the token hasn't been tampered with.

## Signing and Verifying

\`\`\`javascript
const jwt = require("jsonwebtoken");

const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
  expiresIn: "1h",
});

const decoded = jwt.verify(token, process.env.JWT_SECRET);
\`\`\`

The signature is generated using a secret key only the server knows — this is what makes tampering detectable, not encryption of the payload itself.

## A Critical Misconception

The payload is only encoded, not encrypted — anyone can decode a JWT and read its contents without the secret. Never put passwords or sensitive data in the payload.

## Expiry and Refresh Tokens

Short-lived access tokens (15–60 minutes) limit damage if one is stolen. A longer-lived refresh token, stored more securely, is used to obtain a new access token without forcing the user to log in again.

## Common Security Mistakes

Storing JWTs in \`localStorage\` exposes them to XSS attacks. HTTP-only cookies are generally safer since client-side JavaScript can't read them.

## Conclusion

JWTs solve statelessness well, but they shift responsibility onto the developer to handle expiry, secure storage, and secret management correctly — they aren't automatically more secure than sessions.`,
    seoDescription:
      "How JWT authentication actually works — token structure, signing and verification, and common security mistakes to avoid.",
    focusKeyword: "JWT authentication",
  },

  "database-design-for-modern-applications": {
    excerpt:
      "Core principles for designing a database schema that stays maintainable as an application grows — normalization, relationships, and indexing.",
    content: `# Database Design for Modern Applications

A poorly designed schema causes problems that are expensive to fix later — data duplication, slow queries, and inconsistent state. Good design decisions early prevent most of this.

## Normalization Basics

Normalization organizes data to reduce duplication — storing a student's course information once and referencing it, rather than repeating course details on every enrollment record.

\`\`\`
students(id, name, email)
courses(id, title, duration)
enrollments(id, student_id, course_id, enrolled_at)
\`\`\`

## When to Denormalize

Strict normalization isn't always right for performance-critical read paths. Sometimes storing a computed or duplicated value (like a cached \`total_students\` count on a course) avoids expensive joins on every read — a deliberate tradeoff, not a mistake.

## Choosing Relationships

- **One-to-many**: one course has many enrollments.
- **Many-to-many**: students and courses, resolved through a join table like \`enrollments\`.
- **One-to-one**: rare, usually for splitting large or sensitive data into a separate table.

## Indexing

An index speeds up lookups on a column at the cost of slightly slower writes. Index columns you frequently filter or sort by — like \`email\` for login lookups — but avoid indexing every column blindly.

## Foreign Keys and Constraints

Foreign key constraints prevent orphaned records (an enrollment pointing to a deleted course) at the database level, catching bugs that application code alone might miss.

## Conclusion

Good schema design balances normalization for consistency against denormalization for performance, guided by how the data is actually queried — not just theoretical correctness.`,
    seoDescription:
      "Core database design principles for modern applications — normalization, relationships, indexing, and when to denormalize for performance.",
    focusKeyword: "database design",
  },

  "prisma-orm-complete-guide": {
    excerpt:
      "How Prisma simplifies working with databases in Node.js and TypeScript — schema definition, migrations, and type-safe queries.",
    content: `# Prisma ORM Complete Guide

Prisma is a type-safe ORM for Node.js and TypeScript that generates a fully typed database client based on your schema — catching many database-related bugs at compile time instead of runtime.

## Defining a Schema

\`\`\`prisma
model Student {
  id        String   @id @default(cuid())
  name      String
  email     String   @unique
  courses   Enrollment[]
}

model Course {
  id       String @id @default(cuid())
  title    String
  students Enrollment[]
}

model Enrollment {
  id        String  @id @default(cuid())
  student   Student @relation(fields: [studentId], references: [id])
  studentId String
  course    Course  @relation(fields: [courseId], references: [id])
  courseId  String
}
\`\`\`

## Migrations

\`\`\`bash
npx prisma migrate dev --name add_enrollments
\`\`\`

This generates SQL migration files and applies them, keeping your database schema in version control alongside your code.

## Type-Safe Queries

\`\`\`typescript
const student = await prisma.student.findUnique({
  where: { email: "aarav@example.com" },
  include: { courses: { include: { course: true } } },
});
\`\`\`

The returned object is fully typed based on the \`include\` clause — TypeScript knows exactly what fields exist, with autocomplete included.

## Seeding Data

Prisma supports a dedicated seed script (like the one used to populate this blog) run via \`npx prisma db seed\`, useful for local development and demo data.

## When Prisma Might Not Fit

For extremely complex queries or heavy raw SQL optimization, Prisma's query builder can feel limiting — it does support raw queries as an escape hatch, but reaching for them often is a sign a different tool might fit better.

## Conclusion

Prisma removes a lot of boilerplate around database access while keeping full type safety, making it a strong default choice for TypeScript backend projects.`,
    seoDescription:
      "A complete guide to Prisma ORM — schema definition, migrations, and type-safe database queries in Node.js and TypeScript.",
    focusKeyword: "Prisma ORM guide",
  },

  "postgresql-best-practices": {
    excerpt:
      "Practical PostgreSQL habits that prevent performance and reliability problems as an application scales.",
    content: `# PostgreSQL Best Practices

PostgreSQL is forgiving enough that a poorly designed database can work fine at small scale — the real problems show up later. These practices prevent most common issues.

## Use the Right Data Types

Storing dates as text, or using \`TEXT\` for everything instead of \`VARCHAR\`, \`INTEGER\`, or \`BOOLEAN\` where appropriate, causes subtle bugs and wastes storage. Use \`TIMESTAMP WITH TIME ZONE\` for dates to avoid timezone bugs later.

## Index Strategically

\`\`\`sql
CREATE INDEX idx_students_email ON students(email);
\`\`\`

Index columns used in \`WHERE\`, \`JOIN\`, and \`ORDER BY\` clauses frequently. Over-indexing slows down writes, so index based on actual query patterns, not preemptively on every column.

## Use Transactions for Multi-Step Writes

\`\`\`sql
BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;
\`\`\`

If any step fails, the transaction rolls back entirely — critical for operations where partial updates would leave data inconsistent.

## Avoid N+1 Queries

Fetching a list, then querying related data in a loop for each item, generates far more queries than necessary. Use joins or batch queries instead.

## Connection Pooling

Opening a new database connection per request is expensive. Tools like PgBouncer, or built-in pooling in ORMs like Prisma, reuse connections efficiently under load.

## Regular Backups and Monitoring

Automated backups and query performance monitoring (via \`EXPLAIN ANALYZE\`) catch problems before they become outages, rather than discovering them during an incident.

## Conclusion

Most PostgreSQL performance issues trace back to a handful of avoidable patterns — right-sizing data types, indexing deliberately, and avoiding N+1 queries covers the majority of real-world cases.`,
    seoDescription:
      "Practical PostgreSQL best practices — correct data types, strategic indexing, transactions, and avoiding N+1 query problems.",
    focusKeyword: "PostgreSQL best practices",
  },

  "deploying-nextjs-applications-on-vercel": {
    excerpt:
      "A step-by-step look at deploying a Next.js app to Vercel, including environment variables, preview deployments, and common gotchas.",
    content: `# Deploying Next.js Applications on Vercel

Vercel is built by the creators of Next.js, so deployment is close to zero-configuration for most projects — but a few details matter for a smooth production setup.

## Connecting a Repository

Pushing a Next.js project to GitHub and importing it into Vercel is usually enough to get a working deployment — Vercel auto-detects the framework and build settings.

## Environment Variables

Variables prefixed with \`NEXT_PUBLIC_\` are exposed to the browser; everything else stays server-only. Set these in the Vercel dashboard per environment (Production, Preview, Development) rather than committing them to the repo.

\`\`\`
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgres://...
\`\`\`

## Preview Deployments

Every pull request automatically gets its own deployment URL, letting you review changes live before merging — a major advantage over manually staging builds.

## Build Settings

Vercel typically detects the correct build command (\`next build\`) automatically, but monorepos or custom output directories may need manual configuration in \`vercel.json\`.

## Common Gotchas

- Forgetting to add environment variables to the Production environment specifically, not just Preview.
- API routes with long-running operations hitting serverless function timeout limits.
- Using Node.js-only packages inside Edge Runtime functions, which have a more limited runtime.

## Custom Domains

Adding a custom domain is handled entirely through the dashboard, with automatic SSL certificate provisioning — no manual certificate management needed.

## Conclusion

Vercel removes most deployment complexity for Next.js apps, but understanding environment variable scoping and function limits prevents the most common production surprises.`,
    seoDescription:
      "A practical guide to deploying Next.js applications on Vercel — environment variables, preview deployments, and common deployment mistakes.",
    focusKeyword: "deploying Next.js on Vercel",
  },

  "aws-deployment-guide-for-beginners": {
    excerpt:
      "An approachable introduction to deploying applications on AWS — the core services beginners actually need, without the overwhelm.",
    content: `# AWS Deployment Guide for Beginners

AWS offers hundreds of services, which makes it overwhelming for beginners. In practice, most simple deployments only need a handful of them.

## EC2 for Basic Hosting

EC2 gives you a virtual server you fully control — install Node.js, clone your repo, and run your app directly. It's flexible but requires manual server management, including security updates and scaling.

## Elastic Beanstalk for Managed Deployment

Beanstalk handles provisioning, load balancing, and scaling for you — you upload your code and it manages the underlying EC2 instances, a good middle ground for beginners who want less manual infrastructure work.

## S3 for Static Assets

S3 stores files — images, static exports, backups — at very low cost, and can serve a static website directly when paired with CloudFront for a CDN layer.

## RDS for Databases

Instead of running PostgreSQL or MySQL yourself on a server, RDS manages backups, patching, and scaling for you — worth the extra cost for production systems where manual database administration isn't practical.

## IAM for Access Control

IAM controls who and what can access your AWS resources. A common beginner mistake is using root account credentials everywhere instead of creating scoped IAM users with only the permissions they need.

## A Simple Beginner Path

Start with Elastic Beanstalk or a simple EC2 instance for the app, RDS for the database, and S3 for file storage. Avoid diving into Lambda, ECS, or Kubernetes until you understand why you need them.

## Conclusion

AWS's complexity is optional at the start — a handful of core services cover most beginner deployment needs, and advanced tools become relevant only as scale demands them.`,
    seoDescription:
      "A beginner-friendly AWS deployment guide covering EC2, Elastic Beanstalk, S3, RDS, and IAM — without the overwhelm of AWS's full service catalog.",
    focusKeyword: "AWS deployment for beginners",
  },

  "production-deployment-checklist": {
    excerpt:
      "The practical checks worth running before shipping any application to production — security, performance, and monitoring basics.",
    content: `# Production Deployment Checklist

Shipping to production is more than running a build command. A short checklist catches most of the mistakes that cause outages or security incidents.

## Environment Variables and Secrets

Confirm no secrets are hardcoded or committed to the repository, and that production environment variables are set correctly and separately from development ones.

## Error Monitoring

Set up an error tracking tool (like Sentry) before launch, not after the first incident — silent failures in production are far harder to debug without visibility.

## Database Backups

Confirm automated backups are actually running and, just as importantly, that a restore has been tested at least once. An untested backup is not a reliable safety net.

## HTTPS and Security Headers

Ensure the app is served over HTTPS, and add basic security headers (Content-Security-Policy, X-Frame-Options) to reduce common attack surface.

## Rate Limiting

Public-facing APIs without rate limiting are vulnerable to abuse and accidental overload from bugs in client code, not just malicious traffic.

## Logging

Structured logs with timestamps and request IDs make debugging production issues far faster than scattered \`console.log\` statements.

## Rollback Plan

Know how to roll back a bad deployment before you need to — whether that's a platform feature (like Vercel's instant rollback) or a documented manual process.

## Performance Baseline

Run a quick Lighthouse or load test before launch so you have a baseline to compare against if users report slowness later.

## Conclusion

None of these steps are complicated individually, but skipping them is exactly what turns a small bug into a production incident.`,
    seoDescription:
      "A practical production deployment checklist covering secrets, monitoring, backups, security headers, and rollback planning.",
    focusKeyword: "production deployment checklist",
  },

  "environment-variables-in-production": {
    excerpt:
      "How to manage environment variables safely in production — what belongs in them, common mistakes, and secret management basics.",
    content: `# Environment Variables in Production

Environment variables keep configuration and secrets out of your codebase, but managing them carelessly in production creates real security and reliability risks.

## What Belongs in Environment Variables

API keys, database connection strings, and environment-specific URLs (staging vs production) belong here — never hardcoded directly in source files.

\`\`\`
DATABASE_URL=postgres://user:pass@host:5432/db
JWT_SECRET=your-secret-key
NEXT_PUBLIC_API_URL=https://api.example.com
\`\`\`

## Never Commit .env Files

\`.env\` files containing real secrets should always be in \`.gitignore\`. A common and costly mistake is committing a \`.env\` file once, then removing it later — the secret remains in git history and should be treated as compromised.

## Client-Exposed vs Server-Only

In frameworks like Next.js, only variables explicitly prefixed (\`NEXT_PUBLIC_\`) are sent to the browser. Anything else stays server-side — mixing this up can accidentally leak a secret key into client-side JavaScript.

## Using a Secrets Manager

For larger production systems, dedicated tools like AWS Secrets Manager or Vercel's environment variable dashboard are safer than plain \`.env\` files on a server, since they support access control and rotation.

## Validating Required Variables at Startup

\`\`\`javascript
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}
\`\`\`

Failing fast at startup is much easier to debug than a mysterious failure deep inside application logic caused by a missing variable.

## Conclusion

Environment variables are simple in concept but a common source of real security incidents when secrets are exposed or mismanaged — treat them with the same care as passwords, because that's effectively what they are.`,
    seoDescription:
      "How to manage environment variables safely in production — secrets, client vs server exposure, and validating required variables at startup.",
    focusKeyword: "environment variables production",
  },

  "docker-for-full-stack-developers": {
    excerpt:
      "Why Docker matters for full stack developers — containers explained simply, with a practical Dockerfile example.",
    content: `# Docker for Full Stack Developers

"It works on my machine" is the exact problem Docker exists to solve. A container packages your app with everything it needs to run, so it behaves the same way everywhere.

## Containers vs Virtual Machines

A virtual machine emulates an entire operating system, which is heavy. A container shares the host OS kernel and only packages the application and its dependencies, making it far lighter and faster to start.

## A Basic Dockerfile

\`\`\`dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

Each line creates a layer, and Docker caches layers that haven't changed — ordering \`COPY package*.json\` before the rest of the code means dependency installs aren't repeated on every code change.

## Building and Running

\`\`\`bash
docker build -t masterpath-app .
docker run -p 3000:3000 masterpath-app
\`\`\`

## Docker Compose for Multi-Service Apps

Most real apps need more than one container — the app itself, a database, maybe Redis. Docker Compose defines and runs them together:

\`\`\`yaml
services:
  app:
    build: .
    ports: ["3000:3000"]
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: password
\`\`\`

## Why It Matters for Full Stack Developers

Docker ensures your local development environment matches production closely, and it's the foundation most cloud deployment platforms (including AWS and many CI/CD pipelines) build on top of.

## Conclusion

You don't need to master Kubernetes to benefit from Docker — understanding containers and writing a basic Dockerfile already solves most environment consistency problems full stack developers run into.`,
    seoDescription:
      "Why Docker matters for full stack developers — containers vs virtual machines, a practical Dockerfile example, and Docker Compose basics.",
    focusKeyword: "Docker for full stack developers",
  },

  "introduction-to-artificial-intelligence": {
    excerpt:
      "A grounded, non-hype introduction to what artificial intelligence actually is, and how it differs from machine learning and deep learning.",
    content: `# Introduction to Artificial Intelligence

Artificial intelligence gets used loosely to describe everything from a simple recommendation algorithm to advanced language models. Understanding the actual layers helps cut through the hype.

## What AI Actually Means

Broadly, AI refers to systems designed to perform tasks that typically require human intelligence — recognizing images, understanding language, or making decisions based on data. Not all AI involves "learning" from data; some early AI systems used hand-written rules.

## Machine Learning as a Subset

Machine learning is a specific approach to AI where a system learns patterns from data rather than following explicitly programmed rules. A spam filter that improves by learning from labeled examples is machine learning.

## Deep Learning as a Further Subset

Deep learning is a type of machine learning that uses neural networks with many layers, particularly effective for unstructured data like images, audio, and text — which is why it powers most recent breakthroughs in AI.

## Where AI Shows Up Today

Search ranking, fraud detection, voice assistants, recommendation engines, and code-completion tools in editors are all practical, everyday applications — far more common than the more dramatic examples that dominate headlines.

## A Realistic View for Developers

You don't need a PhD to use AI in your work. Most developers today interact with AI through APIs (like calling a language model) rather than training models from scratch — understanding how to integrate these tools is often more immediately useful than the underlying math.

## Conclusion

AI, machine learning, and deep learning are related but distinct — understanding the difference helps you evaluate claims about AI tools more critically, instead of treating the term as a single monolithic thing.`,
    seoDescription:
      "A grounded introduction to artificial intelligence — what it actually means, how it relates to machine learning and deep learning, and real-world uses.",
    focusKeyword: "introduction to artificial intelligence",
  },

  "machine-learning-vs-deep-learning": {
    excerpt:
      "How machine learning and deep learning actually differ — in approach, data requirements, and when each one makes sense.",
    content: `# Machine Learning vs Deep Learning

Deep learning is a subset of machine learning, not a separate field — but the practical differences in how each works matter when deciding what approach fits a given problem.

## Traditional Machine Learning

Classic ML algorithms — decision trees, linear regression, support vector machines — often require manually engineered features. For a house price prediction model, someone decides which inputs matter: square footage, location, number of rooms.

## Deep Learning

Deep learning uses neural networks with multiple layers that learn relevant features directly from raw data, without a human manually deciding what matters. This is why deep learning excels at images and text, where manually defining useful features is extremely difficult.

## Data Requirements

Traditional ML can work well with relatively small, structured datasets. Deep learning typically needs much larger datasets to perform well — a neural network trained on a few hundred examples usually underperforms a well-tuned traditional model on the same data.

## Compute Requirements

Deep learning models, especially larger ones, require significantly more computational power (often GPUs) for training compared to traditional ML algorithms that can run efficiently on standard CPUs.

## Interpretability

A decision tree's logic can be inspected and explained directly. Deep neural networks are largely "black boxes" — this matters in regulated industries like finance or healthcare where decisions need to be explainable.

## Choosing Between Them

For structured, tabular data with a limited dataset, traditional ML is often the more practical and interpretable choice. For unstructured data at scale — images, audio, natural language — deep learning tends to significantly outperform traditional approaches.

## Conclusion

Neither approach is universally "better" — the right choice depends on data type, dataset size, and how much model interpretability actually matters for the problem.`,
    seoDescription:
      "Machine learning vs deep learning explained — differences in approach, data requirements, compute needs, and when to use each.",
    focusKeyword: "machine learning vs deep learning",
  },

  "how-generative-ai-is-changing-software-development": {
    excerpt:
      "A realistic look at how generative AI tools are actually changing day-to-day software development work, beyond the hype.",
    content: `# How Generative AI is Changing Software Development

Generative AI has moved from novelty to a genuinely common part of many developers' daily workflow — though its impact is more incremental than the more dramatic claims suggest.

## Code Completion and Generation

Tools integrated directly into editors suggest entire functions or boilerplate based on context, meaningfully speeding up repetitive coding tasks like writing tests, CRUD endpoints, or type definitions.

## Debugging Assistance

Pasting an error message into an AI assistant and getting a plausible explanation and fix is often faster than searching through forum threads — though the suggestions still need to be verified, not trusted blindly.

## Documentation and Code Explanation

Generative AI is genuinely useful for explaining unfamiliar codebases or generating first-draft documentation, tasks that are tedious but not particularly creative.

## What It Doesn't Replace

Understanding system architecture, making tradeoffs between approaches, and knowing *why* a particular solution fits a specific business context still requires human judgment. AI-generated code is often a reasonable starting point, not a finished, production-ready solution.

## New Risks to Manage

Generated code can introduce subtle bugs or security issues that look plausible but are wrong — code review discipline matters more, not less, when AI-generated code is part of the workflow.

## What This Means for Learning to Code

Beginners should be cautious about relying on AI tools before understanding fundamentals — it's much harder to spot when AI-generated code is wrong if you don't understand what correct code should look like in the first place.

## Conclusion

Generative AI is a genuine productivity tool for experienced developers, but it works best as an assistant to solid fundamentals, not a replacement for actually learning how software works.`,
    seoDescription:
      "A realistic look at how generative AI is changing software development — code completion, debugging, documentation, and its real limitations.",
    focusKeyword: "generative AI software development",
  },

  "building-ai-powered-web-applications": {
    excerpt:
      "A practical starting point for adding AI features to a web application — from calling an LLM API to handling responses responsibly.",
    content: `# Building AI Powered Web Applications

Adding AI to a web app today usually means calling a hosted model API, not training your own model — this dramatically lowers the barrier to entry for most product features.

## A Basic API Call

\`\`\`javascript
const response = await fetch("https://api.example.com/v1/messages", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    model: "model-name",
    messages: [{ role: "user", content: userInput }],
  }),
});
\`\`\`

Most AI providers expose a simple HTTP API, making integration similar to calling any other third-party service.

## Never Expose API Keys Client-Side

AI API calls should go through your own backend, not directly from the browser — otherwise your API key (and your bill) is exposed to anyone who inspects the network tab.

## Handling Streaming Responses

Many AI APIs support streaming responses token-by-token, which makes the UI feel much faster than waiting for a complete response before displaying anything.

## Structured Outputs

For features like generating structured data (e.g. a list of suggested courses), prompting the model to return valid JSON and parsing it programmatically is more reliable than parsing free-form text.

## Handling Errors and Rate Limits

AI APIs can fail, time out, or hit rate limits — build in retries, fallback messaging, and clear loading states rather than assuming every call succeeds.

## Cost Awareness

Unlike most APIs, AI calls have a direct, variable cost per request. Caching repeated queries and setting reasonable input length limits prevents unexpected bills.

## Conclusion

Building AI-powered features is more about solid API integration practices — security, error handling, and cost control — than deep machine learning knowledge.`,
    seoDescription:
      "A practical guide to building AI-powered web applications — API integration, streaming responses, structured outputs, and cost control.",
    focusKeyword: "AI powered web applications",
  },

  "ai-tools-every-developer-should-know": {
    excerpt:
      "The categories of AI tools that are actually useful in a developer's daily workflow, beyond just chatbots.",
    content: `# AI Tools Every Developer Should Know

The AI tooling landscape is noisy, but most genuinely useful tools for developers fall into a few clear categories.

## In-Editor Code Assistants

Tools integrated directly into your IDE suggest code as you type, based on the surrounding context — useful for boilerplate, tests, and reducing repetitive typing, though suggestions still need review.

## Conversational Coding Assistants

Chat-based tools help explain unfamiliar code, debug errors, or plan an implementation approach before writing code — most useful when you treat them as a knowledgeable pair programmer, not an authority to blindly trust.

## Agentic Coding Tools

Newer tools can autonomously execute multi-step coding tasks — reading a codebase, making changes across multiple files, and running tests — useful for well-defined tasks but still requiring human review of the final result.

## Design-to-Code Tools

Some tools can convert a design mockup or screenshot into a working frontend implementation, useful for quickly scaffolding a UI before refining it manually.

## Documentation and Search Tools

AI-powered search across a codebase or internal documentation can surface relevant context faster than manually grepping through files or old Slack threads.

## Evaluating a New Tool

Before adopting a new AI tool into your workflow, check whether it actually saves meaningful time on tasks you do often, versus being interesting but rarely used in practice — new tools launch constantly, but not all of them earn a permanent place in a workflow.

## Conclusion

The most effective developers treat AI tools as leverage on top of solid fundamentals, not a replacement for understanding what the generated code actually does.`,
    seoDescription:
      "A practical overview of AI tools developers actually use — code assistants, agentic coding tools, and how to evaluate new AI tools.",
    focusKeyword: "AI tools for developers",
  },

  "how-to-prepare-for-full-stack-developer-interview": {
    excerpt:
      "A practical preparation plan for full stack developer interviews — what to actually study, and what most candidates get wrong.",
    content: `# How to Prepare for a Full Stack Developer Interview

Full stack interviews typically test three things: fundamentals, practical project experience, and how you communicate your reasoning — not just whether you can recite syntax.

## Data Structures and Algorithms

Even for full stack roles, many companies still test arrays, hash maps, and basic algorithmic thinking. You don't need to memorize hundreds of problems — understanding common patterns (two pointers, sliding window, recursion) covers most questions.

## System Design Basics

For roles beyond entry-level, expect questions like "how would you design a URL shortener" or "how would you scale this API." Focus on trade-offs — caching, database choice, load balancing — rather than a single "correct" answer.

## Know Your Own Projects Deeply

Interviewers frequently ask about projects listed on your resume. Be ready to explain specific technical decisions — why you chose a particular database, how you handled authentication, what you'd do differently now.

## Practical Coding Rounds

Some companies give a live coding task building a small feature end-to-end (API endpoint plus frontend). Practicing this format matters as much as algorithm practice, since it's a different skill than solving isolated problems.

## Common Mistakes Candidates Make

Rushing to write code before clarifying requirements, staying silent while stuck instead of talking through your thinking, and not asking questions about the actual role or team are avoidable mistakes that hurt otherwise strong candidates.

## Behavioral Questions

Prepare two or three concrete stories about a challenge you solved, a disagreement you navigated, and a mistake you learned from — vague answers here are a common weak point.

## Conclusion

Solid preparation covers fundamentals, project depth, and communication equally — technical skill alone often isn't what separates candidates in the final decision.`,
    seoDescription:
      "A practical guide to preparing for full stack developer interviews — data structures, system design basics, and common candidate mistakes.",
    focusKeyword: "full stack developer interview preparation",
  },

  "top-skills-for-full-stack-developers": {
    excerpt:
      "The skills that actually matter for full stack developers in 2026 — technical and non-technical — based on what companies hire for.",
    content: `# Top Skills for Full Stack Developers

"Full stack" covers a wide range, but a consistent set of skills shows up across most job descriptions and real hiring decisions.

## Frontend Fundamentals

Solid HTML, CSS, and JavaScript fundamentals matter more than framework-specific knowledge — frameworks change, but the underlying concepts (the DOM, the box model, closures) stay relevant across all of them.

## A Modern Frontend Framework

React remains the most widely required framework, with Next.js increasingly expected on top of it for production roles involving SEO or server rendering.

## Backend and API Design

Comfort building REST (or GraphQL) APIs, understanding authentication, and structuring backend code cleanly is expected even for roles leaning frontend-heavy.

## Database Fundamentals

Understanding relational database design, writing efficient queries, and knowing when to use an ORM versus raw SQL is a consistent gap employers mention in junior candidates.

## Version Control and Collaboration

Git proficiency beyond basic commit/push — resolving merge conflicts, understanding branching strategies, writing clear pull request descriptions — signals readiness for team environments.

## Deployment and Basic DevOps

Knowing how to deploy an application, manage environment variables, and read basic logs is increasingly expected even from developers who aren't dedicated DevOps engineers.

## Communication Skills

The ability to explain a technical decision to a non-technical stakeholder, write clear documentation, and ask good clarifying questions consistently separates strong hires from technically competent but harder-to-work-with candidates.

## Conclusion

Technical breadth matters for full stack roles, but depth in fundamentals and the ability to communicate clearly are what most consistently show up in actual hiring feedback.`,
    seoDescription:
      "The skills that actually matter for full stack developers — frontend and backend fundamentals, databases, deployment, and communication.",
    focusKeyword: "skills for full stack developers",
  },

  "how-to-build-a-strong-developer-portfolio": {
    excerpt:
      "What actually makes a developer portfolio stand out to hiring managers — beyond just listing projects.",
    content: `# How to Build a Strong Developer Portfolio

A portfolio's job is to prove you can actually build things, not just list technologies you've heard of. A few deliberate choices make a much bigger difference than the number of projects included.

## Quality Over Quantity

Three well-built, well-explained projects beat ten shallow tutorial clones. Hiring managers can usually tell within seconds whether a project was genuinely built and understood versus copied from a course.

## Show Real Problem-Solving

For each project, briefly explain the problem it solves, key technical decisions, and challenges you ran into — not just a feature list. This context is what actually demonstrates thinking, not the tech stack badges.

## Include Live, Working Demos

A GitHub link alone requires effort from a recruiter to evaluate. A live, deployed demo they can click through immediately removes friction and gets your project actually looked at.

## Write Clean READMEs

A clear README with setup instructions, screenshots, and a short explanation of the project signals professionalism — and it's something many candidates skip entirely.

## Avoid Generic Tutorial Projects

A to-do list app or a basic e-commerce clone with no distinguishing features blends in with thousands of similar portfolios. Adding a unique feature or applying it to a specific real-world use case makes it memorable.

## Keep It Updated

Remove or rebuild old projects that no longer reflect your current skill level — an outdated portfolio can undersell how much you've actually improved.

## Conclusion

A portfolio isn't about proving you know a long list of technologies — it's about proving you can take an idea from problem to working solution, and explain that process clearly.`,
    seoDescription:
      "What actually makes a developer portfolio stand out to hiring managers — project quality, clear explanations, and live demos.",
    focusKeyword: "developer portfolio",
  },

  "best-projects-for-fresher-developer-resume": {
    excerpt:
      "Project ideas that actually demonstrate real skills to hiring managers, instead of the same tutorial clones everyone submits.",
    content: `# Best Projects for a Fresher Developer Resume

Freshers often build the same handful of tutorial-following projects, which makes it hard to stand out. A better approach is picking projects that force you to solve real, slightly messy problems.

## A Full Stack App With Real Authentication

Building a project with actual user signup, login, and protected routes — not just a UI mockup — demonstrates you understand security basics that many beginner projects skip entirely.

## A Project With a Real External API

Integrating a real third-party API (weather, payments in test mode, maps) forces you to handle real-world messiness — rate limits, error responses, unexpected data shapes — that tutorial-only projects rarely include.

## A Dashboard With Real Data Visualization

Building something that fetches, processes, and visualizes real data (using a charting library) shows both backend and frontend skill, plus the ability to work with data meaningfully, not just display static content.

## A Small Deployed Product, Not Just a Repo

Taking one project all the way to a live, deployed URL with a custom domain demonstrates you understand the full lifecycle — not just writing code, but shipping it.

## Contributing to an Open Source Project

Even a small, genuine contribution (a bug fix, a documentation improvement) to an existing open source project shows you can work within someone else's codebase and conventions — a skill tutorials rarely teach.

## What to Avoid

Submitting five nearly identical to-do list or weather apps signals limited range. Pick projects that each demonstrate a different skill — auth, APIs, data visualization, deployment — rather than repeating the same pattern.

## Conclusion

The goal isn't project quantity — it's demonstrating a range of real, applicable skills that map to what an actual job will require on day one.`,
    seoDescription:
      "Project ideas for a fresher developer resume that actually demonstrate real skills — authentication, APIs, data visualization, and deployment.",
    focusKeyword: "projects for fresher developer resume",
  },

  "how-to-improve-technical-interview-skills": {
    excerpt:
      "Practical ways to get better at technical interviews — beyond just solving more practice problems.",
    content: `# How to Improve Your Technical Interview Skills

Solving more practice problems helps, but it's not the only lever. How you communicate while solving a problem often matters as much as the solution itself.

## Practice Talking While Coding

Many candidates can solve problems silently but freeze when asked to explain their thinking out loud. Practice narrating your approach — what you're considering, why you're choosing an approach — before and while writing code.

## Clarify Before Coding

Jumping straight into code without confirming edge cases or constraints is a common mistake. Asking "what should happen with an empty input?" before coding signals careful thinking, not uncertainty.

## Learn to Get Unstuck Productively

When stuck, talk through what you know, try a smaller example by hand, or explain what approach you'd try next — silence is far worse than visibly working through confusion, since interviewers are also evaluating your process.

## Time-Box Practice Sessions

Solving problems without a time limit doesn't build the pressure-handling skill actual interviews require. Practicing under a realistic time constraint (30–45 minutes) builds a more transferable skill.

## Review Patterns, Not Just Problems

After solving a problem, identify the underlying pattern (two pointers, dynamic programming, graph traversal) rather than just moving to the next problem — pattern recognition transfers to new problems you haven't seen before.

## Do Mock Interviews With Real Feedback

Practicing alone misses the communication and pressure elements entirely. Mock interviews with actual feedback on your explanation clarity are one of the highest-leverage preparation activities available.

## Conclusion

Technical interview skill is a combination of problem-solving ability and communication under pressure — both are trainable, and neither improves from silent solo practice alone.`,
    seoDescription:
      "Practical ways to improve technical interview skills — communication while coding, clarifying requirements, and effective mock interview practice.",
    focusKeyword: "improve technical interview skills",
  },

  "seo-basics-for-developers": {
    excerpt:
      "The SEO fundamentals every developer should understand — not as a marketing afterthought, but as part of how you build.",
    content: `# SEO Basics for Developers

SEO often gets treated as a marketing task handled after a site is built, but many of the highest-impact SEO factors are actually engineering decisions made during development.

## Crawlability

Search engines need to be able to reach and read your pages. A robots.txt file blocking important routes, or content that only loads after complex client-side JavaScript execution, can prevent proper indexing.

## Page Speed

Slow-loading pages hurt both rankings and user experience directly. Image optimization, minimizing JavaScript bundle size, and efficient rendering strategies (like SSR or SSG) all affect this measurably.

## Semantic HTML

Using proper heading hierarchy (\`h1\`, \`h2\`, \`h3\` in order), descriptive \`alt\` text on images, and semantic elements (\`<article>\`, \`<nav>\`) helps search engines understand page structure, not just visual styling.

## Unique Metadata Per Page

Every page needs its own unique \`<title>\` and meta description — duplicated metadata across pages, common on template-generated sites, actively hurts how distinctly each page ranks.

\`\`\`html
<title>Full Stack Development Course | MasterPath</title>
<meta name="description" content="A specific, unique description for this exact page." />
\`\`\`

## Mobile Responsiveness

Search engines primarily index the mobile version of a site. A layout that breaks or hides content on mobile directly damages rankings, not just mobile user experience.

## Internal Linking

Linking related pages to each other (a blog post linking to a relevant course page) helps both users navigate and search engines understand which pages are most important on your site.

## Conclusion

SEO for developers isn't about keyword stuffing — it's about building sites that are fast, crawlable, and structured clearly, which happens to align with good engineering practice anyway.`,
    seoDescription:
      "SEO fundamentals every developer should understand — crawlability, page speed, semantic HTML, and unique metadata per page.",
    focusKeyword: "SEO basics for developers",
  },

  "technical-seo-checklist-for-websites": {
    excerpt:
      "A practical technical SEO checklist covering the engineering-side factors that affect how well a site ranks.",
    content: `# Technical SEO Checklist for Websites

Technical SEO covers the infrastructure-level factors that affect rankings — separate from content quality, and mostly within a developer's control.

## Sitemap and Robots.txt

Confirm \`sitemap.xml\` exists, is accurate, and is submitted to Google Search Console. Confirm \`robots.txt\` isn't accidentally blocking pages you actually want indexed.

## HTTPS Everywhere

All pages should be served over HTTPS with no mixed content warnings — this has been a baseline ranking factor for years and also builds user trust.

## Canonical URLs

When the same content is reachable through multiple URLs (with and without trailing slashes, with tracking parameters), a canonical tag tells search engines which version is authoritative.

\`\`\`html
<link rel="canonical" href="https://example.com/blogs/article-slug" />
\`\`\`

## Structured Data

Adding JSON-LD structured data for articles, breadcrumbs, and organization info helps search engines display rich results and understand page context more precisely.

## Broken Links and Redirects

Regularly check for broken internal links and unnecessary redirect chains — both waste crawl budget and create a poor user experience.

## Core Web Vitals

Measure Largest Contentful Paint, Cumulative Layout Shift, and Interaction to Next Paint using tools like PageSpeed Insights — these directly factor into search rankings.

## Duplicate Content

Ensure no two pages have identical or near-identical content and metadata — a common issue on template-driven sites where the same boilerplate text gets reused across many pages.

## Conclusion

Technical SEO is a checklist, not a one-time project — regular audits catch issues (broken links, duplicate metadata, slow pages) before they meaningfully affect rankings.`,
    seoDescription:
      "A practical technical SEO checklist — sitemaps, HTTPS, canonical URLs, structured data, Core Web Vitals, and duplicate content checks.",
    focusKeyword: "technical SEO checklist",
  },

  "how-metadata-improves-seo": {
    excerpt:
      "How title tags, meta descriptions, and structured data actually influence search rankings and click-through rates.",
    content: `# How Metadata Improves SEO

Metadata doesn't directly boost rankings the way backlinks or content quality do, but it directly affects whether users click your result and how well search engines understand your page.

## Title Tags

The \`<title>\` tag is one of the strongest on-page ranking signals and the first thing users see in search results. It should be unique per page, include the primary keyword naturally, and stay under roughly 60 characters to avoid truncation.

\`\`\`html
<title>Full Stack Development Course in Bangalore | MasterPath</title>
\`\`\`

## Meta Descriptions

While meta descriptions don't directly affect rankings, they heavily influence click-through rate from search results — a compelling, specific description earns more clicks than a generic or duplicated one, even at the same ranking position.

## Open Graph Tags

Open Graph metadata controls how a page appears when shared on social platforms — a missing or generic OG image and description reduces engagement on shared links significantly.

\`\`\`html
<meta property="og:title" content="Full Stack Development Course" />
<meta property="og:image" content="/images/course-og.jpg" />
\`\`\`

## Structured Data (JSON-LD)

Structured data doesn't change rankings directly but can enable rich results — star ratings, breadcrumbs, FAQ dropdowns — that make a listing stand out visually in search results.

## The Duplication Problem

Generating metadata from a single generic template across many pages (a common mistake on programmatically generated sites) actively hurts SEO, since search engines can flag near-duplicate pages as lower quality.

## Conclusion

Metadata's real power is influencing click-through rate and how search engines interpret and display your content — treating each page's metadata as genuinely unique is one of the simplest, highest-leverage SEO fixes available.`,
    seoDescription:
      "How title tags, meta descriptions, Open Graph tags, and structured data actually influence SEO and click-through rate.",
    focusKeyword: "metadata SEO",
  },

  "core-web-vitals-and-website-performance": {
    excerpt:
      "What Core Web Vitals actually measure, why Google uses them as a ranking signal, and practical ways to improve each one.",
    content: `# Core Web Vitals and Website Performance

Core Web Vitals are a set of specific, measurable metrics Google uses to evaluate real user experience — and they factor directly into search rankings.

## Largest Contentful Paint (LCP)

Measures how long it takes for the largest visible element (often a hero image or heading) to render. A good LCP is under 2.5 seconds. Optimizing images, using \`next/image\` or similar tools, and reducing server response time are the main levers here.

## Cumulative Layout Shift (CLS)

Measures unexpected layout movement — like a page jumping when an ad or image loads without a reserved space. Always specify width and height (or aspect ratio) for images and embeds to prevent this.

\`\`\`html
<img src="hero.jpg" width="1200" height="600" alt="Course preview" />
\`\`\`

## Interaction to Next Paint (INP)

Measures how responsive a page feels when a user actually interacts with it — clicks, taps, key presses. Heavy JavaScript execution blocking the main thread is the most common cause of poor INP scores.

## Measuring Your Own Site

Tools like PageSpeed Insights and Chrome's Lighthouse report give both lab data (simulated) and field data (real user measurements) — field data is more representative of actual visitor experience.

## Why These Specific Metrics

Google chose these three because they map closely to what users actually perceive as "fast" and "stable" — not just raw load time, which doesn't capture layout jank or unresponsive interactions.

## Practical Priorities

For most sites, image optimization fixes LCP issues, reserving space for dynamic content fixes CLS, and reducing unnecessary client-side JavaScript fixes INP — a small set of fixes covers most real-world problems.

## Conclusion

Core Web Vitals turn "make the site faster" into specific, measurable targets — treating them as engineering requirements, not just a marketing metric, is what actually moves rankings.`,
    seoDescription:
      "What Core Web Vitals measure — LCP, CLS, and INP explained — and practical ways to improve each one for better rankings.",
    focusKeyword: "Core Web Vitals",
  },

  "seo-friendly-url-structure": {
    excerpt:
      "How URL structure affects SEO and usability, with practical rules for naming routes on a real website.",
    content: `# SEO Friendly URL Structure

URLs are one of the simplest SEO factors to get right, yet many sites still generate messy, unreadable ones by default — especially auto-generated CMS or e-commerce URLs.

## Use Readable, Descriptive Slugs

\`\`\`
Good:  /blogs/core-web-vitals-and-website-performance
Bad:   /blogs/post?id=48291&cat=3
\`\`\`

A readable slug tells both users and search engines what the page is about before they even click, and it's more memorable when shared.

## Keep URLs Reasonably Short

Long, keyword-stuffed URLs don't rank better and are harder to share or remember. A concise, accurate slug beats cramming in every possible keyword variation.

## Use Hyphens, Not Underscores

Search engines treat hyphens as word separators but often read underscores as connecting words together (\`core_web_vitals\` can be interpreted differently than \`core-web-vitals\`). Hyphens are the consistent standard.

## Keep a Logical, Consistent Hierarchy

\`\`\`
/courses/full-stack-development
/courses/data-analyst-training
/blogs/core-web-vitals-and-website-performance
\`\`\`

A consistent structure helps both users understand where they are on a site and helps search engines understand your site's information architecture.

## Avoid Unnecessary Parameters in Indexed URLs

Tracking parameters or session IDs in indexable URLs (\`?ref=email&session=abc123\`) can create duplicate content issues, since search engines may treat each parameter combination as a separate page unless canonical tags are used correctly.

## Redirect, Don't Break, Old URLs

When a URL structure changes, use permanent (301) redirects from old URLs to new ones — deleting old URLs without redirects loses accumulated search ranking and breaks external links pointing to your site.

## Conclusion

Good URL structure is a small, one-time engineering decision that pays off continuously in both SEO and basic usability — it's worth getting right from the start rather than fixing later.`,
    seoDescription:
      "How URL structure affects SEO — readable slugs, hyphens vs underscores, consistent hierarchy, and handling redirects correctly.",
    focusKeyword: "SEO friendly URL structure",
  },

  "frontend-vs-backend-development": {
    excerpt:
      "A clear breakdown of what frontend and backend development actually involve, and how to decide which path fits you.",
    content: `# Frontend vs Backend Development

"Frontend" and "backend" get used constantly, but the actual boundary — and what a day-to-day job in each looks like — is often unclear to beginners choosing a path.

## What Frontend Development Covers

Frontend developers build everything a user directly sees and interacts with — layout, styling, forms, animations, and client-side logic using HTML, CSS, JavaScript, and frameworks like React.

## What Backend Development Covers

Backend developers handle what happens behind the scenes — APIs, databases, authentication, business logic, and server infrastructure using languages like Node.js, Python, or Java.

## Where They Meet: APIs

The API layer is the contract between frontend and backend — the frontend sends requests, the backend processes them and returns data. Understanding this boundary well is essential even if you specialize in just one side.

## Different Day-to-Day Work

Frontend work often involves closer collaboration with designers and more visual, iterative feedback loops. Backend work tends to involve more focus on data integrity, performance, and system reliability, with less direct visual feedback.

## Skills That Differ

Frontend leans on CSS layout systems, browser rendering behavior, and UI state management. Backend leans on database design, server architecture, and security concerns like authentication and input validation.

## Full Stack: Both, at a Working Level

Full stack developers don't need to be equally expert at both — most have a stronger side — but need enough working knowledge of both to build and reason about a complete feature independently.

## Choosing a Path

If you enjoy visual feedback and design collaboration, frontend may suit you better. If you enjoy data modeling, system design, and behind-the-scenes logic, backend may fit better — though many developers only discover their preference after trying both.

## Conclusion

Neither path is "harder" or "better" — they require different strengths, and understanding both, even at a basic level, makes you a more effective developer regardless of specialization.`,
    seoDescription:
      "Frontend vs backend development explained clearly — what each role actually involves, where they meet through APIs, and how to choose a path.",
    focusKeyword: "frontend vs backend development",
  },

  "full-stack-development-roadmap": {
    excerpt:
      "A realistic, step-by-step roadmap for learning full stack development — what to learn first, and in what order it actually helps.",
    content: `# Full Stack Development Roadmap

Full stack development covers a lot of ground, and learning things in the wrong order often causes unnecessary confusion. Here's a practical sequence.

## Step 1: HTML, CSS, and JavaScript Fundamentals

Before touching any framework, get comfortable with the DOM, CSS layout (Flexbox and Grid), and core JavaScript — variables, functions, arrays, objects, and asynchronous code. Skipping this step makes every framework harder to learn later.

## Step 2: A Frontend Framework

React is the most widely used choice. Learn components, props, state, and hooks by building small real projects — not just following along with tutorials passively.

## Step 3: Version Control

Git and GitHub aren't optional extras — learn branching, committing, and resolving merge conflicts early, since every real project depends on it.

## Step 4: Backend Fundamentals

Learn Node.js and a framework like Express to build REST APIs — routing, request handling, and connecting to a database.

## Step 5: Databases

Learn relational database basics with PostgreSQL, including schema design and writing queries, before relying entirely on an ORM to abstract it away.

## Step 6: Authentication and Security Basics

Understand how login, sessions, and JWTs work, along with basic security practices like input validation and avoiding common vulnerabilities.

## Step 7: A Meta-Framework Like Next.js

Once comfortable with React and Node.js separately, Next.js ties both together with routing, server rendering, and API routes in one framework.

## Step 8: Deployment

Learn to deploy a full project — environment variables, a hosting platform, and basic monitoring — so you can ship something real, not just run it locally.

## Conclusion

This order isn't arbitrary — each step builds directly on the previous one, and jumping ahead (frameworks before fundamentals) is the most common reason beginners get stuck.`,
    seoDescription:
      "A step-by-step full stack development roadmap — the right learning order from HTML/CSS/JS fundamentals through deployment.",
    focusKeyword: "full stack development roadmap",
  },

  "how-modern-web-applications-work": {
    excerpt:
      "A behind-the-scenes look at what actually happens when you load a modern web application, from request to rendered page.",
    content: `# How Modern Web Applications Work

Loading a modern web page involves far more moving parts than the simple "browser requests a file" model of the early web. Understanding this flow clarifies a lot of confusing framework behavior.

## The Request

When you visit a URL, your browser sends an HTTP request, often first resolving DNS to find the server's IP address, then establishing a secure connection over HTTPS.

## Server-Side Processing

Depending on the architecture, the server might render HTML directly (server-side rendering), serve a pre-built static file (static generation), or return an empty shell that JavaScript fills in afterward (client-side rendering).

## The API Layer

Most modern apps separate the frontend from a backend API. The frontend fetches data from endpoints like \`/api/courses\`, which query a database and return JSON — the frontend then renders that data into UI.

\`\`\`javascript
const res = await fetch("/api/courses");
const courses = await res.json();
\`\`\`

## Hydration

For frameworks using server-side rendering, the browser receives HTML immediately but then "hydrates" it — attaching JavaScript event listeners so the page becomes interactive, not just visually complete.

## Client-Side Routing

Once loaded, navigating between pages in a single-page app often doesn't trigger a full page reload — JavaScript intercepts the navigation and swaps content directly, making transitions feel instant.

## Caching Layers

Modern apps use multiple caching layers — browser cache, CDN edge caching, and server-side caching — to avoid recomputing the same response repeatedly for every request.

## Conclusion

A "simple" page load today involves DNS resolution, server rendering decisions, API calls, hydration, and caching working together — understanding each layer makes debugging performance and behavior issues far more approachable.`,
    seoDescription:
      "A behind-the-scenes explanation of how modern web applications work — rendering, APIs, hydration, routing, and caching layers.",
    focusKeyword: "how modern web applications work",
  },

  "responsive-web-design-best-practices": {
    excerpt:
      "Practical responsive design techniques that go beyond just adding a few media queries at the end of a project.",
    content: `# Responsive Web Design Best Practices

Responsive design done well is planned from the start, not patched in with media queries after a desktop-only layout is finished.

## Mobile-First CSS

Writing base styles for mobile screens first, then adding complexity for larger screens with \`min-width\` media queries, tends to produce cleaner, more maintainable CSS than the reverse approach.

css
.card {
  padding: 1rem;
}

@media (min-width: 768px) {
  .card {
    padding: 2rem;
  }
}


## Flexible Layouts with Flexbox and Grid

Avoid fixed pixel widths for layout containers. Flexbox and CSS Grid naturally adapt to available space, reducing the number of breakpoint-specific overrides needed.

## Relative Units

Using \`rem\`, \`%\`, and \`vw/vh\` instead of hardcoded pixel values lets layouts and typography scale more naturally across device sizes and user font-size preferences.

## Responsive Images

\`\`\`html
<img srcset="small.jpg 480w, large.jpg 1200w" sizes="(max-width: 600px) 480px, 1200px" src="large.jpg" alt="Course preview" />
\`\`\`

Serving appropriately sized images per device avoids sending unnecessarily large files to mobile users on slower connections.

## Touch Targets

Interactive elements need to be large enough (roughly 44x44px minimum) for comfortable tapping — a common issue when a design is built and tested only with a mouse.

## Test on Real Devices

Browser dev tools' responsive mode is useful but doesn't fully replicate real touch behavior, actual network conditions, or device-specific rendering quirks — testing on a couple of real devices catches issues emulators miss.

## Conclusion

Responsive design isn't a final polish step — planning layouts, units, and images with multiple screen sizes in mind from the start produces far more robust results than retrofitting media queries later.`,
    seoDescription:
      "Practical responsive web design best practices — mobile-first CSS, flexible layouts, responsive images, and touch target sizing.",
    focusKeyword: "responsive web design best practices",
  },

  "website-performance-optimization-guide": {
    excerpt:
      "A practical guide to diagnosing and fixing slow websites — the highest-impact fixes, ranked by typical effort and payoff.",
    content: `# Website Performance Optimization Guide

Website performance work is most effective when you measure first, then fix the specific bottleneck — not by guessing which optimization to apply.

## Measure Before Optimizing

Run Lighthouse or PageSpeed Insights first to get an actual baseline and identify what's genuinely slow — images, JavaScript execution, or server response time each require different fixes.

## Image Optimization

Images are usually the single largest contributor to page weight. Serving modern formats (WebP or AVIF), proper sizing, and lazy-loading offscreen images typically gives the biggest quick win.

html
<img src="course.webp" loading="lazy" alt="Course preview" />


## Reduce JavaScript Bundle Size

Code splitting, removing unused dependencies, and lazy-loading non-critical components reduce how much JavaScript the browser has to download and execute before the page becomes interactive.

## Minimize Render-Blocking Resources

CSS and JavaScript that block rendering delay when users see anything at all. Deferring non-critical scripts and inlining critical CSS for above-the-fold content improves perceived load time.

## Use Caching Effectively

Setting appropriate cache headers for static assets, and using a CDN to serve them from locations closer to users, reduces repeat load times significantly.

## Optimize Server Response Time

A slow backend (unoptimized database queries, no caching layer) delays everything downstream, regardless of how optimized the frontend is — server response time is often an overlooked bottleneck.

## Monitor Continuously

Performance regresses over time as features get added. Setting up automated performance budgets in CI catches regressions before they reach production, rather than discovering them from user complaints.

## Conclusion

The highest-impact performance fixes are usually images and JavaScript bundle size — start there, measure the actual improvement, and move to more advanced optimizations only once the basics are handled.`,
    seoDescription:
      "A practical website performance optimization guide — image optimization, JavaScript bundle size, caching, and server response time.",
    focusKeyword: "website performance optimization",
  },
};

/* ------------------------------------------------------------------ */
/* Seed logic                                                          */
/* ------------------------------------------------------------------ */

async function main() {
  console.log("🌱 Starting blog seed...");

  /**
   * 0. Reset — delete all existing blogs first so the new unique
   *    content actually replaces the old boilerplate content instead
   *    of being skipped by the "already exists" check below.
   *    Categories are left in place since they're upserted safely.
   */
  const deleted = await prisma.blog.deleteMany({});
  console.log(`🗑️  Deleted ${deleted.count} existing blog(s)`);

  /**
   * 1. Create / find categories
   */
  const categoryMap = new Map<string, string>();

  for (const category of categories) {
    const existing = await prisma.category.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.description,
      },
      create: {
        name: category.name,
        slug: category.slug,
        description: category.description,
      },
    });

    categoryMap.set(category.slug, existing.id);
  }

  console.log(`✅ ${categoryMap.size} categories ready`);

  /**
   * 2. Create blogs with real, unique content per post
   */
  let created = 0;
  let skipped = 0;
  let missingCopy = 0;

  for (const [index, blog] of blogs.entries()) {
    const existing = await prisma.blog.findUnique({
      where: { slug: blog.slug },
    });

    if (existing) {
      skipped++;
      console.log(`⏭️ Skipped ${index + 1}/${blogs.length}: ${blog.title}`);
      continue;
    }

    const categoryId = categoryMap.get(blog.category);

    if (!categoryId) {
      console.log(`⚠️ Category not found for: ${blog.title}`);
      continue;
    }

    const copy = blogCopy[blog.slug];

    if (!copy) {
      missingCopy++;
      console.log(`⚠️ No unique content written yet for: ${blog.title} (slug: ${blog.slug})`);
      continue;
    }

    await BlogService.createBlog({
      title: blog.title,
      slug: blog.slug,

      excerpt: copy.excerpt,
      content: copy.content,

      featuredImage: getUnsplashImage(index),
      featuredImageAlt: `${blog.title} - MasterPath blog`,
      ogImage: getUnsplashImage(index),

      authorId: undefined,

      categoryId,

      status: "PUBLISHED",

      publishedAt: new Date(Date.now() - index * 24 * 60 * 60 * 1000),

      seoTitle: `${blog.title} | MasterPath`,
      seoDescription: copy.seoDescription,
      focusKeyword: copy.focusKeyword,

      canonicalUrl: `https://masterpath.in/blog/${blog.slug}`,

      noIndex: false,
      noFollow: false,

      tags: blog.tags,
    });

    created++;
    console.log(`✅ Created ${index + 1}/${blogs.length}: ${blog.title}`);
  }

  console.log("");
  console.log("================================");
  console.log("🎉 Blog seed completed");
  console.log("================================");
  console.log(`Created      : ${created}`);
  console.log(`Skipped      : ${skipped}`);
  console.log(`Missing copy : ${missingCopy}`);
  console.log(`Total        : ${blogs.length}`);
}

main()
  .catch((error) => {
    console.error("❌ Blog seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });