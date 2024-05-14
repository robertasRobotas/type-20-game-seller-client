import React from "react";
import styles from "./Card.module.css";
import StatusMark from "../StatusMark/StatusMark";

type CardProps = {
  title: string;
  price: number;
  imgUrl: string;
  condition: string;
  year: number;
};

const Card = ({ title, price, imgUrl, condition, year }: CardProps) => {
  return (
    <div className={styles.wrapper}>
      <img alt="product" src={imgUrl} />
      <div className={styles.infoWrapper}>
        <h2>{title}</h2>
        <h3>{price}$</h3>
        <h4>{year}</h4>
        <StatusMark status={condition} />
      </div>
    </div>
  );
};

export default Card;
