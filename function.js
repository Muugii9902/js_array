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

function ihbga(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

let dun = ihbga(20, 50);
console.log("ihtoo  ", dun);
