import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  const socialLinks = [
    {
      icon: <FaFacebook />,
      url: "https://www.facebook.com/dgaps",
      title: "facebook",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/EngrGAOfficial",
      title: "twitter",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/engr.ghulam.abbas/",
      title: "instagram",
    },
    {
      icon: <FaLinkedin />,
      url: "https://pk.linkedin.com/company/digital-applications",
      title: "linkedin",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/c/LearntoEarnwithGA",
      title: "youtube",
    },
  ];

  const navLinks = [
    { text: "FAQs", url: "/faqs" },
    { text: "Privacy Policy", url: "/privacy-policy" },
    { text: "Terms & Conditions", url: "/terms" },
    { text: "Write for Us", url: "/write-for-us" },
  ];

  return (
    <footer className="bg-[#1f1f1f] relative text-gray-700 overflow-hidden">
      <div className="container mx-auto px-4 py-8">
        <div className="hidden md:block absolute top-0 left-[150px] transform -translate-x-[150px] w-62 h-72 border-l-[7rem] border-r-[7rem] border-t-[8rem] border-b-0 border-transparent border-t-cyan-500"></div>
        <div className="hidden md:block absolute bottom-0 right-[0px] transform translate-x-[40px] w-72 h-72 border-l-[10rem] border-r-[10rem] border-t-0 border-b-[11rem] border-transparent border-b-cyan-500"></div>

        <div className="flex flex-col items-center mb-8 mt-10">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md lg:max-w-2xl  relative"
          >
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-6 py-4 pr-32 lg:py-6 rounded-full bg-[#434343] focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="absolute right-3 top-2 bottom-2 px-6 lg:px-12 bg-cyan-500 text-white  rounded-full hover:bg-cyan-600 transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              className="text-2xl text-[#434343] hover:text-cyan-600 transition-colors duration-300"
              title={link.title}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className="bg-[#131313]  py-3 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
              <ul className="flex flex-wrap gap-4 md:gap-6">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      target="_blank"
                      className="text-xs uppercase text-cyan-500 hover:text-white transition-colors duration-300"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="text-xs text-gray-400 text-center md:text-right uppercase">
              © Copyright 2013 - {new Date().getFullYear()} | All rights
              reserved
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
