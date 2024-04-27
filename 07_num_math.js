const score = 100
console.log(score)

const balance = new Number(100)// data type declare
console.log(balance) //[Number: 100]
console.log(balance.toString().length)// change number to string then check length
console.log(balance.toFixed(2))// 2 digit after decimal
const otherNumber= 214.1756
console.log(otherNumber.toPrecision(4))// 4 total length for maintain with decimal

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'))// 1,00,000 , ('en-IN') for indian style

//+++++++++++++++++++     MATH     +++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-7))// 7
console.log(Math.round(2.4)) //2
console.log(Math.ceil(4.5)) //5
console.log(Math.floor(4.7)) //4
console.log(Math.min(2,5,6,4,3,2)) //2
console.log(Math.max(2,5,6,4,5)) //6

console.log(Math.random()) //random value lie between 0 and 1
console.log((Math.random()*10)+1)// +1 for not come 0 case
console.log(Math.floor(Math.random()*10)+1)

const max =22
const min =10
console.log(Math.floor(Math.random(max-min+1))+min);// +1 for remove 0 case
