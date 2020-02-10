let algos = require("../groupArrays.js");

test("groups the arrays into an array of arrays of given length, any remainding go in last array", () => {
    
    expect(algos.groupArrays(["a", "b", "c", "d"], 4)).toMatchObject([ [ 'a', 'b', 'c', 'd' ] ])
    expect(algos.groupArrays(["a", "b", "c", "d"], 3)).toMatchObject([ [ 'a', 'b', 'c' ], [ 'd' ] ])
    expect(algos.groupArrays(["a", "b", "c", "d"], 2)).toMatchObject([ [ 'a', 'b' ], [ 'c', 'd' ] ])
    
  })

  