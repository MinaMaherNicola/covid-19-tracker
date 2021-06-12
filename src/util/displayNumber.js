export const displayNumber = (number = 1) => {
  if (number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};
