import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Martian_Mono } from "next/font/google";
import { Suspense } from "react";
import Sidebar from "@/components/common/sidebar";

const inter = Inter({ subsets: ["latin"] });
const martian = Martian_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <head>
          <link
              rel="manifest"
              href="/manifest.json"
          />
      </head>
      <script
        defer
        src="https://kit.fontawesome.com/a7908c27f8.js"
        async
      ></script>

      <body
        className={
          martian.className + " bg-gradient-to-t from-violet-900  to-slate-900"
        }
      >
        <div className="bg-animation">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="stars4"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
