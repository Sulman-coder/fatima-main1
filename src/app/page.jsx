"use client";

import Image from "next/image";
import Link from "next/link";
// import { newsCards } from "@/data/newsCards";
import { newsCards } from "../data/newsCards";






export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">


<section className="relative w-full md:h-screen h-[70vh] flex items-center justify-center py-20 lg:py-24">
  {/* Background Video
  <video
    src="/leadership/Helix.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover brightness-110 -z-20"
  /> */}

{/* <className="relative w-full h-full"> */}
{/* Background Video */}

  <video
    src="/leadership/Helix.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover brightness-110 -z-20"
  />

  {/* Overlay (60–70% dark) */}
  <div className="absolute top-0 left-0 w-full h-full bg-black/70 -z-10"></div>
</section>




      {/* Gradient Line */}
      <div className="w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-lg" />

      {/* Advancing Science for Global Impact */}
  {/* <section className="relative bg-[#0A1A2F] text-white py-20 px-6 sm:px-12 lg:px-24 overflow-hidden font-sans"> */}
  
  {/* Background Logo - More Left */}

    {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 z-0 hidden md:block pr-10">
    <Image
      src="/images/logo2.png"
      alt="Helix Biogen Institute Logo"
      width={380}
      height={380}
      className="object-contain"
    />
  </div>  */}

   {/* Main Content  */}
{/*  
   <div className="relative z-10 max-w-5xl space-y-8 text-left pl-0 sm:pl-2">

    <h2 className="text-[#F0A500] text-3xl md:text-4xl leading-tight">
      Advancing Science for Global Impact
    </h2>

    <div className="space-y-5">
      <p className="text-2xl leading-relaxed text-gray-200">
       Helix Biogen Institute is pioneering a transformative model for biomedical research in Africa, dedicated to solving the most pressing health challenges of the 21st century, from emerging infectious diseases to the growing demand for sustainable healthcare solutions. Established to bridge the gap between discovery and application, Helix Biogen is recognized for its excellence in life sciences, genomics, and molecular research, as well as for nurturing the next generation of scientific innovators across the continent.
    </p>

      <p className="text-2xl leading-relaxed text-gray-200">
       Building on a strong foundation of innovation and collaboration, Helix Biogen has developed an integrated model that unites fundamental research with translational science to accelerate the creation of impactful vaccines, diagnostics, and therapeutics. This model ensures that scientific breakthroughs move swiftly from the laboratory to real-world solutions that improve human health and wellbeing.

      </p>

      <p className="text-2xl leading-relaxed text-gray-200">
        Furthermore, revenues and resources generated through strategic partnerships, applied research, and technology innovation are reinvested into scientific development and capacity building. This self-sustaining ecosystem fuels continuous discovery, expands training opportunities, and strengthens Africa’s position in the global research landscape, amplifying the lasting impact of science on society.
      </p>
    </div>

    <Link href="/research-&-development/drugs-&-peptides">
      <button className="mt-4 px-8 py-3 bg-[#F0A500] text-[#06152B] font-semibold rounded-lg hover:bg-[#d48f00] transition-all">
        Research & Development
      </button>
    </Link>

  </div>
</section>  */}

<section className="relative bg-[#0A1A2F] text-white py-24 px-8 sm:px-16 lg:px-32 overflow-hidden font-sans">

  {/* Background Logo - More Left */}
  <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 z-0 hidden md:block pr-10">
    <Image
      src="/images/logo2.png"
      alt="Helix Biogen Institute Logo"
      width={380}
      height={380}
      className="object-contain"
    />
  </div>

  {/* Main Content */}
  <div className="relative z-10 max-w-5xl space-y-8 text-left sm:pl-4">

    <h2 className="text-[#F0A500] text-3xl md:text-4xl leading-tight">
      Advancing Science for Global Impact
    </h2>

    <div className="space-y-6">
      <p className="text-[21px] leading-relaxed text-gray-200 text-justify">
        Helix Biogen Institute is pioneering a transformative model for biomedical research in Africa, dedicated to solving the most pressing health challenges of the 21st century, from emerging infectious diseases to the growing demand for sustainable healthcare solutions. Established to bridge the gap between discovery and application, Helix Biogen is recognized for its excellence in life sciences, genomics, and molecular research, as well as for nurturing the next generation of scientific innovators across the continent.
      </p>

      <p className="text-[21px] leading-relaxed text-gray-200 text-justify">
        Building on a strong foundation of innovation and collaboration, Helix Biogen has developed an integrated model that unites fundamental research with translational science to accelerate the creation of impactful vaccines, diagnostics, and therapeutics. This model ensures that scientific breakthroughs move swiftly from the laboratory to real-world solutions that improve human health and wellbeing.
      </p>

      <p className="text-[21px] leading-relaxed text-gray-200 text-justify">
        Furthermore, revenues and resources generated through strategic partnerships, applied research, and technology innovation are reinvested into scientific development and capacity building. This self-sustaining ecosystem fuels continuous discovery, expands training opportunities, and strengthens Africa’s position in the global research landscape, amplifying the lasting impact of science on society.
      </p>
    </div>

    <Link href="/research-&-development/drugs-&-peptides">
      <button className="mt-6 px-10 py-4 bg-[#F0A500] text-[#06152B] font-semibold rounded-lg hover:bg-[#d48f00] transition-all">
        Research & Development
      </button>
    </Link>

  </div>
