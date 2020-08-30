//TRANSLATE TO ROMAN NUMERALS

const translateToRoman = num => {

  let conversionTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  var result = Object.keys(conversionTable).reduce(function(resultRomanNumber, romanNumber){
    let repeatNumber = Math.floor(num / conversionTable[romanNumber]);
    num -= repeatNumber * conversionTable[romanNumber];
    resultRomanNumber += romanNumber.repeat(repeatNumber);
    return resultRomanNumber;
  },'');

  return result;
  
}

console.log(translateToRoman(12))

module.exports = {
  translateToRoman
}
// wop