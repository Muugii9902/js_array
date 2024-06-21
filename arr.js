// Ugugdsun array ruu too nemj oruuldag function bich. jishee ni: input1: [1, 2, 4] input2: 5 output: [1, 2, 4, 5]
let arr = [1, 2, 4];
let = arr.push(8);
console.log(arr);

function addArr(arr, too) {
  arr.push(too);
  return arr;
}
let newArr = addArr([], 10);
console.log("NewArr:", newArr);
newArr = addArr([1, 2, 3, 4], 10);
console.log("NewArr:", newArr);

//2. Array uusgeh function bich. jishee ni: input1: [ ] input2: 5 output [1, 2, 3, 4, 5]

function createNewArr(len, min, max) {
  let arr = [];
  for (let i = 1; i < len; i++) {
    let rndToo = 0;
    while (rndToo < min) {
      rndToo = Math.floor(Math.random() * max);
    }
    arr.push(rndToo);
  }
  return arr;
}
let a = createNewArr(5, 100, 300);
console.log("Min Max:", 5, 100, 300);
console.log("Arr:", a);

// 3 Garaas too avj(prompt ashiglaj hiih), tuhain tonuudiin niilber bolon dundaj oloh function bich.
// function avg_max(too) {
//   let array = too.split(",");
//   let sum = 0;
//   let avg = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum = sum + Number(array[i]);
//     avg = sum / Number(array.length);
//   }
//   let obj = { sum: sum, avg: avg };
//   return obj;
// }
// let niilber1 = prompt("Too oruulah");
// console.log(avg_max(niilber1));

// bodlogo 4 Ugugdsun temdegt muriin buh usgiig tom useg bolgoh function bich. input: 'the quick brown fox' output: 'The Quick Brown Fox
// console.log(arr3);
let text = "the quick brown fox";
function large_text(abc) {
  let arr3 = text.split(" ");
  for (let i = 0; i < arr3.length; i++) {
    arr3[i] = arr3[i].charAt(0).toUpperCase() + arr3[i].slice(1);
  }
  return arr3.join(" ");
}

console.log(text, "=>", large_text(text));

// function large_text(arr3){
//   for (let i=0;i<arr3.length;i++)

// }

// Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']
// const textArr = ["hello", "world", "pinecone"];
// let arr1 = [
//   ["t", "h", "e"],
//   ["q", "u", "i", "c", "k"],
//   ["b", "r", "o", "w", "n"],
//   ["f", "o", "x"],
// ];
// for (let i = 0; i < arr1.length; i++) {
// for (let j = 0; j < arr1[i].length; j++) {
// }
// bodlogo 5
function reverseText(text) {
  // "hello world" => split(" ") => ["hello","world"]
  return text.split("").reverse().join("");
  // ["h","e","l","l","o"] =>["o","l","l","e","h"]
}

const textArr = ["Hello", "World", "Pinecone"];
// ["olleH", "dlroW", "enoceniP"];
function reverseArray(inputArr) {
  let r = [];
  for (let i = 0; i < inputArr.length; i++) {
    r.push(reverseText(inputArr[i]));
  }
  return r;
}

let ra = reverseArray(textArr);
console.log(textArr);
console.log(ra);

// bodlogo 6 Ugugdsun text dotor tuhain oruulsan keyword(prompt ashiglah) ni bn uu gedgiin shalgah function bich. text = 'animal world' input: animal output: true, input: cat ouput: false
// let text1 = "animal world";
// function search_text(str) {
//   let array4 = text1.split(" ");
//   let niilber3 = prompt("text oruulah");
//   let text2 = niilber3.split(" ");

//   for (let i = 0; i < text2.length; i++) {
//     console.log(
//       "haisan ug " + text2[i] + " baigaa eseh " + array4.includes(text2[i])
//     );
//   }
//   return;
// }
// let = search_text(text1);
// console.log(search_text(niilber3));

// bodolgo 7

const data = [
  {
    productName: "Bakery",
    unitPrice: 5000,
    amount: 100,
    totalPrice: 500000,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Chocolate",
    unitPrice: 3000,
    amount: 18,
    totalPrice: 54.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Cake",
    unitPrice: 8000,
    amount: 10,
    totalPrice: 80.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Candy",
    unitPrice: 2000,
    amount: 16,
    totalPrice: 32.0,
    casherId: 1,
    date: "2022-11-01",
  },
  {
    productName: "Icecream",
    unitPrice: 6000,
    amount: 12,
    totalPrice: 72.0,
    casherId: 1,
    date: "2022-11-01",
  },
];
function calculateTotalPrice(data) {
  let sum = 0;
  let too10 = 0;

  for (let i = 0; i < data.length; i++) {
    sum = sum + data[i].totalPrice;
    too10 = too10 + data[i].amount;
  }
  let obj2 = { une: sum, too: too10 };
  return obj2;
}

let total = calculateTotalPrice(data);
console.log("niit borluulaltiin dun", total);
