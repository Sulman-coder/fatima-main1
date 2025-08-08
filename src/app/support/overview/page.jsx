"use client"

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="text-white bg-black min-h-screen">
{/* <section className="relative w-full h-[40vh]"> */}
           <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
           
     <Image
                src="/images/about.jpeg"
                alt="About Banner"
                fill
                className="object-cover opacity-60"
              />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
          SUPPORT
        </h1>
      </section>

      {/* Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

      {/* Bottom Navigation Links */}
      <div className="flex justify-center space-x-4 py-3 bg-black text-xs">
        <Link href="/support/overview" className="hover:underline text-gray-400">
          Support
        </Link>
        {/* <Link
          href="/support/overviews"
          className="hover:underline text-gray-500"
        >
           Overviews
        </Link> */}
        <Link href="/support/contact" className="hover:underline text-gray-500">
          Contact 
    
        </Link>
      </div>

      <section className="bg-green-700 text-white py-12 px-4 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-12">
        {/* Text Column */}
        <div className="md:w-1/2 px-4 max-w-prose">
          <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
            Overview
          </h2>
          <p className="text-base leading-relaxed break-words">
            At our bioinformatics research institute, we are dedicated to unlocking
            the mysteries of life through innovative and cutting-edge research.
            With your support, we can continue our work in developing new
            techniques and technologies for analyzing biological data, leading to
            a better understanding of genetics, disease, and the world around us.
          </p>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2 px-4 flex justify-center md:mt-12">
          <Image
            src="/images/support.jpeg" 
            alt="Support Overview"
            width={500}
            height={350}
            className="rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>

{/* MISSION + VISION SECTION */}
      <section className="bg-white text-black py-10 px-4 sm:px-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-lg shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition">
          <Image
            src="/images/supp.jpeg"
            alt="Our Mission"
            width={400}
            height={250}
            className="rounded-lg object-cover mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Why Give</h3>
          <p className="text-sm text-gray-700"> 

        At Helix Biogen Institute, we’re driven by curiosity, innovation, and a deep 
        commitment to transforming lives through science. But every breakthrough 
        starts with support from people like you. Your contribution fuels cutting 
        edge research, speeds up life saving discoveries, and brings us closer to 
        solutions for the world’s most pressing health challenges. Together, we are 
        not just funding research, we are shaping the future of medicine.  
          {/* <h3 className="text-lg font-semibold mb-2">[Give now]</h3> */}
          {/* <Link href="/donate" passHref> */}
<Link href="/support/give-now" className="text-lg font-semibold mb-2 text-blue-600 hover:underline">
  [Give now]
</Link>

          </p>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition">
          <Image
            src="/images/leaders.jpg"
            alt="Our Vision"
            width={400}
            height={250}
            className="rounded-lg object-cover mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
          <p className="text-sm text-gray-700">
            At Helix Biogen Institute, leadership is about inspiring growth,
            driving progress, and leading with expertise to shape the future of
            biomedical science
          </p>
        </div>
      </section>

      {/* CONTACT SECTION (PLACEHOLDER) */}
      <section className="bg-gray-200 text-black py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <p className="text-base mb-2">
          Have questions or want to support our research?
        </p>
        <p className="text-sm text-gray-700">
          Email us at <a href="mailto:info@helixbiogen.org" className="underline text-green-700">info@helixbiogen.org</a>
        </p>
      </section>

       {/* Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
    </main>

  );
};