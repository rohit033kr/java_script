// let score = "33abc" // , if input will be null then -:

// console.log(typeof score); // string , object
// console.log(typeof(score));// string , object

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);// number , number
// console.log(valueInNumber); // the output will be NaN , 0

// "33" => 33
//  "33abc" => NaN
//  true => 1; false => 0

// let isLoggedIn = 1

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console. log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "hrr" => true

// ********************** OPERATIONS *************************


// let value = 3
// let negValue = -value
// console. log(negValue);
 
// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter);


// ***************************** COMPARISON **************************

// console.log("2" > 1) // true
// console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0);// false
console.log(null >= 0);// true

/*
The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0
That's why null >= 0 is true and null > 0 is false.
*/
