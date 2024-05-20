"use client";

import React from "react";
import { Checkbox } from "@nextui-org/react";
import {
  Option,
  categoryOptions,
  priceRangeOptions,
  ratingOptions,
} from "../UI/ProductPage/checkboxData";
import { useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useRouter } from "next/navigation";

const SideBar = () => {
  const params = useSearchParams();
  const router = useRouter();
  // const category = params.get("category");

  const handleClick = (option: Option) => {
    const currentQuery = { ...queryString.parse(params.toString()) };

    currentQuery["category"] = option.value;
    const url = queryString.stringifyUrl(
      {
        url: `/women-wear`,
        query: currentQuery,
      },
      { skipNull: true }
    );
    router.push(url);
  };
  return (
    <div className="flex flex-col w-64 px-2 py-4 space-y-5">
      <div className="border rounded-lg shadow-md p-5">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl border-s-3 border-stone-950">
            <span className="ps-5">Price Range</span>
          </h1>
          {priceRangeOptions.map((option: Option) => (
            <Checkbox key={option.value} color="secondary">
              {option.label}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="border rounded-lg shadow-md p-5">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl border-s-3 border-stone-950">
            <span className="ps-5">Categories</span>
          </h1>
          {categoryOptions.map((option: Option) => (
            <Checkbox
              key={option.value}
              // checked={category === option.label}
              onClick={() => handleClick(option)}
              color="secondary"
            >
              {option.label}
            </Checkbox>
          ))}
        </div>
      </div>
      <div className="border rounded-lg shadow-md p-5">
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl border-s-3 border-stone-950">
            <span className="ps-5">Ratings</span>
          </h1>
          {ratingOptions.map((option: Option) => (
            <Checkbox key={option.value} color="secondary">
              {option.label}
            </Checkbox>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
