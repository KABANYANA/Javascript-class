function Person(name,age,height){
    this.fname=name
    this.personAge=age
    this.personHeight=height
};
let person=new Person('agnes',23,'4ft')
console.log({person})
let person2=new Person('Ann',20,'6ft')
//prototype: is an empty object

Person.prototype.weight=50//default value of weight
console.log({person});
console.log(person.weight)
person2.weight=60
console.log(person2.weight)