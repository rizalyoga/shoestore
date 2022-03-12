import React from "react";
import Layout from "../../layout/layout";
import Card from "../../cards/card";
import Search from "../../search-col/index.jsx";
import { bestSeller, trending } from "../../cards/temp";
import FilterCol from "../../filter-col/index.jsx";

const Home = () => {
  return (
    <Layout>
      <div className="mx-auto mt-20 filter-row lg:mx-2 flex items-center flex-col justify-between lg:flex-row">
        <div className="filter-col w-full lg:w-9/12">
          <FilterCol />
        </div>
        <div className="search-col w-full lg:w-3/12">
          <Search />
        </div>
      </div>
      <div className="banner mt-5 lg:mx-1 flex flex-col lg:flex-row justify-center">
        <div className="banner-one mx-5 lg:mx-2 my-3 lg:my-0 lg:w-6/12">
          <img src="./Group-45.png" alt="banner-1" />
        </div>
        <div className="banner-two mx-5 lg:mx-2 my-2 lg:my-0 lg:w-6/12">
          <img src="./Group-46.png" alt="banner-2" />
        </div>
      </div>
      <Card content={bestSeller} />
      <div className="mid-banner mt-5 mx-3 lg:mx-2">
        <img src="./mid-banner.png" alt="midle-banner" className="rounded-lg" />
      </div>
      <Card content={trending} />
    </Layout>
  );
};

export default Home;
