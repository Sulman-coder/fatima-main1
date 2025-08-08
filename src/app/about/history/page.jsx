import Image from "next/image";
import Link from "next/link";


export default function HistoryPage() {
  const currentPage = "History";
  const bottomLinkColor = "text-white";

  return (
      //  <main className="text-white bg-black min-h-screen">
    <main className="bg-gray-100 min-h-screen py-10 px-4">

      {/* Hero Section */}
      {/* <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center"> */}
         <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
              <Image
                src="/images/about.jpeg"
                alt="Education Banner"
                fill
                className="object-cover opacity-60"
              />
       
         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold">History</h1>
      </section>

{/* Gradient Line */}
      <div className="w-full h-[3px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

      {/* Bottom Navigation Links (Black Background) */}
      <div className="flex justify-center space-x-4 py-3 bg-black text-xs">
        <Link
          href="/about/overview"
          className={`hover:underline ${
            currentPage === "About" ? bottomLinkColor : "text-gray-500"
          }`}
        >
          Overview
        </Link>
        <Link
          href="/about/leadership"
          className={`hover:underline ${
            currentPage === "Leadership" ? bottomLinkColor : "text-gray-500"
          }`}
        >Leadership</Link>
        <Link
          href="/about/history"
          className={`hover:underline ${
            currentPage === "History" ? bottomLinkColor : "text-gray-500"
          }`}
        >
          History
        </Link>
      </div>

       <div className="text-center mb-8 my-15">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-blue-900 mb-6">
  History of Helix Biogen Institute
</h1>

    <h2 className="text-base sm:text-lg font-semibold text-gray-700">
      Here's a detailed timeline of the growth and transition of Helix Biogen Consult to Helix Biogen Institute
    </h2>
  </div>

<div className="max-w-6xl mx-auto bg-white text-gray-800 shadow-md rounded-md overflow-hidden my-10">
    {/* Maroon Header */}
    <div className="bg-[#800000] text-white text-xl sm:text-2xl font-bold py-3 px-4">Timeline
      
    </div>
 

  {/* Timeline Blocks */}
  <div className="space-y-10">
    {/* 1. Founding */}
    <div>
      <h3 className="text-lg font-semibold text-blue-900 mb-1">
        1. Founding of Helix Biogen Consult <span className="text-sm text-gray-500">(Late 2019)</span>
      </h3>
      <p className="text-gray-700 mb-2">
        Helix Biogen Consult was established as a consultancy firm to provide expert services in biomedical research, diagnostics, and biotechnology solutions.
      </p>
      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
        <li>Hands-on training in molecular biology techniques.</li>
        <li>Collaborations with academic institutions on lab capacity-building.</li>
        <li>Preliminary research on diagnostics and vaccine approaches.</li>
      </ul>
    </div>

    {/* 2. Expansion */}
    <div>
      <h3 className="text-lg font-semibold text-blue-900 mb-1">
        2. Expansion to Research-Based Projects <span className="text-sm text-gray-500">(2020)</span>
      </h3>
      <p className="text-gray-700 mb-2">
        During COVID-19, the organization pivoted to applied biomedical research including vaccine development.
      </p>
      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
        <li>Initiated COVID-19 vaccine research for African populations.</li>
        <li>Vaccine candidate recognized by WHO in the global landscape.</li>
      </ul>
    </div>

    {/* 3. Transition */}
    <div>
      <h3 className="text-lg font-semibold text-blue-900 mb-1">
        3. Transition to a Biomedical Research Institute <span className="text-sm text-gray-500">(Mid-2021)</span>
      </h3>
      <p className="text-gray-700 mb-2">
        To reflect its expanded mission, Helix Biogen transitioned into a biomedical institute.
      </p>
      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
        <li>Founded a research hub in Ogbomoso, Nigeria.</li>
        <li>Secured local and international academic and industry partnerships.</li>
        <li>Expanded into translational genomics and diagnostic kit development.</li>
      </ul>
    </div>

    {/* 4. Key Achievements */}
    <div>
      <h3 className="text-lg font-semibold text-blue-900 mb-1">
        4. Key Achievements as Helix Biogen Institute <span className="text-sm text-gray-500">(2022 – Present)</span>
      </h3>
      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
        <li>Advanced preclinical work on COVID-19 vaccine candidate.</li>
        <li>Developed point-of-care diagnostic kits for Africa CDC-prioritized pathogens.</li>
        <li>Published mRNA vaccine studies for vaccinia and Mpox viruses.</li>
        <li>Hosted biotech entrepreneurship and lab training programs.</li>
        <li>Collaborated with Africa CDC and public health agencies.</li>
      </ul>
    </div>

    {/* Vision */}
    <div className="bg-gray-100 rounded-md p-4 mt-6">
      <h3 className="text-lg font-semibold text-[#800000] mb-2">The Vision of Helix Biogen Institute</h3>
      <p className="text-sm text-gray-700">
        Today, Helix Biogen Institute stands as a leading African biomedical research hub, focused on:
      </p>
      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1 mt-2">
        <li>Developing innovative diagnostics and vaccines for Africa’s healthcare needs.</li>
        <li>Fostering local biotech innovation and scientific capacity.</li>
        <li>Driving global collaborations for impactful public health outcomes.</li>
      </ul>
    </div>
  </div>

    </div>
     <div className="w-full h-[3px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />
    </main>
  );
}
