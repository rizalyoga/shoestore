import React from "react";
import { category, informations } from "../sidebar/list-menu";
import { BsTwitter, BsYoutube, BsFillTelephoneFill, BsFacebook, BsTelephone } from "react-icons/bs";

const footer = () => {
  return (
    <div className="w-full mt-10 bg-sky-100 bottom-0 left-0 right-0">
      <div className="container mx-auto px-5 lg:px-5 flex flex-col lg:flex-row flex-wrap justify-between ">
        {/* /* --------------------------- log & desc company ---------------------------  */}
        <div className="description-comp flex flex-col lg:w-4/12 py-3 lg:py-5">
          <div className="lg:w-10/12">
            <div className="logo pt-2">
              <a href="#" className="text-bold text-2xl font-bold">
                SHOESTORE
              </a>
            </div>
            <div className="desc py-5">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus esse amet facere quos ex voluptatum velit! Quis illo amet</p>
            </div>
          </div>
        </div>

        {/* /* -------------------------------- Category --------------------------------  */}
        <div className="category py-1 lg:py-5 w-3/12">
          <h2 className="lg:py-2 mb-3 lg:mb-4 font-bold text-xl">{category[0].title}</h2>
          {category.map((list, ind) => (
            <div key={ind}>
              <a href="#">{list.menu}</a>
            </div>
          ))}
        </div>

        {/* /* ------------------------------ Informations ------------------------------  */}
        <div className="information py-3 lg:mt-16 w-3/12">
          {informations.map((list, ind) => (
            <div key={ind}>
              <a href="#">{list.menu}</a>
            </div>
          ))}
          <a href="#">Return Policy</a>
        </div>

        {/* /* ---------------------------- Social Media Icon ---------------------------  */}
        <div className="sosmed-icon py-3 lg:py-8 w-2/12 text-navy flex text-2xl gap-3 justify-start lg:justify-end">
          <a href="#">
            <BsTwitter />
          </a>
          <a href="#">
            <BsYoutube />
          </a>
          <a href="#">
            <BsFacebook />
          </a>
          <a href="#">
            <BsFillTelephoneFill />
          </a>
        </div>
      </div>
    </div>
  );
};

export default footer;
