import type { Metadata } from "next";
import { Manrope, IBM_Plex_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://iungx.space"),
  title: "IungX — Technology built for business",
  description:
    "Systems implementation, artificial intelligence, automation, software, infrastructure, and cybersecurity built around real business problems.",
  openGraph: {
    title: "IungX — Technology built for business",
    description:
      "Systems implementation, artificial intelligence, automation, software, infrastructure, and cybersecurity built around real business problems.",
    type: "website",
    locale: "en_US",
    siteName: "IungX",
    images: [{ url: "/og-minimal-v2.png", width: 1734, height: 907, alt: "IungX — Technology built for business" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IungX — Technology built for business",
    description:
      "Systems implementation, artificial intelligence, automation, software, infrastructure, and cybersecurity built around real business problems.",
    images: ["/og-minimal-v2.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [{ url: "/favicon.png?v=2", type: "image/png", sizes: "512x512" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${plexMono.variable}`}>
        {children}
        <script src="/interactions.js" defer />
      </body>
    </html>
  );
}
