import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import ReactQueryProvider from "./utils/providers/ReactQueryProviders";

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
      <body>
        <ReactQueryProvider>
          <div className="">
            <header className="bg-[#4a00ff] text-white py-6">
              <h1 className="text-center text-4xl font-bold">
                Smart Irrigation Dashboard
              </h1>
            </header>
            <div className="flex justify-center items-center shadow-xl">
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
        </ReactQueryProvider>
      </body>
    </html>
  );
}
