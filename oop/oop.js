class Company {
    constructor(companyName, limit, people, loggedInUser) {
        this._companyName = companyName || "Hacktiv8";
        this._limit = limit || 10;
        this._loggedInUser = []; //loggedInUser || null;
        this._people = [];
    }
    login(credential) {
        let validLogin = false;
        for (let index = 0; index < this._people.length; index++) {
            if (this._people[index].name === credential) {
                validLogin = true;
            }
        }
        if (validLogin) {
            console.log(`Welcome ${credential}`);
            this._loggedInUser.push(credential);
        }
        else {
            console.log(`You're not a member of Hacktiv8!`);
        }
    }
    showSalaries(){
        
    }
}

class PeopleInHacktiv8 {
    constructor(id, name, age, address, gender) {
        this._id = id || 0;
        this._name = name || "noname";
        this._age = age || 0;
        this._address = address || "";
        this._gender = gender || "";
    }
    greet() {
        console.log(`Halo! Saya salah satu member Hacktiv8!`);
    }
    registerToCompany() {

    }
}

class Manager extends PeopleInHacktiv8 {
    constructor(id, name, age, address, gender, salary) {
        super(id, name, age, address, gender);
        this._salary = salary;
    }
    greet() {
        super.greet();
        console.log(`Saya adalah seorang instruktur!`);
    }
    registerToCompany() {
        hacktiv8._people.push({name: this._name, accessRight: "Manager"});
    }
}

class Instructor extends PeopleInHacktiv8 {
    constructor(id, name, age, address, gender, salary) {
        super(id, name, age, address, gender);
        this._salary = salary;
    }
    greet() {
        super.greet();
        console.log(`Saya sedang belajar programming disini!`);
    }
    registerToCompany() {
        hacktiv8._people.push({name: this._name, accessRight: "Instructor"});
    }
}

class Student extends PeopleInHacktiv8 {
    constructor(id, name, age, address, gender, phase) {
        super(id, name, age, address, gender);
        this._phase = phase;
    }
    greet() {
        super.greet();
        console.log(`Saya adalah seorang manager!`);
    }
    registerToCompany() {
        hacktiv8._people.push({name: this._name, accessRight: "Student"});
    }
}

const hacktiv8 = new Company();
const manager = new Manager(1, "John Kosasih", 15, "Mars", "Male", 100);
const instructor1 = new Instructor(2, "Marry Kosasih", 16, "Pluto", "Female", 200);
const instructor2 = new Instructor(3, "Kirry Kosasih", 17, "Saturnus", "Male", 300);
const student = new Student(4, "Kurry Kosasih", 27, "Pluto", "Male", 1);

manager.registerToCompany();
hacktiv8.login("Marry Kosasih");
hacktiv8.login("John Kosasih");