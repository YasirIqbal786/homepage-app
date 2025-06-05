import React from "react";
import { FaLongArrowAltUp } from "react-icons/fa";

const BackToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed right-9 bottom-12 w-12 h-12 z-50 cursor-pointer"
      onClick={scrollToTop}
    >
      <div className=" rounded-full overflow-hidden relative w-full h-full shadow-[0_10px_40px_-10px_rgba(0,64,128,0.2)]">
        <div className=" absolute top-[-2px] w-12 h-12 animate-[spin_8s_linear_infinite]">
          <span className="block w-full h-full relative translate-x-[-50%] translate-y-[-50%] bg-[#65587f]"></span>
          <span className="block w-full h-full relative translate-x-[-50%] translate-y-[-50%] bg-[#e85f99]"></span>
          <span className="block w-full h-full relative translate-x-[-50%] translate-y-[-50%] bg-[#e85f99]"></span>
        </div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white flex items-center justify-center">
          <span className=" text-xl font-bold">
            <FaLongArrowAltUp className="text-cyan-600 " title="Go top" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BackToTop;
