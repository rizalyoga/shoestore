import React from "react";

const SecondaryNavBtn = ({ titleButton }) => {
  return (
    <>
      <button className="text-navy focus:outline-none font-bold active:bg-gray-100 hover:border-2 border-navy text-navy py-1 px-4 mx-1 rounded-lg">{titleButton}</button>
    </>
  );
};

export default SecondaryNavBtn;
