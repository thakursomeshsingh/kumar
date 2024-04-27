/*
console.log(2>1)
console.log(2>=1)
console.log(2=1)
console.log(2=<1)
console.log(2<1)    its useless
*/
console.log("2">1)
console.log("2"<1)// string to number changed automatic by js
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0);//true
 
/*
NOTE:-
the reason is that an equality check == and comparisons><>=<= work differently
comparisons cover null to a number, treating it as 0.
That's why (3) null>=0 is true and (1) null>0 is false. 
*/
console.log(undefined == 0); //false
console.log(undefined >= 0); //false
console.log(undefined > 0);  //false

// ===
console.log("2" === 2) ; // false beacause data type is different here it will not convert auto
                        // here it will check data type in === but == not check data type and convert
