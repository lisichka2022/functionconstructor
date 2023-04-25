'use strict'
function Student(name,surname,yearOfBirth,lessonsCount=10){
    this.lessonsCount=lessonsCount;
    this.name=name;
    this.surname=surname;
    this.yearOfBirth=yearOfBirth;
    this.attendance=new Array(this.lessonsCount);
    this.grades=new Array(this.lessonsCount);
    this.lessonNum=0;
    this.statistic={
        avrgMark:0,
        avrgAttendance:0
    };
}
Student.prototype.nextLesson=function(){
    ++this.lessonNum
    this.calcAvrgMark();
    this.calcAvrgAttendance();

}
Student.prototype.getAge=function(){
    const nowadays=new Date();
    const year=nowadays.getFullYear();
    return year-this.yearOfBirth;

}
Student.prototype.setAttendance=function(lessonAttended=false){
    if(this.lessonNum===this.lessonsCount){
        throw new Error('Lessons limit exceeded')
    }
    this.attendance[this.lessonNum]=lessonAttended;
    
}
Student.prototype.present=function(){
this.setAttendance(true)
}
Student.prototype.absent=function(){
    this.setAttendance(false)
    
}
Student.prototype.mark=function(mark=0){
if(typeof mark !=='number'|| isNaN(mark)) return
if(mark < 0 && mark > 10) return
if(!this.attendance[this.lessonNum])return;

this.grades[this.lessonNum]=mark;
}
Student.prototype.calcAvrgAttendance=function(){
    this.statistic.avrgAttendance=(()=> {
    const visitedLessons= this.attendance.filter(item=>item).length;
    return visitedLessons/this.lessonNum;
    })()
}
Student.prototype.calcAvrgMark=function(){
    this.statistic.avrgMark=(()=> {
    const gradesData = this.grades.reduce((acc,item)=>{
        if(typeof item!=='number') return acc;
        acc.avrgMark += item;
        acc.lessonsWithMark +=1
    
        return acc;
    },{avrgMark:0, lessonsWithMark:0});
    return gradesData.avrgMark/gradesData.lessonsWithMark;

    }) ()

}
Student.prototype.summary=function(){
    return this.statistic;
}
const student= new Student('foo','bar',1997);

student.present()
student.mark(0)
student.nextLesson()

student.present()
student.nextLesson()

student.absent()
student.nextLesson()

student.present()
student.mark(10)
student.nextLesson()
console.log(student);