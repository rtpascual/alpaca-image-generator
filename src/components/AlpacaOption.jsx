import React from "react";
import "./AlpacaOption.css";

const AlpacaOption = ({ attr, myClick }) => {
  return (
    <button
      className={`AlpacaOption ${attr.selected ? " Selected" : ""}`}
      key={attr.id}
      onClick={() => myClick(attr)}
    >
      {attr.label}
    </button>
  );
};

export default AlpacaOption;
