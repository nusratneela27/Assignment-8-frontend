import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { Products } from "@/types";
import ProductCard from "../../Cards/ProductCard";

const PopularProducts = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();

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
        {products.slice(0, 8).map((product: Products) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
