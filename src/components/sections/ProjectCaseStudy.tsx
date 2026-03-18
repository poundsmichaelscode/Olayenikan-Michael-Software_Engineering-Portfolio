import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, CheckCircle2, Lightbulb, Target, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ProjectDetail {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  live: string;
  featured: boolean;
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    keyFeatures: string[];
    outcomes: string[];
    role: string;
    duration: string;
  };
}

interface ProjectCaseStudyProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectCaseStudy = ({ project, isOpen, onClose }: ProjectCaseStudyProps) => {
  if (!project || !isOpen) return null;

  const caseStudy = project.caseStudy;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-background/80 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full max-w-4xl bg-card border border-border rounded-2xl shadow-2xl my-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-muted/80 backdrop-blur-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Hero image */}
            <div className="relative h-56 md:h-72 overflow-hidden rounded-t-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-16">
                <h2 className="text-2xl md:text-3xl font-bold font-heading text-foreground">
                  {project.title}
                </h2>
                {caseStudy && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {caseStudy.role} · {caseStudy.duration}
                  </p>
                )}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8 space-y-8">
              {/* Tech stack */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              {/* Overview */}
              <div>
                <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                  <Layers className="w-5 h-5 text-primary" />
                  Project Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {caseStudy?.overview || project.description}
                </p>
              </div>

              {caseStudy && (
                <>
                  {/* Challenge */}
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                      <Target className="w-5 h-5 text-destructive" />
                      The Challenge
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                      <Lightbulb className="w-5 h-5 text-accent" />
                      The Solution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-foreground mb-3">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      Key Features
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {caseStudy.keyFeatures.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      📊 Results & Outcomes
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {caseStudy.outcomes.map((outcome, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-muted/50 border border-border text-sm text-muted-foreground"
                        >
                          {outcome}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-4 border-t border-border">
                <Button asChild>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Live Demo
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProjectCaseStudy;
