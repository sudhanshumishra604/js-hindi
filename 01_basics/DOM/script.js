// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "FROM SUDHANSHU";

let newbtn = document.createElement("button");
newbtn.innerText = "Click me";
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";
document.body.prepend(newbtn);

let para = document.querySelector("p");
let attr = para.getAttribute("class");