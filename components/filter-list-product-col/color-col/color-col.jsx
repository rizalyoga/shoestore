import React from "react";
import ButtonSortColor from "../../buttons/button-sort-color";
import { color } from "../title-sort";

const ColorCol = () => {
  return (
    <>
      {color.map((color, ind) => (
        <ButtonSortColor titleButton={color} color={color == "Black" ? `focus:bg-gray-900` : `focus:bg-${color.toLocaleLowerCase()}-500`} key={ind} />
      ))}
    </>
  );
};

export default ColorCol;
