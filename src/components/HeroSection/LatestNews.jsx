import React from "react";
import SingleNewsCard from "./SingleNewsCard";
import { FaSun } from "react-icons/fa";

const LatestNews = () => {
  const newsItems = [
    {
      id: 594,
      title: "Are NFTs Still Worth Collecting in 2025?",
      date: "26 May 2025",
      views: 40,
      link: "https://dgaps.com/are-nfts-still-worth-collecting-today-594",
    },
    {
      id: 593,
      title:
        "Growing Companies Must Know: How to Secure Their Digital Communication.",
      date: "16 May 2025",
      views: 125,
      link: "https://dgaps.com/how-companies-should-secure-digital-communications-593",
    },
    {
      id: 592,
      title: "How To Write Well With Simple Tips For Daily Use",
      date: "06 May 2025",
      views: 196,
      link: "https://dgaps.com/how-to-write-well-with-simple-tips-592",
    },
    {
      id: 591,
      title:
        "The Role of DMCA Takedown Services in SEO and Content Protection for W.",
      date: "02 May 2025",
      views: 265,
      link: "https://dgaps.com/dmca-takedown-services-for-content-protection-591",
    },
  ];

  return (
    <section className=" py-12 mb-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-2">
          <FaSun className="text-4xl text-gray-200 mx-auto" />
        </div>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-2">
          Latest News
        </h2>
        <h2 className=" text-sm text-center font-bold text-gray-400 mb-10">
          before they talk to investors.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-4">
          {newsItems.map((item, index) => (
            <div
              key={item.id}
              className={`
    ${index === 0 || index === 1 ? "block" : ""}
    ${index === 2 ? "hidden md:block" : ""}
    ${index === 3 ? "hidden lg:block" : ""}
    ${index > 3 ? "hidden" : ""}
  `}
            >
              <SingleNewsCard
                title={item.title}
                date={item.date}
                views={item.views}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
