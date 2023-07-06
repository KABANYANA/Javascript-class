let num = [3,5,10,30,8,6]

for(let element of num){
    console.log({element})
    // console.log(num.indexOf(element))
}
function strings(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
let arr=["maureen","Joy"]
strings(arr)


function multiplied(bby){
    bby.forEach(function(i){
        console.log(i*2)
        
    });
}
let bby=[2,3,4,5]
multiplied(bby)
// 
// 

function jump(numbers){
    for(let i=0;i<numbers.length;i++){
        if(i<4){
            numbers[i]*=8
        }
        else if(i>=numbers.length-2){
            numbers[i]+=5
        }
        }
        console.log(numbers)
    }
    let numbers=[12,23,45,67,87,45,83,45,67,83]
    jump(numbers)
// 
// 
// 
    function breaking(arrNum){
        let j=0
        while(j<arrNum.length){
            if(j===4){
                break
            }
            console.log(arrNum[j])
            j++
        }
    }
    let arrNum = [1,2,3,4,5,6,7,8,9];
    breaking(arrNum)

    // Write a function that takes in a an array of strings and use 
    // a continue statement when the item is at the second index
    // let fruits= ['apple','plum','banana','strawberries','kiwi']
function continuing(fruits){
    for(let i=0;i<fruits.length;i++){
        if(i===1){
            continue
        }
        console.log(fruits[i]) 
    }
    
}
let fruits= ['apple','plum','banana','strawberries','kiwi']
continuing(fruits)