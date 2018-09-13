

class Hacktiv8 {
    constructor(obj){
        this._id = obj.id
        this._name = obj.name
        this._age = obj.age
        this._address = obj.address
        this._gender = obj.gender
    }
}

class Manager extends Hacktiv8{
    constructor(obj){
        // super()
        this._salary = obj.salary
    }
}

class Instructor extends Hacktiv8{
    constructor(obj){
        // super()
    }
}

class Student extends Hacktiv8{
    constructor(obj){
        // super()
        this._phase = obj.phase
    }
}

// var abduh = new Student({id: 1, name: 'Abduh', age: 25, address: 'Bandung', gender: 'male', phase:'anchorFox'})
var abduh = new Hacktiv8({id: 1, name: 'Abduh', age: 25, address: 'Bandung', gender: 'male'})
console.log(abduh)
// var abduhStudents =  new Student(abduh)
// console.log(abduhStudent)
// var abduhStudent = new Student()