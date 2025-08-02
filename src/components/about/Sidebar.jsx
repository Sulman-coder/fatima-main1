"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

export default function Sidebar({ open, setOpen, menu }) {
  const [activeFolder, setActiveFolder] = useState(null);
  const [searchMenu, setSearchMenu] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full z-40 bg-[#BCBEC0]"
        >
          <div className="relative w-full h-full overflow-hidden flex">
            {/* Folder Panel */}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: activeFolder && isMobile ? "-100%" : 0 }}
              transition={{ duration: 0.3 }}
              className={`absolute  py-20 top-0 left-0 h-full transition-all duration-300 ${
                isMobile ? "w-full" : "w-[30%]"
              } bg-[#BCBEC0] text-black p-6 overflow-y-auto`}
            >
              {/* Top: Search & Links */}
              <div className="space-y-4 mb-4 border-b pb-4">
                
                <div className="flex items-center mt-20 justify-between px-6 gap-4">
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
                  <Link
                    className="hover:text-gray-600 font-semibold text-sm"
                    href="/support-us/give-now"
                  >
                    Give Now
                  </Link>
                  <Link
                    className="hover:text-gray-600 font-semibold text-sm"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </div>

                {/* Search Input (under Search Button) */}
                {searchMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className="px-6"
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

              {/* Folder Menu */}
              <div className="space-y-4">
                {menu.map((item, index) => (
                  <div
                    key={index}
                    className={`cursor-pointer font-semibold text-sm text-gray-700 px-3 py-2 rounded hover:bg-gray-700 ${
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

            {/* Children Panel */}
            {activeFolder && (
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.3 }}
                className={`absolute top-0 left-0 h-full transition-all bg-[#D1D3D4] duration-300 ${
                  isMobile ? "w-full" : "w-[30%]"
                } bg-white text-black text-sm p-6 overflow-y-auto`}
              >
                <div className="mt-12">
                  {" "}
                  {/* Push content down */}
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
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
