import { alpacaConfig } from "./alpacaConfig";

const getRandomItem = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

export const randomize = () => {
  let configClone = [...alpacaConfig];

  for (let optionIndex in configClone) {
    configClone[optionIndex].items.forEach((attr) => {
      attr.selected = false;
    });
    configClone[optionIndex].items[
      getRandomItem(configClone[optionIndex].items)
    ].selected = true;
  }

  return configClone;
};
