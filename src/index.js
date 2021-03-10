
// You should implement your task here.

// module.exports =
  function towelSort(matrix) {
  let m2 = [];
  if (matrix.length == 0 && matrix == undefined) {
    return [];
  }
  else {
    for (let i = 0; i < matrix.length; i++){
      if (i % 2 == 1 || i == 1) {
        m2 = m2.concat(matrix[i].reverse);
        console.log(m2);
      }
      else{
        m2 = m2.concat(matrix[i]);
        console.log(m2);
      }
    }
  }
  return m2;
}
// console.log(towelSort([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]));