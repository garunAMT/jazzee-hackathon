import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationBar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { AnnouncementBanner } from "@/components/shared/AnnouncementBanner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "T$O 2025 - GenAI Hackathon",
  description: "A premier GenAI Hackathon that brings together the brightest minds in artificial intelligence and technology to innovate and create solutions for real-world challenges.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavigationBar />
        <AnnouncementBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
