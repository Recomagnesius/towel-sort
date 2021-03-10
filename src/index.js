

  module.exports = function towelSort(matrix) {
    var result = [];
    if (matrix === undefined) return result;
    for (var i = 0; i < matrix.length; ++i){
      if(i % 2 === 0) {
        for (var odd = 0; odd < matrix[i].length; ++odd){
          result.push(matrix[i][odd]);
        }
      }
      else {
        for (var even = matrix[i].length-1; even >= 0; --even){
          result.push(matrix[i][even]);
        }
      }
    }
    return result;
};
