import React from "react";
import { FaArrowRight } from "react-icons/fa";
import MABusiness from "../../../public/mobile-app-development-image.png";

const MobileAppBusiness = () => {
  return (
    <section className="pt-20 text-center  bg-cover bg-cyan-600 bg-center  pb-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <div className="w-full xl:w-3/4 lg:w-3/4 text-center text-white ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              What Are The Recent Trends of Mobile Apps in Business?
            </h2>

            <p className="mb-10  text-justify leading-relaxed">
              Mobile applications have always focused itself on innovation to
              keep pace with the rapid development of the market. Recent trends
              suggest mobile apps are heading towards the blockchain technology
              and augmented reality. Artificial intelligence and Internet of
              Things (IoT) are also trending currently, and a vast number of
              mobile apps are being developed in this niche to capture newer
              customers. We are also one of the{" "}
              <em className="font-bold">Software Companies in Pakistan</em> in
              the field of this race.
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
              src={MABusiness}
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

export default MobileAppBusiness;
