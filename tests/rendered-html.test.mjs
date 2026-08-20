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
  assert.match(html, /<title>IungX — Tecnologia aplicada ao negócio<\/title>/i);
  assert.match(html, /Do terminal à/);
  assert.match(html, /Bitrix24 que organiza a operação inteira/);
  assert.match(html, /IA aplicada ao trabalho real/);
  assert.match(html, /Segurança desde a primeira decisão/);
  assert.match(html, /service-crm\.webp/);
  assert.match(html, /service-ai\.webp/);
  assert.match(html, /service-software\.webp/);
  assert.match(html, /service-security\.webp/);
  assert.match(html, /\+55 48 8822-2608/);
  assert.match(html, /68\.006\.339\/0001-39/);
  assert.match(html, /https:\/\/iungx\.space\/og-minimal-v2\.png/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps the social preview and production source in place", async () => {
  await access(new URL("../public/og-minimal-v2.png", import.meta.url));
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Fale com a IungX/);
  assert.match(page, /Technology leader/);
  assert.match(layout, /og-minimal-v2\.png/);
  assert.match(css, /--white:\s*#f7f7f5/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
});
