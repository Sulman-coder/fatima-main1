"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="text-white bg-white min-h-screen">
      {/* Hero Section with Video */}
  <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/science.jpg"
                  alt="Education Banner"
                  fill
                  className="object-cover"
                />
         
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">
          Overview
        </h1>
      </section>

      {/* Gradient Line */}
      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

      {/* Bottom Navigation Links */}
      <div className="flex justify-center space-x-4 py-3 bg-black text-xs">
        <Link href="/about/overview" className="hover:underline text-gray-400">
          {/* Overview */}
        </Link>
        <Link
          href="/about/leadership"
          className="hover:underline text-gray-500"
        >
          Leadership
        </Link>
        <Link href="/about/history" className="hover:underline text-gray-500">
          History
        </Link>
      </div>
  

      {/* Overview Section */}
      <section className="bg-[#610F37] text-white py-4 px-4 md:px-12">
        <div className="flex text-xs gap-4 text-white-500 py-2">
                <Link href="/about/leadership" className="hover:underline">
                 Leadership
                </Link>
                <Link href="/about/history" className="hover:underline">
                 History
                </Link>
               </div> 


                <div className="w-full h-px bg-gray-700" />
        <div className="container mx-auto flex flex-col md:flex-row items-start justify-center gap-04 py-4">
          {/* Text Column */}
          <div className="md:w-1/2 px-4 max-w-prose">
            <h2 className="text-3xl font-bold mb-6 text-center mdy-:text-left">
              Overview
            </h2>
              <p className="text-base leading-relaxed break-words whitespace-pre-wrap">
                Helix Biogen Institute undertakes frontiers areas of Molecular Biology, Microbiology, Virology,  
                Immunology, Medical Biotech, Bioinformatics, Artificial Intelligence and Data Science in Biological/Life Science.  
                The institute is contributing significantly to create the desired human resources in the area of “Omics”  
                by providing and arranging training in related operating fields, academic event planning such as scientific  
                seminars, workshops, conferences, symposiums/talk and digital marketing. In addition, we provide biomedical  
                researchers with access to leading experts in the field of “Omics” and offer researchers support for advanced  
                and personalized analysis of genomic data ranging from initial design of research projects to the detailed  
                evaluation of research results. In Helix Biogen Institute management, analyses and interpretation of genomic  
                information to improve decision making in bio-medicine are carried out. Helix Biogen Institute is a fast-growing  
                organization in the field of technology in Biomedical Sciences based in Nigeria.
                </p>

            </div>

          {/* Image Column */}
          <div className="md:w-1/2 px-4 flex justify-center md:mt-22">
            <Image
              src="/images/research.jpg"
              alt="Helix Overview"
              width={500}
              height={350}
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Two Images Section (Cards Style) */}
      <section className="bg-gray-100 text-black py-10 px-4 sm:px-14 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white shadow-md p-0 flex flex-col items-center text-center hover:shadow-lg transition">
          <Image
            src="/images/leaders.jpg"
            alt="Our Mission"
            width={400}
            height={250}
            className="rounded-lg object-cover mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Our Mission</h3>
          <p className="text-sm text-gray-700">
            Helix Biogen Institute's history is built on a passion for
            innovation and a dedication to advancing the field of biomedical
            science.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-0 flex flex-col items-center text-center hover:shadow-lg transition">
          <Image
            src="/images/vision.png"
            alt="Our Vision"
            width={400}
            height={250}
            className="rounded-lg object-cover mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Our Vision</h3>
          <p className="text-sm text-gray-.700">
            At Helix Biogen Institute, leadership is about inspiring growth,
            driving progress, and leading with expertise to shape the future of
            biomedical science
          </p>
        </div>
          
          <div className="bg-white shadow-md p-0 flex flex-col items-center text-center hover:shadow-lg transition">
          <Image
            src="/leadership/value.png"
            alt="Our Mission"
            width={400}
            height={250}
            className="rounded-lg object-cover mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">Our Values</h3>
          <p className="text-sm text-gray-700">
           At the center of it all are honesty and integrity, quality services, and provision of excellent professional and technical expertise.

           

          </p>
        </div>
       </section>

       <div className="w-full h-[3px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
    </main>
  );
}
