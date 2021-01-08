function deleteProperty(student){
    delete student.rollno;
    return student;
}

var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 
};

console.log(student);
console.log(deleteProperty(student));