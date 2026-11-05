import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { PortfolioLayout } from "@/components/layout/PortfolioLayout";
import Index from "@/pages/Index";
import AboutPage from "@/pages/AboutPage";
import ProjectsDirectory from "@/pages/ProjectsDirectory";
import EngineeringCaseStudy from "@/pages/EngineeringCaseStudy";
import ExperiencePage from "@/pages/ExperiencePage";
import EducationPage from "@/pages/EducationPage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";

/**
 * Synchronous static page renderer used at build time only.
 * Do not use client-side lazy route components here: React 18 renderToString
 * would otherwise output Suspense fallbacks instead of the route content.
 */
export function renderStaticPage(route: string): string {
  return renderToString(
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <StaticRouter location={route}>
        <PortfolioLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsDirectory />} />
            <Route path="/projects/:slug" element={<EngineeringCaseStudy />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </PortfolioLayout>
      </StaticRouter>
    </ThemeProvider>
  );
}
