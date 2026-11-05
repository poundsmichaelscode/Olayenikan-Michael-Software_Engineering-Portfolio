/**
 * Audit an explicitly supplied Vercel preview URL without publishing anything.
 * Run: PREVIEW_URL=https://your-branch-preview.vercel.app node scripts/audit-vercel-preview.mjs
 *
 * Uses Node 22 fetch, no browser credentials, no production hostname.
 */
const BASE = process.env.PREVIEW_URL;
const CANONICAL = "https://olayenikan-michael-software-enginee.vercel.app";
const pages = [
  ["/", "Olayenikan Michael"],
  ["/about", "About Olayenikan Michael"],
  ["/projects", "Engineering Projects"],
  ["/projects/routewell", "RouteWell"],
  ["/projects/skillproof-api", "SkillProof API"],
  ["/projects/api-gateway", "API Gateway Service"],
  ["/projects/cloudpress-aws", "CloudPress AWS"],
  ["/experience", "Experience & Engineering Focus"],
  ["/education", "Education & Technical Training"],
  ["/blog", "Engineering Notes"],
  ["/contact", "Let's work together"]
];

function assert(condition, message) {
  if (!condition) throw Error(message);
}
function decodeBasicEntities(input) {
  return input.replace(/&#(?:x([\da-f]+)|(\d+));/gi, (_,hex,decimal) =>
    String.fromCodePoint(parseInt(hex || decimal, hex ? 16 : 10))
  ).replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&apos;/g,"'");
}
function tagAttr(html, tag, selector, name) {
  const tags = html.match(new RegExp(`<${tag}\\b[^>]*>`, "gi")) || [];
  const candidate = tags.find((t) => selector.every(([key,value]) =>
    new RegExp(`\\b${key}=["']${value}["']`, "i").test(t)
  ));
  if (!candidate) return null;
  const match = candidate.match(new RegExp(`\\b${name}=["']([^"']*)["']`, "i"));
  return match ? decodeBasicEntities(match[1]) : null;
}
async function audit() {
  assert(BASE, "PREVIEW_URL is required; no automatic production audit or deployment is performed.");
  const url = new URL(BASE);
  assert(url.protocol === "https:", "Preview URL must use HTTPS.");
  assert(url.hostname.endsWith(".vercel.app"), "Only branch preview URLs under vercel.app are accepted.");
  assert(url.origin !== CANONICAL, "Production canonical domain is excluded from preview audits.");
  assert(url.pathname === "/" || url.pathname === "", "PREVIEW_URL must be a preview hostname, without a path.");
  let passed = 0;
  for (const [route, expected] of pages) {
    const target = url.origin + route;
    const response = await fetch(target, { headers: { Accept: "text/html" }, redirect: "follow", signal: AbortSignal.timeout(20000) });
    assert(response.status === 200, `${route}: HTTP ${response.status}. A protected preview may require an authenticated browser; do not disable protection just to satisfy this script.`);
    assert(response.url.startsWith(url.origin + "/") || response.url === url.origin, `${route}: redirected outside preview origin`);
    assert((response.headers.get("content-type") || "").includes("text/html"), `${route}: response is not HTML`);
    const html = await response.text();
    const headingMatch = html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i);
    const heading = decodeBasicEntities((headingMatch?.[1] || "").replace(/<[^>]+>/g,"").trim());
    assert(heading.includes(expected), `${route}: prerendered H1 missing (received: ${heading.slice(0,80)})`);
    const title = decodeBasicEntities(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || "");
    assert(title.includes("Olayenikan Michael"), `${route}: missing unique title`);
    const description = tagAttr(html,"meta",[["name","description"]],"content");
    assert(description && description.length > 40, `${route}: missing route description`);
    const canonical = tagAttr(html,"link",[["rel","canonical"]],"href");
    assert(canonical === CANONICAL + route, `${route}: unexpected canonical ${canonical}`);
    const robots = tagAttr(html,"meta",[["name","robots"]],"content");
    assert(robots === "noindex, nofollow", `${route}: preview must be noindex (received: ${robots})`);
    const xRobots = response.headers.get("x-robots-tag");
    if (xRobots) assert(!/\bindex\b/i.test(xRobots.replace(/noindex/gi,"")), `${route}: unexpected X-Robots-Tag header`);
    console.log(`PASS preview ${route}: prerendered H1, metadata, canonical, noindex`);
    passed++;
  }
  console.log(`PASS ${passed} preview pages. Requires separate visual, authenticated and accessibility review.`);
}
audit().catch((error) => { console.error("PREVIEW AUDIT FAILED:",error.message); process.exitCode = 1; });
