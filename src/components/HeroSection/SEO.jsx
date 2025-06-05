import React from "react";
import { FaArrowRight } from "react-icons/fa";
import SEOImage from "../../../public/search-engine-optimization.png";

const SEO = () => {
  return (
    <section className="pt-10 text-center bg-cover bg-center mb-10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
          <div className="w-full xl:w-1/3 lg:w-1/3 flex justify-center">
            <img
              className="max-w-[260px] h-auto"
              src={SEOImage}
              alt="Website Development"
              loading="lazy"
              width="260"
              height="180"
            />
          </div>

          <div className="w-full xl:w-3/4 lg:w-3/4 text-center ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Is Search Engine Optimization Necessary?
            </h2>

            <p className="mb-10 text-gray-900 text-justify leading-relaxed">
              A site that uses good SEO practices will always get good traffic.
              SEO is very important for ranking webpages high in Google
              searches. SEO is an efficient way of making website more user
              friendly and easier for your visitors to navigate. Using proper
              SEO and getting your site well optimized can help your business
              grow and meet your desired goals. Digital Applications is highly
              focused Software House in Pakistan for SEO based Web Development..
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
        </div>
      </div>
    </section>
  );
};

export default SEO;
