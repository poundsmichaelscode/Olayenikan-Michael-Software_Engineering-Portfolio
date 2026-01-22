import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar, Building2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com/certification/",
    category: "Cloud",
    badge: "Professional",
  },
  {
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
    credentialUrl: "https://www.cncf.io/certification/cka/",
    category: "DevOps",
    badge: "CKA",
  },
  {
    title: "Certified Ethical Hacker (CEH)",
    issuer: "EC-Council",
    date: "2023",
    credentialUrl: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
    category: "Security",
    badge: "CEH",
  },
  {
    title: "Meta Front-End Developer",
    issuer: "Meta (Coursera)",
    date: "2023",
    credentialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    category: "Frontend",
    badge: "Professional",
  },
  {
    title: "Blockchain Developer Nanodegree",
    issuer: "Udacity",
    date: "2023",
    credentialUrl: "https://www.udacity.com/course/blockchain-developer-nanodegree--nd1309",
    category: "Blockchain",
    badge: "Nanodegree",
  },
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    date: "2023",
    credentialUrl: "https://www.comptia.org/certifications/security",
    category: "Security",
    badge: "SY0-601",
  },
];

const courses = [
  {
    title: "Advanced Solidity & Smart Contract Security",
    platform: "Cyfrin Updraft",
    completed: "2024",
    url: "https://updraft.cyfrin.io/",
  },
  {
    title: "Cairo Programming for Blockchain",
    platform: "Starknet",
    completed: "2024",
    url: "https://starknet.io/",
  },
  {
    title: "Rust for Systems Programming",
    platform: "The Rust Foundation",
    completed: "2023",
    url: "https://www.rust-lang.org/learn",
  },
  {
    title: "DevSecOps Professional",
    platform: "Practical DevSecOps",
    completed: "2023",
    url: "https://www.practical-devsecops.com/",
  },
];

const categoryColors: Record<string, string> = {
  Cloud: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  DevOps: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Security: "bg-red-500/20 text-red-400 border-red-500/30",
  Frontend: "bg-green-500/20 text-green-400 border-green-500/30",
  Blockchain: "bg-amber-500/20 text-amber-400 border-amber-500/30",
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            <Award className="w-3 h-3 mr-1" />
            Credentials
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Training</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements that validate my expertise
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-6"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              Professional Certifications
            </h3>
            <a
              href="https://www.linkedin.com/in/yourprofile/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              View More
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.a
                key={cert.title}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[cert.category]}`}>
                    {cert.category}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h4>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Building2 className="w-4 h-4" />
                  {cert.issuer}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {cert.badge}
                  </Badge>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Online Courses */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-between mb-6"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path d="M12 14v7" />
              </svg>
              Professional Training & Courses
            </h3>
            <a
              href="https://www.linkedin.com/in/yourprofile/details/courses/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              View More
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
          
          
          <div className="grid md:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <motion.a
                key={course.title}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex items-center justify-between bg-card/50 border border-border rounded-lg p-4 hover:border-primary/50 hover:bg-card transition-all duration-300"
              >
                <div>
                  <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {course.platform} • {course.completed}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
