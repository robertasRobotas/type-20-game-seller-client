import axios from "axios";
import Header from "../components/Header/Header";
import { links } from "../constans/link";
import React, { useEffect, useState } from "react";
import cookies from "js-cookie";
import CardsWrapper from "../components/CardsWrapper/CardsWrapper";
import { GameType } from "@/types/game";

const Index = () => {
  const [games, setGames] = useState<GameType[] | null>(null);

  const fetchGames = async () => {
    try {
      const headers = {
        authorization: cookies.get("jwt_token"),
      };

      const response = await axios.get("http://localhost:3002/games", {
        headers,
      });

      setGames(response.data.games);

      console.log(response);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <div>
      <Header logo={"GAME SELLER"} links={links} />

      {games && <CardsWrapper games={games} />}
    </div>
  );
};

export default Index;
