//creating object


let person ={
    name:"Joyeuse",
    age: 21,
    height:"5ft3INch",
    
    friend:{
        name:"faith",
        age: 21,
    
    }
}
console.log(person.height)

let student=new Object();
student.name="Mary"// adding a property 
student.age=23
console.log(person["name"])
console.log(person.friend.name)
console.log(person.friend)
console.log({student});

//changing person's age
person.age=30
console.log(person.age);
//add a new property

person.school="Akirachix"
console.log(person.school)



//creating the same person
let person2=Object.assign(person)
console.log({person2})

let keys= Object.keys(person)
console.log({keys})
let values= Object.values(person)
console.log({values})