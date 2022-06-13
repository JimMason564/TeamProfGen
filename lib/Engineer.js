const Employee = require ("./Employee")

class Engineer extends Employee {
    constructor(name,id,email,officeNumber) {
        super (name,id,email);
        this.Github = Github
    }
    getGithub() {
        return this.Github = Github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;