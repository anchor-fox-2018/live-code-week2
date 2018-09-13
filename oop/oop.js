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
    constructor(salary) {
        super();
        this._salary = salary;
    }
    greet() {
        super.greet();
        console.log(`Saya adalah seorang instruktur!`);
    }
}
class Instructor extends PeopleInHacktiv8 {
    constructor(salary) {
        super();
        this._salary = salary;
    }
    greet() {
        super.greet();
        console.log(`Saya sedang belajar programming disini!`);
    }
}
class Student extends PeopleInHacktiv8 {
    constructor(phase) {
        super();
        this._phase = phase;
    }
    greet() {
        super.greet();
        console.log(`Saya adalah seorang manager!`);
    }

}

let instruk = new Instructor();
instruk.greet();

let studen = new Student();
studen.greet();

let mana = new Manager();
mana.greet();