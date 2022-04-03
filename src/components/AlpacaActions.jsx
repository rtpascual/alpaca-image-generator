import React from "react";
import "./AlpacaActions.css";

const AlpacaActions = ({ downloadImage }) => {
  return (
    <div className="AlpacaActions">
      <button className="Download" onClick={() => downloadImage()}>
        Download
      </button>
      <button className="Randomize">Randomize</button>
    </div>
  );
};

export default AlpacaActions;
