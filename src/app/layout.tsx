import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smart irrigation system",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <div className="">
        <header className="bg-[#01ff70] text-white py-6">
          <h1 className="text-center text-4xl font-bold">
            Smart Irrigation Dashboard
          </h1>
        </header>
        <div className="flex justify-center items-center bg-[gray]/80">
          <nav className="flex justify-between gap-4">
            <Link href="/">Home</Link>
            <Link href="/settings">Settings</Link>
            <Link href="/reports">Reports</Link>
          </nav>
        </div>
        <main className="">{children}</main>
        <footer className="">
          <p>&copy; 2024 Smart Irrigation</p>
        </footer>
      </div>
    </html>
  );
}
