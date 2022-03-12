import React from "react";
import { brands } from "./brands";
import ActiveButton from "../buttons/active-buttons";
import SecondButton from "../buttons/secondary-filter-btn";
import { FiChevronRight } from "react-icons/fi";
import { useRouter } from "next/router";

const FilterCol = () => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap my-2 items-center mx-3 mx-4 lg:mx-0">
      <ActiveButton titleButton="ALL BRANDS" />
      {brands.map((list) => (
        <SecondButton titleButton={list.title} />
      ))}
      <a href="#" onClick={() => router.push("/listproduct")} className="ml-1 text-navy font-bold flex items-center">
        More Brands <FiChevronRight />
      </a>
    </div>
  );
};

export default FilterCol;
