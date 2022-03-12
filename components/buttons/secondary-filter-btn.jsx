import React from "react";

const SecondaryFilterBtn = ({ titleButton }) => {
  return (
    <>
      <button className="text-gray-300 bg-white focus:outline-none focus:bg-navy active:bg-navy active:text-white font-bold active:bg-gray-100 hover:bg-navy py-1 px-4 mx-1 my-2 rounded">{titleButton}</button>
    </>
  );
};

export default SecondaryFilterBtn;
