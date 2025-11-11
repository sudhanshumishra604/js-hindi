const URL = "https://catfact.ninja/fact";
const fact = document.querySelector(".fact");
const btn = document.querySelector(".btn");

const  getfacts = async () => {
    console.log("Fetching data...");
    const data = await fetch(URL);
    console.log(data);
    const actualdata = await data.json();
    console.log(actualdata);
    fact.innerText = actualdata.fact;

};

btn.addEventListener("click", getfacts);
