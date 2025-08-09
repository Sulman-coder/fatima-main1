"use client";

import Image from "next/image";
import Link from "next/link";
// import { FiCalendar } from "react-icons/fi";
// import { FiExternalLink } from "react-icons/fi";
// import { newsCards } from "@/data/newsCards";


export default function OverviewPage() {
  return (
    <main className="text-white bg-white min-h-screen">
      {/* Hero Section with Video and Centered Text */}
           <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
           <Image
                   src="/images/about.jpeg"
                   alt="About Banner"
                   fill
                   className="object-cover opacity-60"
                 />
   
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white">
          Overview
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

 

    <section className="bg-white py-16 px-6 md:px-16 lg:px-24">
      {/* Overview */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Overview
          </h2>
          <p className="text-lg text-gray-600 mb-4 leading-relaxed">
            At <strong>Helix Biogen Institute</strong>, we’re passionate about pushing the frontiers of science. 
            Specializing in advanced “omics” fields like bioinformatics, molecular biology, and AI-driven life sciences, 
            we aim to empower researchers and innovators worldwide.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            From groundbreaking research in Molecular Biology, Microbiology, Virology, and Immunology 
            to specialized training programs, workshops, and global collaborations — our mission is to create 
            lasting impact in science and healthcare.
          </p>
        </div>
        <div>
          <Image
            src="/leadership/image10.jpg"
            alt="Molecular Biology"
            width={800}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Services */}
      <div className="mt-20">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
          What We Offer
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Molecular Biology Training",
              desc: "Hands-on training and expert support for researchers in molecular biology techniques and bioinformatics.",
              img: "/leadership/image11.jpg"
            },
            {
              title: "AI in Life Sciences",
              desc: "Harnessing artificial intelligence for advanced biological data analysis and research innovation.",
              img: "/leadership/image12.webp"
            },
            {
              title: "Lab Project Support",
              desc: "From methodology design to advanced lab techniques, we support projects in microbiology and immunology.",
                 img: "/leadership/image13.jpg"
       }
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img src={service.img} alt={service.title} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Service Sections */}
      <div className="mt-20 space-y-20">
        {[
          {
            title: "Molecular Biology Courses",
            desc: "We provide training, support, and bioinformatics consultancy to researchers. Our services include bioinformatics analysis planning, data management, and workshops tailored to academic and research needs.",
            img: "/leadership/image14.jpg",
            reverse: false
          },
          {
            title: "Artificial Intelligence in Life Sciences",
            desc: "With the rise of microbial sequencing, AI offers powerful ways to analyze vast biological datasets. We apply AI/ML to translate data into real-world biomedical solutions.",
            img: "/leadership/image15.jpg",
            reverse: true
          },
          {
            title: "Laboratory Project Facilitation",
            desc: "We assist in molecular cloning, nucleic acid extraction, primer design, gene sequencing, and microbiology services including bacterial/fungal culture, antimicrobial testing, and air quality analysis.",
            img: "/leadership/image16.jpg",
            reverse: false
          }
        ].map((item, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
              item.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                {item.title}
              </h4>
              <p className="text-lg text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
            <div>
              <img
                src={item.img}
                alt={item.title}
                className="rounded-2xl shadow-lg w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </section>


      {/* Bottom Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
    </main>
  );
}