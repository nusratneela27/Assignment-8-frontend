"use client";

import React from "react";
import { Card, CardFooter } from "@nextui-org/react";
import top from "@/assets/TopCategory/top.jpeg";
import bottom from "@/assets/TopCategory/bottom.jpeg";
import gown from "@/assets/TopCategory/gown.jpeg";
import casual from "@/assets/TopCategory/casual.jpg";
import formal from "@/assets/TopCategory/formal.jpg";
import outerwear from "@/assets/TopCategory/outerwear.jpeg";
import Image from "next/image";

const Category = () => {
  const list = [
    {
      title: "Tops",
      img: top,
      category: "Tops",
    },
    {
      title: "Bottoms",
      img: bottom,
      category: "Bottoms",
    },
    {
      title: "Gowns",
      img: gown,
      category: "Gowns",
    },
    {
      title: "Casual",
      img: casual,
      category: "Casual",
    },
    {
      title: "Formal",
      img: formal,
      category: "Formal",
    },
    {
      title: "Outerwear",
      img: outerwear,
      category: "Outerwear",
    },
  ];
  return (
    <div className="my-16 space-y-10">
      <div className="w-full h-full flex justify-center items-center ">
        <div className="text-center w-[60%] h-[60%]">
          <h1 className="text-3xl font-bold">Top Category</h1>
          <p className="text-gray-500 mt-3 w-3/4 mx-auto">
            Explore our newest collection of stylish and trendy outfits perfect
            for every occasion. Stay ahead in fashion with our exclusive designs
            and premium quality clothing.
          </p>
        </div>
      </div>
      <div className="gap-7 grid grid-cols-2 sm:grid-cols-3">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            isFooterBlurred
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <Image
              alt={item.title}
              src={item.img}
              height={0}
              width={0}
              className="w-full h-[350px] object-cover"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black font-bold">{item.category}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Category;
