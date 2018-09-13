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
    showSalaries() {
        let validRights = false;
        for (let i = 0; i < this._loggedInUser.length; i++) {
            for (let j = 0; j < this._people.length; j++) {
                if (this._people[j].name === this._loggedInUser[i]) {
                    if (this._people[j].accessRight === "Manager") {
                        validRights = true;
                    }
                }
            }
        }
        if (validRights) {
            for (let i = 0; i < this._people.length; i++) {
                if (this._people[i].salary !== null) {
                    console.log(`Name: ${this._people[i].name}, Salary: ${this._people[i].salary}`);
                }
            }
        }
        else {
            console.log(`You don't have permission to access this feature!`);
        }
    }
    mySalary() {
        let validRights = false;
        for (let i = 0; i < this._loggedInUser.length; i++) {
            for (let j = 0; j < this._people.length; j++) {
                if (this._people[j].name === this._loggedInUser[i]) {
                    if (this._people[j].accessRight === "Manager" || this._people[j].accessRight === "Instructor") {
                        validRights = true;
                    }
                }
            }
        }
        if (validRights) {
            for (let i = 0; i < this._people.length; i++) {
                for (let j = 0; j < this._loggedInUser.length; j++) {
                    if (this._loggedInUser[j] === this._people[i].name) {
                        console.log(`Your salary is ${this._people[i].salary}`);
                    }
                }
            }
        }
        else {
            console.log(`You don't have a salary yet`);
        }
    }
    addUser(user) {
        let validRights = false;
        for (let i = 0; i < this._loggedInUser.length; i++) {
            for (let j = 0; j < this._people.length; j++) {
                if (this._people[j].name === this._loggedInUser[i]) {
                    if (this._people[j].accessRight === "Manager") {
                        validRights = true;
                    }
                }
            }
        }
        if (validRights) {
            if (this._limit <= 10) {
                this._people.push(user);
                console.log(`kamu sukses menambahkan ${name} ke daftar`);
            }
            else {
                console.log(`Perusahaan terlalu besar, limit adalah ${this._limit}`);
            }
        }
    }
    showPeople() {

    }
}

class PeopleInHacktiv8 {
    constructor(id, name, age, address, gender) {
        this._id = id || this._id + 1;
        this._name = name;
        this._age = age;
        this._address = address;
        this._gender = gender;
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
        hacktiv8._people.push({ id: hacktiv8._people.length, name: this._name, accessRight: "Manager", salary: this._salary });
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
        hacktiv8._people.push({ id: hacktiv8._people.length, name: this._name, accessRight: "Instructor", salary: this._salary });
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
        hacktiv8._people.push({ id: hacktiv8._people.length, name: this._name, accessRight: "Student", salary: null, phase: this._phase });
    }
}

const hacktiv8 = new Company();
const manager = new Manager(1, "John Kosasih", 15, "Mars", "Male", 100);
const instructor1 = new Instructor(2, "Marry Kosasih", 16, "Pluto", "Female", 200);
const instructor2 = new Instructor(3, "Kirry Kosasih", 17, "Saturnus", "Male", 300);
const student = new Student(4, "Kurry Kosasih", 27, "Pluto", "Male", 1);
//daftar ke kumpeni
manager.registerToCompany();
instructor1.registerToCompany();
instructor2.registerToCompany();
student.registerToCompany();
//hacktiv8.login("Marry Kosasih");
hacktiv8.login("John Kosasih");
//hacktiv8.showSalaries();
hacktiv8.mySalary();
hacktiv8.addUser(new Instructor(5, "Wika Silo", 20, "Pondok Indah", "Male", 10000000));
console.log(hacktiv8._people);