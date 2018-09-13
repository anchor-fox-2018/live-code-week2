class Company {
    constructor(companyName, limit, people, loggedInUser) {
        this._companyName = companyName || "Hacktiv8";
        this._limit = limit || 10;
        this._loggedInUser = loggedInUser || null;
        this._people = [];
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

}
let manager = new Manager(1, "John Kosasih", 15, "Mars", "Male", 100);
console.log(`${manager._id} ${manager._name} ${manager._age} ${manager._address} ${manager._gender}`)
let instructor1 = new Instructor(2, "Marry Kosasih", 16, "Pluto", "Female", 200);
console.log(`${instructor1._id} ${instructor1._name} ${instructor1._age} ${instructor1._address} ${instructor1._gender}`)

let instructor2 = new Instructor(3, "Kirry Kosasih", 17, "Saturnus", "Male", 300);
console.log(`${instructor2._id} ${instructor2._name} ${instructor2._age} ${instructor2._address} ${instructor2._gender}`)

let student = new Student(4, "Kurry Kosasih", 27, "Pluto", "Male", 1);
console.log(`${student._id} ${student._name} ${student._age} ${student._address} ${student._gender}`)