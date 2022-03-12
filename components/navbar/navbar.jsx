import React from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import ActiveButton from "../buttons/active-buttons";
import SecondaryNavBtn from "../buttons/secondary-nav-btn";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const toListProduct = (e) => {
    e.preventDefault();
    router.push("/listproduct");
  };

  const toHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <nav className="z-50 fixed top-0 bg-white w-full rounded-b-2xl h-14">
      <div className="px-4 mx-auto flex justify-between items-center h-full" style={{ maxWidth: "1440px" }}>
        <div className="w-4/12 flex items-center text-navy font-bold">
          <RiShoppingBag3Line className="text-xl" />
          {router.asPath === "/listproduct" ? (
            <p className="hidden px-1 md:block text-xl ">Product List</p>
          ) : router.asPath === "/" ? (
            <p className="hidden px-1 md:block text-xl ">Store</p>
          ) : (
            <p className="hidden px-1 md:block text-xl ">Product</p>
          )}
        </div>
        <div className="w-4/12 text-center justify-center">
          <p className="text-bold text-2xl font-bold">SHOESTORE</p>
        </div>
        <div className="w-4/12 flex justify-end items-center">
          <TiThMenu className="md:hidden text-lg text-end" />

          <div onClick={toHome}>
            <SecondaryNavBtn titleButton={"Login"} />
          </div>
          <div onClick={toListProduct}>
            <ActiveButton titleButton={"Register"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
