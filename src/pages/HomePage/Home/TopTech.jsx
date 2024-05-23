import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  480: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 6,
    spaceBetween: 50,
  },
};

const dataTemo = [
  {
    avt: "https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg",
    name: "Big DadMoon",
    desc: "Chuyên gia lĩnh vực lập trình",
    rateCount: 100,
  },
  {
    avt: "https://demo2.cybersoft.edu.vn/static/media/instrutor6.64041dca.jpg",
    name: "IcarDi MenBor",
    desc: "Chuyên gia ngôn ngữ Vue Js",
    rateCount: 100,
  },
  {
    avt: "https://demo2.cybersoft.edu.vn/static/media/instrutor7.edd00a03.jpg",
    name: "Bladin Slaham",
    desc: "Chuyên gia hệ thống máy tính",
    rateCount: 100,
  },
  {
    avt: "https://demo2.cybersoft.edu.vn/static/media/instrutor8.aec2f526.jpg",
    name: "Chris Andersan",
    desc: "Chuyên gia lĩnh vực Full Skill",
    rateCount: 100,
  },
  {
    avt: "https://demo2.cybersoft.edu.vn/static/media/instrutor9.504ea6c5.jpg",
    name: "VueLo Gadi",
    desc: "Chuyên gia lĩnh vực Phân tích",
    rateCount: 100,
  },
  {
    avt: "https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg",
    name: "Hoàng Nam",
    desc: "Chuyên gia lĩnh vực PHP",
    rateCount: 100,
  },
];

const TopTech = () => {
  return (
    <div className="p-10">
      <p className="font-bold text-black">Giảng viên hàng đầu</p>
      <Swiper
        className="flex flex-row justify-around items-center m-10"
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        breakpoints={breakpoints}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        // responsive
      >
        {dataTemo.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center"
          >
            <img
              src={item.avt}
              alt=""
              className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
            />
            <p className="font-bold text-black text-center">{item.name}</p>
            <p className="text-center">{item.desc}</p>

            <div class="flex items-center mx-auto justify-center">
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                class="w-4 h-4 text-yellow-300 ms-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>

              <p className="ml-1" style={{ color: "yellow" }}>
                4.9
              </p>
            </div>

            <p className="text-center">{item.rateCount} đánh giá</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopTech;
