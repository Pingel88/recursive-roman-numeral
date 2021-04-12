function convert(number, letter) {
  let array = [];
  for (let i = 0; i < number; i++) {
    array.push(letter);
  }
  return array.join('');
}

function romanNumerals(input) {
  let sentence = [];
  let romNum = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  let parameters = [1000, 500, 100, 50, 10, 5, 1];

  for (let i = 0; i < parameters.length; i++) {
    let num = Math.trunc(input / parameters[i]);
    input = (input % parameters[i]);
    let ret = convert(num, romNum[i]);
    if ((ret.length > 3) && (i !== 0) && (sentence[i - 1] === romNum[i - 1])) {
      sentence.pop();
      sentence.push(romNum[i]);
      sentence.push(romNum[i - 2]);
    } else if ((ret.length > 3) && (i !== 0)) {
      sentence.push(romNum[i] + romNum[i - 1]);
    } else {
      sentence.push(ret);
    }
  }

  return sentence.join('');
}

function romNumRec(num) {
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
  }
}

// please this?

close
95 = XCXLV



// function recursionRomanNumeral(num) {
//   if (isNaN(num)) {
//     return ` Invalid input `;
//   }
//   if (num < 5) {
//     return "I".repeat(num);
//   } else if (num < 10) {
//     const newNum = num % 5;
//     const nickels = parseInt(cents / 5);
//     return recursionCoinCounter(newChange) + `| Nickels: ${nickels} |`;
//   } else if (cents < 25) {
//     const newChange = cents % 10 / 100;
//     const dimes = parseInt(cents / 10);
//     return recursionCoinCounter(newChange) + `| Dimes: ${dimes} |`;
//   } else {
//     const newChange = cents % 25 / 100;
//     const quarters = parseInt(cents / 25);
//     return recursionCoinCounter(newChange) + `| Quarters: ${quarters} |`;
//   }
// }