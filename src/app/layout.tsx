import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/language-context";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SMART BI — Data Intelligence & AI Solutions",
  description:
    "End-to-end BI expertise. We turn your raw data into automated pipelines, real-time dashboards, and AI agents — powered by Microsoft Fabric, Power BI, AWS, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#060912]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
