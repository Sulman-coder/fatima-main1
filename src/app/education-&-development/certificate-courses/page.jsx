"use client";

import Link from "next/link";
import Image from "next/image";


export default function ProfessionalCertificatesPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
{/* Hero Section with Video */}
      <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
        <img
  src="/images/educaion.jpg" // یہاں اپنی image کا درست path دیں
  alt="Banner Image"
  className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
/>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
       Certificate courses     
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


      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Professional Certificate Courses
      </h1>

      <p className="text-lg mb-6">
        Our professional certificate courses are designed to ensure that in an ever-evolving and advancing
        scientific biomedical world, you are not left behind with an outdated knowledge base. The proof comes
        in the form of a certificate which is earned by passing one or more exams developed by Helix Biogen
        Institute. These online/onsite courses include lectures, readings, discussion forums, quizzes,
        assignments, hands-on training, and mini projects. The duration of the program is two months,
        with scheduled contact times on weekends.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Professional Certificate in Molecular Biology</h2>
        <p className="mb-4">
          Dive into the exciting world of genes, DNA, and biotechnology. This three-month program covers genome
          sequencing, recombinant DNA technology, protein structure, and real-world applications in medicine
          and research. Whether you're a student or a professional, this course provides a hands-on experience
          with cutting-edge biological science.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Professional Certificate in Basic Bioinformatics</h2>
        <p className="mb-4">
          Learn how scientists decode DNA and analyze genetic data. This course offers a strong foundation in
          bioinformatics, covering biological databases, sequence alignment, phylogenetics, and data
          interpretation. Designed to make bioinformatics accessible and practical.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Professional Certificate in Vaccine Design</h2>
        <p className="mb-4">
          Explore the science behind vaccine development. Topics include subunit vaccines, structure-based
          design, delivery methods, and optimization strategies. Ideal for professionals across research,
          healthcare, and public health sectors.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Professional Certificate in Bacterial Bioinformatics</h2>
        <p className="mb-4">
          Understand bacterial genomics, antimicrobial resistance, and gene annotation using bioinformatics
          tools. Gain hands-on experience analyzing bacterial sequences and applying data to healthcare and
          biotech innovations.
        </p>
      </section>
       <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
    </main>
  );
}