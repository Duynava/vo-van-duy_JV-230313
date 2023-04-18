let array = [20, 5, 11, 98, 14, 9];
let maxNumber = array[0];
for (let i = 1; i < array.length; i++) {
  if (array[i] > maxNumber) {
    maxNumber = array[i];
  }
}
console.log(maxNumber);
