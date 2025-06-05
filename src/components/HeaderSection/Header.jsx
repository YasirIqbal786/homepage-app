import React, { useEffect, useState } from "react";
import DigitalLogo from "../../../public/digital-applications-logo-2.png";
import { FaLocationDot } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";

export default function Header() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      setVisible(currentScroll <= 100 || currentScroll < lastScroll);
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full fixed top-0 z-40  transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col lg:flex-row ">
        {/* Left Side - White Background */}
        <div className="w-full lg:w-[40%] bg-white flex justify-center h-[120px] items-center md:pl-12">
          <div className="w-full max-w-[500px] p-4 lg:ml-10">
            <a href="/">
              <img
                src={DigitalLogo}
                alt="Digital Applications"
                className="w-full h-auto"
              />
            </a>
          </div>
        </div>

        {/* Right Side - Black Background */}
        <div className="hidden lg:flex lg:w-[60%] bg-black text-white h-[120px] items-center ">
          <div className="w-full max-w-[800px] mx-auto px-4  pr-14 flex justify-between text-sm xl:text-md gap-4">
            <div className="flex-1 flex items-start gap-2 min-w-0">
              <FaLocationDot className="mt-1 text-cyan-500 text-base flex-shrink-0" />
              <p>Block # 13, Bhutta Chowk, Khanewal</p>
            </div>
            <div className="flex-1 flex items-center justify-center min-w-0">
              <div className="flex items-center gap-2">
                <FaCopy className="text-base text-cyan-500 flex-shrink-0" />
                <span>
                  dgaps******
                  <br />
                  <a
                    href="tel:+92 (0) 343-786-1234"
                    className="text-cyan-300 hover:text-white"
                  >
                    +92 (0) 343-786-1234
                  </a>
                </span>
              </div>
            </div>
            <div className="flex-1 flex items-center justify-end pr-12 min-w-0">
              <a
                href="https://dgaps.com/ask-me"
                className="inline-block px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 whitespace-nowrap"
              >
                Get a free quote
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
