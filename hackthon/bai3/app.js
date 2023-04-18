let month = parseInt(prompt("Hãy Nhập vào tháng (1 đến 12): "));
let year = parseInt(prompt(" Hãy Nhập vào năm: "));

let soNgay;

switch (month) {
  case 1:
    soNgay = 31;
    break;
  case 2:
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      soNgay = 29;
    } else {
      soNgay = 28;
    }
    break;
  case 3:
    soNgay = 31;
    break;
  case 4:
    soNgay = 30;
    break;
  case 5:
    soNgay = 31;
    break;
  case 6:
    soNgay = 30;
    break;
  case 7:
    soNgay = 31;
    break;
  case 8:
    soNgay = 31;
    break;
  case 9:
    soNgay = 30;
    break;
  case 10:
    soNgay = 31;
    break;
  case 11:
    soNgay = 30;
    break;
  case 12:
    soNgay = 31;
    break;
  default:
    alert("Tháng không hợp lệ.");
}

alert(`Tháng ${month} năm ${year} có ${soNgay} ngày.`);
