import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { CartProvider } from '@/hooks/cart/CartContext';
import 'swiper/swiper-bundle.css';
import '../lib/fontawesome'; 
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Full Body Checkup | Blood Test | Pathology Lab - DrPathCaress",
  description: "DrPathCares is a one stop solution for all your health and pathology needs. We provide complete blood test and full body checkup packages for you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
