import React from "react";

const SecondaryNavBtn = ({ titleButton }) => {
  return (
    <>
      <button className="text-navy hidden md:block hover:border-2 border-navy text-navy py-1 px-4 mx-1 rounded">{titleButton}</button>
    </>
  );
};

export default SecondaryNavBtn;
