import {
  FaGlobe,
  FaAndroid,
  FaLaptopCode,
  FaChartLine,
  FaBullhorn,
  FaPen,
} from "react-icons/fa";

const GoalData = [
  {
    icon: <FaGlobe />,
    title: "Web Development",
  },
  {
    icon: <FaAndroid />,
    title: "Mobile Apps",
  },
  {
    icon: <FaLaptopCode />,
    title: "Earning Guide",
  },
  {
    icon: <FaChartLine />,
    title: "SEO",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
  },
  {
    icon: <FaPen />,
    title: "Content Writing",
  },
];

const Goal = () => {
  return (
    <div className="bg-[url('/public/bg_tech_home.jpg')] bg-cover bg-center  py-16 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-12 mt-10">
          <div className="text-center text-white max-w-3xl">
            <h2 className="text-3xl md:text-3xl px-2 font-extrabold">
              We Deliver Solution with <br className="hidden md:block" />
              the Goal of Trusting Relationships
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 items-center justify-center pb-20">
          {GoalData.map((data, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 sm:p-6 md:p-8 h-full min-h-[180px] border border-cyan-400 shadow-sm hover:bg-cyan-600 group transition-all duration-300 "
            >
              <div className="text-4xl text-cyan-500 mb-3 mt-8 group-hover:text-white">
                {data.icon}
              </div>
              <h5 className="text-white text-sm font-medium group-hover:text-white block truncate w-full">
                {data.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goal;
