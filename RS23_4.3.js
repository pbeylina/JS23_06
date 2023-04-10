const { name } = require("commander");

let num = -10;

console.log(Math.abs(num))
console.log(Math.pow(num, 2))
console.log(Math.sqrt(num))
console.log(Math.sign(num))


let num2 = 6.7583;
console.log(Math.round(num2))
console.log(Math.floor(num2))
console.log(Math.ceil(num2))
console.log(Math.trunc(num2))
console.log(num.toFixed(2)) // return string
console.log(Number(num.toFixed(2))) // return number


let name1 = 'Stan';
console.log(name1)
console.error(name1)

for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    console.warn(i);
  } else {
    console.log(i)
  }
}

let className = 'JavaScript'
console.log(className);
console.log(`%c${className}`, 'color: blue; front-size: 48px');


let result = 0;
console.time('timer1')

for (let i = 0; i < 1000000; i++) {
  result++
}
console.timeEnd('timer1')

console.time('timer2')

for (let i = 0; i < 1000000; i++) {
  result++
}
console.timeEnd('timer2')

let name2 = ['JavaScript', 'Java', [1, 2, 3], false];
console.table(name2)


//sort loop
const arr = [12, 46, 2, 39, 42, 6]

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}

console.log(arr)

// find Min and Max in array
let min = max = arr[0];

for (let i = 0; i < arr.length - 1; i++) {
  if (min > arr[i]) {
    min = arr[i]
  }
  if (max < arr[i]) {
    max = arr[i]
  }
}
console.log(min, max);


// нерабочий
// let idx = 0;
// let arrSorted = [];

// for (let i = 0; i < arr.length; i++) {
//   let min = arr[i]
//   for (j = i + 1; j < arr.length - 1; j++) {
//     if( min > arr[j]) {
//       min = arr[j]
//     }
//   }
//   arrSorted[idx++] = min;
// }
// console.log(arrSorted)

