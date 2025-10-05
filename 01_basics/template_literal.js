let str = "my Name is Sudhanshu and my age is 21";

let str1 = `my name is sudhanshu and my age is ${21}`;
console.log(str);
console.log(str1);

const product={
    item: "pencil",
    price : 10
};
console.log("My product name is",product.item,"and its price is:",product.price); //the price  is in yellow color in o/p bcz its integer treated but in down statement its treated as string

console.log(`My product name is ${product.item} and its price is: ${product.price}`);  // check how this is better than above..