import { motion } from "framer-motion";
import { Code2, Shield, Blocks, Server, Terminal, Pen } from "lucide-react";

const specializations = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Crafting responsive, accessible, and performant user interfaces with React and modern frameworks.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Building robust APIs and services with Node.js, Django, and scalable architecture patterns.",
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    description: "Developing smart contracts with Solidity, Cairo, and Rust for decentralized applications.",
  },
  {
    icon: Terminal,
    title: "DevOps & Infrastructure",
    description: "Automating deployments, managing cloud infrastructure, and ensuring system reliability.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Implementing secure coding practices and conducting security assessments.",
  },
  {
    icon: Pen,
    title: "Technical Writing",
    description: "Creating clear documentation, tutorials, and educational content for developers.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column - Profile Image & Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative mx-auto lg:mx-0 w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-accent opacity-20 blur-xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <img
                  src="/profile.jpg"
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.src = "/favicon.io.svg";
                  }}
                />
              </div>
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-accent"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />
            </motion.div>

            <div>
              <span className="text-primary font-medium mb-4 block">About Me</span>
              <h2 className="section-heading">
                Passionate about building{" "}
                <span className="gradient-text">secure & scalable</span> solutions
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm Olayenikan Michael a Full-Stack Software Engineer with a deep passion for creating 
                  impactful digital experiences. With expertise spanning frontend and 
                  backend development, blockchain technology, and cybersecurity, I bring 
                  a holistic approach to every project.
                </p>
                <p>
                  My journey in tech has taken me through building enterprise applications, 
                  developing decentralized systems, and implementing security-first 
                  architectures. I believe in writing clean, maintainable code that 
                  stands the test of time.
                </p>
                <p>
                  When I'm not coding, you'll find me contributing to open-source projects, 
                  writing technical articles, or exploring the latest advancements in 
                  blockchain and security technologies.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Specializations grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glow-card p-5"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <spec.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{spec.title}</h3>
                <p className="text-sm text-muted-foreground">{spec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
