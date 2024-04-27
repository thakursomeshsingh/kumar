const name = "somesh"
const repoCount = 50
 
//console.log(Name+repoCount+" value");   oldest style not recommended

console.log(`hello my name is ${name} and my reppo count is ${repoCount}`) //string interpolation, its good thing for declaration

const gameName= new String('sin-gh')// a way of string declation
console.log(gameName[0]);//s
console.log(gameName.__proto__);//{}
console.log(gameName.length);//5
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); // g- what is letter on 3rd position?
console.log(gameName.indexOf('i')); //1- what is position of i letter?

const newString = gameName.substring(0,3)// 3rd positin not count,in substring we cant use (-) value
console.log(newString) //sin

const anotherString= gameName.slice(-2,5) // working from reverse, here we can use (-) value
console.log(anotherString)

const newStringOne= "  thakur  "
console.log(newStringOne) // here space will be print
console.log(newStringOne.trim())// remove start space and end spaces
console.log(newStringOne.trimStart()) // remove starting spaces
console.log(newStringOne.trimEnd()) // remove end spaces

const url="https:\\somesh.com\somesh%30singh"
console.log(url.replace('%30', '-'))
console.log(url.includes('somesh'))// checking that this keyword available or not answer will be in boolean
console.log(url.includes('thakur'))
console.log(gameName.split('-'))





