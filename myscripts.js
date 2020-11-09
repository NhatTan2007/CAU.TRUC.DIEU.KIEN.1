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
// let theAnswer = prompt("What is the “official” name of JavaScript?");
// if (theAnswer == "ECMAScript") {
//       alert("Right!");
// } else {
//       alert("Didn’t know? ECMAScript!");
// }

//[Thuc hanh] Luyen tap voi cau truc If else if
// document.getElementById("btnLogin").addEventListener("click",authoriseUser);

// function authoriseUser() {
//       let userName = document.getElementById("userName").value;
//       let password = document.getElementById("password").value;
//       if (userName == "Admin") {
//             if (password == "TheMaster") {
//                   alert("Welcome");
//             } else if (password == "null") {
//                   alert("Canceled");
//             } else {
//                   alert("Wrong password");
//             }
//       } else if (userName == "null") {
//             alert("Canceld");
//       } else {
//             alert("I don’t know you");
//       }
            
//       }

//[Thuc hanh] Luyen tap voi cau truc switch - case
//Bai 1
// let browser = prompt("Input your browser:");
// switch (browser) {
//       case "Edge":
//             alert("You've got the Edge!");
//             break;
//       case "Chrome":
//       case "Firefox":
//       case "Safari":
//       case "Opera":
//             alert("Okay we support these browsers too");
//             break;
//       default:
//             alert("We hope that this page looks ok!")
//             break;
// }
//Bài 2
let a = parseInt(prompt("Nhập vào số a",0));
switch (a) {
      case 0:
            alert("0");
            break;
      case 1:
            alert("1");
            break;
      case 2:
      case 3:
            alert("2,3");
}
