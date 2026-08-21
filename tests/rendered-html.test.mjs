import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://iungx.space/", {
      headers: { accept: "text/html", host: "iungx.space" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the IungX website", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  const head = html.slice(0, html.indexOf("</head>"));
  assert.match(html, /<title>IungX — Technology built for business<\/title>/i);
  assert.match(html, /From the terminal to the/);
  assert.match(html, /Systems implementation\./);
  assert.match(html, /AI applied to real work/);
  assert.match(html, /Security from the very first decision/);
  assert.match(html, /service-systems-v2\.webp/);
  assert.match(html, /service-ai-v2\.webp/);
  assert.match(html, /service-software-v2\.webp/);
  assert.match(html, /service-security-v2\.webp/);
  assert.match(html, /HubSpot/);
  assert.match(html, /Pipedrive/);
  assert.match(html, /Salesforce/);
  assert.match(html, /\/interactions\.js\?v=2/);
  assert.match(html, /screen-wipe/);
  assert.match(html, /section-indicator/);
  assert.match(html, /wa\.me\/554888222608/);
  assert.doesNotMatch(html, /\+55 48 8822-2608/);
  assert.match(html, /68\.006\.339\/0001-39/);
  assert.match(html, /\/favicon\.png/);
  assert.match(head, /rel="icon" href="\/favicon\.ico\?v=2"/);
  assert.match(head, /rel="shortcut icon" href="\/favicon\.ico\?v=2"/);
  assert.match(head, /rel="apple-touch-icon" href="\/favicon\.png\?v=2"/);
  assert.match(html, /language-switch/);
  assert.equal((html.match(/class="practice-group"/g) ?? []).length, 2);
  assert.match(html, /https:\/\/iungx\.space\/og-minimal-v2\.png/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps the social preview and production source in place", async () => {
  await access(new URL("../public/og-minimal-v2.png", import.meta.url));
  const [page, layout, css, interactions] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../public/interactions.js", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Talk to IungX/);
  assert.match(page, /Technology leader/);
  assert.match(layout, /og-minimal-v2\.png/);
  assert.match(css, /--white:\s*#f7f7f5/);
  assert.match(interactions, /IntersectionObserver/);
  assert.match(interactions, /data-tilt/);
  assert.match(interactions, /iungx-language/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
});
