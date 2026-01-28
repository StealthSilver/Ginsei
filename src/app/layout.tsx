import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import CreativeCursor from "@/components/CreativeCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gensei.org"),
  title: {
    default: "Gensei — Form & Function",
    template: "%s — Gensei",
  },
  description:
    "Gensei is a design agency focused on systems, identity, and digital products. We design with clarity, structure, and intent — balancing form and function.",
  applicationName: "Gensei",
  keywords: [
    "design agency",
    "brand systems",
    "identity design",
    "digital design",
    "web experiences",
    "design systems",
    "brand identity",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://gensei.org/",
  },
  themeColor: "#0E0E0E",
  openGraph: {
    type: "website",
    url: "https://gensei.org/",
    siteName: "Gensei",
    title: "Gensei — Form & Function",
    description:
      "Gensei is a design agency focused on systems, identity, and digital products. We design with clarity, structure, and intent — balancing form and function.",
    images: [
      {
        url: "/geinsei.svg",
        alt: "Gensei",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gensei — Form & Function",
    description:
      "Gensei is a design agency focused on systems, identity, and digital products. We design with clarity, structure, and intent — balancing form and function.",
    images: ["/geinsei.svg"],
  },
  icons: {
    icon: [{ url: "/geinsei.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0E0E0E",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        <CreativeCursor />
        {children}
      </body>
    </html>
  );
}
