const Employee = require("../lib/Employee");

describe("Testing the Employee Class", () => {
    describe("Can instantiate an Employee object", () => {
        
        test("Can instantiate an Employee object with no parameters", () => {
            const newEmployee = new Employee();
            expect(typeof(newEmployee)).toBe("object")
        })
        test("Can set name via constructor", () => {
            const name = "Pam Beesly";
            const newEmployee = new Employee(name);
            expect(newEmployee.name).toBe(name);
        })
        test("Can set ID via constructor",() => {
            const id = 4;
            const newEmployee = new Employee("Pam Beesly", 4);
            expect(newEmployee.id).toBe(id)
        })
        test("Can set email via constructor", () => {
            const email = "pambeesly@dundermifflin.com";
            const newEmployee = new Employee("Pam Beesly", 4, email);
            expect(newEmployee.email).toBe(email)
        })
    })

    describe("Can test the instantiated Employee object's methods", () => {
        test("Can get name via getName()", () => {
            const name = "Pam Beesly";
            const newEmployee = new Employee(name);
            expect(newEmployee.getName()).toBe(name)
        })
    })
})