import React from "react";
import Layout from "../../layout/layout";
import Card from "../../cards/card";

const Home = () => {
  return (
    <Layout>
      <div className="banner  mt-24 w-full flex flex-col lg:flex-row justify-center">
        <div className="banner-one mx-5 lg:mx-2 my-3 lg:my-0 lg:w-6/12">
          <img src="./Group-45.png" alt="banner-1" />
        </div>
        <div className="banner-two mx-5 lg:mx-2 my-2 lg:my-0 lg:w-6/12">
          <img src="./Group-46.png" alt="banner-2" />
        </div>
      </div>
      <Card />
    </Layout>
  );
};

export default Home;
