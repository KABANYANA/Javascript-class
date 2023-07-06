let num = [3,5,10,30,8,6]

for(let i=0;i<num.length; i++){
    console.log(i);
    console.log(num[i]+1);
}


// for(let i=0;i<num.length; i++){
//     // console.log("option1",num[i])
//    if(i===2){
//        break
      
//    }
//   console.log("option2",num[i])
// }


for(let i=0;i<num.length; i++){
    // console.log("option1",num[i])
   if(i===2){
      continue
       
   }
  console.log("continue",num[i])
}

