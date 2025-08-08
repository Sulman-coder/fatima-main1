"use client";

import Image from "next/image";
import Link from "next/link";
import { FiCalendar } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import { newsCards } from "@/data/newsCards";




const cardData = [
  {
    title: "Research Departments",
    desc: "Scripps Research faculty collaborate across six interrelated departments in pursuit of life-changing discoveries.",
    img: "/images/card1.jpeg",
    link: "#",
  },
  {
    title: "Disease Areas & Medicines",
    desc: "Scripps scientists decipher the underlying biological causes of disease and use that knowledge to revolutionize medicine and healthcare.",
    img: "/images/card2.jpeg",
    link: "#",
  },
  {
    title: "Centers and Institutes",
    desc: "A number of centers and institutes within Scripps Research focus resources on specific areas of investigation.",
    img: "/images/card3.jpeg",
    link: "#",
  },
  {
    title: "Cores & Services",
    desc: "The cores and services at Scripps Research provide access to the latest instrumentation, training and expertise.",
    img: "/images/card4.jpeg",
    link: "#",
  },
  {
    title: "Calibr-Skaggs",
    desc: "The Calibr-Skaggs Institute for Innovative Medicines accelerates the creation of new medicines by pairing biomedical research with discovery.",
    img: "/images/card5.jpeg",
    link: "#",
  },
  {
    title: "Scripps Research Translational Institute",
    desc: "The Scripps Research Translational Institute leverages progress in human genomics with the power of wireless digital technologies.",
    img: "/images/card6.jpeg",
    link: "#",
  },
];

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

  <div className="w-full min-h-[45vh] bg-[#4187F6] flex items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10">
  <div className="max-w-screen-lg mx-auto text-white flex flex-col justify-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-center md:text-left">
      Discovering the Future: The Helix Biogen Institute <br className="hidden md:block" /> Research Update
    </h2>
    <p className="text-base sm:text-lg leading-relaxed text-center md:text-left">
      Helix Biogen Institute is at the forefront of knowledge and innovation, driven by a passion for exploring the unseen realms of discovery.
      Our team of experts is dedicated to uncovering new solutions to the world's most pressing challenges, and we are proud to share the latest
      updates from our research initiatives. Our researchers are making significant advancements and contributions to the scientific community.
      We are committed to investing in world-class infrastructure and fostering collaborations with leading institutions and industry partners to
      ensure that our work has the maximum impact.
    </p>
  </div>
</div>
 
   


 {/* Featured News Content */}
      <div className="w-full md:w-3/4 mx-auto bg-[#0F172A] text-white p-10 md:p-14 flex flex-col gap-4 mb-10 rounded-lg shadow-md">
        {/* Date */}
        <div className="flex items-center text-sm text-gray-300">
          <FiCalendar className="mr-2" />
          24th August, 2023
        </div>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold leading-snug">
          Helix Biogen Institute And Anesvad Foundation Strengthens Biomedical Research In Oyo
        </h2>

        {/* Description */}
        <p className="text-gray-400">
          No excerpts provided for this news print; please follow the source link to read more.
        </p>

        {/* Button */}
        <div>
          <a
            href="#"
            className="inline-block text-lg bg-gray-100 text-[#0A122A] font-medium px-6 py-3 rounded hover:bg-white transition"
          >
            Read More
          </a>
        </div>
      </div>

      {/* All News Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-20 py-10">
        {/* {news.map((item, index) => ( */}
        {newsCards.map((item, index) => (

          <div
            key={index}
            className="relative border border-gray-200 p-6 bg-white rounded-lg transition hover:bg-gray-200"
          >
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 text-gray-400 hover:text-blue-600"
            >
              <FiExternalLink size={16} />
            </a>

            <h3 className="text-xl font-semibold text-gray-800 mb-3 pr-6">
              {item.title}
            </h3>

            <div className="flex items-center text-sm text-gray-500">
              <FiCalendar className="mr-2" />
              {item.date}
            </div>

            <p className="text-sm text-gray-400 mt-2">
              No excerpts provided for this news print; please follow the source link to read more.
            </p>
          </div>
        ))}

</div>
      {/* Bottom Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
    </main>
  );
}