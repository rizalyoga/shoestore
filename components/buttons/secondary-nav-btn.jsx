import React from "react";

const SecondaryNavBtn = ({ titleButton }) => {
  return (
    <>
      <button className="text-navy hidden md:block focus:outline-none  active:bg-gray-100 hover:border-2 border-navy text-navy py-1 px-4 mx-1 rounded">{titleButton}</button>
    </>
  );
};

export default SecondaryNavBtn;
