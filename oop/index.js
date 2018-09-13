const {User, Manager, Instructor, Student} = require('./user');
const Company = require('./company');

let manager = new Manager(1, 'John Kosasih', 15, 'Mars', 'Male', 100);
let instructor = new Instructor(2, 'Maria Kosasih', 16, 'Pluto', 'Female', 200);
let instructor2 = new Instructor(3, 'Kirry Kosasih', 17, 'Saturnus', 'Male', 300);
let student = new Student(4, 'Kurry Kosasih', 27, 'Pluto', 'Male', 1);

let hacktiv8 = new Company();
hacktiv8.addPeople(manager);
hacktiv8.addPeople(instructor);
hacktiv8.addPeople(instructor2);
hacktiv8.addPeople(student);
console.log(hacktiv8._people);
hacktiv8.login('John Kosasih');
console.log(hacktiv8._loggedInUser);
hacktiv8.showSalaries();
hacktiv8.mySalary();
let student2 = new Student(5, 'Another Kosasih', 17, 'Earth', 'Female', 2);
hacktiv8.addNewPeople(student2);
hacktiv8.showPeople();
