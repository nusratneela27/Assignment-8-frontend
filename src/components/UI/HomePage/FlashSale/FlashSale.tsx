import React from "react";
import { LuPlusCircle } from "react-icons/lu";
import { Button } from "@nextui-org/react";
import { Card } from "@nextui-org/react";
import img1 from "@/assets/flashSale/img1.jpeg";
import img2 from "@/assets/flashSale/img2.jpeg";
import img3 from "@/assets/flashSale/img3.jpeg";
import img4 from "@/assets/flashSale/img4.jpg";
import Image from "next/image";
import Link from "next/link";

const FlashSale = () => {
  const list = [
    {
      title: "Boho Chic Dress",
      img: img1,
      price: "$50.50",
    },
    {
      title: "Casual Midi Dress ",
      img: img2,
      price: "$300.00",
    },
    {
      title: "Fit and Flare Dress",
      img: img3,
      price: "$100.00",
    },
    {
      title: "Formal Dress",
      img: img4,
      price: "$195.30",
    },
  ];

  return (
    <div className="py-16 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Flash sale</h1>
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          <Link href="flash-sale">View All</Link>
        </Button>
      </div>
      <div className="gap-8 grid grid-cols-2 sm:grid-cols-4">
        {list.map((item, index) => (
          <div>
            <Card shadow="md" key={index}>
              <Image
                alt={item.title}
                src={item.img}
                className="w-full h-[500px] object-cover"
              />
            </Card>
            <div>
              <h1 className="font-bold text-lg mt-4">{item.title}</h1>
              <div className="flex justify-between items-center">
                <p className="text-default-500">{item.price}</p>
                <LuPlusCircle />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
