import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "miksita",
  description: "web-developer & web-designer",
  keywords: [
    "web development",
    "web design",
    "portfolio",
    "miksita",
    "social link",
  ],
  authors: [{ name: "miksita", url: "https://miksita.ru" }],
  openGraph: {
    title: "miksita",
    description: "web-developer & web-designer",
    type: "website",
    url: "https://miksita.ru",
    images: [
      {
        url: "https://miksita.ru/miksita.png",
        width: 1200,
        height: 630,
        alt: "Miksita - Web-Developer & Web-Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "miksita",
    description: "web-developer & web-designer",
    images: ["https://miksita.ru/miksita.png"],
  },
  alternates: {
    canonical: "https://miksita.ru",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white dark:bg-zinc-950">{children}</body>
    </html>
  );
}
