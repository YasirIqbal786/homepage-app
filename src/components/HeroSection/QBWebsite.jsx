import React from "react";
import { FaArrowRight } from "react-icons/fa";
import QBWebsite from "../../../public/website-development-image-1.png";

const QualityBusiness = () => {
  return (
    <section className="pt-10 text-center bg-cover bg-center mb-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <div className="w-full xl:w-1/3 lg:w-1/3 flex justify-center">
            <img
              className="max-w-[260px] h-auto"
              src={QBWebsite}
              alt="Website Development"
              loading="lazy"
              width="260"
              height="180"
            />
          </div>
          <div className="w-full xl:w-3/4 lg:w-3/4 text-center ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Why Is It Important To Have A High Quality Business Website?
            </h2>

            <p className="mb-10 text-gray-900 text-justify leading-relaxed">
              Having a website allows a business to tap into the huge user base
              that the internet offers. Nowadays, almost everyone is online and
              so having a high-quality website helps a business to increase its
              revenue stream. It is a cost-effective method to increase sales
              and increases the credibility of a brand.We are known as
              <span className="font-bold">
                {" "}
                the Best Software House for Website Development.
              </span>
              Our developed websites are fully responsive, cross-browser
              compatible, SEO friendly, and most importantly, highly secure from
              hacking and spamming.
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
                <span className="mr-2">View More</span>
                <FaArrowRight className=" transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityBusiness;
