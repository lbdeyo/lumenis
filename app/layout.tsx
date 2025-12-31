import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Bodoni } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBodoni = Libre_Bodoni({
  variable: "--font-libre-bodoni",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Lumenis Partners",
  description:
    "Lumenis Partners is a boutique Executive Mentoring and Executive Search firm helping individuals and business thrive through the careful exploration and assessment of human talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${libreBodoni.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
