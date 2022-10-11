
//-----------------------------------------------------arrays---------------------------------------
let city = ['kolkata', 'chennai', 'Mumbai'];

let len = city.length;

console.log("length of the array :",len);

// Using Array length in for loop

var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

console.log(languages);

for (i = 0; i < languages.length; i++){
    console.log(languages[i]);
}

//map() Syntax

//arr.map(callback(currentValue), thisArg)


const prices = [1800, 2000, 3000, 5000, 500, 8000];

let newPrices = prices.map(Math.sqrt);
// [ 42.42640687119285, 44.721359549995796, 54.772255750516614,
//   70.71067811865476, 22.360679774997898, 89.44271909999159 ]
console.log(newPrices);

// custom arrow function
const string = "JavaScript";
const stringArr = string.split(''); // array with individual string character

let asciiArr = stringArr.map(x => x.charCodeAt(0));

// map() does not change the original array
console.log(stringArr); // ['J', 'a', 'v', 'a','S', 'c', 'r', 'i', 'p', 't']

console.log(asciiArr); // [ 74,  97, 118,  97, 83,  99, 114, 105, 112, 116 ]

console.log(string.replace(''));

var cars = ['asf','asdf', 'sdfg', 'dfhj']

/* let i = 2;
let len = cars.length;
let text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
} */