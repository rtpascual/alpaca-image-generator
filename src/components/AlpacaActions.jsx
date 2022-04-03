import React from "react";
import "./AlpacaActions.css";

const AlpacaActions = ({ downloadImage, randomizeImage }) => {
  return (
    <div className="AlpacaActions">
      <button className="Download" onClick={() => downloadImage()}>
        Download
      </button>
      <button className="Randomize" onClick={() => randomizeImage()}>
        Randomize
      </button>
    </div>
  );
};

export default AlpacaActions;
