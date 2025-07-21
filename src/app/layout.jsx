import localFont from "next/font/local";
import "./globals.css";
import ClientNavbarWrapper from "@/components/about/ClientNavbarWrapper";
import Footer from "@/components/about/Footer";

/* const geistSans = localFont({
  src: "./fonts/GeistMono[wght].ttf",
  variable: "--font-geist-sans",
  display: "swap",
}); */

/* const geistMono = localFont({
  src: "./fonts/GeistMono-Regular.ttf",
  variable: "--font-geist-mono",
  display: "swap",
}); */

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* this empty head tag is required in Next.js 13+ app/layout */}
      <head />
      <body className="antialiased bg-black text-white min-h-screen flex flex-col">
        <ClientNavbarWrapper />
        <main className="relative z-0 flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
