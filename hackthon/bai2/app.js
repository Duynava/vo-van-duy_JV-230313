let str = "rikkei academy xin chào các bạn";
let newStr = str.split(" ");
for (let i = 0; i < newStr.length; i++) {
  let nava = newStr[i];
  nava = nava.charAt(0).toUpperCase() + nava.slice(1).toLowerCase();
  newStr[i] = nava;
}
let newText = newStr.join(" ");
console.log(newText);
