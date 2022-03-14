import React from "react";
import SortCol from "./sort-col/sort-col";
import ColorCol from "./color-col/color-col";
import SizeCol from "./size-col/size-col";

const FilterRow = () => {
  return (
    <div className="bg-white rounded-lg mx-3">
      <div className="p-8 lg:flex">
        <div className="Sort-col lg:w-3/12">
          <h1 className="text-xl ml-1 mt-2 font-bold text-navy">Sort</h1>
          <SortCol />
        </div>

        <div className="Color-col lg:w-3/12">
          <h1 className="text-xl ml-1 mt-2 font-bold text-navy">Color</h1>
          <ColorCol />
        </div>

        <div className="Size-col lg:w-3/12">
          <h1 className="text-xl ml-1 mt-2 font-bold text-navy">Size</h1>
          <SizeCol />
        </div>

        <div className="Size-col lg:w-3/12">
          <h1 className="text-xl ml-1 mt-2 font-bold text-navy">Price</h1>
          <SizeCol />
        </div>
      </div>
    </div>
  );
};

export default FilterRow;
