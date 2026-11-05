import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { PortfolioProviders, PortfolioAppContent } from "./App";

/** The server and the browser now render the same route/provider tree. */
export function renderStaticPage(route: string): string {
  return renderToString(
    <PortfolioProviders>
      <StaticRouter location={route}>
        <PortfolioAppContent />
      </StaticRouter>
    </PortfolioProviders>
  );
}
