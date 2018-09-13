class Hacktiv8{
    constructor(id,name,age,adress,gender){
        this._id = id;
        this._name = name;
        this._age = age;
        this._adress = adress;
        this._gender = gender;

    }
    
}

class Manager extends Hacktiv8{
    constructor(){
        super()
        this._salary = 100;
    }
    great(){
        return `\`\`\`\n"Halo! Saya salah satu member Hacktiv8!"\n"Saya adalah seorang manager!"\n\`\`\``
    }
}
class Instructor extends Manager{
    great(){
        return `\`\`\`\n"Halo! Saya salah satu member Hacktiv8!"\n"Saya adalah seorang instruktur!"\n\`\`\``
    }
}
class Student extends Hacktiv8{
    constructor(phase){
        super(phase)
        this._phase = phase
    }
    great(){
        return `\`\`\`\n"Halo! Saya salah satu member Hacktiv8!"\n"Saya sedang belajar programming disini!"\n\`\`\``
    }
}
class Company{
    constructor(companyName,limit,loggedInUser){
        this._companyName = companyName;
        this._limit = limit;
        this._loggedInUser =loggedInUser;
        this._people = this.orang();
        
    }
    orang(){
        let hasil = [];
        
        let instructor = new Instructor();
        let student = new Student()
        for(let i = 0;i < data.length;i++){
            if(data[i][0] === "Manager"){
                let manager = new Manager(data[i][1],data[i][2],data[i][3],data[i][4],data[i][5],data[i][6]);
                hasil.push(manager)
            }
        }
        return hasil
    }
}

const data = [["Manager",1,'John Kokasih',15,"Mars","Male",100],["Instructor",2,'Marry Kokasih',16,"Pluto","Female",200],["Instructor",3,'Kirry Kokasih',17,"Saturnus","Male",200],["Student",4,'Kurry Kokasih',27,"Pluto","Male",1]]
let company = new Company('Hacktiv8',10,'NULL')
console.log(company)
let manager = new Manager(1,'yaya',10)
console.log(manager)
let instructor = new Instructor()
console.log(instructor.great())
let student = new Student()
console.log(student.great())