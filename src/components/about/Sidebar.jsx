"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Sidebar({
  open,
  setOpen,
  activeFolder,
  setActiveFolder,
  menu,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 w-full h-full z-40 flex"
        >
          {/* Folder Panel (Left) */}
          <div className="w-[30%] bg-gray-800 text-white p-6 overflow-y-auto">
            <div className="mt-24 space-y-4">
              {menu.map((item, index) => (
                <div
                  key={index}
                  className={`cursor-pointer px-3 py-2 rounded hover:bg-gray-700 ${
                    activeFolder === item.label ? "bg-gray-700" : ""
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
          </div>

          {/* File Panel (Right) */}
          <div className="w-[30%] bg-gray-100 text-black p-6 overflow-y-auto">
            <div className="mt-24 space-y-4">
              {activeFolder ? (
                menu
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
                      className="block px-3 py-2 rounded hover:bg-gray-200 text-sm text-black"
                    >
                      {child}
                    </Link>
                  ))
              ) : (
                <p className="text-gray-500 text-sm">
                  Select a folder to view pages.
                </p>
              )}
            </div>
          </div>

          {/* Remaining space left for content, closes via hamburger in Navbar */}
          <div className="flex-1" />
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
