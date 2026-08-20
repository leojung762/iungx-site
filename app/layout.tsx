import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export async function generateMetadata(): Promise<Metadata> {
  const incomingHeaders = await headers();
  const host = incomingHeaders.get("host") ?? "iungx.space";
  const protocol = host.includes("localhost") ? "http" : "https";
  const image = new URL("/og-minimal-v2.png", `${protocol}://${host}`).toString();
  const title = "IungX — Tecnologia aplicada ao negócio";
  const description =
    "Soluções em Bitrix24, inteligência artificial, automação, software, infraestrutura e segurança da informação.";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
      siteName: "IungX",
      images: [{ url: image, width: 1734, height: 907, alt: "IungX — Tecnologia aplicada ao negócio" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${plexMono.variable}`}>
        {children}
        <script src="/interactions.js" defer />
      </body>
    </html>
  );
}
