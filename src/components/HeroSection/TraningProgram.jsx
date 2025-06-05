import React from "react";
import { FaArrowRight } from "react-icons/fa";
import TraningProgramImage from "../../../public/how-to-grow-a-business-online-training-program.png";

const TraningProgram = () => {
  return (
    <section className="pt-20 text-center  bg-cover bg-cyan-600 bg-center  pb-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <div className="w-full xl:w-3/4 lg:w-3/4 text-center text-white ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              How to Grow A Business Online? (Training Program)
            </h2>

            <p className="mb-10  text-justify leading-relaxed">
              Blogging along with videos and infographics make up a core part of the online business strategy for successful brands. Optimizing website according to industry standards and using high-quality content on your site will create a steady stream of traffic. Using social media marketing will also help to create more buzz about your business and generate sales in the long run. Our <span className="font-bold">Professional Software Company</span> teaches you, how to grow a business online.
               </p>
            <a href="#" className="inline-block group">
              <div
                className="relative inline-flex items-center px-6 py-3 overflow-hidden text-white bg-cyan-500 border border-cyan-600  transition-all duration-300 group-hover:bg-white group-hover:text-cyan-500"
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "4px 4px 6px rgba(0, 100, 100, 0.4)")
                }
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
              >
                <span className="mr-2">Read More</span>
                <FaArrowRight className=" transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          </div>
    
          <div className="w-full xl:w-1/3 lg:w-1/3 flex justify-center">
            <img
              className="max-w-[260px] h-auto"
              src={TraningProgramImage}
              alt="Website Development"
              width="260"
              height="180"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraningProgram;
