import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Streamfi - Own Your Stream. Own Your Earnings",
    template: "%s - Streamfi",
  },
  description:
    "Stream without limits, engage your community, and earn instantly with a blockchain-powered ecosystem that ensures true ownership, decentralized rewards, and frictionless transactions.",

  openGraph: {
    title: "Streamfi - Own Your Stream. Own Your Earnings",
    description:
      "Stream without limits, engage your community, and earn instantly with a blockchain-powered ecosystem that ensures true ownership.",
    siteName: "Streamfi",
    images: [
      {
        url: "http://192.168.137.1:3000/public/Images/streamFiLogo.svg",
        width: 1200,
        height: 630,
        alt: "Streamfi Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Streamfi - Own Your Stream. Own Your Earnings",
    description:
      "Stream without limits, engage your community, and earn instantly with a blockchain-powered ecosystem that ensures true ownership.",
    images: ["http://192.168.137.1:3000/public/Images/streamFiLogo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>{children}</body>
    </html>
  );
}
