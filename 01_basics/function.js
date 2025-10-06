// function sum(a, b){
//     return a+b;
// }

// console.log(sum(6,2));

// const sum = (a,b) => {
//     return a+b;
// }
// console.log(sum);

//FOR-EACH METHOD
 let arr = ["delhi","mumbai","rajisthan","pune"];

// arr.forEach(function trav(val,index,arr){
//     console.log(val);
// });

// arr.forEach((val,index,arr)=>{   //here index and arr are default parameter of for-each method
//     console.log(val,index,arr);
// });
let arr1 = [5,3,8,2,1,18];
// let newarray = arr1.map((val)=>{
//     return val*2;
// });
// console.log(newarray);


let filterarray = arr1.filter((val)=>{
    return val%2===0;
});
console.log(filterarray);