let listNumber = [3, 4, 5, 23, 56, 78, 63, 2, 10];
listNumber.sort((a, b) => a - b);
listNumber.sort(function (a, b) {
  return b - a;
});
console.log(listNumber);
