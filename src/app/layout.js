"use client"; // Ensure it's treated as a client component

import React from "react";
import Header from "../components/Header/Header"; // Import your Header component
import { Inter } from "next/font/google";
import { useMediaQuery } from "react-responsive"; // Hook for media queries
import "./page.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Poppins } from "next/font/google";
const inter = Inter({ subsets: ["latin"] }); // Load the Inter font
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export default function RootLayout({ children }) {
  // Media query to check for mobile view
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });

  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.variable}`}>
        <Header /> {/* Include Header here */}
        {children} {/* This renders the specific page content */}
        <SpeedInsights />
      </body>
    </html>
  );
}
