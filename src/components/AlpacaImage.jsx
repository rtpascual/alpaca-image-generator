import React from "react";
import "./AlpacaImage.css";

const AlpacaImage = ({ attr }) => {
  const { bg, neck, nose, mouth, eyes, hair, leg, ears, acc } = attr;
  return (
    <div className="AlpacaImageContainer" id="AlpacaImageContainer">
      <img src={bg} alt="Alpaca Background" className="AlpacaBackground" />
      <img src={neck} alt="Alpaca Neck" className="AlpacaNeck" />
      <img src={nose} alt="Alpaca Nose" className="AlpacaNose" />
      <img src={mouth} alt="Alpaca Mouth" className="AlpacaMouth" />
      <img src={eyes} alt="Alpaca Eyes" className="AlpacaEyes" />
      <img src={hair} alt="Alpaca Hair" className="AlpacaHair" />
      <img src={leg} alt="Alpaca Leg" className="AlpacaLeg" />
      <img src={ears} alt="Alpaca Ears" className="AlpacaEars" />
      <img src={acc} alt="Alpaca Accessories" className="AlpacaAcc" />
    </div>
  );
};

export default AlpacaImage;
