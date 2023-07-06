let person ={
    name:"Joyeuse",
    age: 21,
    nationality:"Rwandan",
    id:001,
    marks:{
        frontend:70,
        backend:90
    
    },
    speak:function(){
        console.log("hello")
    }
}
console.log(person.marks)
// console.log(person.speak())
// console.log(person.id,person.age)
// console.log(person.marks)


// Write a JavaScript program to delete the rollno property from the following object. Also
//  print the object before or after deleting the property

let student ={
    name :"David",
    sclass:"VI",
    rollno:12,
   
}
console.log(student)
delete student.rollno;
console.log(student)

// Create an object in JavaScript,access it's
//  properties,add new properties and delete properties

let worker={
    name:"Kevine",
    e_location:"Kigali",
    e_post:"Devop"
    
}
console.log(worker)
worker.nationality ="Rwandan"
console.log(worker)
delete worker.e_post
console.log(worker)

// Write a JavaScript program to get the length of a JavaScript object.
// Write a JavaScript program to display the reading status (i.e. display book name, 
//     author name and reading status) of the following books

var Library=[
    {
        author:'bill gate',
        title:'The road ahead',
        readingStatus:true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }]

    console.log(Library.length)
    console.lo



