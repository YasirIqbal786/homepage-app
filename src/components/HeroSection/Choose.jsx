import React from "react";
import { FaSun } from "react-icons/fa";
import LeftChooseitem from "./LeftChooseitem";
import RightChooseitem from "./RightChooseItem";

const WhyChoose = () => {
  return (
    <section
      className="pt-5 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://dgaps.com/assets/images/download.svg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <FaSun className="text-4xl text-gray-200 mx-auto" />
        </div>
        <h2 className="text-2xl md:text-3xl font-semibold text-center ml-2 text-gray-800 mb-2">
          Why to Choose Digital Applications
        </h2>
        <h2 className="text-sm  font-bold text-gray-400 mb-8 text-center">
          Most Popular Top Rated Software House in Pakistan
        </h2>

        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-full md:w-1/2 xl:w-1/3 pt-4">
            <LeftChooseitem />
          </div>

          {/* Center Image  */}
          <div className="hidden xl:block xl:w-1/3 items-center justify-center">
            <img
              src="https://dgaps.com/images/why-coose-us-preeloader.png"
              onLoad={(e) => {
                e.target.src = "https://dgaps.com/images/man1.png";
              }}
              alt="center-image"
              width="354"
              height="597"
              className="max-h-[597px]"
            />
          </div>

          {/* Right Column */}
          <div className="w-full md:w-1/2  xl:w-1/3  md:pt-4">
            <RightChooseitem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
