"use client";

import Link from "next/link";
import Image from "next/image";

export default function DrugsAndPeptidePage() {
  return (
    <main className="text-white bg-black min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
       <Image
  src="/images/covid.jpeg" 
  alt="Banner Image"
  fill
  className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
/>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
            Drugs And PeptidePage
        </h1>
      </section>

      {/* Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

     {/* Bottom Navigation Links for RESEARCH AND DEVELOPMENT */}
<div className="flex justify-center space-x-4 py-3 bg-black text-xs">
  <Link href="/research-and-development/drugs-and-therapeutic-peptide" className="hover:underline text-gray-400">
    Drugs and Therapeutic Peptide
  </Link>
  <Link href="/research-and-development/vaccine-candidates" className="hover:underline text-gray-500">
    Vaccine Candidates
  </Link>
  <Link href="/research-and-development/point-of-care-diagnostic-test-kits" className="hover:underline text-gray-500">
    Point of Care Diagnostic Test Kits
  </Link>
</div>

<div className="bg-white w-full py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Drugs and Therapeutic Peptide
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            At Helix Biogen Institute, our researchers are focused on designing
            and developing advanced therapeutic peptides and drug candidates to
            combat various diseases and improve patient outcomes.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/drug.jpeg" // 👈 Replace with your actual image
            alt="Therapeutic Peptide Research"
            width={600}
            height={400}
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
        </div>
      </div>
    </div>
    <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

    </main>
  );
}