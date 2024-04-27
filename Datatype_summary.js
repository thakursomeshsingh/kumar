// Generally data type are 2 types 1. Primitive, 2. Non-Primitive
// Primitive:-
// 7 types:-  string, number, boolean, null, undefined, symbol, BigInt
/*
const score = 100
const scoreValue = 100.3  // in js number is number here no float for decimal

const isLoggedIn = false
const outsideTemp = null; // typeof null is object
let userEmail;

const id = Symbol('123') // for unique
const anotherId = Symbol('123')

console.log(id === anotherId) // false 

//const bigNumber = 2646516484132164n // n for BigInt

// Non-Primitive (reference):-
// array, object, function.

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "somesh",
    age: 24,
}

const myfunction = function(){
    console.log("hello world"); 
}

console.log(typeof isLoggedIn) // boolean
console.log(typeof scoreValue)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 
// memory:-
// Stack(in primitive data type), change in copy
// heap(in non-primitive data type) ,change in real value 

let myYoutubechannel = "someshsingh@gmail.com"
let anothername = myYoutubechannel
anothername = "funwithcode"

console.log(myYoutubechannel)
console.log(anothername)
let userOne = {
    email: "user@gmail.com"
    //upi= "userupi@ybl"
}

let userTwo = userOne
userTwo.email = "someshsingh@icloud.com"

console.log(userOne.email)
console.log(userTwo.email)

// output same due to heap memory