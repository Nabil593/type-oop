"use strict";
//TypeScript Give us access modifiers:
// public, private, protected, readonly(immutable), static, abstract
// class Students {
//     name: string;
//     _age: number;
//     // private readonly salary: number 
//     // private salary: number 
//     salary: number 
//     // #salary: number
//     constructor(name: string, age: number, salary: number) {
//         this.name = name;
//         this._age = age;
//         this.salary = salary;
//     }
// }
class Students {
    name;
    age;
    salary;
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    // readonly but not modifiable outside the class using getter method.
    get salaryAmount() {
        return this.salary;
    }
    // salary is private but modifiable outside the class using setter method.
    set salaryAmount(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative");
        }
        this.salary = newSalary;
    }
}
const student_1 = new Students("Alice", 20, 50000);
const student_2 = new Students("Bob", 22, 60000);
student_1.salaryAmount = 4000001;
console.log(student_1.salaryAmount);
// student_1.name = "Nabil";
// student_1.age = 30; // age is private cannot be accessed outside the class.
// student_1.salary = 55000; // salary is private cannot be accessed outside the class.
// student_1.salary = 55000; // salary is private but readonly cannot be modified outside the class.
console.log(student_1, student_2);
