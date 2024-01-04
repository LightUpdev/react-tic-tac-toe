import React from "react";
import GameState from "../gameState";

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GameState?.inProgress:
      return <></>;
    case GameState?.playerXwins:
      return <div className="game-over">Player X wins</div>;
    case GameState?.playerOwins:
      return <div className="game-over">Player O Wins</div>;
    case GameState?.draw:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }
};

export default GameOver;
