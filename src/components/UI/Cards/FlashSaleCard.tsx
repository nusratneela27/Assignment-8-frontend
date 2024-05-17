import { LuPlusCircle } from "react-icons/lu";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { SaleItem } from "@/types";

const FlashSaleCard = ({ saleItem }: { saleItem: SaleItem }) => {
  return (
    <div>
      <Card shadow="md">
        <Image
          alt={saleItem.title}
          src={saleItem.img}
          className="w-full h-[500px] object-cover"
        />
      </Card>
      <div>
        <h1 className="font-bold text-lg mt-4">{saleItem.title}</h1>
        <div className="flex justify-between items-center">
          <p className="text-default-500">{saleItem.price}</p>
          <LuPlusCircle />
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
