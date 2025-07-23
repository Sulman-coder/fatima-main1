"use client";

import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    title: "Research Departments",
    desc: "Scripps Research faculty collaborate across six interrelated departments in pursuit of life-changing discoveries.",
    img: "/images/card1.jpeg",
    link: "#",
  },
  {
    title: "Disease Areas & Medicines",
    desc: "Scripps scientists decipher the underlying biological causes of disease and use that knowledge to revolutionize medicine and healthcare.",
    img: "/images/card2.jpeg",
    link: "#",
  },
  {
    title: "Centers and Institutes",
    desc: "A number of centers and institutes within Scripps Research focus resources on specific areas of investigation.",
    img: "/images/card3.jpeg",
    link: "#",
  },
  {
    title: "Cores & Services",
    desc: "The cores and services at Scripps Research provide access to the latest instrumentation, training and expertise.",
    img: "/images/card4.jpeg",
    link: "#",
  },
  {
    title: "Calibr-Skaggs",
    desc: "The Calibr-Skaggs Institute for Innovative Medicines accelerates the creation of new medicines by pairing biomedical research with discovery.",
    img: "/images/card5.jpeg",
    link: "#",
  },
  {
    title: "Scripps Research Translational Institute",
    desc: "The Scripps Research Translational Institute leverages progress in human genomics with the power of wireless digital technologies.",
    img: "/images/card6.jpeg",
    link: "#",
  },
];

const page = () => {
  return (
    <div className="text-white bg-[#ECE9E5] min-h-screen">
      <section className="relative w-full h-[60vh] overflow-hidden flex items-end justify-center">
        <Image
          fill
          src="/images/about.jpeg"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold ml-32 pb-4">
          Science & Medicine
        </h1>
      </section>

      <div className="w-full h-[10px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

      {/* OverView Section */}
      <section className="bg-[#4187F6] text-white px-6 md:px-24 py-16">
        <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-light mb-8">Overview</h2>
            <p className="text-lg leading-relaxed mb-6">
              Helix Biogen Institute undertakes frontiers areas of Molecular
              Biology, Microbiology, Virology, Immunology, Medical Biotech,
              Bioinformatics, Artificial Intelligence and Data Science in
              Biological/Life Science. The institute is contributing
              significantly to create the desired human resources in the area of
              “Omics” by providing and arranging training in related operating
              fields, academic event planning such as scientific seminars,
              workshops, conferences, symposiums/talk and digital marketing.
              <br />
              In addition, we provide biomedical researchers with access to
              leading experts in the field of “Omics” and offer researchers
              support for advanced and personalized analysis of genomic data
              ranging from initial design of research projects to the detailed
              evaluation of research results. In Helix Biogen Institute
              management, analyses and interpretation of genomic information to
              improve decision making in bio-medicine are carried out.
              <br />
              Helix Biogen Institute is a fast-growing organization in the field
              of technology in Biomedical Sciences based in Nigeria.
            </p>
            <p className="text-lg leading-relaxed">
              Scientists in the institute’s six academic research departments
              work hand-in-hand with researchers of the{" "}
              <span className="text-pink-400 font-medium">
                Scripps Research Translational Institute
              </span>{" "}
              and the{" "}
              <span className="text-pink-400 font-medium">
                Calibr-Skaggs Institute for Innovative Medicines
              </span>
              . Together, we cultivate the next generation of scientific leaders
              and expand the frontiers of knowledge to drive innovation that
              improves lives around the planet.
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="bg-white text-black px-54 py-16">
        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white shadow-md  overflow-hidden"
            >
              <div className="w-full h-72 relative">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{card.desc}</p>
                <Link href={card.link}>
                  <span className="text-blue-700 text-sm font-medium hover:underline">
                    READ MORE »
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
