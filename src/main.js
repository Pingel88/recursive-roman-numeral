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
  if (num < 4) {
    return "I".repeat(num);
  }
}