import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";
import ProjectsDirectory from "./pages/ProjectsDirectory";
import EngineeringCaseStudy from "./pages/EngineeringCaseStudy";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SectionPreview } from "./pages/SectionPreview";

const queryClient = new QueryClient();

const pages = [
  { path: "/about", title: "About", description: "My engineering background, approach to problem solving and technical strengths." },
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
              <Route path="/projects" element={<ProjectsDirectory />} />
              <Route path="/projects/:slug" element={<EngineeringCaseStudy />} />
              {pages.map((page) => <Route key={page.path} path={page.path} element={<SectionPreview title={page.title} description={page.description} />} />)}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PortfolioLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
