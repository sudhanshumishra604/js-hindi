console.log(2>3)
console.log(3<1)
console.log(2==2)

console.log("2" == 2); // automatic type conversions.. result in true
console.log("2" > 1)  // here automatic type conversion happen and results in true..

console.log(null >=0)   // output results in true because null is treated as 0 in case of comparison operator(>=,>,<)..

// ===   (Strict check) its not only check value but also datatype of value...

console.log("2" === 2)  //output:- false
