import React, { useState, useEffect } from "react";
import "./Alpaca.css";
import { alpacaConfig } from "../utils/alpacaConfig";
import { getImage } from "../utils/getImage";
import AlpacaOption from "./AlpacaOption";
import AlpacaImage from "./AlpacaImage";
import AlpacaButtons from "./AlpacaButtons";

const Alpaca = () => {
  const [config, setConfig] = useState(alpacaConfig);
  const [bg, setBg] = useState(null);
  const [neck, setNeck] = useState(null);
  const [nose, setNose] = useState(null);
  const [mouth, setMouth] = useState(null);
  const [eyes, setEyes] = useState(null);
  const [hair, setHair] = useState(null);
  const [leg, setLeg] = useState(null);
  const [ears, setEars] = useState(null);
  const [acc, setAcc] = useState(null);
  const [option, setOption] = useState(config[0]);

  const changeImage = (option, attribute) => {
    const { directory: dir } = option;
    const { filename: bgImage } = attribute;

    let configClone = [...config];
    let selectedOptionIndex = configClone.indexOf(option);
    let selectedAttrIndex =
      configClone[selectedOptionIndex].items.indexOf(attribute);

    configClone[selectedOptionIndex].items.forEach(
      (attr) => (attr.selected = false)
    );

    configClone[selectedOptionIndex].items[selectedAttrIndex].selected = true;

    setConfig(configClone);

    getImage(dir, bgImage, (image) => {
      switch (dir) {
        case "backgrounds":
          setBg(image);
          break;
        case "neck":
          setNeck(image);
          break;
        case "nose":
          setNose(image);
          break;
        case "eyes":
          setEyes(image);
          break;
        case "ears":
          setEars(image);
          break;
        case "mouth":
          setMouth(image);
          break;
        case "leg":
          setLeg(image);
          break;
        case "hair":
          setHair(image);
          break;
        case "accessories":
          setAcc(image);
          break;
        default:
          break;
      }
    });
  };

  const setOptionItem = (option) => {
    const configClone = [...config];
    const selectedIndex = configClone.indexOf(option);
    configClone.forEach((op) => (op.selected = false));
    configClone[selectedIndex].selected = true;
    setConfig(configClone);
    setOption(option);
  };

  useEffect(() => {
    const renderAlpaca = () => {
      config.forEach((option) => {
        const attribute = option.items.filter(
          (at) => at.filename === "default"
        )[0];
        changeImage(option, attribute);
      });
    };
    renderAlpaca();
    // eslint-disable-next-line
  }, []);

  const alpacaAttr = {
    bg,
    neck,
    nose,
    mouth,
    eyes,
    hair,
    leg,
    ears,
    acc,
  };

  return (
    <main>
      <AlpacaImage attr={alpacaAttr} />
      <div className="Container">
        <div className="Options">
          <span>Accessorize the Alpaca's</span>
          <div className="OptionsButtons">
            {config.map((attr) => (
              <AlpacaOption key={attr.id} attr={attr} myClick={setOptionItem} />
            ))}
          </div>
        </div>
        <div className="Styles">
          <AlpacaButtons
            key={option.id}
            attributes={option}
            myClick={changeImage}
          />
        </div>
      </div>
    </main>
  );
};

export default Alpaca;
