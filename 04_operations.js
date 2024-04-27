let value = 3
let negValue = -value
console.log(negValue)

// value = -3

/*
console.log(2+2)
console.log(2*2)
console.log(2/2)
console.log(2%2)
console.log(2-2)
console.log(2**2)  2 to the power 2
*/
console.log(2+"2")
// 22
console.log("2"+2)
//22
console.log("1"+2+2)
//122
console.log(1+2+"2")// here 1+2 operation done first, if first letter is string 
                    //then it will consider all value as a string 
//32

console.log(5*2+4/1) //not prefere, not applied bodmas

//let num1, num2, num3
//num1=num2=num3= 2+2; // bad thinking beacause its not readable

let gameCounter=100
gameCounter++; // read prefix and postfix
console.log(gameCounter);