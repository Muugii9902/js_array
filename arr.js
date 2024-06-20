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
function avg_max(too) {
  let array = too.split(",");
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + Number(array[i]);
    avg = sum / Number(array.length);
  }
  let obj = { sum: sum, avg: avg };
  return obj;
}
let niilber1 = prompt("Too oruulah");
let sum = avg_max(niilber1);
console.log(sum);
// Ugugdsun temdegt muriin array iig tus buriin temdegt muriig urvuugaar butsaah shine array butsaadag function bich. input: ['hello', 'world', 'javascript', 'array'] output: ['olleh', 'dlrow', 'tpircsavaj', 'yarra']
// const textArr = ["hello", "world", "pinecone"];
