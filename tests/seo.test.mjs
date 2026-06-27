import assert from "node:assert/strict";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";

const root = process.cwd();

const read = (filePath) => readFileSync(path.join(root, filePath), "utf8");

describe("SEO regressions", () => {
  it("uses apartamentykrynickie.pl as the canonical metadata base", () => {
    const layout = read("src/app/layout.tsx");

    assert.match(
      layout,
      /metadataBase:\s*new URL\("https:\/\/apartamentykrynickie\.pl"\)/,
    );
    assert.match(layout, /alternates:\s*{[^}]*canonical:\s*"\/"/s);
    assert.doesNotMatch(
      layout,
      /apartamentykrynickie\.vercel\.app|localhost:3000/,
    );
    assert.match(layout, /url:\s*"https:\/\/apartamentykrynickie\.pl"/);
  });

  it("defines social images that resolve through the production metadata base", () => {
    const layout = read("src/app/layout.tsx");

    assert.match(layout, /images:\s*\[\s*{[^}]*url:\s*"\/magnolia\/2\.webp"/s);
    assert.match(
      layout,
      /twitter:\s*{[\s\S]*images:\s*\["\/magnolia\/2\.webp"\]/,
    );
  });

  it("uses App Router metadata instead of next/head", () => {
    const layout = read("src/app/layout.tsx");

    assert.doesNotMatch(layout, /next\/head|<Head>/);
    assert.match(layout, /icons:\s*{/);
  });

  it("has a valid sitemap root with canonical apartment routes", () => {
    const sitemap = read("public/sitemap.xml").trim();

    assert.ok(sitemap.startsWith('<?xml version="1.0" encoding="UTF-8"?>'));
    assert.match(
      sitemap,
      /<urlset xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/,
    );
    assert.doesNotMatch(sitemap, /<xml[\s>]/);
    assert.match(sitemap, /<loc>https:\/\/apartamentykrynickie\.pl\/<\/loc>/);
    assert.match(
      sitemap,
      /<loc>https:\/\/apartamentykrynickie\.pl\/magnolia<\/loc>/,
    );
    assert.match(
      sitemap,
      /<loc>https:\/\/apartamentykrynickie\.pl\/storczyk<\/loc>/,
    );
  });

  it("publishes canonical apartment route files and llms.txt", () => {
    assert.ok(existsSync(path.join(root, "src/app/magnolia/page.tsx")));
    assert.ok(existsSync(path.join(root, "src/app/storczyk/page.tsx")));

    const llms = read("public/llms.txt");
    assert.match(llms, /https:\/\/apartamentykrynickie\.pl\/magnolia/);
    assert.match(llms, /https:\/\/apartamentykrynickie\.pl\/storczyk/);
    assert.match(llms, /Kontakt/);
  });

  it("emits structured data for lodging, offers, FAQs, images, and breadcrumbs", () => {
    const pageSources = [
      read("src/app/page.tsx"),
      existsSync(path.join(root, "src/app/components/StructuredData.tsx"))
        ? read("src/app/components/StructuredData.tsx")
        : "",
    ].join("\n");

    assert.match(pageSources, /application\/ld\+json/);
    assert.match(pageSources, /LodgingBusiness/);
    assert.match(pageSources, /Offer/);
    assert.match(pageSources, /FAQPage/);
    assert.match(pageSources, /ImageObject/);
    assert.match(pageSources, /BreadcrumbList/);
  });

  it("does not reference the broken external About image", () => {
    const about = read("src/app/components/About.tsx");

    assert.doesNotMatch(about, /exterior2\.aeed3751\.jpg/);
    assert.doesNotMatch(about, /src="https:\/\/www\.lawendakrynicka\.pl/);
  });

  it("uses descriptive image alt text for apartment figures and gallery photos", () => {
    const mainFigure = read("src/app/components/MainFigure.tsx");
    const magnolia = read("src/app/magnoliaConfig.tsx");

    assert.doesNotMatch(mainFigure, /alt="logo"/);
    assert.match(mainFigure, /altText/);
    assert.match(mainFigure, /figure className="relative h-full w-full"/);
    assert.doesNotMatch(magnolia, /Mangolia/);
    assert.match(magnolia, /Apartament Magnolia/);
  });

  it("keeps the heavy gallery client code out of the initial server component import graph", () => {
    const layout = read("src/app/components/ApartamentLayout.tsx");
    const lazyGallery = read("src/app/components/LazyGallery.tsx");
    const gallery = read("src/app/components/Gallery.tsx");

    assert.doesNotMatch(layout, /import\s+{\s*Gallery\s*}\s+from/);
    assert.match(layout, /LazyGallery/);
    assert.match(lazyGallery, /dynamic\(/);
    assert.match(gallery, /lazyLoad|loading/);
  });

  it("keeps local WebP photo payloads within a crawler-friendly budget", () => {
    const imageBytes = ["public/magnolia", "public/storczyk"].flatMap(
      (folder) =>
        readdirSync(path.join(root, folder))
          .filter((fileName) => fileName.endsWith(".webp"))
          .map((fileName) => statSync(path.join(root, folder, fileName)).size),
    );

    const totalBytes = imageBytes.reduce((sum, size) => sum + size, 0);
    const maxImageBytes = Math.max(...imageBytes);

    assert.ok(
      totalBytes <= 10 * 1024 * 1024,
      `total WebP bytes: ${totalBytes}`,
    );
    assert.ok(
      maxImageBytes <= 900 * 1024,
      `largest WebP bytes: ${maxImageBytes}`,
    );
  });

  it("wires analytics, Search Console verification, and contact conversion tracking", () => {
    const packageJson = JSON.parse(read("package.json"));
    const layout = read("src/app/layout.tsx");
    const trackedContactLink = existsSync(
      path.join(root, "src/app/components/TrackedContactLink.tsx"),
    )
      ? read("src/app/components/TrackedContactLink.tsx")
      : "";

    assert.ok(packageJson.dependencies["@vercel/analytics"]);
    assert.match(layout, /@vercel\/analytics\/next/);
    assert.match(layout, /<Analytics \/>/);
    assert.match(layout, /NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION/);
    assert.match(trackedContactLink, /track\("contact_click"/);
  });
});
