// function stringOrNumber(str) {
//   if (isNaN(str)) {
//     return "string";
//   } else {
//     return "number";
//   }
// }

//const { func } = require("assert-plus");

// console.log(stringOrNumber("12421"));
// console.log(stringOrNumber("acaca"));

let arr = ['Tom', 'green', 55, 'apple', 43, 88, 'pear', 'red', 1];
let fruts = ['apple', 'grape', 9, 7, 'pear'];

let greeting = function showMessage() {
  console.log('Hello')
}

function createArrNum(list) {
  let arrNew = [];

  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] == 'number') {
      if (list[i] == 88){
        continue;
      }
      arrNew.push(list[i]);
    }
  }
  //showMessage()

  greeting();
  return arrNew;

}

console.log(createArrNum(arr));
//console.log(createArrNum(fruts));


//Передача одной в другую


function func1(...arg) {
  let result = 0;
  for (let i = 0; i < arg.length; i++) {
    result += arg[i];
  }
  return result;
}

function func2(fn, ...arg) {
  let argArray = [...arg];
  return fn.apply(this, argArray);
}

console.log(func2(func1, 1, 2, 3, 4));

// привязать переданные аргументы к функции func1 и вернуть получившуюся функцию:
function func3(fn, ...arg) {
  let argArray = [...arg];
  return function() { return fn.apply(this, argArray) };
}

var fn3 = func3(func1, 1, 2, 3, 4, 5);
console.log(fn3());


// с урока
let addNum = function sumNumber(a =5, b =1, c =0){
  let result = a+b+c;
  return a+b+c;
}
//console.log(sumNumber(3))
//console.log(addNum())

arr1 = [1,3, 5]
let c = typeof[...arr1]
console.log(c)

arr2 = []
console.log(typeof(arr2))

b = String(arr1)
console.log(typeof(b))