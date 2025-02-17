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


