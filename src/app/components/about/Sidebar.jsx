"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Sidebar({ open, setOpen, menu }) {
  const [activeFolder, setActiveFolder] = useState(null);
  const [searchMenu, setSearchMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener("resize", updateIsMobile);
    return () => window.removeEventListener("resize", updateIsMobile);
  }, []);

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 0.5 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black z-30"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setOpen(false)}
          />

          {/* Sidebar Wrapper */}
          <motion.aside
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-full md:w-[30%] h-full z-40 bg-[#BCBEC0] overflow-hidden"
          >
            <div className={`w-full h-full flex relative ${isMobile ? "overflow-hidden" : ""}`}>
              {/* Folder Panel */}
              <motion.div
                animate={{ x: activeFolder && isMobile ? "-100%" : 0 }}
                initial={false}
                transition={{ duration: 0.3 }}
                className={`h-full z-20 transition-all duration-300 
                  ${isMobile ? "w-full absolute" : "w-full"} 
                  bg-[#BCBEC0] text-black p-6 overflow-y-auto`}
              >
                {/* Top Section (Mobile Only) */}
                <div className="space-y-4 mb-4 border-b pb-4 md:hidden">
                  <div className="flex items-center mt-20 justify-between px-2 gap-3">
                    <button
                      className={`cursor-pointer font-semibold relative px-3 py-1 transition-colors duration-300 ${
                        searchMenu
                          ? "bg-blue-600 text-white"
                          : "hover:text-gray-600"
                      }`}
                      onClick={() => setSearchMenu(!searchMenu)}
                    >
                      Search
                    </button>
                    <Link className="hover:text-gray-600 font-semibold text-sm" href="/support-us/give-now">
                      Give Now
                    </Link>
                    <Link className="hover:text-gray-600 font-semibold text-sm" href="/contact">
                      Contact
                    </Link>
                  </div>

                  {searchMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className="px-2"
                    >
                      <div className="relative">
                        <MagnifyingGlassIcon className="w-5 h-5 text-black absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Search..."
                          autoFocus
                          className="w-full pl-10 pr-3 py-1 bg-white border outline-none"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Main Menu Items */}
                <div className="space-y-4 md:pt-32">
                  {menu.map((item, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer font-semibold text-sm text-gray-700 px-3 py-2 ${
                        activeFolder === item.label
                          ? "bg-gray-700 text-white"
                          : ""
                      }`}
                      onClick={() =>
                        setActiveFolder(
                          activeFolder === item.label ? null : item.label
                        )
                      }
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Children Panel (Mounted side-by-side on mobile) */}
              <AnimatePresence>
                {activeFolder && (
                  <motion.div
                    key="child-panel"
                    initial={{ x: isMobile ? "-100%" : 0 }}
                    animate={{ x: isMobile ? "0%" : 0 }}
                    exit={{ x: isMobile ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`${
                      isMobile
                        ? "absolute top-0 left-0 w-full h-full z-30"
                        : "fixed top-0 left-[30%] w-[30%] h-full z-50"
                    } bg-[#D1D3D4] text-black text-sm p-6 overflow-y-auto`}
                  >
                    <div className="mt-12">
                      <button
                        className="text-sm cursor-pointer text-blue-600 mb-4"
                        onClick={() => setActiveFolder(null)}
                      >
                        ← Back
                      </button>
                      <div className="space-y-4 mt-4">
                        {menu
                          .find((item) => item.label === activeFolder)
                          ?.children.map((child, idx) => (
                            <Link
                              key={idx}
                              href={`/${activeFolder
                                .toLowerCase()
                                .replace(/ /g, "-")}/${child
                                .toLowerCase()
                                .replace(/ /g, "-")}`}
                              onClick={() => setOpen(false)}
                              className="block px-3 py-2 rounded hover:bg-gray-200 cursor-pointer text-sm text-gray-700 font-semibold"
                            >
                              {child}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
