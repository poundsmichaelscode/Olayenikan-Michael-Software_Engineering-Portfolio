import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    title: "Senior Full-Stack Developer",
    company: "TechCorp Global",
    companyUrl: "https://example.com",
    location: "San Francisco, CA (Remote)",
    period: "2023 - Present",
    type: "Full-time",
    description:
      "Leading development of enterprise-scale web applications and mentoring junior developers. Architecting microservices and implementing CI/CD pipelines.",
    achievements: [
      "Reduced application load time by 60% through performance optimization",
      "Led migration from monolith to microservices architecture",
      "Mentored team of 5 junior developers",
      "Implemented automated testing increasing code coverage to 90%",
    ],
    technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
  },
  {
    title: "Blockchain Developer",
    company: "Web3 Innovations",
    companyUrl: "https://example.com",
    location: "New York, NY",
    period: "2022 - 2023",
    type: "Full-time",
    description:
      "Developed and audited smart contracts for DeFi protocols. Built decentralized applications with focus on security and gas optimization.",
    achievements: [
      "Developed smart contracts handling $10M+ in TVL",
      "Conducted 15+ security audits for external clients",
      "Reduced gas costs by 40% through contract optimization",
      "Built NFT marketplace with lazy minting feature",
    ],
    technologies: ["Solidity", "Hardhat", "Ethers.js", "React", "The Graph"],
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Agency",
    companyUrl: "https://example.com",
    location: "Austin, TX",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Delivered end-to-end web solutions for diverse clients ranging from startups to enterprises. Focused on scalable architectures and modern tech stacks.",
    achievements: [
      "Delivered 20+ client projects on time and within budget",
      "Implemented payment systems processing $500K+ monthly",
      "Built real-time collaboration features for SaaS platform",
      "Established coding standards and review processes",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Redis", "Stripe"],
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Hub",
    companyUrl: "https://example.com",
    location: "Remote",
    period: "2019 - 2020",
    type: "Full-time",
    description:
      "Started career building responsive websites and learning modern web development practices. Collaborated with designers and product teams.",
    achievements: [
      "Developed 10+ responsive landing pages",
      "Integrated third-party APIs and payment gateways",
      "Learned agile methodologies and version control",
      "Contributed to open-source projects",
    ],
    technologies: ["JavaScript", "React", "CSS", "Node.js", "Git"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            <Briefcase className="w-3 h-3 mr-1" />
            Career Journey
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey through various roles, building expertise in full-stack development and blockchain technology
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30 z-10" />

              {/* Content card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors font-medium"
                      >
                        {exp.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {exp.type}
                    </Badge>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded-md bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
