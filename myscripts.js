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
document.getElementById("btnLogin").addEventListener("click",authoriseUser);

function authoriseUser() {
      let userName = document.getElementById("userName").value;
      let password = document.getElementById("password").value;
      if (userName == "Admin") {
            if (password == "TheMaster") {
                  alert("Welcome");
            } else if (password == "null") {
                  alert("Canceled");
            } else {
                  alert("Wrong password");
            }
      } else if (userName == "null") {
            alert("Canceld");
      } else {
            alert("I don’t know you");
      }
            
      }
