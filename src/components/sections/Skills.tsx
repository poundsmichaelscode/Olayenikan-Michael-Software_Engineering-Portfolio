import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Solidity", "Cairo", "Rust", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "Django", "FastAPI", "GraphQL", "REST APIs"],
  },
  {
    title: "Blockchain",
    skills: ["Ethereum", "Starknet", "Solana", "Web3.js", "Ethers.js", "Hardhat"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "Kubernetes", "AWS", "GCP", "CI/CD", "Linux", "Nginx"],
  },
  {
    title: "Security",
    skills: ["OWASP", "Penetration Testing", "Secure Coding", "Burp Suite", "Wireshark"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    title: "Tools",
    skills: ["Git", "VS Code", "Postman", "Figma", "Jira", "Notion"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium mb-4 block">Skills & Technologies</span>
          <h2 className="section-heading">Tech Stack & Expertise</h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit spanning the full development spectrum, from user interfaces to blockchain infrastructure.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glow-card p-6"
            >
              <h3 className="font-semibold text-lg mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
