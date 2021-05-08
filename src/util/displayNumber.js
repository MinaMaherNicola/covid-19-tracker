export const displayNumber = (number = 1) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
