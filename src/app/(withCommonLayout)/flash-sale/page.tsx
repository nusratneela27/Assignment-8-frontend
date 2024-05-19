// import Contain from "@/components/Shared/Container/Contain";
// import ProductCard from "@/components/UI/Cards/ProductCard";
// import { Products } from "@/types";
// import { Button } from "@nextui-org/react";
// import Link from "next/link";
// import React from "react";

// export const metadata = {
//   title: "Flash-Sale",
// };

// const FlashSale = async () => {
//   const res = await fetch("http://localhost:5000/products", {
//     next: {
//       revalidate: 2,
//     },
//   });
//   const products = await res.json();

//   return (
//     <Contain>
//       <div className="my-16 space-y-3">
//         <h1 className="text-3xl font-bold">Flash Sale</h1>
//         <p className="font-bold">Showing 1-12 of 24 Item(s)</p>
//         <p className="text-gray-500 mt-3">
//           Explore our newest collection of stylish and trendy outfits perfect
//           for every occasion. Stay ahead in fashion with our exclusive designs
//           and premium quality clothing.
//         </p>
//         <div className="grid grid-cols-2  md:grid-cols-4 gap-5">
//           {products.slice(0, 12).map((product: Products) => (
//             <ProductCard key={product._id} product={product}></ProductCard>
//           ))}
//         </div>
//         <div className="flex flex-col justify-center items-center space-y-3 pt-10">
//           <p className="font-bold">Showing 1-12 of 24 Item(s)</p>
//           <div>
//             <Button
//               radius="full"
//               className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10"
//             >
//               <Link href="products">Load More</Link>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </Contain>
//   );
// };

// export default FlashSale;

import Contain from "@/components/Shared/Container/Contain";
import ProductCard from "@/components/UI/Cards/ProductCard";
import { Products } from "@/types";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Flash-Sale",
};

const FlashSale = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 2,
    },
  });
  const products = await res.json();

  const flashSaleProducts = products.filter(
    (product: Products) => product.flash_sale
  );

  return (
    <Contain>
      <div className="my-16 space-y-3">
        <h1 className="text-3xl font-bold">Flash Sale</h1>
        <p className="font-bold">
          Showing 1-24 of {flashSaleProducts.length} Item(s)
        </p>
        <p className="text-gray-500 mt-3">
          Explore our newest collection of stylish and trendy outfits perfect
          for every occasion. Stay ahead in fashion with our exclusive designs
          and premium quality clothing.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {flashSaleProducts.slice(0, 12).map((product: Products) => (
            <ProductCard key={product._id} product={product}></ProductCard>
          ))}
        </div>
        <div className="flex flex-col justify-center items-center space-y-3 pt-10">
          <p className="font-bold">
            Showing 1-24 of {flashSaleProducts.length} Item(s)
          </p>
          <div>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10"
            >
              <Link href="/products">Load More</Link>
            </Button>
          </div>
        </div>
      </div>
    </Contain>
  );
};

export default FlashSale;
