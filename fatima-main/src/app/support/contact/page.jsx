"use client";

import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="text-white bg-black min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
        <video
          src="/images/video1.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
          CONTACT
        </h1>
      </section>

      {/* Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

      {/* Bottom Navigation Links */}
      <div className="flex justify-center space-x-4 py-3 bg-black text-xs">
        <Link href="/support/overview" className="hover:underline text-gray-400">
          Support
        </Link>
        <Link
          href="/support/overviews"
          className="hover:underline text-gray-500"
        >
          {/* Overview
        </Link>
        <Link href="/support/contact" className="hover:underline text-gray-500"> */}
          Contact
        </Link>
      </div>

     {/* CONTACT SECTION (UPDATED) */}
<section className="bg-gray-200 text-black py-12 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
    
    {/* Left Image */}
    <div className="w-full md:w-1/2">
      <Image
        src="/images/contact.png" 
        alt="Contact"
        width={500}
        height={400}
        className="w-full h-auto rounded shadow"
      />
    </div>

    {/* Right Text */}
    <p className="text-xl md:text-2xl font-medium text-center text-gray-800 leading-relaxed">
  Please contact us to discuss how you can support the ongoing life-changing
  innovations at <span className="font-semibold">Helix Biogen Institute</span>.
  <br />
  By email at <a href="mailto:info@helixbiogeninstitute.org" className="text-blue-600 underline">info@helixbiogeninstitute.org</a> <br />
  or by phone at <a href="tel:+2349130000370" className="text-blue-600 underline">+2349130000370</a> or <a href="tel:+2349100000390" className="text-blue-600 underline">+2349100000390</a>.
</p>

  </div>
</section>

 {/* Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
</main>
  );
}