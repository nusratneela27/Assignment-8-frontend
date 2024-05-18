"use client";

import React from "react";
import { Button, Card, CardFooter } from "@nextui-org/react";
import top from "@/assets/TopCategory/top.jpeg";
import bottom from "@/assets/TopCategory/bottom.jpeg";
import gown from "@/assets/TopCategory/gown.jpeg";
import casual from "@/assets/TopCategory/casual.jpg";
import formal from "@/assets/TopCategory/formal.jpg";
import outerwear from "@/assets/TopCategory/outerwear.jpeg";
import Image from "next/image";
import Link from "next/link";

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
      <div className="text-center">
        <h1 className="text-3xl font-bold">Top Category</h1>
        <p className="text-gray-500 mt-3 w-2/4 mx-auto">
          Explore our newest collection of stylish and trendy outfits perfect
          for every occasion. Stay ahead in fashion with our exclusive designs
          and premium quality clothing.
        </p>
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
      <div className="flex justify-center">
        <Button
          radius="full"
          className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10"
        >
          <Link href="products">View All</Link>
        </Button>
      </div>
    </div>
  );
};

export default Category;

// ================================ grid system ================================================

// "use client";

// import React from "react";
// import { Button, Card, CardFooter } from "@nextui-org/react";
// import top from "@/assets/TopCategory/top.jpeg";
// import bottom from "@/assets/TopCategory/bottom.jpeg";
// import gown from "@/assets/TopCategory/gown.jpeg";
// import casual from "@/assets/TopCategory/casual.jpg";
// import formal from "@/assets/TopCategory/formal.jpg";
// import outerwear from "@/assets/TopCategory/outerwear.jpeg";
// import Image from "next/image";
// import Link from "next/link";

// const Category = () => {
//   const list = [
//     {
//       title: "Tops",
//       img: top,
//       category: "Tops",
//     },
//     {
//       title: "Bottoms",
//       img: bottom,
//       category: "Bottoms",
//     },
//     {
//       title: "Formal",
//       img: formal,
//       category: "Formal",
//     },
//     {
//       title: "Outerwear",
//       img: outerwear,
//       category: "Outerwear",
//     },
//     {
//       title: "Casual",
//       img: casual,
//       category: "Casual",
//     },
//     {
//       title: "Gowns",
//       img: gown,
//       category: "Gowns",
//     },
//   ];
//   return (
//     <div className="my-16 mx-36 space-y-10">
//       <div className="text-center">
//         <h1 className="text-3xl font-bold">Top Category</h1>
//         <p className="text-gray-500 mt-3 w-2/4 mx-auto">
//           Explore our newest collection of stylish and trendy outfits perfect
//           for every occasion. Stay ahead in fashion with our exclusive designs
//           and premium quality clothing.
//         </p>
//       </div>

//       <div className="grid md:grid-rows-1 md:grid-cols-4 grid-cols-1 gap-5">
//         {/* 1 image */}
//         <div className="row-span-2">
//           {list.slice(0, 1).map((item, index) => (
//             <Card
//               shadow="sm"
//               key={index}
//               isFooterBlurred
//               isPressable
//               onPress={() => console.log("item pressed")}
//             >
//               <Image
//                 alt={item.title}
//                 src={item.img}
//                 height={0}
//                 width={0}
//                 className="w-full h-[700px] object-cover"
//               />
//               <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
//                 <div>
//                   <p className="text-black font-bold">{item.category}</p>
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         {/*2 images*/}
//         <div className="col-span-1">
//           {list.slice(1, 3).map((item, index) => (
//             <Card
//               shadow="sm"
//               key={index}
//               isFooterBlurred
//               isPressable
//               onPress={() => console.log("item pressed")}
//             >
//               <Image
//                 alt={item.title}
//                 src={item.img}
//                 height={0}
//                 width={0}
//                 className="w-full h-[350px] object-cover"
//               />
//               <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
//                 <div>
//                   <p className="text-black font-bold">{item.category}</p>
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         {/* 1 image */}
//         <div className="row-span-2">
//           {list.slice(5, 6).map((item, index) => (
//             <Card
//               shadow="sm"
//               key={index}
//               isFooterBlurred
//               isPressable
//               onPress={() => console.log("item pressed")}
//             >
//               <Image
//                 alt={item.title}
//                 src={item.img}
//                 height={0}
//                 width={0}
//                 className="w-full h-[700px] object-cover"
//               />
//               <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
//                 <div>
//                   <p className="text-black font-bold">{item.category}</p>
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>

//         {/* 2 images */}
//         <div className="col-span-1">
//           {list.slice(3, 5).map((item, index) => (
//             <Card
//               shadow="sm"
//               key={index}
//               isFooterBlurred
//               isPressable
//               onPress={() => console.log("item pressed")}
//             >
//               <Image
//                 alt={item.title}
//                 src={item.img}
//                 height={0}
//                 width={0}
//                 className="w-full h-[350px] object-cover"
//               />
//               <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
//                 <div>
//                   <p className="text-black font-bold">{item.category}</p>
//                 </div>
//               </CardFooter>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* button */}
//       <div className="flex justify-center">
//         <Button
//           radius="full"
//           className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg px-10"
//         >
//           <Link href="flash-sale">View All</Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Category;
