let myDate = new Date()
console.log(myDate); //2024-01-26T16:08:53.162Z
console.log(myDate.toDateString()); // Fri Jan 26 2024
console.log(myDate.toLocaleString()); // 1/26/2024, 9:38:53 PM
console.log(myDate.toLocaleDateString()); // 1/26/2024
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023,00,01)
let myDateOne = new Date (2023,01,23,5,40)
let myDateTwo = new Date ("2023-01-24")
let myDateThree = new Date ("01-05-2023")
console.log(myCreatedDate); // 2022-12-31T18:30:00.000Z
console.log(myCreatedDate.toDateString()); // Sun Jan 01 2023
console.log(myDateOne.toLocaleString()); // 2/23/2023, 5:40:00 AM
console.log(myDateTwo.toLocaleString()); //  1/24/2023, 5:30:00 AM
console.log(myDateThree.toLocaleString());// 1/5/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1706286155161
console.log(myCreatedDate.getTime()); // 1672511400000
console.log(Math.floor(Date.now/1000)); // NaN

let newDate = new Date("04-06-2024") //(mm/dd/yyyy)
console.log(newDate.toLocaleString()); // 4/6/2024, 12:00:00 AM
console.log(newDate.getMonth()); // 3
console.log(newDate.getDay()); // 6
console.log(newDate.toLocaleString(  // customise
    "default",{
        weekday: "long", // saturday
    }
));



