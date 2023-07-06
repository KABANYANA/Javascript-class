let success= true
let promise = new Promise((resolve,reject)=>{
    if (!success){
        setTimeout(()=>{resolve("I SUCCEEDED")},5000)
    
    }
    else{
        setTimeout(()=>{reject("I AM STILL WAITING FOR A JOB")},5000)
        
    }
})
// .then(()=>{console.log("I WILL WORK HARD")})
// .catch(()=>{console.log("I WILL UPSKILL")})
// .finally(()=>{console.log("I AM WORTHY")})

const student= async()=>{
    let result= await promise
    console.log({result})
}
student()
