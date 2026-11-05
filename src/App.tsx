import { type ReactNode } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";
import { RouteMetadata } from "@/components/layout/RouteMetadata";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProjectsDirectory from "./pages/ProjectsDirectory";
import EngineeringCaseStudy from "./pages/EngineeringCaseStudy";
import ExperiencePage from "./pages/ExperiencePage";
import EducationPage from "./pages/EducationPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

/**
 * Share the exact rendered tree between static generation and browser hydration.
 * Eager route imports are intentional until per-route hydration can be safely
 * split without introducing Suspense mismatches.
 */
export function PortfolioProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export function PortfolioAppContent() {
  return (
    <PortfolioLayout>
      <RouteMetadata />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsDirectory />} />
        <Route path="/projects/:slug" element={<EngineeringCaseStudy />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PortfolioLayout>
  );
}

export default function App() {
  return (
    <PortfolioProviders>
      <BrowserRouter>
        <PortfolioAppContent />
      </BrowserRouter>
    </PortfolioProviders>
  );
}
