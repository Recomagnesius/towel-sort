
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let m2 = [];
  for (let i = 0; i != matrix.length; i++){
    if (i % 2 == 0) {
      m2 = m2.concat(matrix[i].reverse);
    }
    else if (let i = 0; i != matrix.length; i++) {
      m2 = m2.concat(matrix[i]);
    }
  }

  return m2;
}
console.log(towelSort([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]));