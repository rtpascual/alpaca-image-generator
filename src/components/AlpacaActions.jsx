import React from "react";
/* import "./AlpacaActions.css"; */

const AlpacaActions = ({ downloadImage, randomizeImage }) => {
  return (
    <div className="flex flex-col place-content-evenly gap-2">
      <button className="btn-action" onClick={() => downloadImage()}>
        Download
      </button>
      <button className="btn-action" onClick={() => randomizeImage()}>
        Randomize
      </button>
    </div>
  );
};

export default AlpacaActions;
