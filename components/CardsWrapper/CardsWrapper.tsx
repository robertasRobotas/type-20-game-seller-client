import { GameType } from "../../types/game";
import React from "react";
import Card from "../Card/Card";
import styles from "./CardsWrapper.module.css";

type CardsWrapper = {
  games: GameType[];
};

const CardsWrapper = ({ games }: CardsWrapper) => {
  return (
    <div className={styles.cardsWrapper}>
      {games.map((game) => (
        <Card
          key={game.id}
          condition={game.condition}
          title={game.title}
          imgUrl={game.coverUrl}
          price={game.price}
          year={game.releaseYear}
        />
      ))}
    </div>
  );
};

export default CardsWrapper;
