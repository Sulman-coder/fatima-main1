"use client";
import Image from "next/image";
import Link from "next/link";

export default function PhysicalCourses() {
  return (
    // <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
    <main className=" mx-auto py-0 text-gray-800">

     

      {/* <div className="relative w-full h-96 mb-8"> */}
      <div className="relative flex items-center justify-center w-full md:h-[70vh] h-[30vh]">

  <Image
    src="/images/education.jpg"
    alt="Education Banner"
    fill
    className="object-cover opacity-60"
  />
 <h1 className="text-3xl md:text-4xl font-bold mb-0 text-center">
       Physical Courses
      </h1>

</div>

<div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />


<div className="flex justify-center space-x-4 py-3 bg-black text-xs font-semibold">
  <Link href="/education-&-development/professional-certificates" className="hover:underline text-white">
    Professional Certificate Courses
  </Link>
  <Link href="/education-&-development/online-courses" className="hover:underline text-gray-500">
    Online Courses
  </Link>
  <Link href="/education-&-development/physical-courses" className="hover:underline text-gray-500">
    Physical Courses
  </Link>
  <Link href="/education-&-development/industrial-training" className="hover:underline text-gray-500">
    Industrial Training
  </Link>
  <Link href="/education-&-development/internship" className="hover:underline text-gray-500">
    Internship
  </Link>
</div>

 <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 px-4 py-20">
      {/* Left Side Image */}
      <div className="w-full md:w-1/3">
        <div className="sticky top-40">
          <Image
            src="/images/physical.jpeg" // Make sure this image exists in public/education/
            alt="Physical Courses"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-2/3 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Physical Courses</h1>

        <p className="text-gray-700 text-lg">
          At Helix Biogen Institute, we offer immersive in-person Physical Courses
          that foster deep understanding and hands-on experience in life and medical sciences.
        </p>

        <p className="text-gray-700 text-lg">
          These courses are designed for learners who prefer interactive classroom settings,
          live experiments, and collaborative projects.
        </p>

        <p className="text-gray-700 text-lg">
          Our state-of-the-art facilities and experienced faculty ensure that students gain both
          theoretical knowledge and practical skills that are critical for success in scientific careers.
        </p>

        <p className="text-gray-700 text-lg">
          With a variety of short-term and long-term programs available, our physical courses
          cater to students, researchers, and professionals eager to make a difference in the biomedical field.
        </p>
      </div>
    </div>
    <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
    </main>
  );
}