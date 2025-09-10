"use client";

import Image from "next/image";
import Link from "next/link";
// import { FaGraduationCap, FaMicroscope } from "react-icons/fa";


// import { FiCalendar } from "react-icons/fi";
// import { FiExternalLink } from "react-icons/fi";
// import { newsCards } from "@/data/newsCards";


export default function OverviewPage() {
  return (
    <main className="text-white bg-white min-h-screen">
      {/* Hero Section with Video and Centered Text */}
           <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
           <Image
                   src="/images/science.jpg"
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

 

    {/* <section className="bg-white py-16 px-6 md:px-16 lg:px-24"> */}

      <section className="bg-[#610F37] text-white py-4 px-4 md:px-12 pb-6">
        <div className="flex text-xs gap-4 text-white-500 py-2">
                <Link href="/science-&-medicine/division" className="hover:underline">
                 Division
                </Link>
                <Link href="/science-&-medicine/services" className="hover:underline">
                Services
                </Link>
               </div> 


                <div className="w-full h-px bg-gray-700" />



      {/* Overview */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-10">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-white">
            Overview
          </h2>
          <p className="text-lg text-white mb-4 leading-relaxed">
            At <strong>Helix Biogen Institute</strong>, we’re passionate about pushing the frontiers of science. 
            Specializing in advanced “omics” fields like bioinformatics, molecular biology, and AI-driven life sciences, 
            we aim to empower researchers and innovators worldwide.
          </p>
          <p className="text-lg text-white leading-relaxed">
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
  </section>



    {/* Services & Divisions Cards */}
<section className="bg-gray-100 text-black py-10 px-4 sm:px-14 grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
  {/* Services Card */}
  <div className="bg-white shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition rounded-lg w-full max-w-sm">
    {/* Image */}
    <div className="w-full h-56 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
      <Image
        src="/images/services2.png"
        alt="Our Services"
        width={400}
        height={280}
        className="object-cover w-full h-full"
      />
    </div>

    <h3 className="text-lg font-semibold mb-2">Our Services</h3>
    <p className="text-sm text-gray-700">
      Molecular biology training & bioinformatics support.<br />
      AI solutions for biological data analysis.<br />
      Lab project facilitation & microbiology services.
    </p>
  </div>

  {/* Divisions Card */}
  <div className="bg-white shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition rounded-lg w-full max-w-sm">
    {/* Image */}
    <div className="w-full h-56 bg-gray-200 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
      <Image
        src="/images/division.jpg"
        alt="Our Divisions"
        width={400}
        height={280}
        className="object-cover w-full h-full"
      />
    </div>

    <h3 className="text-lg font-semibold mb-2">Our Divisions</h3>
    <p className="text-sm text-gray-700">
      <strong>Training:</strong> Courses & workshops in molecular biology.<br />
      <strong>Research & AI:</strong> AI-driven data analysis & innovation.<br />
      <strong>Lab Support:</strong> Molecular techniques & project assistance.
    </p>
  </div>
</section>



            




      {/* Bottom Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
    </main>
  );
}