import React from "react";

const ActiveButton = ({ titleButton }) => {
  return (
    <>
      <button className="font-bold text-center bg-navy hover:bg-blue-900 active:bg-navy focus:outline-none border-0 py-1 px-4 rounded-lg text-white mx-1">{titleButton}</button>
    </>
  );
};

export default ActiveButton;
