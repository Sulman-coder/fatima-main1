"use client";

import Link from "next/link";
import Image from "next/image";

export default function VaccineCandidates() {
  return (
    <main className="text-black bg-white min-h-screen">
      {/* Hero Section with Video */}
      <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
       <Image
  src="/images/covid.jpeg" // apni image ka path yahan lagayein
  alt="Banner Image"
  fill
  className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
/>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
            Vaccine Candidates
        </h1>
      </section>

      {/* Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

     {/* Bottom Navigation Links for RESEARCH AND DEVELOPMENT */}
<div className="flex justify-center space-x-4 py-3 bg-black text-xs">
  <Link href="/research-&-development/drugs-&-peptides" className="hover:underline text-gray-400">
    Drugs and Therapeutic Peptide
  </Link>
  <Link href="/research-&-development/vaccine-candidates" className="hover:underline text-gray-500">
    Vaccine Candidates
  </Link>
  <Link href="/research-&-development/diagnostic-kits" className="hover:underline text-gray-500">
    Point of Care Diagnostic Test Kits
  </Link>
</div>


 <div className="max-w-4xl mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-6">Vaccine Design: Innovating for a Healthier Future</h1>

      <section className="space-y-6 mb-8">
        <p>
          At Helix Biogen Institute, we are at the forefront of innovative vaccine development, combining advanced
          bioinformatics, cutting-edge biotechnology, and scientific expertise to tackle global health challenges.
        </p>
        <p>
          Our research is dedicated to designing highly effective and safe vaccines, particularly against emerging
          infectious diseases. Through a multidisciplinary approach, we leverage the latest breakthroughs in
          computational biology, immunoinformatics, and molecular engineering to create next‑generation vaccines.
        </p>
      </section>

      <section className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold">● SARS‑CoV‑2 Vaccine (Candidate 1 & 2)</h2>
        <p>
          In a groundbreaking collaboration, Helix Biogen Institute and Thelvax are developing an innovative COVID‑19
          vaccine candidate designed to combat SARS‑CoV‑2 effectively. Leveraging advanced protein expression technology,
          the antigenic components of the virus’s surface glycoprotein are produced using E. coli and insect cell systems,
          ensuring high-yield and cost-effective production while maintaining immunogenic integrity.
        </p>
      </section>

      <section className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold">● Lassa Virus Vaccine (Candidates 1–3)</h2>
        <p>
          Lassa fever remains a significant public health threat in West Africa. Our candidate utilizes virus-like particles
          (VLPs) and adjuvants to present nucleoprotein and glycoprotein components for broad neutralizing responses.
          A second variant focusing on nucleoprotein-only epitopes is also in development.
        </p>
      </section>

      <section className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold">● Hepatitis E Vaccine (HEV)</h2>
        <p>
          A novel vaccine candidate aimed at long-lasting protection against Hepatitis E is progressing toward
          animal trials, particularly targeting regions with waterborne transmission and limited sanitation.
        </p>
      </section>

      <section className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold">● Nipah Virus Vaccine</h2>
        <p>
          Combining immunoinformatics and agent-based immune modeling, this vaccine candidate is undergoing in vitro
          and in vivo testing to predict and enhance T‑ and B‑cell responses.
        </p>
      </section>

      <section className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold">● Mokola Virus Vaccine</h2>
        <p>
          Targeting this rare but neurologically severe virus, our design emphasizes early mitigation of emerging disease
          threats through proactive vaccine development partnerships.
        </p>
      </section>

      <section className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold">● Rift Valley Fever Vaccine</h2>
        <p>
          Designed to protect ruminant livestock and reduce zoonotic transmission, this candidate aims to secure food
          systems and public health in vulnerable regions.
        </p>
      </section>

      <section className="space-y-6 mb-8">
        <h2 className="text-2xl font-semibold">● Igbo Ora Virus Vaccine</h2>
        <p>
          Although cases are rare, the development of a vaccine for Igbo Ora virus aligns with our commitment to
          proactive defense against emerging pathogens.
        </p>
      </section>
    </div>
    <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

    </main>
  );
}





