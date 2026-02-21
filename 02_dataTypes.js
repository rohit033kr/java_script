"use strict"; //treat all JS code as newer version
//alert(3+4)   //we are using node.js, not browser

// code readability should be high..

let name = "hitesh"
let age = 18
let isLoggedIn = false
let state = null

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => the value is not defined
// symbol => unique


// object

// console.log(typeof "rohit")
// console.log(typeof null)  // ---> object
console.log(typeof undefined) // ---> undefined



// *****************************************************************


// Primitive :-

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt, 

const score = 100
const scoreValue = 100.3

const isLoggedIna = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non Primitive) :-

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// Stack (Primitive), Heap (Non-Primitive)





