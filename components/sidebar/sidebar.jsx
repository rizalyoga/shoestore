import React from "react";
import { product, category, informations } from "./list-menu";

const Sidebar = () => {
  return (
    <aside className="lg:w-2/12 h-screen hidden lg:block">
      <div className="container  h-full flex flex-col pt-20 pl-5">
        {product.map((list, ind) => (
          <div className="product mt-2" key={ind}>
            <h2 className="font-bold text-xl">{list.title}</h2>
            <a href="#">{list.menu}</a>
          </div>
        ))}
        {category.map((list, ind) => (
          <div className="category mt-2" key={ind}>
            <h2 className="font-bold text-xl">{list.title}</h2>
            <a href="#">{list.menu}</a>
          </div>
        ))}
        {informations.map((list, ind) => (
          <div className="information mt-2" key={ind}>
            <h2 className="font-bold text-xl">{list.title}</h2>
            <a href="#">{list.menu}</a>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
