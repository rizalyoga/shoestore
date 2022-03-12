import React, { useState, useEffect } from "react";
import styles from "./card.module.css";
import { AiOutlineHeart } from "react-icons/ai";
import { content } from "./temp";

const Card = () => {
  const [like, setLike] = useState(false);

  const likes = (liker) => setLike(!liker);

  useEffect(() => {
    console.log(like);
  }, [likes]);

  return (
    <div className="cards w-full flex flex-wrap flex-row mt-10 flex-1 md:justify-between md:container md:mx-auto ">
      {content.map((product, ind) => (
        <div className={styles["container-card"]} key={ind}>
          <div className={styles["image-container"]}>
            <AiOutlineHeart onClick={() => likes()} className="text-2xl font-bold bg-white rounded-full p-1 right-0 top-0 mt-3 mr-3 absolute text-navy" />
            <img className="rounded p-2 w-full h-full object-cover" src={product.img} alt="photo-product" />
          </div>
          <div className="p-2 w-full flex flex-col item-center justify start">
            <p>{product.name}</p>
            <p className="font-bold text-navy">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
