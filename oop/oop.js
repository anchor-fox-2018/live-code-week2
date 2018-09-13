class PeopleInHacktiv8 {
    constructor() {
        this._id = id;
        this._name = name;
        this._age = age;
        this._address = address;
        this._gender = gender;
    }
}
class Manager extends PeopleInHacktiv8 {
    constructor() {
        super();
        this._salary = salary;
    }

}
class Instructor extends PeopleInHacktiv8 {
    constructor() {
        super();
        this._salary = salary;
    }
}
class Student extends PeopleInHacktiv8 {
    constructor() {
        super();
        this._phase = phase;
    }

}