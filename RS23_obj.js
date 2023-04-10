const log = console.log;
let obj = {
  arr:[10,20,30],
  obj_1: {
    a: 'abc',
    b: {11:'cbd', 12: 1, 13: [10,30,50], 40:4},
    c: 'bdc'
  },
  100: {firstName: "Stan", lastName: "P"},
  func: (x,y)=> x+y,
  z:"string",
};

log(obj.obj_1.b['13'][2])
log(obj.obj_1.b['13'][2].slice(1,2))
log(obj.arr[1])

//поиск key
log(obj.w === undefined? 'key is not present': "key is present")
log("w" in obj)

// key переьираются 1 уровня не по порядку
for (let key in obj){
  log(key, obj[key])
}

for (let key in obj){
  if (key == 'func'){
    log(obj[key](10,50));
  }
}

//перебор ключей во вложенных свойствах
for (let key in obj){
  if (key == 'obj_1'){
    for(let key1 in obj[key]){
      log(key1)
    };
  }
}

  let arrNew = [obj, {'newObj':obj}]
  log(arrNew)
  log(arrNew[1].newObj.obj_1.b['13'][2])
  log(arrNew[0]['100'].firstName)


obj['key'] === obj.key
// key as a variable
obj[key]

//method object
//Object.keys /Object.values/Object.entries()

let obj_2 = {
  name: 'Stan',
  teacher: 'Yes',
  language: 'JavaScript'

}

log(Object.keys(obj_2));
log(Object.values(obj_2));
log(Object.entries(obj_2));


let arr = [{4: 'cat'}, {7: 'She'}, {'-2': 'Serg'}, {5 :'for'}]

//сортировка array по ключам
log(arr.sort((a, b) => Object.keys(a)-Object.keys(b)))
log(arr.sort((a, b) => Object.keys(a)-Object.keys(b)).map(obj => Object.values(obj).join(' ')))


let str = "The charCodeAt() method returns an integer between 0 and 65535";
const obj_3 = {};

//В letter of - letter будет содержать значение (букву)
//В letter in - letter будет числом(как индекс)

for (letter of str){
  if (letter in obj_3) {
    obj_3[letter]++
  } else{
    obj_3[letter] = 1;
  }
}
log(obj_3);
log(Object.entries(obj_3).sort((a, b) = b[1] - a[1]).map(el=>`${el[0]} - ${el[1]}`))


for (letter of str){
  log(letter)
  }

// лучше не использовать для array тк он для object
for (letter in str){
    log(letter);
    log(str[letter]);
  }


  // let str2 = "The charCodeAt() method returns an integer between 0 and 65535";
  // let newStr = str2.toLowerCase()
  // const obj_4 = {};

  // for(letter of newStr){
  //   if (letter)
  // }

  // Object.entries(obj)
  //   .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  //   .map((el) => `${el[0]} - ${el[1]}`)


const user = {
  firstName: 'Stan',
  lastName: 'P',
}

// enumerable сокрытие сойства
//configurable запрет на удаление свойства
Object.defineProperty(user, 'SSN', {value: 'XXX-XX-XXXX', enumerable: true, configurable: false, writable: true})
user.firstName = 'Jane'
delete user.SSN
user.SSN = "xxxxxx"


log(user)
log(Object.keys(user));