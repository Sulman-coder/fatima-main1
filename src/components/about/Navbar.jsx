"use client";

import Link from "next/link";
import Sidebar from "@/components/about/Sidebar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const menu = [
  { label: "About", children: ["Overview", "Leadership", "History"] },
  { label: "Publication", children: ["Research", "Blogs", "News Prints"] },
  {
    label: "Science & Medicine",
    children: ["Overview", "Division", "Services"],
  },
  { label: "Support", children: ["Overview", "Contact"] },
  {
    label: "Education & Development",
    children: [
      "Certificate Courses",
      "Online Courses",
      "Training",
      "Internship",
    ],
  },
  {
    label: "Research & Development",
    children: ["Drugs & Peptides", "Vaccine Candidates", "Diagnostic Kits"],
  },
  { label: "Miscellaneous", children: ["Bioinformatics Tool", "Portal"] },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFolder, setActiveFolder] = useState(null);
  const [navbarHeight, setNavbarHeight] = useState(80);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      setNavbarHeight(isScrolled ? 64 : 80);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`relative fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/90 text-white py-3"
            : "bg-transparent text-white py-5"
        }`}
      >
        {/* Animated button */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 z-60">
          <AnimatePresence exitBeforeEnter initial={false}>
            {sidebarOpen ? (
              <motion.button
                key="close"
                onClick={() => setSidebarOpen(false)}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="text-3xl text-white"
              >
                <IoClose />
              </motion.button>
            ) : (
              <motion.button
                key="menu"
                onClick={() => setSidebarOpen(true)}
                initial={{ opacity: 0, rotate: 90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -90 }}
                transition={{ duration: 0.2 }}
                className="text-3xl text-white"
              >
                <HiMenu />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex justify-center md:justify-between items-center">
          <motion.div
            animate={{
              scale: scrolled ? 0.8 : 1.2,
              y: scrolled ? 0 : 56,
            }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2"
          >
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/images/Logo.png"
                alt="Helix Biogen Institute Logo"
                className="w-16 h-16 object-contain"
              />
              <span className="text-xl font-bold hidden sm:block">
                Helix Biogen Institute
              </span>
            </Link>
          </motion.div>

          <div className="hidden md:flex gap-6 font-semibold">
            <Link href="/">Home</Link>
            <Link href="/about/overview">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </nav>

      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        activeFolder={activeFolder}
        setActiveFolder={setActiveFolder}
        menu={menu}
        navbarHeight={navbarHeight}
      />
    </>
  );
}
