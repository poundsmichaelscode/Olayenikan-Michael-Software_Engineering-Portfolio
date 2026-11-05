import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { SITE_ORIGIN, getPageMeta } from "@/content/seo";

function setMetaContent(selector: string, content: string) {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = content;
}

export function RouteMetadata() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getPageMeta(pathname);
    const canonicalPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
    const url = SITE_ORIGIN + canonicalPath;

    document.title = meta.title;
    setMetaContent('meta[name="description"]', meta.description);
    setMetaContent('meta[property="og:title"]', meta.title);
    setMetaContent('meta[property="og:description"]', meta.description);
    setMetaContent('meta[property="og:url"]', url);
    setMetaContent('meta[name="twitter:title"]', meta.title);
    setMetaContent('meta[name="twitter:description"]', meta.description);

    const isProductionHost = window.location.hostname === new URL(SITE_ORIGIN).hostname;
    setMetaContent('meta[name="robots"]', meta.indexable === false || !isProductionHost ? "noindex, nofollow" : "index, follow");

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;
  }, [pathname]);

  return null;
}
