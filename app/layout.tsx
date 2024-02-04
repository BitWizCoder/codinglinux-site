import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CodingLinux | Blog",
  description: "Blog about coding and linux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`inter.className, bg-[#F9F9FE] text-gray-700`}>
        <main className="container mx-auto min-h-screen">
          <Header />
          {children}
          <section className={"sticky top-[100vh]"}>
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
