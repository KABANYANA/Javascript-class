let success= true
let promise = new Promise((resolve,reject)=>{
    if (success){
    resolve("I SUCCEEDED")
    }
    else{
        reject("I AM STILL WAITING FOR A JOB")
    }
}).then(()=>{console.log("I WILL WORK HARD")})
.catch(()=>{console.log("I WILL UPSKILL")})
.finally(()=>{console.log("I AM WORTHY")})

console.log({promise})
