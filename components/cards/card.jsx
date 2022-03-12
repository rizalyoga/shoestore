import React from "react";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className="cards w-full flex flex-wrap flex-row mt-24 flex-1 md:justify-evenly md:container md:mx-auto ">
      <div className={styles["container-card"]}>
        <div className={styles["image-container"]}>
          <img className="rounded p-2 w-full h-full object-cover" src="./product-1.jpg" alt="photo-product" />
        </div>
        <div className="p-2 w-full flex flex-col item-center justify start">
          <p>Tony Peroty Boots</p>
          <p className="font-bold text-navy">Rp 369.000</p>
        </div>
      </div>

      <div className={styles["container-card"]}>
        <div className={styles["image-container"]}>
          <img className="rounded p-2 w-full h-full object-cover" src="./product-1.jpg" alt="photo-product" />
        </div>
        <div className="p-2 w-full flex flex-col item-center justify start">
          <p>Tony Peroty Boots</p>
          <p className="font-bold text-navy">Rp 369.000</p>
        </div>
      </div>

      <div className={styles["container-card"]}>
        <div className={styles["image-container"]}>
          <img className="rounded p-2 w-full h-full object-cover" src="./product-1.jpg" alt="photo-product" />
        </div>
        <div className="p-2 w-full flex flex-col item-center justify start">
          <p>Tony Peroty Boots</p>
          <p className="font-bold text-navy">Rp 369.000</p>
        </div>
      </div>

      <div className={styles["container-card"]}>
        <div className={styles["image-container"]}>
          <img className="rounded p-2 w-full h-full object-cover" src="./product-1.jpg" alt="photo-product" />
        </div>
        <div className="p-2 w-full flex flex-col item-center justify start">
          <p>Tony Peroty Boots</p>
          <p className="font-bold text-navy">Rp 369.000</p>
        </div>
      </div>

      <div className={styles["container-card"]}>
        <div className={styles["image-container"]}>
          <img className="rounded p-2 w-full h-full object-cover" src="./product-1.jpg" alt="photo-product" />
        </div>
        <div className="p-2 w-full flex flex-col item-center justify start">
          <p>Tony Peroty Boots</p>
          <p className="font-bold text-navy">Rp 369.000</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
