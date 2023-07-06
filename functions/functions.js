function add(a,b){
    console.log(a+b)
}
add(10,15)

function multiply(a,b){
return a*b
}
console.log(multiply(3,7))

function greet(){
    let hello ="hi";
    function talk(){
        let c = "hello there"
        console.log(`${hello} ${c}`);
    }
    talk();
    
}
greet()