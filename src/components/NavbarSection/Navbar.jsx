import React, { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import Navlogo from "../../../public/favicon-image.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-cyan-500 w-full sticky top-0 z-50 transition-all px-8 duration-300 ${
        scrolled ? "mt-0" : "mt-[120px]"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between mr-15 px-4  ">
        <div
          className={`mr-10 transition-opacity duration-300 ${
            !scrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          <a href="/">
            <img src={Navlogo} alt="Logo" className="h-auto" />
          </a>
        </div>
        <button
          className={`text-black text-2xl md:hidden border border-gray-500 p-1 rounded-sm m-2 ${
            isMenuOpen ? "border-2 border-black" : ""
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul className="flex items-center gap-1 xl:px-4 lg:px-4 md:px- md:gap-3 lg:gap-2 text-xs lg:text-sm text-md uppercase font-bold text-white">
          <li className="hidden md:block">
            <a
              href="/"
              className="p-2 md:p-3  block w-full bg-white text-black px-4 py-2 rounded hover:text-black hover:bg-white transition-colors duration-200"
            >
              <FaHome className="text-lg" />
            </a>
          </li>
          <li className="hidden xl:block">
            <a
              href="#"
              className="px-2 py-1 md:px-3 md:py-2 rounded hover:text-black hover:bg-white transition-colors duration-200"
            >
              About Us
            </a>
          </li>
          <li className="hidden md:block">
            <a
              href="#"
              className="px-2 py-1 md:px-3 md:py-2 rounded hover:text-black hover:bg-white transition-colors duration-200"
            >
              Services
            </a>
          </li>

          <li className="hidden lg:block">
            <a
              href="#"
              className="px-2 py-1 md:px-3 md:py-2 rounded hover:text-black hover:bg-white transition-colors duration-200"
            >
              Trainings
            </a>
          </li>

          <li className="hidden xl:block">
            <a
              href="#"
              className="px-2 py-1 md:px-3 md:py-2 rounded hover:text-black hover:bg-white transition-colors duration-200"
            >
              Our Works
            </a>
          </li>
          <li className="hidden xl:block ">
            <a
              href="#"
              className="px-2 py-1 md:px-3 md:py-2 rounded hover:text-black hover:bg-white transition-colors duration-200"
            >
              Jobs
            </a>
          </li>
          <li className="hidden md:block ">
            <a
              href="#"
              className="px-2 py-1 md:px-3 md:py-2 rounded hover:text-black hover:bg-white transition-colors duration-200"
            >
              Job Opportunity
            </a>
          </li>
          <li className="hidden md:block ">
            <a
              href="#"
              className="px-2 py-1 md:px-3 md:py-2 rounded hover:text-black hover:bg-white transition-colors duration-200"
            >
              Earning Guide
            </a>
          </li>
          <li className="hidden md:block ">
            <a
              href="#"
              className="px-2 py-1 md:px-3 md:py-2 rounded hover:text-black hover:bg-white transition-colors duration-200"
            >
              Contact
            </a>
          </li>
        </ul>

        <ul className="flex flex-col md:flex-row list-none ml-auto ">
          <li className="relative mt-0 group hidden md:block ">
            <div></div>
            <span className="cursor-pointer flex items-center text-white p-5 text-lg font-bold bg-black hover:text-black hover:bg-white">
              Course Panel
            </span>
          </li>
        </ul>
      </div>
      {/* Mobile Dropdown  */}
      {isMenuOpen && (
        <div className="w-full md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-1 text-white font-bold uppercase">
            <li>
              <a
                href="/"
                className="block w-full bg-white text-black px-4 py-2 rounded"
              >
                <FaHome />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
              >
                Trainings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
              >
                Our Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
              >
                Job Opportunity
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
              >
                Earning Guide
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block w-full px-4 py-2 rounded hover:bg-white hover:text-black transition-all duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <span className="block w-full bg-black text-white px-4 py-2 text-center rounded hover:bg-white hover:text-black transition-all duration-300">
                Course Panel
              </span>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
