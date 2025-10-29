let btn = document.querySelector("#btn");

// btn.onclick = () => {
//     console.log("You clicked me using js");
//     let a = 24;
//     console.log(a);
// }

// btn.addEventListener("click", () =>{
//     console.log("You clicked me using addEventListener");
// });

// btn.addEventListener("click", () =>{
//     console.log("You clicked me again using addEventListener");
// });

// btn.addEventListener("click",() =>{
//     console.log("Third time you clicked me using addEventListener");
// });

// QUESTION :-

let modebtn = document.querySelector("#scrnmode");
let body = document.querySelector("body");
let mode = "dark";
modebtn.addEventListener("click", () =>{
if(mode == "dark"){
    mode = "light";
    body.classList.add("light");
    body.classList.remove("dark");
} else{
    mode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
}
console.log(mode);
});