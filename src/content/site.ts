/** Approved public identity, separate from still-unverified legacy content. */
export const portfolioIdentity = {
  name: "Olayenikan Michael",
  title: "Full-Stack Software Engineer",
  specializations: ["Backend Engineering", "DevOps", "Cloud Infrastructure"],
  introduction: "I build beyond the interface — developing applications, backend systems, and the infrastructure that supports them.",
  email: "olayenikanmichaelolaniyi@gmail.com",
  location: "Lagos, Nigeria",
  github: "https://github.com/poundsmichaelscode",
  linkedin: "https://www.linkedin.com/in/olayenikan-michael/",
} as const;

export const portfolioNavigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Education", href: "/education" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const featuredProjectSlugs = ["routewell", "skillproof-api", "api-gateway", "cloudpress-aws"] as const;
export type FeaturedProjectSlug = (typeof featuredProjectSlugs)[number];
export const featuredProjectNames: Record<FeaturedProjectSlug, string> = {
  routewell: "RouteWell",
  "skillproof-api": "SkillProof API",
  "api-gateway": "API Gateway Service",
  "cloudpress-aws": "CloudPress AWS",
};
