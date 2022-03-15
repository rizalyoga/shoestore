import React from "react";
import ButtonSortColor from "../../buttons/button-sort-color";
import { color } from "../title-sort";

const ColorCol = () => {
  return (
    <>
      {color.map((color, ind) => (
        <ButtonSortColor titleButton={color} color={color.toLocaleLowerCase()} key={ind} />
      ))}
    </>
  );
};

export default ColorCol;
