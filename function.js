let a = 10;
let b = 20;

function hevle() {
  console.log("2 toonii niilber ", a + b);
}
hevle();
// utga butsaadaggui pramitrtei
function hevle2(too1, too2) {
  console.log("2 toonii niilber ", too1 + too2);
}
hevle2(22, 44);
let h2 = hevle2(222, 244);
console.log("h2", h2);
// utga butsaadag
function nemeh(x, y) {
  return x + y;
}
let sum = nemeh(15, 15);
console.log("nemeh", sum);

function urjih(x, y) {
  return x * y;
}
let sum1 = urjih(10, 15);
function huvaah(x, y) {
  return x / y;
}
// declaration
let sum2 = huvaah(15, 15);
function hasah(x, y) {
  return x - y;
}
let sum3 = hasah(15, 15);
console.log("hasah", sum3, "huvaah", sum2, "urjih", sum1);
// nergui function
// expression
// let huvaah = function (x, y) {
//   return x / y;
// };
// huvaah();

let square1 = function (x) {
  return x * x;
};
// es6=> arrow function
let square = (x) => {
  return x * x;
};
// bodlogo 1
function ihbga(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

let dun = ihbga(20, 50);
console.log("ihtoo  ", dun);
// bodlogo 2

let arrayofnumbers = [43, 56, 23, 89, 88, 90];
let num = 43;
let num1 = -1;
function number1(arrayofnumbers) {
  for (i = 0; i < arrayofnumbers.length; i++) {
    if (arrayofnumbers[i] !== 43) {
      return num;
    } else {
      return num1;
    }
  }
}
number1(arrayofnumbers);
console.log("too", num);
// bodlogo 4
let arrayN = [1, 2, 3, 4, 5];
function Average(arrayN) {
  let sum4 = 0;
  for (let i = 0; i < arrayN.length; i++) {
    sum4 = sum4 + arrayN.length[i];
  }
  return sum4 / arrayN.length;
}
let averagesum4 = Average(arrayN);
console.log("dundaj", averagesum4);
// bodlogo 5
let arr = [1, 2, 3, 4, 5];
function sumArray(arr) {
  let dum = 0;
  for (let i = 0; i < arr.length; i++) {
    dum += arr.length[i];
  }
  return dum;
}
let totaldum = sumArray(arr);
console.log("niilber", totaldum);
// bodlogo 6
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}
console.log(isPrime(7));
// bodlogo 8
let str = "HELLO";
console.log(str);
let = output = str.split("").reverse().join("");
console.log(output);
