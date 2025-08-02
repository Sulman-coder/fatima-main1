"use client";
import Image from "next/image";
import Link from "next/link";

export default function IndustrialTraining() {
  return (
    <main className=" text-white">
      

      <div className="relative w-full md:h-[70vh] h-[30vh] flex items-center justify-center">
  <Image
    src="/images/education.jpg"
    alt="Education Banner"
    fill
    className="object-cover opacity-60"
  />
  <h1 className="absolute z-20 text-white text-3xl md:text-4xl font-bold mb-6 text-center">
       Industrial Training
      </h1>
</div>

<div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />


<div className="flex justify-center space-x-4 py-3 bg-black text-xs font-semibold">
  <Link href="/education/professional-certificates" className="hover:underline text-white">
    Professional Certificate Courses
  </Link>
  <Link href="/education & development/online-courses" className="hover:underline text-gray-500">
    Online Courses
  </Link>
  <Link href="/education & development/physical-courses" className="hover:underline text-gray-500">
    Physical Courses
  </Link>
  <Link href="/education & development/industrial-training" className="hover:underline text-gray-500">
    Industrial Training
  </Link>
  <Link href="/education & development/internship" className="hover:underline text-gray-500">
    Internship
  </Link>
</div>

return (
    <div className="px-4 py-16 max-w-6xl mx-auto space-y-12">
      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-white">Industrial Training Program</h1>
        <p className="mt-4 text-lg text-white">
          Bridging the gap between academia and the real world through hands-on biotech experience.
        </p>
      </div>

      {/* Image on Left, Text on Right */}
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="/images/industrial.jpeg" // Save image to public/education/
            alt="Industrial Training"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-md"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-5 text-white text-lg">
          <p>
            Helix Biogen Institute offers a cutting-edge Industrial Training Program aimed at students and graduates of
            biotechnology, biochemistry, microbiology, and related life sciences disciplines.
          </p>
          <p>
            Participants gain hands-on experience with modern lab equipment, industry protocols, and real-time
            research practices that align with global biotechnology standards.
          </p>
        </div>
      </div>

      {/* Second Text Block */}
      <div className="text-white text-lg space-y-5">
        <p>
          The training is supervised by seasoned researchers and includes modules such as:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Molecular Biology Techniques</li>
          <li>Microbial Culturing & Identification</li>
          <li>DNA Extraction & PCR</li>
          <li>Research Documentation & Reporting</li>
        </ul>

        <p>
          Graduates of the Industrial Training Program leave with both technical proficiency and the confidence to
          pursue careers in research, pharmaceuticals, diagnostics, and healthcare industries.
        </p>
      </div>
    </div>
)

<div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />


    </main>
  );
}