document.getElementsByClassName('container')
document.getElementById('container').style.color='red'
document.getElementById('container').style.backgroundColor='#e2e2e2'
document.getElementById('text').innerHTML='my name is Joy, je suis 20 ans'
let child =document.getElementById('container').childNodes
console.log({child})
let children =document.getElementById('container').children
console.log({children})

let p = document.createElement('p')
p.innerHTML='je suis joyeuse'
document.getElementById('container').appendChild(p)
p.setAttribute('class','paragraph')
p.setAttribute('id','paragraph')

let y = document.getElementById('paragraph').style.color='blue'
let button = document.getElementById('button')
button.addEventListener('click',function(){
    button.innerHTML='Clicked!!'
    button.style.backgroundColor='#abea15'
    button.style.padding='10px'
    button.style.borderRadius='5px'
    button.style.border='none'
})
