// HACKTIV8 //

class Hacktiv8 {
    constructor (id, name, age, address, gender) {
        this.id = Number(id),
        this.name = name,
        this.age = Number(age),
        this.address = address,
        this.gender = gender
    }
}

// STUDENT //

class Student extends Hacktiv8 {
    constructor (id, name, age, address, gender, phase) {
        super(id, name, age, address, gender);
        this.phase = Number(phase);
    }

    greet () {
        console.log('Halo! Saya salah satu member Hacktiv8!');
        console.log("Saya sedang belajar programming disini!");
    }
}

// MANAGER //

class Manager extends Hacktiv8 {
    constructor (id, name, age, address, gender, salary) {
        super(id, name, age, address, gender);
        this.salary = salary;
    }

    greet () {
        console.log('Halo! Saya salah satu member Hacktiv8!');
        console.log("Saya adalah seorang manager!");
    }
}

// INSTRUCTOR //
class Instructor extends Hacktiv8 {
    constructor (id, name, age, address, gender, salary) {
        super(id, name, age, address, gender);
        this.salary = salary;
    }

    greet () {
        console.log("Halo! Saya salah satu member Hacktiv8!")
        console.log("Saya adalah seorang instruktur!");
    }
}

// COMPANY //
class Company {
    constructor (people) {
        this.companyName = 'Hacktiv8',
        this.limit = 10,
        this.loggedInUser = null,
        this.mySalary2,
        this.mySalary,
        this.people = people
    }

    showSalaries() {
        for (let i = 0; i < this.people.length; i++) {
            if (this.people[i] instanceof Manager === true && this.people[i].name === this.loggedInUser) {
                for (let i = 0; i < this.people.length; i++) {
                    if (this.people[i] instanceof Student !== true) {
                        let result = `Name: ${this.people[i].name}, Salary: ${this.people[i].salary}`
                        console.log(result);
                    }
                }
            }
        }
    }

    login(input) {
        let result = 'You are not a member of Hacktiv8!'
        for (let i = 0; i < this.people.length; i++) {
            if (input === this.people[i].name) {
                this.loggedInUser = input;
                result = `Welcome, ${input}!`;
            }
        }
        console.log(result);
    }

    addUser(name, age, address, gender, salary) {
        
        if (this.people.length <= 10) {
            for (let i = 0; i < this.people.length; i++) {
                if (this.people[i].name === this.loggedInUser && this.people[i] instanceof Manager === true) {
                    let id = Number(this.people.length + 1);
                    let karyawan = new Instructor(id, name, age, address, gender, salary);
                    this.people.push(karyawan);
                    break;
                }
            }
        }
        
        else {
            console.log('User telah melebihi batas')
        }
    }

    showPeople() {
        let result = {
            Instructors: [],
            Managers: [],
            Students: []
        }

        for (let i = 0; i < this.people.length; i++) {
            //student
            if (this.people[i] instanceof Student) {result.Students.push(this.people[i])}
            else if (this.people[i] instanceof Manager) {result.Managers.push(this.people[i])}
            else if (this.people[i] instanceof Instructor) {result.Instructors.push(this.people[i])}
        }
        
        console.log(result);
    }
}


////// CLASSES ENDS ///////

let john = new Manager(1, 'John Kosasih', 15, 'Mars', 'Male', 100); // 1. manager
let marry = new Instructor(2, 'Marry Kosasih', 16, 'Pluto', 'Female', 200); // 2. instructor
let kirry = new Instructor(3, 'Kirry Kosasih', 17, 'Saturnus', 'Male', 300); // 3. instructor
let kurry = new Student(4, 'Kurry Kosasih', 27, 'Pluto', 'Male', 1); // 4. student

let people = [john, marry, kirry, kurry]

let company = new Company(people);

//testing

company.login('John Kosasih');
company.addUser('Muhammad Kosasih', 15, 'Mars', 'Male', 100);
company.showPeople();
