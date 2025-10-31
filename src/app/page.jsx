"use client";

import Image from "next/image";
import Link from "next/link";
import { newsCards } from "@/data/newsCards";





export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
    
       {/* <section className="relative w-full md:h-screen h-[60vh]">
         {/* Video background: uncomment if needed  */}
          {/* <video
          src="/leadership/Helix.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        />  
        
          <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
     
    </h1>
  </div>
</section>  */}


<section className="relative w-full md:h-screen h-[70vh] flex items-center justify-center py-20 lg:py-24">
  {/* Background Video */}
  <video
    src="/leadership/Helix.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover brightness-110 -z-20"
  />

  {/* <div className="relative z-10 bg-white/10 backdrop-blur-sm 
                  w-[95%] md:w-[80%] lg:w-[75%]
                  rounded-t-[15px] text-white text-center px-6 py-16 shadow-lg">
    <h1 className="text-4xl md:text-6xl font-bold leading-tight"> */}
      {/* Add Title Here */}
    {/* </h1>
  </div> */}
</section>




      {/* Gradient Line */}
      <div className="w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-lg" />

      {/* Advancing Science for Global Impact */}
<section className="relative bg-[#0A1A2F] text-white py-20 px-6 sm:px-12 lg:px-24 overflow-hidden font-sans">
  
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

   {/* Main Content  */}
 
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
</section>


{/* Driving Scientific Discovery */}
<section className="px-6 lg:px-24 md:px-16 py-16 bg-white">
  <div className="max-w-6xl mx-auto text-left">

    <h2 className="text-[#FFB51A] text-3xl sm:text-4xl lg:text-5xl mb-6">
      Driving Scientific Discovery
    </h2>

    <p className="text-base sm:text-lg lg:text-2xl text-black leading-relaxed sm:leading-normal mb-6">
      Recognized as one of Africa’s leading research institutions, Helix Biogen
      Institute empowers scientists to explore bold, high-impact ideas that advance
      our understanding of life and health while driving innovations that address
      real-world medical challenges. Our researchers work across genomics, molecular
      biology, vaccine development, and artificial intelligence to uncover discoveries
      that transform healthcare and strengthen scientific capacity across the continent.
    </p>

    <p className="text-base sm:text-lg lg:text-2xl text-black leading-relaxed sm:leading-normal mb-10">
      Through our intensive training programs and advanced research fellowships, we
      are inspiring and equipping the next generation of African scientists to lead
      breakthroughs in biomedical science. By combining mentorship, technology, and
      hands-on experience, Helix Biogen Institute is ensuring a lasting legacy of
      excellence, discovery, and global impact for generations to come.
    </p>

    
    

