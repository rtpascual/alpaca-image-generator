import React from "react";

const AlpacaButtons = ({ attributes, myClick }) => {
  return (
    <div className="flex flex-col">
      <span className="section-title">Style</span>
      <div className="btn-container">
        {attributes.items.map((attr) => (
          <button
            className={`btn-option ${attr.selected ? " btn-selected" : ""}`}
            key={attr.id}
            onClick={() => myClick(attributes, attr)}
          >
            {attr.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlpacaButtons;
