class Student{
function(firstname, lastname , rollnumber, Sex,Studentsage,dob){
    this.firstname=firstname;
    this.lastname=lastname;
    this.rollnumber=rollnumber;
    this.Sex=Sex;
    this.Studentsage=Studentsage;
    this.dob=new Date(dob);
    this.getFullName=function(){
        return `${this.firstname} ${this.lastname}`;
    }
    this.getBirthYear=function(){
        return this.dob.getFullYear();
    }
}
getFullName(){
    return `${this.firstname} ${this.lastname}`;
}

}

    Student.prototype.getStudentsage=function(minage){
        //let minage=20;
        const res=this.Studentsage>=minage? 'he is Eligible': 'he is not Eligible';
        return res;
         
        }
        
    Student.prototype.getFullName=function(){
        return `${this.firstname} ${this.lastname}`;
    }
let student1=new Student('arjun','kumar',102,'male',26,'4-3-2000');
let student2=new Student('ram','kumar',101,'male',23,'5-2-1990');
const{firstname,lastname}=student1;
console.log(student1.getFullName());
console.log(student2.getBirthYear());
console.log(student1.getStudentsage(20));

console.log(student1);

function Alien(aname,age)
{
    this.name=aname;
    this.age=age;

    this.work=function()
    {
        console.log("solving problems")
    }
}

let alien1=new Alien('alya','26');
console.log(alien1);

alien1.work();