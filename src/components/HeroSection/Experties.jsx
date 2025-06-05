import React, { useEffect } from "react";

const Experties = () => {
  useEffect(() => {
    const animateProgressBars = () => {
      const progressBars = document.querySelectorAll(".skills__inner");
      progressBars.forEach((bar) => {
        const percent = bar.getAttribute("data-percent");
        bar.style.width = percent;
      });
    };

    setTimeout(animateProgressBars, 100);
  }, []);

  const skills = [
    { title: "Website Development", percent: "98%" },
    { title: "Android App Development", percent: "96%" },
    { title: "Digital Marketing", percent: "95%" },
    { title: "Graphics Designing", percent: "92%" },
    { title: "Online Trainings", percent: "97%" },
    { title: "PhotoGraphy", percent: "91%" },
  ];

  return (
    <section className="pt-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-7/12 self-center">
            <h2 className="text-3xl text-center font-semibold mb-8">
              Main Area of Expertise
            </h2>

            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col w-full my-4">
                <div className="text-lg font-medium mb-1">
                  {skill.title} – ({skill.percent}%)
                </div>

                <div className="w-full h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div
                    className="h-full bg-cyan-500 rounded bg-[linear-gradient(-45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)] 
                bg-[length:3rem_3rem] 
                animate-progress-bar-stripes 
                flex items-center justify-center px-2 text-white text-xs font-semibold whitespace-nowrap overflow-hidden transition-all duration-500 ease-in-out"
                    style={{ width: `${skill.percent}` }}
                  >
                    {skill.percent}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="hidden lg:block lg:w-5/12">
            <div className=" flex justify-center">
              <img
                className=" max-w-[350px]"
                src="https://dgaps.com/images/main-expertise-preeloader.png"
                data-src="https://dgaps.com/images/man2.png"
                alt="man-image"
                width="350"
                height="400"
                loading="lazy"
                onLoad={(e) => {
                  if (e.target.dataset.src) {
                    e.target.src = e.target.dataset.src;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experties;
