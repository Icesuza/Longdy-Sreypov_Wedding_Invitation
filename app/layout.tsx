import type { Metadata } from "next";
import "./globals.css";
import { Chenla, Cinzel_Decorative, Cormorant_Garamond, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const serifFont = Cormorant_Garamond({
  weight: ["600"],
  subsets: ["latin"],
  variable: "--font-serif",
});


const chenla = Chenla({
  subsets: ["khmer"],
  weight: "400", // Changed from array to string for better compatibility
  variable: "--font-chenla",
});

export const metadata: Metadata = {
  title: "Wedding Invitation | Longdy & Sreypov",
  description: "សូមអញ្ជើញចូលរួមកម្មវិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ", // "Please join our wedding"
  
  // 1. Open Graph (Facebook, Telegram, Messenger)
  openGraph: {
    title: "Wedding Invitation | Longdy & Sreypov",
    description: "សូមអញ្ជើញចូលរួមកម្មវិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ",
    url: "longdy-sreypov-wedding-invitation.vercel.app.app", // Change to your real URL
    siteName: "Longdy & Sreypov Wedding",
    images: [
      {
        url: "longdy-sreypov-wedding-invitation.vercel.app.jpg", // Must be a FULL URL
        width: 1200,
        height: 630,
        alt: "Wedding Invitation Cover",
      },
    ],
    locale: "km_KH", // Sets language to Khmer
    type: "website",
  },

  // 2. Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Wedding Invitation | Longdy & Sreypov",
    description: "សូមអញ្ជើញចូលរួមកម្មវិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ",
    images: ["longdy-sreypov-wedding-invitation.vercel.app.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Updated lang to support both, or just "km" if Khmer is the primary language
    <html lang="km" className={cn("scroll-smooth", "font-sans", geist.variable)}>
      <body
        className={`${serifFont.variable} ${chenla.variable} antialiased font-serif`}
      >
        {children}
      </body>
    </html>
  );
}
