"use client";

import Link from "next/link";
import Image from "next/image";

export default function DiagnosticTestKitsPage() {
  return (
    <main className="text-white bg-black min-h-screen">
      <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
       <Image
  src="/images/covid.jpeg" // apni image ka path yahan lagayein
  alt="Banner Image"
  fill
  className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
/>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
            Diagnostic Test Kits
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
            Point of Care Diagnostic Test Kits
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Our team is developing innovative Point of Care (POC) diagnostic
            test kits to enable rapid and accurate detection of diseases at
            the patient’s side. These kits are designed for ease of use,
            affordability, and high reliability in low-resource settings.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/kit.jpeg"
            alt="Point of Care Diagnostic Kits"
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

