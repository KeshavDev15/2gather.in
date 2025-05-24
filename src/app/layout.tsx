import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import AnimatedLayout from "../components/animated-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "2gather - Bring People Together",
  description:
    "The simplest way to organize and discover amazing meetups in your community. Connect with like-minded people and build lasting relationships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedLayout>{children}</AnimatedLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
