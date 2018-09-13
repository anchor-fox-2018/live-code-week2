

class Hacktiv8 {
    constructor(obj){
        this._id = obj.id
        this._name = obj.name
        this._age = obj.age
        this._address = obj.address
        this._gender = obj.gender
        this._students = []
        this._managers = []
        this._instructor = []
    }

    get students(){
        return this._students
    }

    set students(student){
        this._students.push(student)
    }

    get managers(){
        return this._managers
    }

    set managers(manager){
        this._managers.push(manager)
    }

    addStudent(student){
        let abduh = new Student;
        this.phase = student.phase;
    }
}

class Manager extends Hacktiv8{
    constructor(obj){
        super({
            id: obj.id,
            name: obj.name,
            age: obj.age,
            address: obj.address,
            gender: obj.gender
        })
        this._salary = salary
    }
}

class Instructor{
    constructor(){
    }
}

class Student extends Hacktiv8 {
    constructor(obj){
        super({
            id : obj.id, 
            name: obj.name,
            age: obj.age,
            address: obj.address,
            gender: obj.gender
        })
        this._phase = obj.phase
    }
}

// var abduh = new Student({id: 1, name: 'Abduh', age: 25, address: 'Bandung', gender: 'male', phase:'anchorFox'})
var abduh = new Student({id: 1, name: 'Abduh', age: 25, address: 'Bandung', gender: 'male', phase : 'anchorFox'})
console.log(abduh)
// var hacktiv = new Hacktiv8(abduh)
// console.log(hacktiv)

// var abduhStudents =  new Student({id: 1, name: 'Abduh', age: 25, address: 'Bandung', gender: 'male', phase: 'anchorFox'})
// console.log(abduhStudent)
// var abduhStudent = new Student()