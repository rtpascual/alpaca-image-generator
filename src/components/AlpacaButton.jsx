import React from "react";
import "./AlpacaButton.css";

const AlpacaButton = ({ attr, myClick }) => {
  return (
    <button
      className={`AlpacaButton ${attr.selected ? " Selected" : ""}`}
      key={attr.id}
      onClick={() => myClick(attr)}
    >
      {attr.label}
    </button>
  );
};

export default AlpacaButton;
