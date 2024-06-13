let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log(fruits[0]);
console.log(fruits[4]);
console.log(fruits[2]);
// bodlogo 2
// let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
// let odd = 0;
// let even = 0;
// for (let i = 0; i < array.length; i++) {
//   //   console.log("array", array[i]);
//   if (array[i] % 2 === 1) {
//     odd++;
//   } else {
//     even++;
//   }
// }
// console.log("tegsh toonii too", odd);
// console.log("tegsh toonii too", even);

let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];

let numbers = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let oddCount = 0;
let evenCount = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}
console.log("array", numbers);
console.log("Odd numbers:", oddCount);
console.log("Even numbers:", evenCount);
// bodlogo 3
