/**
 * Reproducible Lighthouse measurements for a locally served production build.
 * Scores are observations, not release gates until a baseline is reviewed.
 */
module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run preview -- --host 127.0.0.1 --port 4173 --strictPort",
      startServerReadyPattern: "Local:",
      startServerReadyTimeout: 45000,
      url: [
        "http://127.0.0.1:4173/",
        "http://127.0.0.1:4173/projects",
        "http://127.0.0.1:4173/contact"
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: "--headless --no-sandbox --disable-dev-shm-usage",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"]
      }
    },
    upload: {
      target: "filesystem",
      outputDir: "./lhci-results"
    }
  }
};
