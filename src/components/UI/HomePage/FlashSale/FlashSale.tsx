import React from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { Products } from "@/types";
import ProductCard from "../../Cards/ProductCard";

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 2,
    },
  });
  const products = await res.json();

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
        {products.slice(0, 4).map((product: Products) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default FlashSale;
