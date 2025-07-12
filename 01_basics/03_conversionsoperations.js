let score = "33"
console.log(typeof score);

console.log(typeof(score));
let valueinint = Number(score);

console.log(typeof valueinint);
let age = null

let valtoInt = Number(age);

console.log(valtoInt);   // output will be NaN(not a number) bcz it ia not a number...
console.log(typeof(valtoInt))

//we have Boolean , String, Number as for converstion..
// "33" => 33
// "22aa" => NaN
// true => 1
// if null is passed in age then convert to number its value will shown as 0..