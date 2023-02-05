const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "": " ",
};

function decode(expr) {
  let arr = expr.split("");
  let slisedArr = [];
  let res = [];

  for (let i = 0; i < arr.length; i += 10) {
    slisedArr.push(arr.slice(i, i + 10));
  }
  for (let i = 0; i < slisedArr.length; i++) {
    let tensymbols = "";
    for (let b = 0; b < slisedArr[i].length; b += 2) {
      if (slisedArr[i][b] + slisedArr[i][b + 1] === "10") {
        tensymbols = tensymbols + ".";
      } else if (slisedArr[i][b] + slisedArr[i][b + 1] === "11") {
        tensymbols = tensymbols + "-";
      }
    }
    res[i] = new Array(tensymbols);
    res.push(res[i]);
  }

  let result = "";
  for (let i = 0; i < res.length - 1; i++) {
    result = result + MORSE_TABLE[res[i]];
  }
  return result;
}

module.exports = {
  decode,
};

// const exprt =
//   "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";

// decode(exprt);
