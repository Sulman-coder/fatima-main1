
import Image from "next/image";
import { FiCalendar, FiExternalLink } from "react-icons/fi";
import { news } from "@/data/news";
import Link from "next/link";


export default function NewsCard() {
  return (
    <main className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/research.jpg"
          alt="Research Banner"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-bold text-white">
          News & Prints
        </h1>
      </section>

     <div className="w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-lg" />

 <div className="flex justify-center space-x-4 py-3 bg-black text-xs">
        <Link href="/publication/research" className="hover:underline text-gray-400">
          Research
        </Link>
        <Link
          href="/publication/blogs"
          className="hover:underline text-gray-500"
        >
          Blogs
        </Link>
        <Link href="/publication/news-prints" className="hover:underline text-gray-500">
      News & Prints
        </Link>
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
        {news.map((item, index) => (
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
      <div className="w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-lg" />
    </main>
  );
}
