"use client";
import Image from "next/image";
import Link from "next/link";

export default function OnlineCourses() {
  return (
    <main className=" mx-auto py-20 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
       Online Course
      </h1>

      <div className="relative w-full md:h-[70vh] h-[30vh] mb-8">
  <Image
    src="/images/education.jpg"
    alt="Education Banner"
    fill
    className="object-cover opacity-60"
  />
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

 <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8 px-4 py-16">
      {/* Left Side Image */}
      <div className="w-full md:w-1/3">
        <div className="sticky top-24">
          <Image
            src="/images/online-courses.jpeg" // Make sure this image exists in public/education/
            alt="Online Courses"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-full md:w-2/3 space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Online Courses</h1>

        <p className="text-gray-700 text-lg">
          Are you ready to take your knowledge of life and medical sciences to the next level?
          Our Online Courses in Life and Medical Sciences are designed to provide flexible,
          comprehensive learning experiences for professionals and enthusiasts alike.
        </p>

        <p className="text-gray-700 text-lg">
          Whether you're exploring biology, medicine, bioinformatics, or biotechnology, we offer a
          wide range of courses to suit your interests and career goals.
        </p>

        <p className="text-gray-700 text-lg">
          Our courses are crafted to be accessible to learners at all stages of their journey, from
          beginners to seasoned professionals. With expert instructors and cutting-edge content, you’ll
          gain the skills and knowledge needed to make an impact in the ever-evolving world of life sciences.
        </p>

        <p className="text-gray-700 text-lg">
          Join a community of like-minded learners and engage in a dynamic online learning experience
          that’s tailored to your schedule.
        </p>
      </div>
    </div>
    <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
    </main>
  );
}