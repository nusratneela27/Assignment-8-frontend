import Contain from "@/components/Shared/Container/Contain";
import SideBar from "@/components/SideBar/SideBar";
import React from "react";

const AllProducts = () => {
  return (
    <Contain>
      <div className="my-16 space-y-3">
        <div className="flex">
          <SideBar></SideBar>
          <div className="flex-1 ml-36">
            <h1 className="text-3xl font-bold">Our Collection Of Products</h1>
            <p className="font-bold">Showing 1-12 of 24 Item(s)</p>
            <p className="text-gray-500 mt-3">
              Explore our newest collection of stylish and trendy outfits
              perfect for every occasion. Stay ahead in fashion with our
              exclusive designs and premium quality clothing.
            </p>
          </div>
        </div>
      </div>
    </Contain>
  );
};

export default AllProducts;
