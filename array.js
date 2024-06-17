let fruits = ["apple", "banana", "orange", "kiwi", "grape"];
console.log(fruits[0]);
console.log(fruits[4]);
console.log(fruits[2]);

// bodlogo 2
let array = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let oddN = 0;
let evenN = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    evenN = evenN + 1;
  } else {
    oddN = oddN + 1;
  }
}
console.log("tegsh too", evenN, "sondgoi ", oddN);
// bodlogo 3
let arrayofnumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let length = 0;
let sum = 0;
let average = 0;
let even1 = 0;
let odd1 = 1;
let maxNumber = 0;
let minNumber = arrayofnumbers[0];
for (let i = 0; i < arrayofnumbers.length; i++) {
  length = length + 1;
  sum = sum + arrayofnumbers[i];
  average = sum / length;
  if (arrayofnumbers[i] % 2 === 0) {
    even1 = even1 + arrayofnumbers[i];
  } else {
    odd1 = odd1 * arrayofnumbers[i];
  }
  if (arrayofnumbers[i] > maxNumber) {
    maxNumber = arrayofnumbers[i];
  }
  if (arrayofnumbers[i] < minNumber) {
    minNumber = arrayofnumbers[i];
  }
}
console.log("1)", "length", length);
console.log("2)", "nuulber", sum);
console.log("3)", "dundaj", average);
console.log("4)", "odd number niilber", even1);
console.log("6)", "even number urjver", odd1);
console.log("7)", "arraydah hamgiin ih too", maxNumber);
console.log("8)", "arraydah hamgiin baga too", minNumber);
