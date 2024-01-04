import React, { useEffect, useState } from "react";
import Board from "../Board/Board";
import "./index.css";
import GameOver from "../GameOver";
import GameState from "../../gameState";

const PLAYER_X = "X";
const PLAYER_O = "O";

const TicTacToe = () => {
  const [tileValue, setTileValue] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState(null);
  const [gameState, setGameState] = useState(GameState.inProgress);

  const hoverClass = playerTurn === PLAYER_X ? "x-hover" : "o-hover";

  const winningCollections = [
    { comb: [0, 1, 2], strikeClass: "strike-row-1" },
    { comb: [3, 4, 5], strikeClass: "strike-row-2" },
    { comb: [6, 7, 8], strikeClass: "strike-row-3" },
    { comb: [0, 3, 6], strikeClass: "strike-column-1" },
    { comb: [1, 4, 7], strikeClass: "strike-column-2" },
    { comb: [2, 5, 8], strikeClass: "strike-column-3" },
    { comb: [0, 4, 8], strikeClass: "strike-diagonal-1" },
    { comb: [2, 4, 6], strikeClass: "strike-diagonal-2" },
  ];

  const winner = (tileValue, setStrikeClass, setGameState) => {
    setGameState(GameState?.inProgress);
    winningCollections.map((winnerComb) => {
      const { comb, strikeClass } = winnerComb;

      const tileValue1 = tileValue[comb[0]];
      const tileValue2 = tileValue[comb[1]];
      const tileValue3 = tileValue[comb[2]];

      if (
        tileValue1 !== null &&
        tileValue1 === tileValue2 &&
        tileValue1 === tileValue3
      ) {
        setStrikeClass(strikeClass);
        if (tileValue1 === PLAYER_X) {
          setGameState(GameState?.playerXwins);
        } else {
          setGameState(GameState?.playerOwins);
        }
      }
    });

    // check if there is a draw
    const areAllTilesFilled = tileValue.every((tile) => tile !== null);
    if (strikeClass === null) {
      if (areAllTilesFilled) {
        setGameState(GameState.draw);
      }
    }
  };

  useEffect(() => {
    winner(tileValue, setStrikeClass, setGameState);
  }, [tileValue]);

  //handle tile click
  const handleTileClick = (index) => {
    if (tileValue[index] !== null) {
      return;
    }
    const newTileValue = [...tileValue];
    newTileValue[index] = playerTurn;

    setTileValue(newTileValue);

    if (playerTurn === PLAYER_X) {
      setPlayerTurn(PLAYER_O);
    } else {
      setPlayerTurn(PLAYER_X);
    }
  };

  // reset game
  const resetGame = () => {
    setPlayerTurn(PLAYER_X);
    setStrikeClass(null);
    setTileValue(Array(9).fill(null));
    setGameState(GameState.inProgress);
  };

  return (
    <div className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      <Board
        tileValue={tileValue}
        handleTileClick={handleTileClick}
        hoverClass={hoverClass}
        strikeClass={strikeClass}
      />
      <GameOver gameState={gameState} />
      {gameState === 0 ? (
        ""
      ) : (
        <button
          className="reset-btn"
          onClick={() => {
            resetGame();
          }}
        >
          Reset Game
        </button>
      )}
    </div>
  );
};

export default TicTacToe;
