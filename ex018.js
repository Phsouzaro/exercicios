/**         0       1          2           3 
 *          0     0  1  2    0  1  2     0  1    2*/
let arr = [[3], [11, 2, 4], [4, 5, 6], [10, 8, -12]];


function diagonalDifference(arr) {
 let cresValores = []
 let decresValores = []
 let soma1 = 0;
 let soma2 = 0;
 for (let index = 1; index < arr.length; index++) {
  cresValores.push(arr[index][index - 1])
 }
 for (let index in arr) {
  decresValores.push(arr[3 - index][index])
 }

 for (var i = 0; i < arr.length - 1; i++) {
  soma1 += cresValores[i];
 }
 for (var i = 0; i < arr.length - 1; i++) {
  soma2 += decresValores[i];
 }

 return soma2 - soma1
}

console.log(diagonalDifference(arr))
