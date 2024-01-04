import React from "react";
import "./index.css";
import Tiles from "../Tiles/Tiles";
import Strike from "../Strike";

const Board = ({ tileValue, handleTileClick, hoverClass, strikeClass }) => {
  return (
    <div className="board ">
      <Strike strikeClass={strikeClass} />
      <Tiles
        className="right-border bottom-border"
        value={tileValue[0]}
        onClick={() => handleTileClick(0)}
        hoverClass={hoverClass}
      />
      <Tiles
        className="right-border bottom-border"
        value={tileValue[1]}
        onClick={() => handleTileClick(1)}
        hoverClass={hoverClass}
      />
      <Tiles
        className=" bottom-border"
        value={tileValue[2]}
        onClick={() => handleTileClick(2)}
        hoverClass={hoverClass}
      />
      <Tiles
        className="right-border bottom-border"
        value={tileValue[3]}
        onClick={() => handleTileClick(3)}
        hoverClass={hoverClass}
      />
      <Tiles
        className="right-border bottom-border"
        value={tileValue[4]}
        onClick={() => handleTileClick(4)}
        hoverClass={hoverClass}
      />
      <Tiles
        className=" bottom-border"
        value={tileValue[5]}
        onClick={() => handleTileClick(5)}
        hoverClass={hoverClass}
      />
      <Tiles
        className="right-border "
        value={tileValue[6]}
        onClick={() => handleTileClick(6)}
        hoverClass={hoverClass}
      />
      <Tiles
        className="right-border "
        value={tileValue[7]}
        onClick={() => handleTileClick(7)}
        hoverClass={hoverClass}
      />
      <Tiles
        value={tileValue[8]}
        onClick={() => handleTileClick(8)}
        hoverClass={hoverClass}
      />
    </div>
  );
};

export default Board;
