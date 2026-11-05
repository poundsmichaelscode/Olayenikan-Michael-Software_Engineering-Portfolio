/** Public-facing statements confirmed by the portfolio owner. Avoid unverifiable dates. */
export const activeEngagements = [
  {
    organization: "TripBooka",
    position: "Freelance Full-Stack Software Engineer",
    period: "Ongoing",
    stack: ["React", "TypeScript", "Node.js", "Express"],
    overview: "Contributing to application and API workflows for a travel-oriented platform.",
    contributions: [
      "Implemented backend package draft-saving and resume workflows.",
      "Worked with authenticated API boundaries and frontend publishing journeys.",
      "Collaborated through a pull request and code review workflow."
    ],
    evidence: [{label:"Public package workflow pull request",href:"https://github.com/TripBooka/platform/pull/392"}]
  },
  {
    organization: "Markelo",
    position: "Freelance Backend Engineer",
    period: "Ongoing",
    stack: ["Python", "Django", "Django REST Framework"],
    overview: "Contributing to backend services for an institutional application.",
    contributions: [
      "Implemented invitation and account activation workflows.",
      "Worked on role-based access controls and institution scoping.",
      "Added automated tests for API permissions and authentication flows."
    ],
    evidence: [] as {label:string;href:string}[]
  }
] as const;

export const professionalFocus = [
  { heading: "Application engineering", detail: "Frontend and backend workflows built around TypeScript, React, Express and Python APIs." },
  { heading: "Backend reliability", detail: "Permission boundaries, testing, data modeling, API contracts and documentation." },
  { heading: "Cloud and delivery", detail: "Hands-on Docker, Linux, CI/CD, AWS and Azure infrastructure learning and implementation." }
] as const;
