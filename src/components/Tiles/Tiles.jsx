import React from "react";
import "./index.css";

const Tiles = ({ className, onClick, value, hoverClass }) => {
  return (
    <div
      className={`tiles ${className} ${value ? "" : hoverClass}`}
      onClick={onClick}
    >
      {value}
    </div>
  );
};

export default Tiles;
