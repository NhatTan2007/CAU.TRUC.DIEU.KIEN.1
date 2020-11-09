//[Thuc hanh] Kiem tra nam nhuan
// let year = parseInt(prompt("Nhập năm: "));
// let isLeapYear = false;
// if (year % 4 == 0) {
//       if (year % 100 == 0) {
//             if (year % 400 == 0) {
//                   isLeapYear = true;
//             }
//       } else {
//             isLeapYear = true;
//       }
// }

// if (isLeapYear) {
//       alert(`Năm ${year} là năm nhuận`);
// } else {
//       alert(`Năm ${year} không phải là năm nhuận `);
// }

//[Thuc hanh] Luyen tap voi cau truc if/else
let theAnswer = prompt("What is the “official” name of JavaScript?");
if (theAnswer == "ECMAScript") {
      alert("Right!");
} else {
      alert("Didn’t know? ECMAScript!");
}