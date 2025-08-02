"use client";
import Image from "next/image";
import Link from "next/link";

export default function Internship() {
  return (
    <main className="text-white bg-white">
      

      <div className="relative flex items-center justify-center w-full md:h-[70vh] h-[30vh]">
  <Image
    src="/images/education.jpg"
    alt="Education Banner"
    fill
    className="object-cover opacity-60"
  />
  <h1 className="absolute z-20 text-white text-3xl md:text-4xl font-bold mb-6 text-center">
       Internship
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

<div className="px-4 py-16 max-w-6xl mx-auto space-y-12 bg-white">
      {/* Page Title */}
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-black">Internship Program</h1>
        <p className="mt-4 text-lg text-black">
          Preparing future scientists with hands-on laboratory exposure and professional mentorship.
        </p>
      </div>

      {/* Text on Left, Image on Right */}
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
        <div className="w-full md:w-1/2 space-y-5 text-black text-lg">
          <p>
            Our Internship Program offers undergraduate and postgraduate students a unique opportunity to work alongside
            experienced scientists in an advanced biotech environment.
          </p>
          <p>
            Interns participate in real-world research, data collection, sample processing, and critical thinking tasks
            designed to prepare them for future scientific careers.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 h-64 md:h-96">
          <Image
            src="/images/internship.jpeg" // Save this image in public/education/
            alt="Internship"
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Second Block */}
      <div className="text-black text-lg space-y-5">
        <p>
          Key learning areas include:
        </p>
        <ul className="list-disc list-inside ml-4">
          <li>Research project participation</li>
          <li>Scientific communication & reporting</li>
          <li>Lab safety and best practices</li>
          <li>Exposure to molecular biology workflows</li>
        </ul>

        <p>
          Interns completing the program receive a certificate and may be recommended for further academic or
          industrial placements.
        </p>
      </div>
    </div>
  
<div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />


    </main>
  );
}
