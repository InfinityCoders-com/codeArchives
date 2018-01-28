// Merge array

var mergedArray = array1.concat(array2, ....);

var a = [1, 2, 3, 4, 5, 6];
var b = [11, 12, 13, 14, 15, 16];
var c = [111, 112, 113, 114, 115, 116];

console.log( a.concat( b ) );
console.log( a.concat( b, c );
console.log( a.concat( c, b ) );

// output
  [1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 15, 16]
  [1, 2, 3, 4, 5, 6, 11, 12, 13, 14, 15, 16, 111, 112, 113, 114, 115, 116]
  [1, 2, 3, 4, 5, 6, 111, 112, 113, 114, 115, 116, 11, 12, 13, 14, 15, 16]
