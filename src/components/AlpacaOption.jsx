import React from "react";

const AlpacaOption = ({ attr, myClick }) => {
  return (
    <button
      className={`btn-option ${attr.selected ? " btn-selected" : ""}`}
      key={attr.id}
      onClick={() => myClick(attr)}
    >
      {attr.label}
    </button>
  );
};

export default AlpacaOption;
