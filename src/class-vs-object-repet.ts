class Student {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const student1 = new Student("Alice", 20);
const student2 = new Student("Bob", 22);


console.log(student1, student2);
console.log(student1 instanceof Student);
console.log(student2 instanceof Student);