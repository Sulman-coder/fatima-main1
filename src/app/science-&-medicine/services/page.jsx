"use client";

import Image from "next/image";
import Link from "next/link";

// const cardData = [
//   {
//     title: "Research Departments",
//     desc: "Scripps Research faculty collaborate across six interrelated departments in pursuit of life-changing discoveries.",
//     img: "/images/card1.jpeg",
//     link: "#",
//   },
//   {
//     title: "Disease Areas & Medicines",
//     desc: "Scripps scientists decipher the underlying biological causes of disease and use that knowledge to revolutionize medicine and healthcare.",
//     img: "/images/card2.jpeg",
//     link: "#",
//   },
//   {
//     title: "Centers and Institutes",
//     desc: "A number of centers and institutes within Scripps Research focus resources on specific areas of investigation.",
//     img: "/images/card3.jpeg",
//     link: "#",
//   },
//   {
//     title: "Cores & Services",
//     desc: "The cores and services at Scripps Research provide access to the latest instrumentation, training and expertise.",
//     img: "/images/card4.jpeg",
//     link: "#",
//   },
//   {
//     title: "Calibr-Skaggs",
//     desc: "The Calibr-Skaggs Institute for Innovative Medicines accelerates the creation of new medicines by pairing biomedical research with discovery.",
//     img: "/images/card5.jpeg",
//     link: "#",
//   },
//   {
//     title: "Scripps Research Translational Institute",
//     desc: "The Scripps Research Translational Institute leverages progress in human genomics with the power of wireless digital technologies.",
//     img: "/images/card6.jpeg",
//     link: "#",
//   },
// ];

export default function ServicesPage() {
  return (
    <main className="text-white bg-white min-h-screen">
      {/* Hero Section with Video and Centered Text */}
      {/* <section className="relative w-full md:h-screen h-[40vh] flex items-center justify-center text-center"> */}
       <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
     <Image
             src="/images/about.jpeg"
             alt="About Banner"
             fill
             className="object-cover opacity-60"
           />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white">
          Services
        </h1>
      </section>

      {/* Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

      {/* Bottom Navigation Links */}
      <div className="flex flex-wrap justify-center space-x-4 py-3 bg-black text-xs">
        <Link href="/science-&-medicine/overview" className="hover:underline text-gray-400">
          Overview
        </Link>
        <Link href="/science-&-medicine/division" className="hover:underline text-gray-500">
          Division
        </Link>
        <Link href="/science-&-medicine/services" className="hover:underline text-gray-500">
          Services
        </Link>
      </div>

      {/* Services Section */}
      <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 max-w-7xl mx-auto">
        {/* Section 1: Molecular Biology */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <img
            src="/images/services2.png"
            alt="Molecular Biology Training"
            className="rounded-2xl shadow-md w-full h-auto object-cover"
          />
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-800">
              Training and Support in Molecular Biology Courses
            </h2>
            <p className="text-base sm:text-lg mb-4 text-gray-700">
              We provide global training and consultancy in bioinformatics and molecular biology to empower researchers
              with practical and theoretical expertise.
            </p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm sm:text-base">
              <li>Bioinformatics analysis planning</li>
              <li>Research data computation and management</li>
              <li>Workshops and training for researchers and educators</li>
              <li>Provision of tools, resources, and consultancy for research projects</li>
            </ul>
          </div>
        </div>

        {/* Section 2: Grid Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Integration */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Artificial Intelligence Integration in Life Sciences
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
              <li>Analysis of complex microbial and biological datasets</li>
              <li>Support for translational and personalized research</li>
              <li>Training in AI tools for biological data</li>
              <li>Development of computational pipelines</li>
            </ul>
          </div>

          {/* Molecular Biology Recap */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Molecular Biology & Bioinformatics
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
              <li>Bioinformatics analysis planning</li>
              <li>Data computation & management</li>
              <li>Workshops and researcher training</li>
              <li>Research consultancy & tools</li>
            </ul>
          </div>

          {/* Lab Facilitation */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-700 mb-3">
              Laboratory Facilitation for Life Science Research
            </h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 text-sm">
              <li>Expert support in laboratory procedures</li>
              <li>Hands-on collaboration in research</li>
              <li>Coverage across three scientific domains</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
    </main>
  );
}