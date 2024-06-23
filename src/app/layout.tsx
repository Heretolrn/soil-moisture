import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UMaT Cybersecurity Club",
  description:
    "A cybersecurity club created in UMaT to trian student for excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-darkblue font-inter">
        <Header />
        {children}
      </body>
    </html>
  );
}
