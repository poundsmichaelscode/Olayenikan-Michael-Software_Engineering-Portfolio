import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";
import { featuredProjectNames, featuredProjectSlugs } from "@/content/site";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SectionPreview } from "./pages/SectionPreview";

const queryClient = new QueryClient();

const pages = [
  { path: "/about", title: "About", description: "My engineering background, approach to problem solving and technical strengths." },
  { path: "/projects", title: "Engineering Projects", description: "A source-supported portfolio of backend, full-stack, DevOps and cloud infrastructure work." },
  { path: "/experience", title: "Professional Experience", description: "Confirmed engagements, active freelance work and my engineering journey." },
  { path: "/education", title: "Education & Training", description: "Formal qualifications, completed technical programmes and ongoing hands-on labs." },
  { path: "/blog", title: "Engineering Writing", description: "Technical articles grounded in real software and infrastructure work." },
  { path: "/contact", title: "Contact", description: "Get in touch about engineering roles, freelance projects and collaborations." },
] as const;

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PortfolioLayout>
            <Routes>
              <Route path="/" element={<Index />} />
              {pages.map((page) => <Route key={page.path} path={page.path} element={<SectionPreview title={page.title} description={page.description} />} />)}
              {featuredProjectSlugs.map((slug) => <Route key={slug} path={`/projects/${slug}`} element={<SectionPreview title={featuredProjectNames[slug]} description="Technical case study: implementation evidence and architecture diagrams will be reviewed in the projects milestone." />} />)}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PortfolioLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
