import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./styles/portfolio-foundation.css";

const container = document.getElementById("root");
if (!container) throw new Error("Missing root element");

if (container.hasChildNodes()) {
  hydrateRoot(container, <App />, {
    onRecoverableError: (error) => {
      console.error("Portfolio hydration recovery:", error);
    },
  });
} else {
  // SPA fallback for unknown routes and local development without prerendered HTML.
  createRoot(container).render(<App />);
}
