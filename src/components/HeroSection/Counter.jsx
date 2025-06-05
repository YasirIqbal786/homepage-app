import React from "react";
import {
  FaProjectDiagram,
  FaSmile,
  FaUsers,
  FaConnectdevelop,
} from "react-icons/fa";

const CounterSection = () => {
  const counterItems = [
    {
      icon: <FaProjectDiagram />,
      count: 1500,
      text: "SUCCESSFUL PROJECTS",
    },
    {
      icon: <FaSmile />,
      count: 600,
      text: "HAPPY CLIENTS",
    },
    {
      icon: <FaConnectdevelop />,
      count: 22,
      text: "EXPERT DEVELOPERS",
    },
    {
      icon: <FaUsers />,
      count: 45000,
      text: "FACEBOOK FOLLOWERS",
    },
  ];

  return (
    <div className="pt-5 relative bg-cyan-500  bg-fill bg-[url('/counts.jpg')]">
      <div className="absolute inset-0 bg-cyan-500/80"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          {counterItems.map((item, index) => {
            const isLastSm = index === 1;
            const isLastMd = index === 2;
            const isLastLg = index === 3;

            return (
              <div
                key={index}
                className={`
                  relative w-1/2 md:w-1/3 lg:w-1/4 px-4 py-8
                  flex flex-col items-center justify-center text-center
                  ${index >= 2 ? "hidden md:flex" : ""}
                  ${index === 3 ? "md:hidden lg:flex" : ""}
                `}
              >
                <div className="text-4xl text-white mb-4">{item.icon}</div>
                <div className="text-4xl font-bold mb-2 text-white hover:text-black transition-colors duration-700">
                  {item.count}+
                </div>
                <div className="text-lg font-light text-white">{item.text}</div>
                {!isLastSm && (
                  <div className="absolute right-0 top-1/4 h-1/2 border-r border-white block md:hidden"></div>
                )}
                {!isLastMd && (
                  <div className="absolute right-0 top-1/4 h-1/2 border-r border-white hidden md:block lg:hidden"></div>
                )}
                {!isLastLg && (
                  <div className="absolute right-0 top-1/4 h-1/2 border-r border-white hidden lg:block"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
