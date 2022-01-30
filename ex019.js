let arr = [-4, 3, -9, 0, 4, 1]
let arr2 = [1, 2, 3, -1, -2, -3, 0, 0]

function plusMinus(arr) {
 let plusValue = 0
 let minusValue = 0
 let zeroValue = 0
 let size = 0
 for (let holdValue of arr) {
  if (holdValue > 0) plusValue += 1
  if (holdValue < 0) minusValue += 1
  if (holdValue == 0) zeroValue += 1
  size++
 }
 plusValue = plusValue / size;
 minusValue = minusValue / size;
 zeroValue = zeroValue / size;

 return console.log(`
 ${plusValue.toFixed(5)}
 ${minusValue.toFixed(5)}
 ${zeroValue.toFixed(5)}
 `)
}
function plusMinus2(arr2) {
 let plusValue = 0
 let minusValue = 0
 let zeroValue = 0
 let size = 0
 for (let holdValue of arr2) {
  if (holdValue > 0) plusValue += 1
  if (holdValue < 0) minusValue += 1
  if (holdValue == 0) zeroValue += 1
  size++
 }
 plusValue = plusValue / size;
 minusValue = minusValue / size;
 zeroValue = zeroValue / size;

 return console.log(`
 ${plusValue.toFixed(5)}
 ${minusValue.toFixed(5)}
 ${zeroValue.toFixed(5)}
 `)
}

plusMinus(arr)
plusMinus2(arr2)
