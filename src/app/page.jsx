"use client";


import Image from "next/image";
import Link from "next/link";

// import { newsCards } from "../data/newsCards";
import { newsCards } from "@/data/newsCards";




export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full md:h-screen h-[60vh]">
  <video
    src="https://res.cloudinary.com/dqbtjrq1o/video/upload/v1754421913/video1_yum3sb.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover -z-20"
  />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[-10]" />
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {/* Welcome to Helix Biogen Institute */}
          </h1>
        </div>
      </section>

      {/* Gradient Line */}
      <div className="w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-lg" />

      {/* Section 1: Dark Blue Background with Logo Right */}
      <section className="relative bg-[#0A1A2F] text-white py-16 sm:py-20 lg:py-28 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
        {/* <div className="absolute right-0 top-0 h-full w-1/2 opacity-10 hidden md:block"> */}
        <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 translate-x-8 opacity-10 z-0 hidden md:block">
          <Image
            src="/images/logo2.png"
            alt="Helix Biogen Institute Logo"
            width={400}
            height={400}
            // className="object-contain"
            className="object-contain object-right"
          />
        </div>
        <div className="relative z-10 max-w-4xl lg:px-24 md:px-16 px-3 space-y-6">
          <h2 className="text-[#F0A500] text-4xl md:text-5xl font-semibold leading-tight">
            Advancing Science for Global Impact
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            A research institute is an organization dedicated to conducting
            scientific investigations, advancing knowledge, and developing
            innovative solutions across various fields.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            These institutions focus on disciplines such as medicine,
            engineering, environmental science, and artificial intelligence,
            contributing to technological progress and societal well-being.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Funded by governments, private organizations, and grants, research
            institutes provide state-of-the-art laboratories, computational
            tools, and expert resources to support groundbreaking discoveries.
          </p>
          <Link href="/about">
            <button className="mt-2 px-6 py-3 bg-[#F0A500] text-[#06152B] font-medium hover:bg-[#d48f00] transition">
              Read More
            </button>
          </Link>
        </div>
      </section>

      {/* Section 2: Text + Images */}
      <section className="px-6 lg:px-24 md:px-16 py-12 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <h2 className="text-[#F0A500] text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">
            Driving Scientific Discovery
          </h2>

          {/* Paragraph */}
          <p className="text-base sm:text-lg lg:text-xl text-black mb-6 sm:mb-8">
            A research institute is an organization dedicated to conducting
            scientific investigations, advancing knowledge, and developing
            innovative solutions across various fields...
          </p>

          {/* Button */}
          <button className="px-5 sm:px-6 py-2 sm:py-3 bg-black text-white text-sm sm:text-base hover:bg-gray-700 transition rounded-md">
            Research Areas
          </button>

          {/* Image Grid */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8">
        <img
          src="/images/home1.png"
          alt="Research Image 1"
          className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg shadow"
        />
        <img
          src="/images/home2.png"
          alt="Research Image 2"
          className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg shadow"
        />
      </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <img
              src="/images/home1.png"
              alt="Research Image 1"
              className="w-full h-auto object-cover rounded"
            />
            <img
              src="/images/home2.png"
              alt="Research Image 2"
              className="w-full h-auto object-contain rounded"
            />
          </div>
        </div>
      </section>

      {/* Section 2: Blue Box Section */}
      <section className="relative bg-white py-20 px-4 sm:px-8 overflow-hidden">
        {/* <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 mix-blend-overlay hidden md:block"> */}
        <div className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 translate-x-8 opacity-10 z-0 hidden md:block">
          <Image
            src="/images/OIP.jpeg"
            alt="Transparent Right Image"
            width={600}
            height={600}
            className="object-contain"
          />
        </div>
        <div className="relative z-10 bg-[#112D4E] text-white max-w-4xl mx-auto p-6 sm:p-10 space-y-6 shadow-md">
          <h2 className="text-[#F0A500] text-3xl sm:text-4xl font-medium">
            Driving Scientific Discovery
          </h2>
          <p className="text-[#E0E0E0] leading-relaxed">
            A research institute is an organization dedicated to conducting
            scientific investigations, advancing knowledge, and developing
            innovative solutions across various fields.
          </p>
          <p className="text-[#E0E0E0] leading-relaxed">
            These institutions focus on disciplines such as medicine,
            engineering, environmental science, and artificial intelligence,
            contributing to technological progress and societal well-being.
          </p>
          <p className="text-[#E0E0E0] leading-relaxed">
            Funded by governments, private organizations, and grants, research
            institutes provide state-of-the-art laboratories, computational
            tools, and expert resources to support groundbreaking discoveries.
          </p>
          <button className="mt-4 px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
            Diseased Areas
          </button>
        </div>
      </section>

      {/* Amplifying Investment Section */}
      <section className="bg-teal-900 text-white py-20 lg:px-48 md:px-32 px-4 ">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ">
          <div className="w-full md:w-1/2 ">
            <h2 className="text-3xl md:text-4xl text-orange-400 font-semibold mb-6">
              Amplifying Investment in Science
            </h2>
            <p className="mb-4">
              A research institute is an organization dedicated to conducting
              scientific investigations, advancing knowledge, and developing
              innovative solutions across various fields.
            </p>
            <p className="mb-4">
              These institutions focus on disciplines such as medicine,
              engineering, environmental science, and artificial intelligence,
              contributing to technological progress.
            </p>
            <p className="mb-4">
              Researchers collaborate on projects, analyze data, and publish
              findings to inform academic and industrial advancement.
            </p>
            <button className="bg-[#001f1f] text-white px-6 py-3 hover:bg-[#003333] transition">
              Learn More
            </button>
          </div>
          <Image
            src="/images/home4.png"
            alt="Investment in Science"
            width={280}
            height={280}
            className="object-contain"
          />
        </div>
      </section>

      {/* News Cards Section */}
      <section className="bg-[#FFF5F7] py-16 md:px-32 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
            Latest News & Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {newsCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border rounded-md shadow hover:shadow-lg transition overflow-hidden w-full max-w-[450px] mx-auto"
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={300}
                  className="w-full h-60 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-500 mb-1">{card.date}</p>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-700 line-clamp-3 mb-2">
                    {card.description}
                  </p>
                  <Link
                    href={card.link}
                    className="text-blue-600 hover:underline font-medium text-sm"
                    target="_blank"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href="/publication/news-prints"
              className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
            >
              View All News
            </Link>
          </div>
        </div>
      </section>

      {/* Gradient Line before Footer */}
      <div className="w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-lg" />
    </main>
  );
}
