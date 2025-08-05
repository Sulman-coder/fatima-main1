"use client";

import Link from "next/link";
import Image from "next/image";

export default function DivisionPage() {
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
            Division
        </h1>
      </section>

      {/* Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

      {/* Bottom Navigation Links */}
      <div className="flex justify-center space-x-4 py-3 bg-black text-xs">
        <Link href="/science & medicine/overview" className="hover:underline text-gray-400">
          Ovwerview
        </Link>
        <Link href="/science & medicine/division" className="hover:underline text-gray-500">
          Division
        </Link>
       <Link href="/science & medicine/servicesS" className="hover:underline text-gray-500">
        Services
        </Link>
      </div>



      <div className="space-y-12 px-4 md:px-12 py-8">
        {/* Molecular Biology Division */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
              A. Molecular Biology Division
            </h2>
            <p className="mb-4">
              We assist in modern molecular biology techniques essential for genomics and biotechnology research.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Molecular cloning</li>
              <li>Nucleic acid extraction and purification</li>
              <li>Plasmid isolation</li>
              <li>Primer design and optimization</li>
              <li>Quantitative PCR (qPCR) and metagenomics analysis</li>
              <li>Gene sequencing and whole-genome sequencing</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/images/card7.png" alt="Molecular Biology" className="w-full rounded-xl shadow-md" />
          </div>
        </div>

        {/* Microbiology Division */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-green-400 mb-4">
              B. Microbiology Division
            </h2>
            <p className="mb-4">
              Comprehensive microbiological services for environmental, clinical, and industrial research applications.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Bacteria and fungi culture and cultivation</li>
              <li>Antimicrobial susceptibility testing</li>
              <li>Air quality testing</li>
              <li>Food and environmental sample analysis</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/images/card5.jpeg" alt="Microbiology" className="w-full rounded-xl shadow-md" />
          </div>
        </div>

        {/* Immunology Division */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">
              C. Immunology Division
            </h2>
            <p className="mb-4">
              Focused on advancing precision medicine through molecular immunology.
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Molecular immunology applications in diagnostics and therapeutics</li>
              <li>Mechanism-driven development of biological agents</li>
              <li>Patient-specific, precision-based immunological research</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img src="/images/about.jpeg" alt="Immunology" className="w-full rounded-xl shadow-md" />
          </div>
        </div>
      </div>
       <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

    </main>
  );
}