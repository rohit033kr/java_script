let score = "33abc" // , if input will be null then -:

console.log(typeof score); // string , object
console.log(typeof(score));// string , object

let valueInNumber = Number(score)
console.log(typeof valueInNumber);// number , number
console.log(valueInNumber); // the output will be NaN , 0

// "33" => 33
//  "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console. log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "hrr" => true
