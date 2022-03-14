import React from "react";

const BtnSort = ({ titleButton }) => {
  return (
    <>
      <button className={`text-center bg-white hover:bg-navy hover:text-white active:bg-white focus:font-bold focus:text-white focus:outline-none focus:bg-navy border-2 py-1 px-3 rounded-lg text-gray-400 m-1 `}>{titleButton}</button>
    </>
  );
};

export default BtnSort;
