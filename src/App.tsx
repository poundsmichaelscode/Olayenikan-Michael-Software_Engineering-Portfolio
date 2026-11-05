import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";
import { RouteMetadata } from "@/components/layout/RouteMetadata";
const ProjectsDirectory = lazy(() => import("./pages/ProjectsDirectory"));
const EngineeringCaseStudy = lazy(() => import("./pages/EngineeringCaseStudy"));
const ExperiencePage = lazy(() => import("./pages/ExperiencePage"));
const EducationPage = lazy(() => import("./pages/EducationPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PortfolioLayout>
            <RouteMetadata />
            <Suspense fallback={<div className="section-container min-h-[40vh]" role="status" aria-live="polite">Loading page…</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<ProjectsDirectory />} />
              <Route path="/projects/:slug" element={<EngineeringCaseStudy />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            </Suspense>
          </PortfolioLayout>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
