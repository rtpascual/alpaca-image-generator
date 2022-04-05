import React, { useState, useEffect } from "react";
import { alpacaConfig } from "../utils/alpacaConfig";
import { getImage } from "../utils/getImage";
import { randomize } from "../utils/randomize";
import AlpacaOption from "./AlpacaOption";
import AlpacaImage from "./AlpacaImage";
import AlpacaButtons from "./AlpacaButtons";
import AlpacaActions from "./AlpacaActions";
import download from "downloadjs";
import * as htmlToImage from "html-to-image";

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

  const downloadImage = () => {
    const alpacaImageElement = document.getElementById("AlpacaImageContainer");
    htmlToImage.toPng(alpacaImageElement).then((dataURL) => {
      download(dataURL, "alpacaImage.png");
    });
  };

  const randomizeImage = () => {
    const randomAlpacaConfig = randomize();
    setConfig(randomAlpacaConfig);

    for (let optionIndex in randomAlpacaConfig) {
      let option = randomAlpacaConfig[optionIndex];

      let selectedAttrIndex = option.items.findIndex((item) => {
        return item.selected === true;
      });

      let selectedAttr = option.items[selectedAttrIndex];

      changeImage(option, selectedAttr);
    }
  };

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
    <main className="flex flex-col md:flex-row place-content-evenly text-left">
      <div className="w-full md:w-2/5">
        <AlpacaImage attr={alpacaAttr} />
        <AlpacaActions
          downloadImage={downloadImage}
          randomizeImage={randomizeImage}
        />
      </div>
      <div className="w-full md:w-2/5">
        <div className="mb-6">
          <span className="section-title">Accessorize the Alpaca's</span>
          <div className="btn-container">
            {config.map((attr) => (
              <AlpacaOption key={attr.id} attr={attr} myClick={setOptionItem} />
            ))}
          </div>
        </div>
        <div>
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
