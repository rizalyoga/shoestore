import React from "react";

const ActiveButton = ({ titleButton }) => {
  return (
    <>
      <button className="font-bold text-center hidden md:block bg-navy hover:bg-blue-900 active:bg-navy focus:outline-none border-0 py-2 px-4 rounded text-white mx-1">{titleButton}</button>
    </>
  );
};

export default ActiveButton;
