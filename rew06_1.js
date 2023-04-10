let name = "Anna";
let age = 90;

if (age < 21) {
  console.log(`Hello ${name} take your juce`)
}
else if( age >= 21 && age < 80) {
  console.log(" Take your glass of wine")
}
else  {
  console.log("Take your glass kefir")
}


// underweight < 18.5, healthy 18.5 - 24.9, overweight 25.0 - 29.9, obesity >30

// про улитку



// (3-2)*(x -1) +3 =5
// x-1 +3 = 9
// x =7

/* Решение рекурсией
var pos = 0, perDay = 3, perNt = -2, wallH = 5, dayCount = 1
function crawl() {
if (perDay + perNt <= 0) {
    console.log("Never")
} else {
    pos += perDay
    if (pos >= wallH) {
        console.log(dayCount)
        } else {
        pos += perNt
        dayCount++
        crawl()
        }
    }
}
crawl()


console.log("Вар. 1 математика : Улитка доползла до вершины стены за ",
(wallHigth - speed) / (speed + nightSpeed) + 1, " дня." )
let wallHigth = 5
let speed = 3
let nightSpeed = -2
let result = speed
let totalDays = 1
*/

function stringOrNumber(str) {
  if (isNaN(str)) {
    return "string";
  } else {
    return "number";
  }
}

console.log(stringOrNumber("12421"));
console.log(stringOrNumber("acaca"));