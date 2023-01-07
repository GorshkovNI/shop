export const sumOrder = (arr) => {
  return arr.reduce((acum, current) => {
    return acum + current.price;
  }, 0);
};
