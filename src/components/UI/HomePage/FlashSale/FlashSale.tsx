import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import FlashSaleCard from "../../Cards/FlashSaleCard";
import { SaleItem } from "@/types";

import img1 from "@/assets/flashSale/img1.jpeg";
import img2 from "@/assets/flashSale/img2.jpeg";
import img3 from "@/assets/flashSale/img3.jpeg";
import img4 from "@/assets/flashSale/img4.jpg";

const FlashSale = () => {
  const SaleItems = [
    { id: "1", title: "Boho Chic Dress", img: img1, price: "$50.50" },
    { id: "2", title: "Casual Midi Dress ", img: img2, price: "$300.00" },
    { id: "3", title: "Fit and Flare Dress", img: img3, price: "$100.00" },
    { id: "4", title: "Formal Dress", img: img4, price: "$195.30" },
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
        {SaleItems.map((saleItem: SaleItem) => (
          <FlashSaleCard key={saleItem.id} saleItem={saleItem}></FlashSaleCard>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
