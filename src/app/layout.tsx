import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Riya Kolekar | UI/UX Designer | Event Manager | Visual Storyteller",
  description: "Portfolio of Riya Kolekar, a UI/UX designer, event manager, and visual storyteller specializing in creative design and seamless execution.",
  keywords: ["UI/UX design", "event management", "visual storytelling", "portfolio", "designer", "creative"],
  authors: [{ name: "Riya Kolekar" }],
  creator: "Riya Kolekar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <ClientBody>
          {children}
        </ClientBody>
      </ThemeProvider>
    </html>
  );
}
