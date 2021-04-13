function romNumRec(num) {
  if (isNaN(num) || num < 0) {
    return 'Invalid input';
  }
  if (num < 5) {
    return (num === 4) ? "IV" : "I".repeat(num);
  } else if (num < 10) {
    const updatedNum = num - 5;
    return (num === 9) ? "IX" : 'V' + romNumRec(updatedNum);
  } else if (num < 50) {
    const numOfXs = parseInt(num / 10);
    const updatedNum = num % 10;
    return ((numOfXs === 4) ? "XL" : "X".repeat(numOfXs)) + romNumRec(updatedNum);
  } else if (num < 100) {
    const updatedNum = (num >= 90) ? num - 90 : num - 50;
    return ((num >= 90) ? "XC" : "L") + romNumRec(updatedNum);
  } else if (num < 500) {
    const numOfCs = parseInt(num / 100);
    const updatedNum = num % 100;
    return ((numOfCs === 4) ? "CD" : "C".repeat(numOfCs)) + romNumRec(updatedNum);
  } else if (num < 1000) {
    const updatedNum = (num >= 900) ? num - 900 : num - 500;
    return ((num >= 900) ? "CM" : "D") + romNumRec(updatedNum);
  } else if (num < 4000) {
    const numOfMs = parseInt(num / 1000);
    return "M".repeat(numOfMs) + romNumRec((num % 1000));
  } else {
    return "number too thicc";
  }
}