const Engineer = require("../lib/Engineer");

describe("Testing the Engineer Class", () => {
    describe("Can instantiate an Engineer object", () => {
        
        test("Can instantiate an Engineer object with no parameters", () => {
            const newEngineer = new Engineer();
            expect(typeof(newEngineer)).toBe("object")
        })
        test("Can set name via constructor", () => {
            const name = "Dwight Schrute";
            const newEngineer = new Engineer(name);
            expect(newEngineer.name).toBe(name);
        })
        test("Can set ID via constructor",() => {
            const id = 3;
            const newEngineer = new Engineer("Dwight Schrute", 3);
            expect(newEngineer.id).toBe(id)
        })
        test("Can set email via constructor", () => {
            const email = 
            "dwightschrute@dundermifflin.com";
            const newEngineer = new Engineer("Dwight Schrute", 3, email);
            expect(newEngineer.email).toBe(email)
        })
        test("Can set github account via constructor", () => {
            const github = "SchruteFarms";
            const newEngineer = new Engineer("Dwight Schrute", 3, 
            "dwightschrute@dundermifflin.com", github);
            expect(newEngineer.github).toBe(github)
        })
    })

    describe("Can test the instantiated Engineer's object's methods", () => {
        test("Can get name via getName()", () => {
            const name = "Dwight Schrute";
            const newEngineer = new Engineer(name);
            expect(newEngineer.getName()).toBe(name)
        })
    })
})