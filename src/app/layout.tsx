import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  authors: {
    name: "Piotr Buczkowski",
  },
  title: "Apartamenty w Krynicy",
  keywords:
    "Apartamenty Krynickie, wynajem apartamentów, Krynica, apartament Magnolia, apartament Storczyk, noclegi Krynica",
  description:
    "Apartamenty Krynickie oferują dwa komfortowe apartamenty na wynajem: dwupokojowy Apartament Magnolia (41 m², dla 4-5 osób) przy ulicy Cichej 14/8B1 oraz jednopokojowy Apartament Storczyk (28 m², dla 2-4 osób) przy ulicy Cichej 18/5B.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Apartamenty w Krynicy",
    description: "Apartamenty Krynickie oferują dwa komfortowe apartamenty na wynajem: dwupokojowy Apartament Magnolia (41 m², dla 4-5 osób) przy ulicy Cichej 14/8B1 oraz jednopokojowy Apartament Storczyk (28 m², dla 2-4 osób) przy ulicy Cichej 18/5B.",
    url: "https://apartamentykrynickie.vercel.app",
    siteName: "Apartamenty Krynickie",
    images: [
      {
        url: "/magnolia/2.webp",
        width: 1200,
        height: 630,
        alt: "Apartament Magnolia - komfortowy dwupokojowy apartament w Krynicy",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apartamenty w Krynicy",
    description: "Apartamenty Krynickie oferują dwa komfortowe apartamenty na wynajem: dwupokojowy Apartament Magnolia (41 m², dla 4-5 osób) oraz jednopokojowy Apartament Storczyk (28 m², dla 2-4 osób).",
    images: ["/magnolia/2.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <Head>
        <link key="favicon" rel="icon" href="/icon.ico" sizes="any" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
