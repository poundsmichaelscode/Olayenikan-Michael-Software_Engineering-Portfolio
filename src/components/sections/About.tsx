import { motion } from "framer-motion";
import { Code2, Shield, Server, Terminal, Pen, Smartphone } from "lucide-react";

const specializations = [
  {
    icon: Code2,
    title: "Frontend Engineering",
    description: "Building responsive, accessible UIs with React, Next.js, and modern CSS frameworks.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust APIs and services with Django, FastAPI, Node.js, and Express.",
  },
  {
    icon: Smartphone,
    title: "MERN Stack",
    description: "Full-stack applications with MongoDB, Express, React, and Node.js.",
  },
  {
    icon: Terminal,
    title: "DevOps & Infrastructure",
    description: "CI/CD pipelines, Docker, cloud deployments, and automated infrastructure.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Secure coding practices, threat detection, and security-first architecture.",
  },
  {
    icon: Pen,
    title: "Technical Writing",
    description: "Clear documentation, tutorials, and developer-focused educational content.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left column */}
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
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-primary/20 shadow-lg">
                <img
                  src="/profile.jpg"
                  alt="Olayenikan Michael"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "/public/profile_image.png";
                  }}
                />
              </div>
              {/* <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              /> */}
              {/* <motion.div
                className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-accent"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              /> */}
            </motion.div>

            <div>
              <span className="text-primary font-medium mb-4 block">About Me</span>
              <h2 className="section-heading">
                Building production-ready software, end to end
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                 Hi, I'm Olayenikan Michael, a Full-Stack Software Engineer based in Lagos, Nigeria, 
                 passionate about building scalable, secure, and user-focused digital solutions.

                </p>
                <p>I specialize in modern web technologies,the MERN stack, including Django, FastAPI,Postgress , 
                  and contemporary frontend frameworks. My experience spans fintech applications, 
                  creator platforms, cybersecurity dashboards, AI-powered tools, and business management systems.
                  </p>
                <p>
                 I enjoy transforming complex ideas into reliable products with clean architecture, efficient APIs, 
                 intuitive user experiences, and robust DevOps practices. My approach combines performance, 
                 scalability, and security to deliver solutions that create real value for users and businesses.
                </p>
                <p>
                  Beyond development, I actively contribute to open-source projects, create technical content, 
                  and explore emerging technologies that improve development workflows and software delivery.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right column - Specializations */}
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
