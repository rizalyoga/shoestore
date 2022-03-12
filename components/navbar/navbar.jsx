import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import ActiveButton from "../buttons/active-buttons";
import SecondaryNavBtn from "../buttons/secondary-nav-btn";

const Navbar = () => {
  return (
    <nav className="z-50 fixed top-0 bg-white w-full rounded-b-2xl h-14">
      <div className="px-4 mx-auto flex justify-between items-center h-full" style={{ maxWidth: "1440px" }}>
        <div className="w-4/12 flex items-center text-navy font-bold">
          <RiShoppingBag3Line className="text-xl" />
          <p className="hidden px-1 md:block text-xl ">Product List</p>
        </div>
        <div className="w-4/12 text-center justify-center">
          <p className="text-bold text-xl font-bold">SHOESTORE</p>
        </div>
        <div className="w-4/12 flex justify-end">
          <TiThMenu className="md:hidden text-lg text-end" />

          <SecondaryNavBtn titleButton={"Login"} />
          <ActiveButton titleButton={"Register"} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
