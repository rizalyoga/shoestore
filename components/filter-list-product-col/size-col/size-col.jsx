import React from "react";
import BtnSort from "../../buttons/button-sort";
import { size } from "../title-sort";

const sizeCol = () => {
  return (
    <>
      {size.map((size, ind) => (
        <BtnSort titleButton={size} key={ind} />
      ))}
    </>
  );
};

export default sizeCol;
