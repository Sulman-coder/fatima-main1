"use client";

import Image from "next/image";
import Link from "next/link";
import { newsCards } from "@/data/newsCards";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      {/* HERO VIDEO */}
      <section className="relative w-full h-[60vh] sm:h-[80vh] flex items-center justify-center">
        <video
          src="/leadership/Helix.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover brightness-110 -z-20"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70 -z-10"></div>
      </section>

      {/* GRADIENT LINE */}
      <div className="w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-lg" />

      {/* Advancing Science */}
      <section className="relative bg-[#0A1A2F] text-white py-16 px-4 sm:px-12 lg:px-24">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 hidden md:block">
          <Image
            src="/images/logo2.png"
            alt="Helix logo"
            width={350}
            height={350}
          />
        </div>

        <div className="relative z-10 max-w-5xl space-y-6">
          <h2 className="text-[#F0A500] text-2xl sm:text-3xl md:text-4xl">
            Advancing Science for Global Impact
          </h2>

          <div className="space-y-5 text-[18px] sm:text-[20px] leading-relaxed text-gray-200 text-justify">
            <p>
              Helix Biogen Institute is pioneering a transformative model for biomedical research in Africa...
            </p>
            <p>
              Building on a strong foundation of innovation and collaboration...
            </p>
            <p>
              Furthermore, revenues and resources generated through strategic partnerships...
            </p>
          </div>

          <Link href="/research-&-development/drugs-&-peptides">
            <button className="mt-4 px-8 py-3 bg-[#F0A500] text-[#06152B] font-semibold rounded-lg hover:bg-[#d48f00] transition-all w-full sm:w-auto">
              Research & Development
            </button>
          </Link>
        </div>
      </section>

      {/* Driving Scientific Discovery */}
      <section className="px-4 sm:px-10 md:px-16 lg:px-24 py-16 bg-white">
        <h2 className="text-[#FFB51A] text-3xl sm:text-4xl mb-6 text-left">Driving Scientific Discovery</h2>

        <div className="text-[18px] leading-relaxed text-black text-justify space-y-5 mb-10">
          <p>Recognized as one of Africa’s leading research institutions...</p>
          <p>Through our intensive training programs...</p>
        </div>

        <div className="text-left mb-8">
          <Link href="/science-&-medicine/overview">
            <button className="px-8 py-3 bg-black text-white rounded-lg hover:bg-[#ECA73A] transition-all w-full sm:w-auto">
              Science & Medicine
            </button>
          </Link>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/research-&-development/vaccine-candidates">
            <div className="relative group cursor-pointer h-64 sm:h-72 rounded-lg overflow-hidden shadow-md">
              <img src="/images/Vaccine candidate.png" className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-3 text-center">
                <span className="text-white font-bold group-hover:text-[#FFB51A]">Vaccine Candidate</span>
              </div>
            </div>
          </Link>

          <Link href="/research-&-development/diagnostic.kits">
            <div className="relative group cursor-pointer h-64 sm:h-72 rounded-lg overflow-hidden shadow-md">
              <img src="/images/diagnostic kit.jpg" className="w-full h-full object-cover group-hover:scale-[1.05] transition duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-3 text-center">
                <span className="text-white font-bold group-hover:text-[#FFB51A]">Diagnostic Kits</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Leading Evolution of Medicine */}
      <section className="bg-black text-white py-16 px-4 sm:px-12 relative">
        <div className="relative bg-[#1E90FF]/30 backdrop-blur-md p-6 sm:p-10 rounded-2xl max-w-5xl mx-auto space-y-6 shadow-lg">
          <h2 className="text-[#E9A300] text-3xl font-semibold">Leading the Evolution of Medicine</h2>
          <p className="text-[18px] leading-relaxed">In addition to advancing groundbreaking research...</p>
          <p className="text-[18px] leading-relaxed">Through its specialized divisions...</p>

          <Link href="/science-&-medicine/division">
            <button className="px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-all w-full sm:w-auto">
              LEARN MORE →
            </button>
          </Link>
        </div>
      </section>

      {/* Investment in Science */}
      <section className="bg-[#0A6B74] text-white py-16 px-4 sm:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

          <div className="space-y-5">
            <h2 className="text-3xl font-semibold">Elevating Investment in Research</h2>
            <p className="text-[18px] leading-relaxed text-justify">Helix Biogen Institute envisions a future...</p>
            <p className="text-[18px] leading-relaxed text-justify">Our goal is to create a self-sustaining system...</p>

            <Link href="/research-&-development/drugs-&-peptides">
              <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all w-full sm:w-auto">
                LEARN MORE
              </button>
            </Link>
          </div>

          <Image
            src="/images/elevating-investment-in-research.jpg"
            alt="Graph"
            width={450}
            height={450}
            className="object-contain mx-auto"
          />
        </div>
      </section>

      {/* News */}
      <section className="bg-[#FFF5F7] py-16 px-4 md:px-20 text-center">
        <h2 className="text-3xl font-semibold mb-8">Latest News & Blogs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {newsCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-md shadow-lg hover:shadow-2xl transition w-full max-w-[430px]">
              <Image src={card.image} alt={card.title} width={400} height={250} className="w-full h-56 object-cover" />
              <div className="p-4">
                <p className="text-xs text-gray-500">{card.date}</p>
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="text-sm text-gray-700 line-clamp-3">{card.description}</p>
                <Link href={card.link} target="_blank" className="text-blue-600 text-sm hover:underline">Read More →</Link>
              </div>
            </div>
          ))}
        </div>

        <Link href="/publication/news-prints">
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-all">
            View All News
          </button>
        </Link>
      </section>

      {/* BOTTOM LINE */}
      <div className="w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600" />
    </main>
  );
}
