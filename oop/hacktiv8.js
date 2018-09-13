

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

    greet(position){
        console.log(`Halo! Saya salah satu member Hacktiv8!`)
        if(position.salary !== undefined){
            console.log('Saya adalah seorang manager!')
        } else if(position.phase !== undefined){
            console.log('Saya sedang belajar programming di sini!')
        } else {
            console.log('Saya adalah seorang instruktur!')
        }
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
    get salary(){
        return this._salary
    }
}

class Instructor extends Hacktiv8{
    
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

    get phase(){
        return this._phase
    }
}

// var abduh = new Student({id: 1, name: 'Abduh', age: 25, address: 'Bandung', gender: 'male', phase:'anchorFox'})
var abduh = new Student({id: 1, name: 'Abduh', age: 25, address: 'Bandung', gender: 'male', phase : 'anchorFox'})
// var icha = new Manager({})
var hacktiv = new Hacktiv8(abduh)
var wika = new Instructor({id: 1, name: 'Wika', age: 25, address: 'Bekasi', gender: 'male'})
console.log(hacktiv);
console.log(wika);
console.log(abduh)
hacktiv.greet(abduh)
hacktiv.greet(wika)
// var hacktiv = new Hacktiv8(abduh)
// console.log(hacktiv)

// var abduhStudents =  new Student({id: 1, naSaya adalah seorang manager!me: 'Abduh', age: 25, address: 'Bandung', gender: 'male', phase: 'anchorFox'})
// console.log(abduhStudent)
// var abduhStudent = new Student()