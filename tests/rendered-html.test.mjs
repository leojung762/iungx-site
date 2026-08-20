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
  assert.match(html, /Tecnologia que sai do plano/);
  assert.match(html, /Bitrix24 &amp; CRM/);
  assert.match(html, /Inteligência artificial conectada ao trabalho real/);
  assert.match(html, /Cybersecurity &amp; Infra/);
  assert.match(html, /\+55 48 8822-2608/);
  assert.match(html, /68\.006\.339\/0001-39/);
  assert.match(html, /https:\/\/iungx\.space\/og-minimal\.png/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps the social preview and production source in place", async () => {
  await access(new URL("../public/og-minimal.png", import.meta.url));
  const [page, layout, css] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Fale com a IungX/);
  assert.match(page, /Technology leader/);
  assert.match(layout, /og-minimal\.png/);
  assert.match(css, /--paper:\s*#f0efff/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
});
