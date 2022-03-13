import React from "react";
import ButtonSort from "../../buttons/button-sort";
import { color } from "../title-sort";

const ColorCol = () => {
  return (
    <>
      {color.map((color, ind) => (
        <ButtonSort titleButton={color} color={color} key={ind} />
      ))}
    </>
  );
};

export default ColorCol;
