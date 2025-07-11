"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  IoMenu,
  IoClose,
  IoChevronDown,
  IoArrowForwardOutline,
} from "react-icons/io5";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const services = [
    { name: "Branding & UI/UX Design", href: "/services1" },
    { name: "Ecommerce Solutions", href: "/services2" },
    { name: "Product Development", href: "/services3" },
    { name: "Digital Marketing", href: "/services4" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Partners", href: "/partners" },
    { name: "Soloutions", href: "/" },
  ];

  return (
    <header className="mx-[20px] md:mx-[100px] mt-8 mb-6 z-[9999] max-sm:w-[85%]">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <img
          src="/images/Secutech logo.png"
          alt="secutech logo"
          className="w-[187px] h-[67px]"
        />

        {/* Desktop Nav */}
        <ul className="hidden lg:flex flex-row gap-[40px] text-[#092c4c] medium-text-regular items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}

          {/* Services Dropdown */}
          <li
            className="relative group"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => {
              setShowServices(false);
              setHoveredItem(null);
            }}
          >
            <button>
              Services
              <IoChevronDown className="text-[16px] inline mx-1" />
            </button>

            <AnimatePresence>
              {showServices && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-72 bg-white rounded-md py-2 z-50 shadow-lg"
                >
                  {services.map((service, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center min-h-[44px]"
                    >
                      {hoveredItem === index && (
                        <motion.span
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          exit={{ x: -10, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mr-2 text-[#BE1522]"
                        >
                          <IoArrowForwardOutline className="text-lg" />
                        </motion.span>
                      )}
                      <motion.a
                        href={service.href}
                        animate={{
                          x: hoveredItem === index ? 8 : 0,
                          color: hoveredItem === index
                            ? "#BE1522"
                            : "#092c4c",
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-base"
                      >
                        {service.name}
                      </motion.a>
                    </li>
                    
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Contact Us Button */}
        <a href="/contact">
          <motion.button
            initial={{
              background: "linear-gradient(-27deg, #0F70B7, #BE1522)",
            }}
            whileHover={{
              background: "linear-gradient(-27deg, #BE1522, #0F70B7)",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="hidden lg:flex items-center justify-center rounded-full text-white font-medium gap-[10px]"
          >
            <span className="text-center text-base leading-[26px] pt-[12px] pb-[15px] px-[40px]">
              Start a Project
            </span>
          </motion.button>
        </a>

        {/* Hamburger */}
        <div className="lg:hidden text-3xl text-[#0F70B7]">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="lg:hidden mt-4 bg-white shadow-md rounded-lg py-4 px-6 w-70 absolute right-3 z-[9999]"
          >
            <ul className="flex flex-col gap-3 text-[#092c4c]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}

              <li>
                <details>
                  <summary className="cursor-pointer">Services</summary>
                  <ul className="ml-4 mt-2 flex flex-col gap-2 text-sm">
                    {services.map((service, index) => (
                      <li
                        key={index}
                        onMouseEnter={() => setHoveredItem(index)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        {hoveredItem === index && (
                          <motion.span
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -10, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-[#BE1522]"
                          >
                            <IoArrowForwardOutline className="text-base" />
                          </motion.span>
                        )}
                        <motion.a
                          href={service.href}
                          animate={{
                            x: hoveredItem === index ? 8 : 0,
                            color:
                              hoveredItem === index
                                ? "#BE1522"
                                : "#092c4c",
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {service.name}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>

              <li>
                <a href="/contact">
                  <motion.button
                    initial={{
                      background:
                        "linear-gradient(-27deg, #0F70B7, #BE1522)",
                    }}
                    whileHover={{
                      background:
                        "linear-gradient(-27deg, #BE1522, #0F70B7)",
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-3 w-50 rounded-full text-white py-[13px] px-[30px]"
                  >
                    Contact Us
                  </motion.button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
