'use client';
import React from 'react';
import Link from "next/link";


const BioinformaticsTool = () => {
  return (
    <main className="p-8 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Bioinformatics Tool</h1>
      <p className="text-lg mb-8 text-gray-700 text-center">
        Welcome to our in-house bioinformatics tool. This tool allows researchers to analyze biological data efficiently. Use the form below to upload sequences and get insights.
      </p>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Upload FASTA File</label>
            <input
              type="file"
              accept=".fasta,.fa"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Analysis Type</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2">
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
    </main>
  );
};

export default BioinformaticsTool;
