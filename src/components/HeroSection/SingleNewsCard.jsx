import React from "react";
import { FaEye, FaCalendarAlt, FaLink } from "react-icons/fa";

const SingleNewsCard = ({ title, date, views, link, imageUrl }) => {
  return (
    <div className="col">
      <div className="rounded-lg shadow-2xl border-b-4 border-cyan-500 hover:shadow-cyan-500/30 transition-shadow duration-300 bg-white">
        <a href={link}>
          <div className=" relative">
            <img
              src={imageUrl || "https://dgaps.com/images/default-image.webp"}
              alt={title}
              width={300}
              height={200}
              className=" w-full aspect-[3/2] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="p-4 bg-cyan-600  rounded-full  hover:text-cyan-600 transition-colors duration-300">
                <FaLink className="text-white text-md" />
              </div>
            </div>
          </div>
        </a>
        <div className=" p-4">
          <a
            href={link}
            className=" text-lg font-medium text-gray-800 hover:text-cyan-600 line-clamp-2"
          >
            {title}
          </a>
        </div>
        <hr className=" border-t border-gray-200 mx-4" />
        <div className=" flex justify-between p-4 text-sm text-gray-500">
          <div className="flex items-center justify-center">
            <FaCalendarAlt className="text-cyan-600 mr-1" />
            <div>{date}</div>
          </div>
          <div className="flex items-center">
            <FaEye className="text-cyan-600 mr-1 " />
            <div className="mb-1">{views}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SingleNewsCard;
