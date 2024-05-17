import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import FlashSaleCard from "../../Cards/FlashSaleCard";
import { SaleItem } from "@/types";

import img1 from "@/assets/flashSale/img1.jpeg";
import img2 from "@/assets/flashSale/img2.jpeg";
import img3 from "@/assets/flashSale/img3.jpeg";
import img4 from "@/assets/flashSale/img4.jpg";

const PopularProducts = () => {
  const SaleItems = [
    { id: "1", title: "Boho Chic Dress", img: img1, price: "$50.50" },
    { id: "2", title: "Casual Midi Dress ", img: img2, price: "$300.00" },
    { id: "3", title: "Fit and Flare Dress", img: img3, price: "$100.00" },
    { id: "4", title: "Formal Dress", img: img4, price: "$195.30" },
    { id: "5", title: "Boho Chic Dress", img: img1, price: "$50.50" },
    { id: "6", title: "Casual Midi Dress ", img: img2, price: "$300.00" },
    { id: "7", title: "Fit and Flare Dress", img: img3, price: "$100.00" },
    { id: "8", title: "Formal Dress", img: img4, price: "$195.30" },
  ];

  return (
    <div className="py-16 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Most Popular Product</h1>
          <p className="text-gray-500 mt-3 w-2/4">
            Explore our newest collection of stylish and trendy outfits perfect
            for every occasion. Stay ahead in fashion with our exclusive designs
            and premium quality clothing.
          </p>
        </div>

        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
        >
          <Link href="products">View All</Link>
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

export default PopularProducts;
