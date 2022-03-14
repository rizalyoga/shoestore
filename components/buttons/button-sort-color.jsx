import React from "react";
import * as classnames from "classnames";

const BtnSortColor = ({ titleButton, color }) => {
  return (
    <>
      <button className={classnames(`text-center bg-white hover:bg-navy hover:text-white active:bg-white focus:font-bold focus:text-white focus:outline-none border-2 py-1 px-3 rounded-lg text-gray-400 m-1 ${color}`)}>{titleButton}</button>
    </>
  );
};

export default BtnSortColor;
