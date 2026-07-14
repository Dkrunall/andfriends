import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

export const metadata: Metadata = {
  title: "&friends | Entertainment & Hospitality",
  description: "Founded in 2020, &friends is a multidisciplinary entertainment and hospitality company specializing in Artist Management, Branding, Hospitality Management, Concept Curation, and Artist Touring.",
  icons: {
    icon: "/flogo.png",
  },
};

import SmoothScrolling from "@/components/SmoothScrolling";
import InstantBookingButton from "@/components/InstantBookingButton";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} antialiased`}
      >
        <SmoothScrolling>
          {children}
          <InstantBookingButton />
        </SmoothScrolling>
      </body>
    </html>
  );
}
