"use client";

import Link from "next/link";
import Sidebar from "../about/Sidebar";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';


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
      "Industrial Training",
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
  const [searchMenu, openSearchMenu] = useState(false)
  console.log(searchMenu)

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
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled ? "bg-black/70 backdrop-blur-md py-5" : "bg-transparent py-3"
  }`}
>
        {/* Animated button */}
        {/* <div className="absolute left-6 top-1/2 -translate-y-1/2 z-60">
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
        </div> */}

        <div className="max-w-8xl mx-auto px-6 flex justify-between items-center h-full">
          {/* Left: Hamburger + Logo (both vertically centered) */}
          <div className="flex items-center space-x-6">
            <div className="">
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
                    <HiMenu size={40} />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            {/* Logo without vertical motion offset */}
            <motion.div
              animate={{
                y: scrolled
                  ? 0
                  : typeof window !== "undefined" && window.innerWidth >= 768
                  ? 50
                  : 0,
                scale: scrolled ? 1 : 1.1,
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center space-x-2"
            >
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/images/Logo.png"
                  alt="Helix Biogen Institute Logo"
                  className="md:w-50 w-40 object-contain"
                />
                {/* <span className="md:text-xl text-[16px] font-bold block">
                  Helix Biogen Institute
                </span> */}
              </Link>
            </motion.div>
          </div>

          {/* Right: Navigation links (desktop only) */}

<div className="hidden md:flex gap-6 font-semibold items-center relative">
  {/* Search Input with Icon */}
  <div
    className={`relative transition-all duration-300 overflow-hidden ${
      searchMenu ? "w-64 opacity-100 mr-2" : "w-0 opacity-0"
    }`}
  >
    <MagnifyingGlassIcon className="w-5 h-5 text-black absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
    <input
      type="text"
      placeholder="Search..."
      autoFocus
      className="w-full pl-10 pr-3 py-1 bg-white border outline-none"
    />
  </div>

  {/* Search Button */}
  <button
    className={`text-white cursor-pointer relative px-3 py-1 transition-colors duration-300 ${
      searchMenu ? "bg-blue-600 text-white" : "hover:text-gray-300"
    }`}
    onClick={() => openSearchMenu(!searchMenu)}
  >
    Search
  </button>

  <Link className="text-white hover:text-gray-300" href="/support/give-now">Give-Now</Link>
  <Link className="text-white hover:text-gray-300" href="/support/contact">Contact</Link>
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
