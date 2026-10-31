import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import dynamic from "next/dynamic";
import Navbar from "./components/layout/Navbar";
import DynamicWhatsApp from "./components/layout/DynamicWhatsApp";
import "./globals.css";

const Footer = dynamic(() => import("./components/layout/Footer"), {
  loading: () => (
    <div className="h-64 animate-pulse bg-navy/10" />
  ),
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aquapuretechnology.com"), // replace with production domain
  title: {
    default: "Aqua Pure Technology | RO Plants, Spare Parts & Water Treatment — Pakistan",
    template: "%s | Aqua Pure Technology",
  },
  description:
    "Domestic, commercial, and industrial RO plant installation, maintenance, and genuine spare parts across Pakistan. AMC support, certified technicians, OEM components.",
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "Aqua Pure Technology",
    title: "Aqua Pure Technology | RO Plants & Water Treatment — Pakistan",
    description:
      "Domestic, commercial, and industrial RO plant installation, maintenance, and genuine spare parts across Pakistan.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <body
        className="font-sans bg-surface text-navy antialiased"
        suppressHydrationWarning
      >
        <Navbar />
        {children}
        <Footer />
        <DynamicWhatsApp />
      </body>
    </html>
  );
}
