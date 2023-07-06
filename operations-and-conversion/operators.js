const num =10;
const num2 =30;


console.log(num+num2);
console.log(num-num2);
console.log(num*num2);
console.log(num/num2);
console.log(num%num2);

let a =4;
a++;
console.log(a);

a--;
console.log(a);



let num3 = 4;

console.log("the addition is:"+(num3+=1));//num3 = num3+1
console.log(num3-=1);
console.log(num3*=2);
console.log(num3%=3);
let num4 =5;
console.log(num>=num2);


let age=10;
let age2 ="10";

console.log("loosely equal",age == age2);
console.log("loosely not equal",age != age2);
console.log("strictly equal",age === age2);//checks the value and datatype
console.log("strictly not equal",age !== age2);

if(age == age2 && num>=num2){
    console.log("and", true);
}
else{
    console.log("and false", false);
}
let chilName;
if(!chilName){
    console.log("Hello");
}
else{
    console.log("what is your name");
}