{/* Two Images + Buttons */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-2 sm:px-4">

  {/* Image 1 - Vaccine Candidate */}
  <Link href="/research-&-development/vaccine-candidates">
    <div className="relative group cursor-pointer w-[97%] max-w-lg mx-auto">
      <img
        src="/images/home1.jpeg"
        alt="Vaccine Research"
        className="w-full h-64 object-cover shadow-md group-hover:scale-[1.03] transition-all duration-300"
      />
     

      <button
  className="absolute bottom-0 left-0 w-full bg-white text-black text-sm font-bold py-[0.9rem] shadow-md 
             hover:text-[#FFB51A]"
>
  Vaccine Candidate
</button>
    </div>
  </Link>

  {/* Image 2 - Diagnostic Kits */}
  <Link href="/research-&-development/diagnostic.kits">
    <div className="relative group cursor-pointer w-[97%] max-w-lg mx-auto">
      <img
        src="/images/home2.jpeg"
        alt="Drug Research"
        className="w-full h-64 object-cover shadow-md group-hover:scale-[1.03] transition-all duration-300"
      />
      <button
        className="absolute bottom-0 left-0 w-full bg-white text-black text-sm font-bold py-[0.9rem] shadow-md 
                    hover:text-[#FFB51A]"
      >
        Diagnostic Kits
      </button>
    </div>
  </Link>

</div>







    {/* Main CTA Button */}
    {/* <Link href="/science-&-medicine/overview">
      <button className="mt-10 px-8 py-3 bg-black text-white run  font-semibold rounded-lg hover:bg-[#ECA73A] transition-all">
        Science & Medicine
      </button>
    </Link>

  </div> */}

  <Link href="/science-&-medicine/overview">
  <button className="mt-10 ml-9 px-8 py-3 bg-black text-white run font-semibold rounded-lg hover:bg-[#ECA73A] transition-all">
    Science & Medicine
  </button>
</Link>
</div>
</section>


      {/* Leading the Evolution of Medicine */}
      {/* <section className="bg-gray-900 text-white py-20 px-6 sm:px-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[#F0A500] text-3xl md:text-4xl font-semibold mb-6">
            Leading the Evolution of Medicine
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            In addition to advancing groundbreaking research in molecular biology and genomics, Helix Biogen Institute has become a continental leader in translational biomedical science, bridging laboratory discoveries with real-world medical solutions that address Africa’s most urgent health needs.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mb-4">
            Through its specialized divisions in vaccine design, molecular diagnostics, and bioinformatics innovation, Helix Biogen is driving the creation of next-generation vaccines, precision diagnostics, and AI-powered health technologies. These efforts are transforming how diseases are prevented, detected, and treated across the continent, positioning Helix Biogen at the forefront of Africa’s medical evolution and global scientific progress.
          </p>
        </div>
      </section> */}




{/* Leading the Evolution of Medicine */}
{/* <section className="bg-gray-900 text-white py-20 px-6 sm:px-16">
  <div className="max-w-5xl mx-auto text-left space-y-6">
    <h2 className="text-[#F0A500] text-3xl md:text-4xl mb-6">
      Leading the Evolution of Medicine
    </h2>

    <p className="text-lg md:text-2xl leading-relaxed text-gray-200">
      In addition to advancing groundbreaking research in molecular biology and genomics, Helix Biogen Institute has become a continental leader in translational biomedical science, bridging laboratory discoveries with real-world medical solutions that address Africa’s most urgent health needs.
    </p>

    <p className="text-lg md:text-2xl leading-relaxed text-gray-200">
      Through its specialized divisions in vaccine design, molecular diagnostics, and bioinformatics innovation, Helix Biogen is driving the creation of next-generation vaccines, precision diagnostics, and AI-powered health technologies. These efforts are transforming how diseases are prevented, detected, and treated across the continent, positioning Helix Biogen at the forefront of Africa’s medical evolution and global scientific progress.
    </p>

    <Link href="science-&-medicine/division">
      <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all text-lg">
        LEARN MORE →
      </button>
    </Link>
  </div>
</section> */}



{/* Leading the Evolution of Medicine */}
<section className="bg-black text-white py-20 px-6 sm:px-16 relative overflow-hidden">

  {/* Background Logo Image */}
  {/* <div className="absolute inset-y-0 right-0 flex items-center pr-8 opacity-10 z-0 hidden md:flex">
    <Image
      src="/images/lungs.jpeg"
      alt="Helix Biogen Institute Logo"
      width={420}
      height={420}
      className="object-contain max-h-[85%]"
    />
  </div> */}
{/* Right-side Background Image */}
  <div className="absolute inset-y-0 right-0 w-1/2 opacity-10 z-0 hidden md:block">
    <Image
      src="/images/lungs.png"
      alt="Background"
      fill
      className="object-cover"
    />
  </div>

 <div className="bg-[#1E90FF]/30 backdrop-blur-md 
            p-10 pt-14 pb-14 pl-16  
            max-w-5xl ml-10 mr-auto space-y-5 text-left">
  <h2 className="text-[#E9A300] text-3xl md:text-4xl">
      Leading the Evolution of Medicine
    </h2>
      

      <p className="text-lg md:text-2xl leading-relaxed text-gray-200">
        In addition to advancing groundbreaking research in molecular biology and genomics, 
        Helix Biogen Institute has become a continental leader in translational biomedical 
        science, bridging laboratory discoveries with real-world medical solutions that 
        address Africa’s most urgent health needs.
      </p>

      <p className="text-lg md:text-2xl leading-relaxed text-gray-200">
        Through its specialized divisions in vaccine design, molecular diagnostics, and 
        bioinformatics innovation, Helix Biogen is driving the creation of next-generation 
        vaccines, precision diagnostics, and AI-powered health technologies. These efforts 
        are transforming how diseases are prevented, detected, and treated across the 
        continent, positioning Helix Biogen at the forefront of Africa’s medical evolution 
        and global scientific progress.
      </p>

      {/* CTA */}
      <div className="relative inline-block mt-2">
        <Link href="/science-&-medicine/division">
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-sm hover:bg-gray-100 transition-all text-lg relative z-10">
            LEARN MORE →
          </button>
        </Link>

        {/* Blue Accent */}
        <span className="absolute left-0 right-0 -bottom-1 h-2 bg-gradient-to-r from-[#05DBF2]/50 to-[#007A8E]/50 rounded-full"></span>
      </div>

    </div>

</section>







{/* Elevating Investment in Research */}
{/* <section className="bg-teal-900 text-white py-20 lg:px-30 md:px-20 px-4">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
    
    <div className="w-full md:w-4/6 md:ml-10">
      <h2 className="text-3xl md:text-4xl text-orange-400 font-semibold mb-6 leading-tight whitespace-nowrap">
        Elevating Investment in Research
      </h2>

      <p className="text-lg md:text-xl leading-relaxed mb-3">
        Helix Biogen Institute envisions a future where discoveries made in African laboratories evolve into globally recognized innovations that transform health and wellbeing. We are working toward a model that channels groundbreaking research in genomics, molecular biology, and vaccine design into practical medical solutions and strong development partnerships across the world.
      </p>

      <p className="text-lg md:text-xl leading-relaxed mb-4">
        Our goal is to create a self-sustaining system in which resources generated through innovation and collaboration are reinvested into cutting-edge research, training, and technology. By steadily building this foundation, Helix Biogen aims to amplify long-term investment in science, strengthen Africa’s research ecosystem, and ensure that future discoveries continue to drive global impact.
      </p>

      <button className="bg-[#001f1f] text-white px-6 py-3 hover:bg-[#003333] transition rounded-md">
        Learn More
      </button>
    </div>

    <Image
      src="/images/home4.png"
      alt="Investment in Science"
      width={280}
      height={280}
      className="object-contain rounded-lg"
    />

  </div>
</section> */}

{/* Amplifying Investment in Science */}
{/* <section className="relative bg-gray-900 text-white py-24 px-6 sm:px-16 overflow-hidden"> */}
  
  {/* Right side accent image — NOT full-page, only right section area */}
  {/* <div className="absolute inset-y-0 right-0 flex items-center opacity-10 z-0 hidden md:flex pr-10">
    <Image
      src="/images/science-funding.png" //replace with your new image
      alt="Amplifying Investment in Science"
      width={420}
      height={420}
      className="object-contain max-h-[85%]"
    />
  </div>

  <div className="relative z-10 max-w-6xl mx-auto">
    
    <div className="bg-[#1E90FF]/25 backdrop-blur-md 
                p-12 pr-20 rounded-xl 
                border border-[#1E90FF]/60 
                max-w-4xl mr-auto space-y-6 text-left">

      <h2 className="text-[#E9A300] text-3xl md:text-4xl font-semibold leading-tight">
        Amplifying Investment in Science
      </h2>

      <p className="text-lg md:text-xl leading-relaxed text-gray-200">
        Helix Biogen Institute envisions a future where discoveries made in African laboratories evolve
        into globally recognized innovations that transform health and wellbeing. We are working toward
        a model that channels groundbreaking research in genomics, molecular biology, and vaccine design
        into practical medical solutions and strong development partnerships across the world.
      </p>

      <p className="text-lg md:text-xl leading-relaxed text-gray-200">
        Our goal is to create a self-sustaining system in which resources generated through innovation and
        collaboration are reinvested into cutting-edge research, training, and technology. By steadily
        building this foundation, Helix Biogen aims to amplify long-term investment in science,
        strengthen Africa’s research ecosystem, and ensure that future discoveries continue to drive
        global impact.
      </p>

      <Link href="/images/section5.jpeg">
        <button className="mt-2 bg-white text-black font-semibold px-7 py-3 rounded-lg hover:bg-gray-200 transition-all">
          Learn More →
        </button>
      </Link>

    </div>

  </div>

</section> */}



{/* Amplifying Investment in Science */}
<section className="bg-[#0A6B74] text-white py-24 px-4 sm:px-10 md:px-16 lg:px-24">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

    {/* LEFT TEXT SIDE */}
    <div className="w-full md:w-[55%] md:pl-[9px]">
      <h2 className="text-3xl md:text-4xl mb-6 leading-tight">
        Amplifying Investment in Science
      </h2>

      <p className="text-lg md:text-xl leading-relaxed mb-4">
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
    <div className="w-full md:w-[45%] flex justify-start ml-1">
      <Image
        src="/images/section5.jpeg"
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
