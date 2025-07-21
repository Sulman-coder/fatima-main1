"use client";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const leadershipData = [
  {
    name: "Akande Samuel Adewale",
    role: "Chaplain",
    description: "",
    image: "/leadership/Chaplain.png",
  },
  {
    name: "Dr. Opeyemi LAWAL",
    role: "Scientific Advisory Board Member",
    description:
      "B.Sc Microbiology; M.Sc Environmental Microbiology; PhD Molecular Biosciences; PostDoc, Microbial Genomics and Bioinformatics; PostDoc, Multi-omics and Bioinformatics; KGSP Fellow, FCT-MolBioS Fellow",
    image: "/leadership/image.png",
  },
  {
    name: "Dr. Olumuyiwa IGBALAJOBI",
    role: "Scientific Advisory Board Member",
    description:
      "PhD in Microbiology; MSc in Microbiology; BSc in Microbiology",
    image: "/leadership/image1.png",
  },
  {
    name: "Dr. Yetunde AFOLABI",
    role: "Scientific Advisory Board Member",
    description:
      "PhD MSc, Fellow of Nigeria Institute of Science Laboratory, BSc, PGD, Final Diploma, National Diploma, Certificate in Plant Biotechnology",
    image: "/leadership/image2.png",
  },
  {
    name: "Olatunji Matthew KOLAWOLE",
    role: "Scientific Advisory Board Member",
    description:
      "Cert Project Management; Dipl. Research Commercialization; B.Sc., M.Sc., MHPM., Ph.D., (MIPAN, FNYA, FRHD, FSEPH); Visiting Professor and IAS Fellow, University of Warwick, Coventry, United Kingdom",
    image: "/leadership/image3.png",
  },
  {
    name: "Dr. Helen ONYEAKA",
    role: "Scientific Advisory Board Member",
    description:
      "Fellow of HEA 2017; PG Cert Academic Practice; Prince 2 – Project Management; PGCE Biology; PhD Biochemical Engineering; MSc Biomedical Sciences; BSc Industrial Microbiology",
    image: "/leadership/image4.jpg",
  },
  {
    name: "Dr. Nídia Sequeira TROVÃO",
    role: "Scientific Advisory Board Member",
    description:
      "BSc in Cellular and Molecular Biology; MSc in Biomedical Sciences; PhD in Biomedical Sciences",
    image: "/leadership/image5.jpg",
  },
  {
    name: "Elukunbi Hilda Awoyelu",
    role: "Research Scientist; Scientific Advisory Secretary",
    description: "B.Sc Microbiology; MSc Microbiology; MPH (Applied)",
    image: "/leadership/image6.jpg",
  },
  {
    name: "Prof. Julius Kola Oloke",
    role: "Scientific Advisory Chairman",
    description: "PhD Microbiology",
    image: "/leadership/image7.png",
  },
  {
    name: "Dr. Oladipo Elijah Kolawole",
    role: "Principal Investigator; Scientific Advisory Board Member",
    description:
      "B. Tech Microbiology; MSc Medical Microbiology and Parasitology (Virology Option); PhD Microbiology (ImmunoVirology/Bioinformatics Option)",
    image: "/leadership/image8.jpg",
  },
];

function AboutLayout({ title, currentPage, children }) {
  const bottomLinkColor =
    currentPage === "About"
      ? "text-gray-400"
      : currentPage === "Leadership"
      ? "text-orange-400"
      : "text-blue-400";

  return (
    <main className="text-white bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
        <video
          src="/videos/about.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
          Leadership
        </h1>
      </section>

      {/* Gradient Line */}
      <div className="w-full h-[3px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

      {/* Bottom Navigation Links (Black Background) */}
      <div className="flex justify-center space-x-4 py-3 bg-black text-xs">
        <Link
          href="/about/overview"
          className={`hover:underline ${
            currentPage === "About" ? bottomLinkColor : "text-gray-500"
          }`}
        >
          About
        </Link>
        <Link
          href="/about/leadership"
          className={`hover:underline ${
            currentPage === "Leadership" ? bottomLinkColor : "text-gray-500"
          }`}
        ></Link>
        <Link
          href="/about/history"
          className={`hover:underline ${
            currentPage === "History" ? bottomLinkColor : "text-gray-500"
          }`}
        >
          History
        </Link>
      </div>

      {/* Page Content */}
      <div className="bg-[#F5F5F5] text-black py-10 px-4 sm:px-10">
        {/* Breadcrumb */}
        <div className="text-xs text-gray-500 mb-6">
          Home &gt; About &gt; Leadership
        </div>

        <div className="bg-[#800000] text-white text-xl sm:text-2xl font-bold py-3 px-4 rounded-md mb-6">
          LEADERSHIP
        </div>

        {/* Gray Section Titles */}
        <div className="text-center mb-8 space-y-2">
          <h2 className="text-base sm:text-lg font-semibold text-black">
            INSTITUTIONAL LEADERSHIP
          </h2>
          <h2 className="text-base sm:text-lg font-semibold text-[#F0A500]">
            BOARD OF DIRECTORS
          </h2>
        </div>

        {/* Leadership Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {leadershipData.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition"
            >
              <Image
                src={leader.image}
                alt={leader.name}
                width={120}
                height={120}
                className="rounded-full object-cover mb-3"
              />
              <h3 className="text-sm font-semibold mb-1">{leader.name}</h3>
              <p className="text-xs text-gray-600 font-semibold">
                {leader.role}
              </p>
              {leader.description && (
                <p className="text-xs text-gray-500 mt-2">
                  {leader.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-12">
          <Link href="/history" className="hover:underline">
            ← Previous: History
          </Link>
          <Link href="/about" className="hover:underline">
            Next: About →
          </Link>
        </div>
      </div>

      <div className="w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-lg" />
    </main>
  );
}

export default AboutLayout;
