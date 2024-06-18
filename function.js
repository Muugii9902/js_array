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
let arr1 = [1, 2, 3, 4, 5];

function findIndex(searchArr, findtoo) {
  console.log("search arr1:", searchArr);
  console.log("find number:", findtoo);
  for (let i = 0; i <= searchArr.length - 1; i++) {
    if (searchArr[i] === findtoo) {
      return i;
    }
  }
  return -1;
}
let idx = findIndex(arr1, 6);
console.log("index:", idx);

idx = findIndex([123, 45, 67, 78, 98], 100);
console.log("index:", idx);

// bodlogo 3 Өгөгдсөн тэмдэгт мөрөөс -аас өгөгдсөн тэмдэгт байгаа эсэхийг олох функц бич. Тухайн тэмдэгт байвал индексийг буцаана. Байхгүй бол -1 буцаана.

// bodlogo 4
let arrayN = [1, 2, 3, 4, 5];
function Average(arrayN) {
  let sum = 0;
  for (let i = 0; i < arrayN.length; i++) {
    sum = sum + arrayN[i];
  }

  return sum / arrayN.length;
}
let averagesum = Average(arrayN);
console.log("dundaj", averagesum);
// bodlogo 5
let arr = [1, 2, 3, 4, 5];
function sumArray(arr) {
  let dum = 0;
  for (let i = 0; i < arr.length; i++) {
    dum += arr[i];
  }
  return dum;
}
let totalsum = sumArray(arr);
console.log("niilber", totalsum);
// bodlogo 6
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
    return true;
  }
}
console.log("prime", isPrime(7));
// bodlogo 7 Palindrome too eseh jishee ni: input: 121 output: true, input: -121 output: false, input: 12  output: false
let num = 1221;
console.log(num, "nen too palindrom uu", palindrom(num));
function palindrom(num) {
  let firstNum = num;
  let dig = 0;
  while (num > 0) {
    dig = dig * 10 + (num % 10);
    num = (num - (num % 10)) / 10;
  }
  if (dig === firstNum) {
    return true;
  } else {
    return false;
  }
}

// bodlogo 8
let str = "HELLO";
console.log(str);
let = output = str.split("").reverse().join("");
console.log(output);

// max number
// function max(z,y){
//   if (z>y){
//     return z;
//   }else if(z>y){
//     return y;
//   }
// }
// let mm = Math.max(12, 11);
// console.log("max", mm);
// let v = Math.floor(9.56);
// console.log("number", v);
// let v1 = Math.ceil(9.56);
// console.log("number", v1);
// v1 = Math;
// let random = Math.ceil(Math.random() * 50);
// console.log("random too", random);
let students = [
  {
    name: "Сэд-Эрдэнэ",
    age: 19,
    gender: "male",
    points: 70,
  },
  {
    name: "Индра",
    age: 19,
    gender: "female",
    points: 50,
  },
  {
    name: "Хатнаа ",
    age: 21,
    gender: "male",
    points: 99,
  },
  {
    name: "Тэмүүлэн",
    age: 23,
    gender: "male",
    points: 55,
  },
  {
    name: "Намуун",
    age: 23,
    gender: "female",
    points: 85,
  },
];
console.log("ehnii suragchiin buh medeelel", students[0]);

function er_tooloh(local_students) {
  let sum_er = 0;
  let sum_em = 0;
  for (let i = 0; i < local_students.length; i++) {
    if (local_students[i].gender === "male") {
      sum_er = sum_er + 1;
    }
  }
  return sum_er;
}

console.log("niit eregtei suragchdiin too", er_tooloh(students));
