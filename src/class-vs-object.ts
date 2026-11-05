// class Employee {
//     name: string = "Nabil";
//     baseSalary: number = 20000;
// }

// const employee = new Employee();
// const employee2 = new Employee();

// console.log(employee);
// console.log(employee2);

// class Employee {
//     private name: string;
//     private baseSalary: number;

//     constructor(name: string, baseSalary: number) {
//         this.name = name;
//         this.baseSalary = baseSalary;
//     }
// }

// This is a shorthand for the above code.
class Employee {
  constructor(
    public name: string,
    protected _baseSalary: number,
  ) {}

  get baseSalary(): number {
    return this._baseSalary;
  }

  set baseSalary(value: number) {
    this._baseSalary = value;
  }

  describe(): string {
    return `${this.name} earns ${this._baseSalary} per month.`;
  }

  calculate() {
    return this._baseSalary;
  }
}

// Inheritance.
class Manager extends Employee {
  constructor(
    name: string,
    _baseSalary: number,
    public teamSize: number,
  ) {
    super(name, _baseSalary);
  }

  describeManager(): string {
    return `${this.name} manages a team of ${this.teamSize} people and team earns ${this._baseSalary} per month.`;
  }

  calculate() {
    return this._baseSalary + 10001000000000000000;
  }

}

const manager = new Manager("Bob", 150000, 20);
console.log(manager.describeManager());

console.log(manager.describe());
console.log(manager.calculate());

const employee = new Employee("Nabil", 100000);
const employee2 = new Employee("Alice", 120000);
console.log(employee);
console.log(employee2);
