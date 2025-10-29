class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log(`${this.name} is ${this.age} years old`);
    }
}

class student extends person{
    constructor(){
        super("SUDHANSHU",21);
        console.log("paseessss");
        
        
   }
    result(){
        console.log("Passed the exam successfully");
    }
}
let stud1 = new student();


//stud1.result();