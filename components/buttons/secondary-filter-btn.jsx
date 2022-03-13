import React from "react";

const SecondaryFilterBtn = ({ titleButton }) => {
  return (
    <>
      <button className="text-gray-300 bg-white focus:outline-none focus:bg-navy active:bg-navy focus:text-white active:text-white active:bg-gray-100 font-bold hover:bg-navy hover:text-white py-1 px-4 mx-1 my-2 rounded-lg">
        {titleButton}
      </button>
    </>
  );
};

export default SecondaryFilterBtn;
