import { FiExternalLink } from "react-icons/fi";
// import { publications } from "../../../../data/publications";




import { publications } from "@/data/publications";

export default function ResearchPage() {
  return (
    <div className="w-[100vw] min-h-[100vh] bg-white">
      <div className="w-full h-[45vh] bg-[#4187F6] flex flex-col py-14 px-44">
        <h2 className="text-4xl font-semibold mb-4">Discovering the Future: The Helix Biogen Institute <br /> Research Update</h2>
        <p className="text-lg">Helix Biogen Institute is at the forefront of knowledge and innovation, driven by a passion for exploring the unseen realms of discovery. Our team of experts is dedicated to uncovering new solutions to the world's most pressing challenges, and we are proud to share the latest updates from our research initiatives. Our researchers are making significant advancements and contributions to the scientific community. We are committed to investing in world-class infrastructure and fostering collaborations with leading institutions and industry partners to ensure that our work has the maximum impact.</p>
      </div>

      {/* Publication Cards */}
      <div className=" px-64 py-16 grid gap-8">
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
            {/* Authors */}
            {/* <div className="flex flex-wrap gap-2">
              {pub.authors.map((author, i) => (
                <span
                  key={i}
                  className="flex items-center gap-1 bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-md"
                >
                  <FaUserCircle className="text-gray-500" />
                  {author}
                </span>
              ))}
            </div> */}
          </div>
        ))}
      </div>

    </div>
  );
}
