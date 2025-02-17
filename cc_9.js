// Task 1 - Creating an Employee Class
class Employee {
    constructor(name, id, department, salary) {
        this.name = name; 
        this.id = id; 
        this.department = department; 
        this.salary = salary; 
    }

    // This method returns details about the employee
    getDetails() {
        return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    }

    // This method calculates the annual salary (monthly salary * 12)
    calculateAnnualSalary() {
        return this.salary * 12;
    }
}

// Creating an employee object
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);

console.log(emp1.getDetails()); // Should print employee details
console.log(emp1.calculateAnnualSalary()); // Should print 60000

// Task 2 - Creating a Manager Class
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary); // Reuse Employee properties
        this.teamSize = teamSize; // New property for Manager
    }

    // Overriding the getDetails method to include "Manager" and team size
    getDetails() {
        return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size: ${this.teamSize}`;
    }

    // Calculate 10% of the annual salary as a bonus
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
    }
}

// Creating a manager object
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);

console.log(mgr1.getDetails()); // Should print manager details
console.log(mgr1.calculateBonus()); // Should print 9600

// Task 3 - Creating a Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = []; // This will store all employees
    }

    // Add an employee to the company
    addEmployee(employee) {
        this.employees.push(employee);
    }

    // List all employees' details
    listEmployees() {
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }
}

// Creating a company and adding employees
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);

company.listEmployees(); // Should list both employees


