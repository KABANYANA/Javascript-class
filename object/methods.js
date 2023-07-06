//wa method is an object whose value is a function

let student ={
    name:"Joyeuse",
    age: 21,
    
    introduce:function(){
        console.log("hello")
        console.log(`hello my name is ${this.name}`)

    }
}
student.introduce()

student.hobby=()=>{
    console.log(`${this.name}I love swimming`)
}
console.log({student})
student.hobby()