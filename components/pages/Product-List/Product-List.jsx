import React from "react";
import Layout from "../../layout/layout";
import Card from "../../cards/card";
import ActiveButton from "../../buttons/active-buttons";
import { AiOutlineDown } from "react-icons/ai";

const ProductList = () => {
  const title = (
    <div className="flex items-center gap-2">
      Load More <AiOutlineDown />
    </div>
  );
  return (
    <Layout>
      <Card />
      <div className=" flex items-center justify-center mt-8">
        <ActiveButton titleButton={title} />
      </div>
    </Layout>
  );
};

export default ProductList;
