import React, { useState, useEffect } from "react";
import styles from "./card.module.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { content } from "./temp";

const Card = ({ content }) => {
  const [like, setLike] = useState(false);

  const likes = () => {
    !like ? setLike(true) : setLike(false);
  };

  return (
    <div className="cards w-full flex flex-wrap flex-row mt-5 flex-1 justify-between md:container md:mx-auto ">
      {content.map((product, ind) => (
        <div className={styles["container-card"]} key={ind}>
          <div className={styles["image-container"]}>
            <div onClick={likes}>
              {like ? (
                <AiOutlineHeart className="text-3xl font-bold bg-white rounded-full p-1 right-0 top-0 mt-3 mr-3 absolute text-navy" />
              ) : (
                <AiFillHeart className="text-3xl font-bold bg-white text-red-500 rounded-full p-1 right-0 top-0 mt-3 mr-3 absolute text-navy" />
              )}
            </div>
            <img className="rounded p-2 w-full h-full object-cover" src={product.img} alt="photo-product" />
          </div>
          <div className="p-2  w-full flex flex-col item-center justify start">
            <p>{product.name}</p>
            <p className="font-bold text-navy">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
