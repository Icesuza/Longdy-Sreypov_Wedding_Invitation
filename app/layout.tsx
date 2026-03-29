import type { Metadata } from "next";
import "./globals.css";
import { Chenla, Cinzel_Decorative, Cormorant_Garamond, Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import MusicPlayer from "./components/MusicPlayer";

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
  description: "សូមអញ្ជើញចូលរួមកម្មវិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ",
  
  openGraph: {
    title: "Wedding Invitation | Longdy & Sreypov",
    description: "សូមអញ្ជើញចូលរួមកម្មវិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ",
    url: "https://longdy-sreypov-wedding-invitation.vercel.app",
    siteName: "Longdy & Sreypov Wedding",
    images: [
      {
        // FIX: Added the full path to your image
        url: "https://longdy-sreypov-wedding-invitation.vercel.app/images/DSC_9389.JPG", 
        width: 1200,
        height: 630,
        alt: "Wedding Invitation Cover",
      },
    ],
    locale: "km_KH",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wedding Invitation | Longdy & Sreypov",
    description: "សូមអញ្ជើញចូលរួមកម្មវិធីអាពាហ៍ពិពាហ៍របស់យើងខ្ញុំ",
    // FIX: Must also be a full URL for Twitter/X
    images: ["https://longdy-sreypov-wedding-invitation.vercel.app/images/DSC_9389.JPG"],
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
        <MusicPlayer />

        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
