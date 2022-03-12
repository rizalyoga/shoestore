import React from "react";
import Layout from "../../layout/layout";
import Card from "../../cards/card";
import ActiveButton from "../../buttons/active-buttons";
import { AiOutlineDown } from "react-icons/ai";
import { content } from "../../cards/temp";
import Search from "../../search-col/index";
import FilterCol from "../../filter-col/index";

const ProductList = () => {
  const title = (
    <div className="flex items-center gap-2">
      See More Product <AiOutlineDown />
    </div>
  );

  return (
    <Layout>
      <div className="mx-auto mt-20 filter-row mx-2">
        <div className="search-col w-full lg:w-5/12">
          <Search />
        </div>
        <div className="filter-col w-full">
          <FilterCol />
        </div>
      </div>
      <Card content={content} />
      <div className=" flex items-center justify-center mt-8">
        <ActiveButton titleButton={title} />
      </div>
    </Layout>
  );
};

export default ProductList;
