import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISML Synergy Pro Franchise | FOCO Language Learning Centre",
  description:
    "Own a premium ISML language learning centre through the Synergy Pro FOCO franchise model with transparent investment, revenue sharing and operational support.",
  keywords: [
    "ISML franchise",
    "language learning franchise India",
    "FOCO education franchise",
    "French German Japanese institute franchise",
    "Synergy Pro franchise"
  ],
  openGraph: {
    title: "ISML Synergy Pro Franchise",
    description:
      "Partner with Indian School for Modern Languages and build a premium language learning centre in your city.",
    type: "website",
    url: "https://indianschoolformodernlanguages.com"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
