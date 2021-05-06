export const displayNumber = (number = 1) => {
  number = number.toString().split('');
  let numberString = '';
  number.forEach((digit, index) => {
    if (index % 3 === 0 && index !== 0) {
      numberString += ',';
      numberString += digit;
    } else {
      numberString += digit;
    }
  });
  return numberString;
};
