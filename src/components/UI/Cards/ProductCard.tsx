import { Products } from "@/types";
import { Card } from "@nextui-org/react";
import Image from "next/image";
import { LuPlusCircle } from "react-icons/lu";

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <div>
      <Card shadow="md">
        <Image
          alt={product.title}
          src={product.image}
          width={500}
          height={500}
          className="w-full h-[500px] object-cover"
        />
      </Card>
      <div>
        <h1 className="font-bold text-lg mt-4">{product.title}</h1>
        <div className="flex justify-between items-center">
          <p className="text-default-500">{product.price}</p>
          <LuPlusCircle />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
