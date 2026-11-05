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

/**
 * Historical roles supplied in earlier career discussions and now approved for
 * inclusion. Exact dates/titles have not been independently verified.
 * Treat these as self-reported and keep verification notes visible.
 */
export const historicalEngagements = [
  {
    organization: "Bincom Solutions",
    position: "DevOps / Infrastructure Apprentice",
    period: "2026 onward (dates to confirm)",
    overview: "Hands-on systems administration and DevOps apprenticeship work, including local application infrastructure, containerized services and deployment documentation.",
    contributions: [
      "Worked with Docker Compose, PostgreSQL, reverse proxies and service health checks.",
      "Practiced backup and recovery workflows, Linux deployment preparation and infrastructure handover documentation."
    ],
    stack: ["Docker", "Linux", "PostgreSQL", "DevOps"],
    verification: "Confirm formal title, start date and current engagement status."
  },
  {
    organization: "Enoverlab / EduHive",
    position: "Backend Developer / DevOps Engineer",
    period: "2025 (dates to confirm)",
    overview: "Worked on backend services and containerized development workflows for the EduHive education technology platform.",
    contributions: [
      "Developed backend services with Node.js, TypeScript and Express.",
      "Worked with Docker-based application workflows and backend deployment concerns."
    ],
    stack: ["Node.js", "TypeScript", "Express", "Docker"],
    verification: "Confirm employer naming, exact role, dates and responsibilities."
  },
  {
    organization: "Moedify Agency",
    position: "Web Developer",
    period: "2023–2026 (dates to confirm)",
    overview: "Web development work spanning websites and application interface delivery.",
    contributions: [
      "Contributed to website and frontend implementation.",
      "Worked with clients and evolving web development requirements."
    ],
    stack: ["Web Development", "Frontend"],
    verification: "Confirm employment or contract arrangement, dates and scope."
  },
  {
    organization: "Pantech ProEd",
    position: "Full-Stack Development Intern",
    period: "2024–2025 (dates to confirm)",
    overview: "Remote software development internship focused on practical application development.",
    contributions: [
      "Practiced frontend and backend implementation within a software engineering learning environment.",
      "Built familiarity with application development and team workflows."
    ],
    stack: ["Full-Stack Development", "Web Applications"],
    verification: "Confirm institution name, dates and exact internship responsibilities."
  },
  {
    organization: "Nerdeye",
    position: "Frontend Developer (Contract)",
    period: "2024 (dates to confirm)",
    overview: "Contract frontend development work with an emphasis on web interfaces.",
    contributions: [
      "Contributed to frontend interface development.",
      "Worked on user-facing application features."
    ],
    stack: ["Frontend", "Web Interfaces"],
    verification: "Confirm formal role title, contract dates and technologies used."
  },
  {
    organization: "SON IT",
    position: "Network Support Intern",
    period: "2021 (dates to confirm)",
    overview: "IT network support internship that developed foundational infrastructure and troubleshooting experience.",
    contributions: [
      "Supported networking and IT operations.",
      "Gained hands-on exposure to troubleshooting and infrastructure support."
    ],
    stack: ["Networking", "IT Support"],
    verification: "Confirm organization naming and internship dates."
  },
  {
    organization: "CVIT Nigeria",
    position: "Networking / Data Security Intern",
    period: "May–November 2020 (self-reported)",
    overview: "On-site networking, data security and cybersecurity apprenticeship in Lagos.",
    contributions: [
      "Built practical foundations in networking, systems and security support.",
      "Participated in hands-on network and data security learning activities."
    ],
    stack: ["Networking", "Data Security", "Cybersecurity"],
    verification: "Confirm exact employer-formatted title and dates before external publication."
  }
] as const;

export const professionalFocus = [
  { heading: "Application engineering", detail: "Frontend and backend workflows built around TypeScript, React, Express and Python APIs." },
  { heading: "Backend reliability", detail: "Permission boundaries, testing, data modeling, API contracts and documentation." },
  { heading: "Cloud and delivery", detail: "Hands-on Docker, Linux, CI/CD, AWS and Azure infrastructure learning and implementation." }
] as const;
