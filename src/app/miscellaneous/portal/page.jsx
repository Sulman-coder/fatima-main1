'use client';
import React from 'react';
import Image from 'next/image'; 


const PortalPage = () => {
  return (
    // <main className="p-8 max-w-5xl mx-auto">
    <main className="relative bg-gray-100 min-h-screen overflow-hidden">
  


 <section className="relative w-full h-[40vh] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/supp.jpeg"
          alt="About Banner"
          fill
          className="object-cover opacity-60"
        />
        <h1 className="absolute text-4xl font-bold text-white">Bioinformatics Tool</h1>
      </section>
      <div className="w-full h-[3px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

      <h1 className="text-4xl font-bold mb-6 text-center">Portal</h1>
      <p className="text-lg mb-8 text-gray-700 text-center">
        Access dedicated sections for students, researchers, and staff. Log in to explore tools, resources, and personalized dashboards.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">🎓 Student Portal</h2>
          <p className="text-gray-600 mb-4">Assignments, resources, and updates for students.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">🔬 Researcher Portal</h2>
          <p className="text-gray-600 mb-4">Access research data, tools, and collaborations.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">👥 Staff Portal</h2>
          <p className="text-gray-600 mb-4">Internal resources for administrative and teaching staff.</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Login</button>
        </div>
      </div>
    </main>
  );
};

export default PortalPage;
