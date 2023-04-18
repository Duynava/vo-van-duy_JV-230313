let listNumber = [3, 4, 5, 23, 56, 78, 63, 2, 10];
for (let i = 0; i < listNumber.length; i++) {
  let chua = 0;
  for (let j = i + 1; j < listNumber.length; j++) {
    if (listNumber[i] < listNumber[j]) {
      chua = listNumber[j];
      listNumber[j] = listNumber[i];
      listNumber[i] = chua;
    }
  }
}
console.log(listNumber);
