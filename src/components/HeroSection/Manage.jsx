import React from "react";

const ProjectManagementSection = () => {
  return (
    <section
      className="py-16 bg-cover bg-center text-center"
      style={{
        backgroundImage:
          "url('https://dgaps.com/images/manage-your-projects.jpg')",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="w-full">
          <div className="flex justify-center  flex-wrap mb-4 mt-4">
            <span className="text-4xl md:text-4xl text-cyan-500 font-semibold  mr-2">
              Manage Your Projects with
            </span>
            <h2 className="text-2xl md:text-4xl text-white font-semibold">
              Best Software Company
            </h2>
          </div>

          <p className="max-w-2xl lg:max-w-6xl   mx-auto text-lg text-gray-200 mb-8">
            Doing business like this takes much more effort with an element of
            risk but with Digital Applications, you can stay assured about every
            penny spent on your projects because we are the one very popular &
            highly rated software company around the world.
          </p>

          <a
            href="#"
            className="inline-block px-8 py-3 bg-cyan-600 text-white font-medium 
                       hover:text-cyan-500 hover:bg-white "
          >
            Purchase
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectManagementSection;
