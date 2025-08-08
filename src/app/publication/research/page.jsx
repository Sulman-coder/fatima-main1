import { FiExternalLink } from "react-icons/fi";
// import { publications } from "../../../../data/publications";
import Image from "next/image";
import Link from "next/link";






import { publications } from "@/data/publications";

export default function ResearchPage() {
  return (
    <main className="bg-gray-100 min-h-screen py-0 px-4">
    {/* Hero Section */}
  <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
    <Image
      src="/images/research.jpg"
      alt="Education Banner"
      fill
      className="object-cover opacity-60"
    />
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
    <h1 className="relative z-10 text-3xl md:text-5xl font-bold text-white">
      Research
    </h1>
  </section>

  {/* Gradient Divider */}
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



  {/* Research Update Section */}
  <div className="w-full bg-white py-10 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
    <div className="bg-[#4187F6] text-white rounded-lg p-6 md:p-10 lg:p-14 shadow-md">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 leading-snug">
        Discovering the Future: The Helix Biogen Institute <br className="hidden md:block" /> Research Update
      </h2>
      <p className="text-base sm:text-lg leading-relaxed">
        Helix Biogen Institute is at the forefront of knowledge and innovation, driven by a passion for exploring the unseen realms of discovery. Our team of experts is dedicated to uncovering new solutions to the world's most pressing challenges, and we are proud to share the latest updates from our research initiatives. Our researchers are making significant advancements and contributions to the scientific community. We are committed to investing in world-class infrastructure and fostering collaborations with leading institutions and industry partners to ensure that our work has the maximum impact.
      </p>
    </div>
  </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 py-16 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        {publications.map((pub, index) => (
          <div key={index} className="relative bg-white border border-gray-300 p-6">
            {pub.link && (
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-gray-400 hover:text-blue-600"
              >
                <FiExternalLink size={18} />
              </a>
            )}
            <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4 max-w-4xl">
              {pub.title}
            </h2>
          
          </div>
        ))}
      </div>

  
    <div className="w-full h-[5px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-lg" />

    </main>
  );
}
