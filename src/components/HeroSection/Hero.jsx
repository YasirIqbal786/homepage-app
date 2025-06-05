import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Software Development",
    text: "Do difficult software apps cause a lag between your business and employees? Our tailored to your needs Web-based Software solutions consolidate your internal & external resources to create a smooth business run-through.",
    img: "https://dgaps.com/images/custom-software-development.png",
  },
  {
    title: "Website Development",
    text: "Our professional website artists exactly know how to create a digital landscape to convert ideas on your mind canvas into something live, vibrant and useful for your business and clients.",
    img: "https://dgaps.com/images/website-development-image-1.png",
  },
  {
    title: "Mobile Apps Development",
    text: "Leverage our strong custom-made, easy to use, native UI/UX, faster and modern Android Mobile Apps Development Expertise to have up-to-the-minute Online Experience.",
    img: "https://dgaps.com/images/mobile-apps-development-slider-image.png",
  },
  {
    title: "Digital Marketing",
    text: "Use our ten years of Digital Marketing and SEO expertise to establish your Online Business visibility Online around the world.",
    img: "https://dgaps.com/images/digital-marketing-consultancy-2.png",
  },
];

export default function Hero() {
  return (
    <div className="bg-cyan-700 py-14 md:block sm:hidden max-sm:hidden overflow-visible">
      <div className="container mx-auto px-4 relative">
        <div className="relative w-full">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{ clickable: true }}
            spaceBetween={100}
            slidesPerView={1}
            className="mySwiper"
          >
            {slides.map((slide, idx) => (
              <SwiperSlide key={idx} className="hidden md:block">
                <div className="flex flex-col lg:flex-row gap-8 min-h-[380px] items-center">
                  <div className="w-full md:w-1/2 lg:w-1/3 flex justify-center">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-[250px]  h-auto object-contain"
                    />
                  </div>
                  <div className="w-full mr-10 pr-8 md:w-full lg:w-2/3 text-white text-center lg:text-right">
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                      {slide.title}
                    </h2>
                    <p className="text-md lg:text-lg mb-6">{slide.text}</p>
                    <a
                      href="/"
                      target="_blank"
                      className="inline-block bg-white text-black px-6 py-2 rounded font-semibold hover:bg-gray-300 transition"
                    >
                      View More
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-button-prev " />
          <div className="swiper-button-next" />
        </div>
      </div>
    </div>
  );
}
