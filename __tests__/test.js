let algos = require("../translateToRoman.js")

test("Translate the given integer to Roman Numerals", () => {
  expect(algos.translateToRoman(14)).toBe('XIV')
  expect(algos.translateToRoman(181)).toBe('CLXXXI')
  expect(algos.translateToRoman(207)).toBe('CCVII')
  expect(algos.translateToRoman(209)).toBe('CCIX')
  expect(algos.translateToRoman(1899)).toBe('MDCCCXCIX')
  expect(algos.translateToRoman(2020)).toBe('MMXX')
})
