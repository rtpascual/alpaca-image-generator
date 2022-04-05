import React from "react";
/* import "./AlpacaImage.css"; */

const AlpacaImage = ({ attr }) => {
  const { bg, neck, nose, mouth, eyes, hair, leg, ears, acc } = attr;
  return (
    <div
      className="grid grid-rows-1 grid-cols-1 place-items-center mb-6"
      id="AlpacaImageContainer"
    >
      <img src={bg} alt="Alpaca Background" className="img z-0" />
      <img src={neck} alt="Alpaca Neck" className="img z-20" />
      <img src={nose} alt="Alpaca Nose" className="img z-20" />
      <img src={mouth} alt="Alpaca Mouth" className="img z-30" />
      <img src={eyes} alt="Alpaca Eyes" className="img z-50" />
      <img src={hair} alt="Alpaca Hair" className="img z-40" />
      <img src={leg} alt="Alpaca Leg" className="img z-10" />
      <img src={ears} alt="Alpaca Ears" className="img z-10" />
      <img src={acc} alt="Alpaca Accessories" className="img z-50" />
    </div>
  );
};

export default AlpacaImage;
