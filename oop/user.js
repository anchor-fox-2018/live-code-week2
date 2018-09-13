
class User {
    constructor(id, name, age, address, gender) {
      this._id = id;
      this._name = name;
      this._age = age;
      this._address = address;
      this._gender = gender;
    }

} // end class user

class Manager extends User {
  constructor(id, name, age, address, gender, salary) {
    super(id, name, age, address, gender);
    this._salary = salary;
  }

  greet() {
    console.log(`Halo! Saya salah satu member Hacktiv8! \nSaya adalah seorang manager!`);
  }
}

class Instructor extends User {
  constructor(id, name, age, address, gender, salary) {
    super(id, name, age, address, gender);
    this._salary = salary;
  }

  greet() {
    console.log(`Halo! Saya salah satu member Hacktiv8! \nSaya adalah seorang instruktur!`);
  }
}

class Student extends User {
  constructor(id, name, age, address, gender, phase) {
    super(id, name, age, address, gender);
    this._phase = phase;
  }

  greet(){
    console.log(`Halo! Saya salah satu member Hacktiv8! \nSaya sedang belajar programming disini!`);
  }
}

module.exports = {User, Manager, Instructor, Student}
