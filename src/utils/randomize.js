import alpacaConfig from "./alpacaConfig";

const getRandomItem = (arr) => {
  return Math.floor(Math.random() * arr.length);
};

export const randomize = () => {
  return [...alpacaConfig].map((option) => {
    return {
      ...option,
      items: getRandomItem(option.items),
    };
  });
};
