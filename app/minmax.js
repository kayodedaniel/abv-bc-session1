module.exports = findMinMax = function minMax(arr) {
  var result = []
  var min = arr.reduce(function(a, b) {
    if (a <= b) {
      return a
    } else {
      return b
    }
  })
  var max = arr.reduce(function(a, b) {
    if (a >= b) {
      return a
    } else {
      return b
    }
  })
  result.push(min, max)
  if (result[0] === result[1]) {
    result = [result[0]]
  }
  return result
}