const Intern = require("../lib/Intern");

describe("Testing the Intern Class", () => {
    describe("Can instantiate an Intern object", () => {
        
        test("Can instantiate an Intern object with no parameters", () => {
            const newIntern = new Intern();
            expect(typeof(newIntern)).toBe("object")
        })
        test("Can set name via constructor", () => {
            const name = "Ryan";
            const newIntern = new Intern(name);
            expect(newIntern.name).toBe(name);
        })
        test("Can set ID via constructor",() => {
            const id = 10;
            const newIntern = new Intern("Ryan", 10);
            expect(newIntern.id).toBe(id)
        })
        test("Can set email via constructor", () => {
            const email = "ryan@dundermifflin.com";
            const newIntern = new Intern("Ryan", 10, email);
            expect(newIntern.email).toBe(email)
        })
        test("Can set school via constructor", () => {
            const school = "University of Scranton";
            const newIntern = new Intern("Ryan", 10, "ryan@dundermifflin.com", school);
            expect(newIntern.school).toBe(school)
        })
    })

    describe("Can test the instantiated Intern's object's methods", () => {
        test("Can get name via getName()", () => {
            const name = "Ryan";
            const newIntern = new Intern(name);
            expect(newIntern.getName()).toBe(name)
        })
    })
})