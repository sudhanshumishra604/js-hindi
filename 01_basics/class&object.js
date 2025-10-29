// Objects
 /* let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function() {
        console.log("Car started");
        
    }   
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.start());
*/


// Classes ::--

class Car {

    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

        start() {                             //You can declare Function Like this also in class...
            console.log("CAr Started");
        }
        break(){
             console.log("Car Stopped");
        }
}

    let mycar = new Car("Honda","City",2018);
    console.log(mycar);
    