</section>

{/* Driving Scientific Discovery */}
<section className="px-6 sm:px-12 md:px-16 lg:px-24 py-16 bg-white">
  <div className="max-w-6xl mx-auto text-left">

    {/* Heading */}
    <h2 className="text-[#FFB51A] text-3xl sm:text-4xl lg:text-5xl mb-6">
      Driving Scientific Discovery
    </h2>

    {/* Justified Text */}
    <p className="text-base text-[20px] text-black leading-relaxed sm:leading-normal mb-6 text-justify">
      Recognized as one of Africa’s leading research institutions, Helix Biogen
      Institute empowers scientists to explore bold, high-impact ideas that advance
      our understanding of life and health while driving innovations that address
      real-world medical challenges. Our researchers work across genomics, molecular
      biology, vaccine development, and artificial intelligence to uncover discoveries
      that transform healthcare and strengthen scientific capacity across the continent.
    </p>

    <p className="text-base text-[20px] text-black leading-relaxed sm:leading-normal mb-10 text-justify">
      Through our intensive training programs and advanced research fellowships, we
      are inspiring and equipping the next generation of African scientists to lead
      breakthroughs in biomedical science. By combining mentorship, technology, and
      hands-on experience, Helix Biogen Institute is ensuring a lasting legacy of
      excellence, discovery, and global impact for generations to come.
    </p>

    {/* Science & Medicine Button ABOVE the images */}
    <div className="text-center sm:text-left mb-10">
      <Link href="/science-&-medicine/overview">
        <button className="px-8 py-3 bg-black text-white font-semibold rounded-lg hover:bg-[#ECA73A] transition-all">
          Science & Medicine
        </button>
      </Link>
    </div>

    {/* Image Section (Aligned + Equal Size) */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

      {/* Image 1 */}
      <Link href="/research-&-development/vaccine-candidates">
        <div className="relative group cursor-pointer w-full overflow-hidden rounded-lg shadow-md h-72">
          <img
            src="/images/Vaccine candidate.png"
            alt="Vaccine Research"
            className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-3 text-center">
            <button className="text-white text-base font-bold group-hover:text-[#FFB51A] transition-all">
              Vaccine Candidate
            </button>
          </div>
        </div>
      </Link>

      {/* Image 2 */}
      <Link href="/research-&-development/diagnostic.kits">
        <div className="relative group cursor-pointer w-full overflow-hidden rounded-lg shadow-md h-72">
          <img
            src="/images/diagnostic kit.jpg"
            alt="Diagnostic Kits"
            className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/70 py-3 text-center">
            <button className="text-white text-base font-bold group-hover:text-[#FFB51A] transition-all">
              Diagnostic Kits
            </button>
          </div>
        </div>
      </Link>

    </div>
  </div>
</section>

























{/* Leading the Evolution of Medicine */}





<section className="bg-black text-white py-20 px-6 sm:px-16 relative overflow-hidden flex items-center justify-center">

  {/* Background Image (right side faded) */}
  <div className="absolute inset-y-0 right-0 w-1/2 opacity-10 z-0 hidden md:block">
    <Image
      src="/images/lungs.png"
      alt="Background"
      fill
      className="object-cover"
    />
  </div>

                   {/* <div className="relative z-10 bg-[#1E90FF]/30 backdrop-blur-md 
                  p-14 md:p-20 rounded-2xl max-w-6x1 w-full text-left 
                  space-y-8 mx-auto"> */}


                  <div className="relative z-10 bg-[#1E90FF]/30 backdrop-blur-md 
    p-10 md:p-14 rounded-2xl max-w-6xl w-full text-left 
    space-y-8 mx-auto shadow-lg">

    {/* Heading */}
    <h2 className="text-[#E9A300] text-3xl md:text-4xl font-semibold">
      Leading the Evolution of Medicine
    </h2>

    {/* Paragraphs */}
    <p className="text-[20px] leading-relaxed text-gray-200">
      In addition to advancing groundbreaking research in molecular biology and genomics, 
      Helix Biogen Institute has become a continental leader in translational biomedical 
      science, bridging laboratory discoveries with real-world medical solutions that 
      address Africa’s most urgent health needs.
    </p>

    <p className="text-[20px] leading-relaxed text-gray-200">
      Through its specialized divisions in vaccine design, molecular diagnostics, and 
      bioinformatics innovation, Helix Biogen is driving the creation of next-generation 
      vaccines, precision diagnostics, and AI-powered health technologies. These efforts 
      are transforming how diseases are prevented, detected, and treated across the 
      continent, positioning Helix Biogen at the forefront of Africa’s medical evolution 
      and global scientific progress.
    </p>

    {/* CTA Button */}
    <div className="relative inline-block mt-4">
      <Link href="/science-&-medicine/division">
        <button className="px-8 py-3 bg-white text-black text-[18px] font-semibold rounded-lg shadow-sm 
                           hover:bg-gray-100 transition-all relative z-10">
          LEARN MORE →
        </button>
      </Link>

      {/* Blue Accent */}
      <span className="absolute left-0 right-0 -bottom-1 h-2 bg-gradient-to-r 
                      from-[#05DBF2]/50 to-[#007A8E]/50 rounded-full"></span>
    </div>
  </div>

</section>
















{/* Amplifying Investment in Science */}
<section className="bg-[#0A6B74] text-white py-24 px-4 sm:px-10 md:px-16 lg:px-24">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

    {/* LEFT TEXT SIDE */}
    <div className="w-full md:w-[55%] md:pl-[9px]">
      <h2 className="text-3xl md:text-4xl mb-6 leading-tight">
        Elevating Investment in Research
      </h2>

      <p className="text-lg md:text-xl leading-relaxed mb-4 justify-center">
        Helix Biogen Institute envisions a future where discoveries made in African
        laboratories evolve into globally recognized innovations that transform
        health and wellbeing. We are working toward a model that channels
        groundbreaking research in genomics, molecular biology, and vaccine design
        into practical medical solutions and strong development partnerships across
        the world.
      </p>

      <p className="text-lg md:text-xl leading-relaxed mb-10">
        Our goal is to create a self-sustaining system in which resources generated
        through innovation and collaboration are reinvested into cutting-edge
        research, training, and technology. By steadily building this foundation,
        Helix Biogen aims to amplify long-term investment in science, strengthen
        Africa’s research ecosystem, and ensure that future discoveries continue to
        drive global impact.
      </p>


    <Link href="/research-&-development/drugs-&-peptides">
  <button className="bg-black text-white rounded-lg px-6 py-3 text-sm font-bold hover:opacity-90 transition-all">
    LEARN MORE
  </button>
</Link>
</div>

    {/* RIGHT IMAGE SIDE */}
    {/* <div className="w-full md:w-[45%] flex justify-end"> */}
    <div className="w-full md:w-[45%] flex justify-end ml-1">
      <Image
        src="/images/elevating-investment-in-research.jpg"
        alt="Translational Research Graph"
        width={400}   // Increased width
        height={400}  // Increased height
        className="object-contain"
      />
    </div>

  </div>
</section>








            
       

<section className="bg-[#FFF5F7] py-16 px-4 md:px-32">
  <div className="container mx-auto text-center"> {/* Center everything inside */}
    <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
      Latest News & Blogs
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
      {newsCards.map((card, idx) => (
        <div
          key={idx}
          className="bg-white rounded-md shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden w-full max-w-[450px]"
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
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{card.title}</h3>
            <p className="text-sm text-gray-700 line-clamp-3 mb-2">{card.description}</p>
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

    <div className="mt-8">
      <Link
        href="/publication/news-prints"
        className="inline-block bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition"
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
