import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaEnvelope, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A] text-white px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <ul className="space-y-2">
              <li>Careers</li>
              <li>Campus Resources</li>
              <li>Safety</li>
              <li>International Service Office</li>
              <li>Compliance</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <ul className="space-y-2">
              <li>Careers</li>
              <li>Campus Resources</li>
              <li>Safety</li>
              <li>Compliance</li>
            </ul>
          </div>

          {/* Column 3 - Address */}
          <div>
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-sm">
              564/88P Sabo, Ogbomoso <br />
              231102, Oyo
            </p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-t border-gray-400 opacity-40 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Social Icons */}
          <div className="flex space-x-4 text-white text-2xl">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaEnvelope /></a>
            <a href="#"><FaXTwitter /></a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-300 text-center md:text-right">
            © 2025 Helix Biogen Research Institute. All Rights Reserved. 
            <span className="ml-1 underline hover:text-gray-100 cursor-pointer">Terms of Use</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
