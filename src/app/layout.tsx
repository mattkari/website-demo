import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matt Karimov | QA Automation Specialist",
  description:
    "QA Automation Specialist and Senior Automation Tester with 5+ years in Banking and Financial Services. Test Automation Engineer at Barclays Investment Bank, based in Manchester.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
