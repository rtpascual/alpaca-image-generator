import React from "react";
import "./AlpacaButtons.css";

const AlpacaButtons = ({ attributes, myClick }) => {
  return (
    <div>
      <span>Style</span>
      <div className="OptionsButtons">
        {attributes.items.map((attr) => (
          <button
            className={`AlpacaButton ${attr.selected ? " Selected" : ""}`}
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
