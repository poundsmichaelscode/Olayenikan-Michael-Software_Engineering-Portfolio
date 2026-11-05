import { engineeringProjects } from "@/content/engineeringProjects";

export const SITE_ORIGIN = "https://olayenikan-michael-software-enginee.vercel.app";

type PageMeta = { title: string; description: string; indexable?: boolean };
export const seoPages: Record<string, PageMeta> = {
  "/": {
    title: "Olayenikan Michael | Full-Stack Software Engineer",
    description: "Explore Olayenikan Michael's full-stack, backend, DevOps and cloud engineering projects, with source-backed technical case studies."
  },
  "/about": {
    title: "About | Olayenikan Michael",
    description: "My path from networking and security to full-stack, backend, DevOps and cloud engineering."
  },
  "/projects": {
    title: "Engineering Projects | Olayenikan Michael",
    description: "Review source-backed full-stack, backend, API gateway and AWS infrastructure projects."
  },
  "/experience": {
    title: "Engineering Experience | Olayenikan Michael",
    description: "Full-stack, backend, web development and infrastructure experience, with clearly labeled historical roles."
  },
  "/education": {
    title: "Education and Technical Training | Olayenikan Michael",
    description: "Academic education, completed technical training programmes and ongoing cloud learning."
  },
  "/blog": {
    title: "Engineering Notes | Olayenikan Michael",
    description: "Technical topics grounded in documented backend, API and cloud infrastructure case studies."
  },
  "/contact": {
    title: "Contact | Olayenikan Michael",
    description: "Get in touch about full-stack, backend, DevOps and cloud engineering opportunities."
  }
};

for (const project of engineeringProjects) {
  seoPages[`/projects/${project.slug}`] = {
    title: `${project.title} Case Study | Olayenikan Michael`,
    description: project.summary
  };
}

const unknownPage: PageMeta = {
  title: "Page Not Found | Olayenikan Michael",
  description: "This page does not exist. Explore Olayenikan Michael's engineering portfolio.",
  indexable: false
};

export function getPageMeta(pathname: string): PageMeta {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return seoPages[path] ?? unknownPage;
}

