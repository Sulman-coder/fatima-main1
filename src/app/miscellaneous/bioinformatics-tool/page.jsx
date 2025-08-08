'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from "next/link";

const BioinformaticsTool = () => {
  const [file, setFile] = useState(null);
  const [analysisType, setAnalysisType] = useState('DNA Sequence Alignment');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Please upload a FASTA file.');
      return;
    }

    console.log('File:', file);
    console.log('Analysis Type:', analysisType);

    alert('Submission successful!');
  };

  return (
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





   <div className="max-w-4xl mx-auto bg-white text-gray-800 shadow-md rounded-md overflow-hidden my-10">


      <p className="text-lg mt-8 mb-8 text-gray-700 text-center">
        Welcome to our in-house bioinformatics tool. This tool allows researchers to analyze biological data efficiently. Use the form below to upload sequences and get insights.
      </p>

      <div className="bg-gray shadow-lg rounded-lg p-6">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload FASTA File
            </label>
            <input
              type="file"
              accept=".fasta,.fa"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Analysis Type
            </label>
            <select
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={analysisType}
              onChange={(e) => setAnalysisType(e.target.value)}
            >
              <option>DNA Sequence Alignment</option>
              <option>Protein Structure Prediction</option>
              <option>Genome Annotation</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
      </div>
      <div className="w-full h-[3px] bg-gradient-to-r from-orange-500 via-yellow-400 to-blue-600 shadow-md" />

    </main>
  );
};

export default BioinformaticsTool;
