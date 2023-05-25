let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumofEvens = (numStr) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0){ 
    sum = sum + numStr[i];
    }
  }
  return sum;
}
 
console.log(sumofEvens(array));
