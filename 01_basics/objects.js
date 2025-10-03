const student = {
    name: "sudhanshu",
    age:20,
    isvoter: true,
    percentage: 99
};
console.log(student);
console.log(typeof(student));
console.log(student["name"]);
console.log(student.percentage);

student.age = 21;
console.log(student.age);
student["age"] = 43;

// AS WE SAY CONST CAN NOT BE UPDATED BUT IN CASE OF OBJECT IT CAN BE UPDATED....