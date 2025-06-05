import { FaChrome, FaTabletAlt, FaChartLine, FaLink } from "react-icons/fa";

const ServicesGrid = () => {
  return (
    <div className="container mb-10 mx-auto px-4  mt-10 md:mt-0">
      <div className=" grid grid-cols-1 sm:grid-cols-2 max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="col-span-1  hover:shadow-md  ">
          <div className="relative group  h-full">
            <a
              href="https://dgaps.com/web-development-services-11"
              className="block h-full"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-4 text-cyan-600 hover:bg-cyan-500 hover:text-white text-3xl shadow-md">
                <FaChrome />
              </div>
              <div className="h-58 sm:h-48  overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="https://dgaps.com/images/website-monitoring-tools-1.png"
                  alt="websitedevelopment"
                />
              </div>
              <div className=" p-4 text-center  bg-white">
                <h3 className="text-lg font-semibold mb-2">
                  Website development
                </h3>
                <p className="text-sm text-gray-600">
                  We use cutting edge technology to develop SEO friendly
                  websites that cater to every niche.
                </p>
              </div>
              <div className="absolute inset-0">
                <span className="text-2xl text-white absolute top-0 right-0 p-1 bg-cyan-800 bg-opacity-50 border-2 border-cyan-600 border-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-50 hover:border-opacity-8">
                  <FaLink />
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-1 hover:shadow-md  ">
          <div className=" relative group h-full">
            <a href="/" className="block h-full">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-4 text-cyan-600 hover:bg-cyan-500 hover:text-white text-3xl shadow-md">
                <FaTabletAlt />
              </div>
              <div className="h-58 sm:h-48  overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="https://dgaps.com/images/mobile-applications-development-services-in-digital-applications-1.png"
                  alt="appdevelopment"
                />
              </div>
              <div className="p-4 text-center bg-white">
                <h3 className="text-lg font-semibold mb-2">App development</h3>
                <p className="text-sm text-gray-600">
                  We utilize intuitive designs along with functional website
                  features and rapid support in our projects.
                </p>
              </div>
              <div className="absolute inset-0">
                <span className="text-2xl text-white absolute top-0 right-0 p-1 bg-cyan-800 bg-opacity-50 border-2 border-cyan-600 border-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-50 hover:border-opacity-8">
                  <FaLink />
                </span>
              </div>
            </a>
          </div>
        </div>

        <div className="col-span-1 hover:shadow-md hidden sm:block md:hidden lg:block">
          <div className="relative group h-full">
            <a href="/" className="block h-full">
              <div className=" absolute -top-6 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-4 text-cyan-600 hover:bg-cyan-500 hover:text-white text-3xl shadow-md">
                <FaChartLine />
              </div>
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="https://dgaps.com/images/seo-services-in-digital-applications.png"
                  alt="Seo"
                />
              </div>
              <div className="p-4 text-center bg-white">
                <h3 className="text-lg font-semibold mb-2">
                  Search Engine Optimization
                </h3>
                <p className="text-sm text-gray-600">
                  Our services are geared towards ranking your websites at the
                  top of Google search results.
                </p>
              </div>
               <div className="absolute inset-0">
                <span className="text-2xl text-white absolute top-0 right-0 p-1 bg-cyan-800 bg-opacity-50 border-2 border-cyan-600 border-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-50 hover:border-opacity-8">
                  <FaLink />
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="col-span-1 hover:shadow-md hidden sm:block md:hidden xl:block">
          <div className="relative group h-full">
            <a href="/" className="block h-full">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10 bg-white rounded-full p-4 text-cyan-600 hover:bg-cyan-500 hover:text-white text-3xl shadow-md">
                <FaLink />
              </div>
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  src="https://dgaps.com/images/earn-money-online.jpg"
                  alt="earnmoneyonline"
                />
              </div>
              <div className="p-4 text-center bg-white">
                <h3 className="text-lg font-semibold mb-2">
                  Earn money online
                </h3>
                <p className="text-sm text-gray-600">
                  Our websites use the best practices to get Google AdSense
                  approval and start generating money.
                </p>
              </div>
               <div className="absolute inset-0">
                <span className="text-2xl text-white absolute top-0 right-0 p-1 bg-cyan-800 bg-opacity-50 border-2 border-cyan-600 border-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-opacity-50 hover:border-opacity-8">
                  <FaLink />
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
