"use client";

import { useState } from "react";
import Image from "next/image";

export default function GiveNowPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Future: Add backend or payment integration here
    setSubmitted(true);
  };

  return (
    <main className="bg-black text-white min-h-screen">
       <section className="relative w-full md:h-screen h-[60vh]">
  <video
    src="https://res.cloudinary.com/dqbtjrq1o/video/upload/v1754421913/video1_yum3sb.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover -z-20"
  />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/80 via-black/30 to-black/90 z-0" />
        <h1 className="relative z-10 text-4xl md:text-6xl font-bold">Give Now</h1>
      </section>

      {/* Content Section */}
      <section className="max-w-4xl mx-auto px-6 py-12 text-center">
        <p className="text-lg md:text-xl text-gray-300">
          At Helix Biogen Institute, we’re driven by curiosity, innovation, and a deep
          commitment to transforming lives through science. But every breakthrough
          starts with support from people like you. Your contribution fuels cutting
          edge research, speeds up life saving discoveries, and brings us closer to
          solutions for the world’s most pressing health challenges. Together, we are
          not just funding research, we are shaping the future of medicine.
        </p>
      </section>

      {/* Donation Form Section */}
      <section className="max-w-2xl mx-auto px-6 py-8">
        {submitted ? (
          <div className="bg-green-700 p-6 rounded-xl text-center">
            <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
            <p>Your support makes a difference.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white text-black p-6 rounded-xl space-y-4 shadow-xl"
          >
            <div>
              <label className="block mb-1 font-semibold">Full Name</label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Email Address</label>
              <input
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Donation Amount ($)</label>
              <input
                type="number"
                min="1"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Message (Optional)</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-md w-full"
            >
              Submit Donation
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
