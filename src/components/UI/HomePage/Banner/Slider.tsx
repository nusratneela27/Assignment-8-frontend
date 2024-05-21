// swiper
"use client";
import Contain from "@/components/Shared/Container/Contain";
import { Card } from "@nextui-org/react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import img1 from "@/assets/Products/imgBottoms2.jpeg";
import img2 from "@/assets/Products/imgCasual2.jpg";
import img3 from "@/assets/Products/imgFormal2.jpeg";
import img4 from "@/assets/Products/imgGown2.jpeg";
import img5 from "@/assets/Products/imgBottoms3.jpeg";
import img6 from "@/assets/Products/imgCasual3.jpeg";
import img7 from "@/assets/Products/imgOuter3.jpg";
import img8 from "@/assets/Products/imgTops3.jpeg";
import Image from "next/image";

const Slider = () => {
  const list = [
    {
      title: "Boho Chic Dress",
      img: img1,
    },
    {
      title: "Boho Chic Dress",
      img: img2,
    },
    {
      title: "Boho Chic Dress",
      img: img3,
    },
    {
      title: "Boho Chic Dress",
      img: img4,
    },
    {
      title: "Boho Chic Dress",
      img: img5,
    },
    {
      title: "Boho Chic Dress",
      img: img6,
    },
    {
      title: "Boho Chic Dress",
      img: img7,
    },
    {
      title: "Boho Chic Dress",
      img: img8,
    },
  ];

  return (
    <Contain>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {list.map((item, index) => (
          <SwiperSlide key={index}>
            <Card className="w-[250px] h-[250px]">
              <Image
                alt={item.title}
                src={item.img}
                className="w-[250px] h-[250px] object-cover"
              />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Contain>
  );
};

export default Slider;
