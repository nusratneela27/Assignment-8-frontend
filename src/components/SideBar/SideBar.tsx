import { Checkbox } from "@nextui-org/react";
import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col w-64 px-2 py-4 space-y-5">
      <div className="border rounded-lg shadow-md p-5">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl border-s-3 border-stone-950">
            <span className="ps-5">Price Range</span>
          </h1>
          <Checkbox color="secondary">$200.00 - $ 500.00</Checkbox>
          <Checkbox color="secondary">$200.00 - $ 500.00</Checkbox>
          <Checkbox color="secondary">$200.00 - $ 500.00</Checkbox>
          <Checkbox color="secondary">$200.00 - $ 500.00</Checkbox>
        </div>
      </div>
      <div className="border rounded-lg shadow-md p-5">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl border-s-3 border-stone-950">
            <span className="ps-5">Categories</span>
          </h1>
          <Checkbox color="secondary">Tops</Checkbox>
          <Checkbox color="secondary">Bottoms</Checkbox>
          <Checkbox color="secondary">Outerwear</Checkbox>
          <Checkbox color="secondary">Casual</Checkbox>
          <Checkbox color="secondary">Gown</Checkbox>
          <Checkbox color="secondary">Formal</Checkbox>
        </div>
      </div>
      <div className="border rounded-lg shadow-md p-5">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl border-s-3 border-stone-950">
            <span className="ps-5">Ratings</span>
          </h1>
          <Checkbox color="secondary">1 Star</Checkbox>
          <Checkbox color="secondary">2 Star</Checkbox>
          <Checkbox color="secondary">3 Star</Checkbox>
          <Checkbox color="secondary">4 Star</Checkbox>
          <Checkbox color="secondary">5 Star</Checkbox>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
