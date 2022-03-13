import React from "react";
import ButtonSort from "../../buttons/button-sort";
import { titleSort } from "../title-sort";

const SortCol = () => {
  return (
    <div>
      {titleSort.map((content, ind) => (
        <ButtonSort titleButton={content.title} key={ind} />
      ))}
    </div>
  );
};

export default SortCol;
