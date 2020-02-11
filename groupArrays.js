//"groups the arrays into an array of arrays of given length, any remainding go in last array"

const groupArrays = (arr, size) => {
  let groups = []
  while (arr.length > 0) {
    groups.push(arr.splice(0, size))
  }
  return groups
}
console.log(groupArrays(["a", "b", "c", "d"], 3))

module.exports = {
  groupArrays
}
