import { FiCalendar, FiExternalLink } from "react-icons/fi";
//  import { news } from "../../../../data/news";
 import { news } from "../../data/news";


export default function NewsCard() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-white px-54 py-20">
      <div className="flex flex-col md:flex-row w-full  overflow-hidden ml-20">
      {/* Left - Image */}
      <div className="w-full md:w-1/3 h-64 md:h-auto">
        <img
          src="https://www.helixbiogeninstitute.org/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjrmhn005%2Fimage%2Fupload%2Fv1725107037%2Fhbiapi-uploads%2Fidbcppjvlzzzdyh8vqxc.jpg&w=1080&q=75"
          alt="Research Lab"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right - Content */}
      <div className="w-full md:w-1/2 bg-[#0F172A] text-white p-14 flex flex-col justify-between">
        {/* Date */}
        <div className="flex items-center text-sm text-gray-300 mb-2">
          <FiCalendar className="mr-2" />
          24th August, 2023
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold leading-snug mb-4">
          Helix Biogen Institute And Anesvad Foundation Strengthens Biomedical Research In Oyo
        </h2>

        {/* Description */}
        <p className="text-gray-400 mb-6">
          No excerpts provided for this news print; please follow the source link to read more.
        </p>

        {/* Button */}
        <a
          href="#"
          className="inline-block text-lg text-center bg-gray-100 text-[#0A122A] font-medium px-6 py-3 rounded hover:bg-white transition"
        >
          Read More
        </a>
      </div>
      </div>

      <div className="grid grid-cols-1  md:grid-cols-2 gap-6 px-20 py-10">
        {news.map((item, index) => (
          <div
            key={index}
            className="relative border border-gray-200  p-6 bg-white transition hover:bg-gray-200"
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

            <div className="flex items-center text-sm text-gray-500 mt-auto">
              <FiCalendar className="mr-2" />
              {item.date}
            </div>

            <p className="text-sm text-gray-400 mt-2">
              No excerpts provided for this news print; please follow the source link to read more.
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
