import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, ExternalLink, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "Building Secure Smart Contracts: A Complete Guide to Solidity Best Practices",
    excerpt: "Learn the essential security patterns and common vulnerabilities to avoid when developing smart contracts on Ethereum and other EVM-compatible chains.",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&auto=format&fit=crop&q=60",
    link: "#",
    featured: true,
  },
  {
    title: "Implementing Zero-Trust Architecture in Modern Web Applications",
    excerpt: "A deep dive into zero-trust security principles and how to implement them in your full-stack applications for enhanced protection.",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "Cybersecurity",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=60",
    link: "#",
    featured: true,
  },
  {
    title: "Docker Compose for Full-Stack Development: From Dev to Production",
    excerpt: "Master Docker Compose workflows to streamline your development environment and create production-ready containerized applications.",
    date: "2023-12-20",
    readTime: "10 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&auto=format&fit=crop&q=60",
    link: "#",
    featured: false,
  },
  {
    title: "Cairo Language: Building on StarkNet for Scalable dApps",
    excerpt: "An introduction to Cairo programming and how to leverage StarkNet's Layer 2 scaling solution for high-performance decentralized applications.",
    date: "2023-12-10",
    readTime: "15 min read",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1642104704074-907c0698cbd9?w=800&auto=format&fit=crop&q=60",
    link: "#",
    featured: false,
  },
  {
    title: "API Security: Authentication Patterns with Node.js and Django",
    excerpt: "Compare and implement JWT, OAuth 2.0, and session-based authentication in both Node.js and Django backends.",
    date: "2023-11-28",
    readTime: "11 min read",
    category: "Backend",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&auto=format&fit=crop&q=60",
    link: "#",
    featured: false,
  },
  {
    title: "CI/CD Pipelines: Automating Deployments with GitHub Actions",
    excerpt: "Step-by-step guide to setting up automated testing, building, and deployment workflows using GitHub Actions.",
    date: "2023-11-15",
    readTime: "9 min read",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=60",
    link: "#",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Blockchain: "bg-accent/20 text-accent",
  Cybersecurity: "bg-destructive/20 text-destructive",
  DevOps: "bg-primary/20 text-primary",
  Backend: "bg-secondary text-secondary-foreground",
};

const Blog = () => {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.filter((post) => !post.featured);

  return (
    <section id="blog" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <BookOpen className="w-4 h-4" />
            <span className="text-sm font-medium">Technical Writing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Blog & <span className="text-gradient">Articles</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Sharing knowledge through technical articles, tutorials, and insights
            on software engineering, blockchain, and cybersecurity.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                  <a
                    href={post.link}
                    className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:gap-2 transition-all"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {recentPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group p-5 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${categoryColors[post.category]}`}>
                  {post.category}
                </span>
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2 text-sm">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
                <span>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="outline" size="lg" className="group" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Articles
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
