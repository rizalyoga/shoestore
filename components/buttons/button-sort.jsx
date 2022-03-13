import React from "react";

const BtnSort = ({ titleButton, color }) => {
  return (
    <>
      <button
        className={
          color
            ? `text-center bg-white hover:bg-navy hover:text-white active:bg-white focus:font-bold focus:text-white focus:outline-none focus:bg-${color.toLowerCase()}-500 border-2 py-1 px-3 rounded-lg text-gray-400 m-1 `
            : `text-center bg-white hover:bg-navy hover:text-white active:bg-white focus:font-bold focus:text-white focus:outline-none focus:bg-navy border-2 py-1 px-3 rounded-lg text-gray-400 m-1`
        }
      >
        {titleButton}
      </button>
    </>
  );
};

export default BtnSort;
