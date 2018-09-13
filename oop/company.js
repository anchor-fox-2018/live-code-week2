class Company {
  constructor() {
    this._companyName = 'Hactiv8';
    this._limit = 10;
    this._loggedInUser = [] || NULL;
    this._people = [];
  }

  addPeople(user) {
    this._people.push(user);
  }

  login(user) {
    let indexLogin;
    for (var i = 0; i < this._people.length; i++) {
       if (this._people[i]['_name'] === user) {
         indexLogin = i;
       }
    }
    if (user === this._people[indexLogin]['_name']) {
      this._loggedInUser.push(user);
      console.log(`Welcome, ${user}`);
    } else {
      console.log(`You're not a member of Hacktiv8!`);
    }
  }

  showSalaries() {
    if (String(this._loggedInUser) === this._people[0]['_name']) {
      for (var i = 0; i < this._people.length - 1; i++) {
        console.log(`Name: ${this._people[i]['_name']}, Salary: ${this._people[i]['_salary']}`);
      }
    } else {
      console.log(`You don't have permission to access this feature!`);
    }
  }

  mySalary() {
    let indexLogin;
    for (var i = 0; i < this._people.length; i++) {
       if (this._loggedInUser[0] === this._people[i]['_name']) {
         indexLogin = i;
       }
    }
    if (indexLogin !== undefined) {
      console.log(`Your salary is ${this._people[indexLogin]['_salary']}`);
    } else {
      console.log(`You don\'t have a salary yet`);
    }
  }

  addNewPeople(user) {
    if (String(this._loggedInUser) === this._people[0]['_name'] && this._people.length < this._limit) {
      this._people.push(user);
    } else {
      console.log(`You don\'t have the right to add new user`);
    }
  }

  showPeople() {
    let objOfPeople = {
      Manager: [],
      Instructor: [],
      Student: []
    };

    objOfPeople['Manager'].push(this._people[0]);
    objOfPeople['Instructor'].push(this._people[1]);
    objOfPeople['Instructor'].push(this._people[2]);
    objOfPeople['Student'].push(this._people[3]);
    objOfPeople['Student'].push(this._people[4]);
    console.log(objOfPeople);
  }

} //end class company

module.exports = Company
