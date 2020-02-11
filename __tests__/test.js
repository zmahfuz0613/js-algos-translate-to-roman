let algos = require("../convertToRoman.js")

test("convert number to Roman Numerals", () => {
    expect(algos.convertToRoman(180)).toBe('CLXXX')
    expect(algos.convertToRoman(18)).toBe('XVIII')

})
