import React from "react";

const ActiveButton = ({ titleButton }) => {
  return (
    <>
      <button className="hidden md:block bg-navy hover:bg-blue-900 py-2 px-4 rounded text-white mx-1">{titleButton}</button>
    </>
  );
};

export default ActiveButton;
