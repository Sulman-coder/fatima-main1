"use client";

import Image from "next/image";
import React from "react";
import { FiExternalLink } from "react-icons/fi";

const blogPosts = [
  {
    title: "Research hub gets foreign partnership",
    link: "https://punchng.com/research-hub-gets-foreign-partnership/",
  },
  {
    title:
      "How funding is affecting COVID-19 research in Nigerian universities",
    link: "https://www.premiumtimesng.com/news/headlines/406489-how-funding-is-affecting-covid-19-research-in-nigerian-universities.html",
  },
  {
    title:
      "Ogbomoso Biomedical Research Hub Partners Foreign Body In Advancing Ground-breaking Innovations",
    link: "https://newnigeriannewspaper.com/ogbomoso-biomedical-research-hub-partners-foreign-body-in-advancing-ground-breaking-innovations/",
  },
  {
    title:
      "Oyo tech hub partners foreign body to advance healthcare, biotechnology",
    link: "https://tribuneonlineng.com/oyo-tech-hub-partners-foreign-body-to-advance-healthcare-biotechnology/",
  },
  {
    title:
      "Research hub partners Foundation to tackle scientific challenges (Guardian)",
    link: "https://guardian.ng/news/research-hub-partners-foundation-to-tackle-scientific-challenges/",
  },
  {
    title:
      "Research hub partners Foundation to tackle scientific challenges (Street Journal)",
    link: "https://thestreetjournal.org/research-hub-partners-foundation-to-tackle-scientific-challenges/",
  },
  {
    title:
      "Healthcare: Ogbomoso Biomedical Research Hub Partners ANESVAD Foundation (New Telegraph)",
    link: "https://newtelegraphng.com/healthcare-ogbomoso-biomedical-research-hub-partners-anesvad-foundation/",
  },
  {
    title:
      "Healthcare: Ogbomoso Biomedical Research Hub Partners ANESVAD Foundation (Headlines)",
    link: "https://headlines.ng/healthcare-ogbomoso-biomedical-research-hub-partners-anesvad-foundation/",
  },
  {
    title: "Ogbomoso biomedical research hub partners foreign body",
    link: "https://thenationonlineng.net/ogbomoso-biomedical-research-hub-partners-foreign-body/",
  },
  {
    title: "Biomedical Partners Foreign Group To Tackle Scientific Challenges",
    link: "https://leadership.ng/biomedical-partners-foreign-group-to-tackle-scientific-challenges/",
  },
  {
    title: "Institute plans battle against infectious diseases",
    link: "https://punchng.com/institute-plans-battle-against-infectious-diseases/",
  },
  {
    title: "Nigeria@60: Successive govts joking with education, say scholars.",
    link: "https://punchng.com/nigeria60-successive-govts-joking-with-education-say-scholars/",
  },
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen text-white bg-white">
      <section className="relative w-full h-[60vh] overflow-hidden flex items-end justify-center">
        <Image
          fill
          src="/images/about.jpeg"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 via-transparent to-black/20 z-0" />
        <h1 className="relative z-10 text-3xl md:text-5xl font-bold ml-32 pb-4">
          Blogs
        </h1>
      </section>

      {/* Blogs */}
      <section className="px-6 md:px-32 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((blog, index) => (
            <div
              key={index}
              className="relative bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Link icon in top right */}
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 text-gray-400 hover:text-blue-600 z-10 w-5 h-5 flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink size={18} />
              </a>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 pr-6">
                {blog.title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogsPage;
