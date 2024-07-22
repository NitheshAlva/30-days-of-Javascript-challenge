//Basic event handling
let btn=document.querySelector("button")
btn.addEventListener('click',()=>{
    btn.innerText="Clicked"
})

let imgContainer=document.querySelector("#toggImg")
imgContainer.addEventListener('dblclick',()=>{
    imgContainer.firstElementChild.classList.toggle("hidden")
})

//Mouse Events
function rand(){
    return Math.floor(Math.random()*256)
}

let colorDiv=document.querySelector("#colorDiv")
colorDiv.addEventListener('mousemove',()=>{
    colorDiv.style.backgroundColor=`rgb(${rand()},${rand()},${rand()})`
})

colorDiv.addEventListener('mouseout',()=>{
    colorDiv.style.backgroundColor="black"
})

//Keyboard Event
let inp=document.querySelector("input")
let textfill=document.querySelector("#textfill")
inp.addEventListener('keydown',(e)=>{
    console.log(e.key)
})

inp.addEventListener('keyup',(e)=>{
    textfill.textContent+=e.key
})

//Form Event
let fn= document.querySelector("#first-name")
let ln= document.querySelector("#last-name")
let email= document.querySelector("#email")
let form=document.querySelector("form")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log(`First Name: ${fn.value}\nLast Name: ${ln.value}\nEmail: ${email.value}\n`)
    fn.value=ln.value=email.value=""
})

let dp=document.querySelector("#dropdown")
let selected=document.querySelector("#selected")
dp.addEventListener('change',()=>{
    selected.textContent=`Selected Item: ${dp.options[dp.selectedIndex].textContent}`
})


//Event Delegation
let list=document.querySelector(".list")
list.addEventListener('click',(e)=>{
    if(e.target.tagName=='LI')
    console.log(e.target.textContent)
})

let counter=1
let addli=document.querySelector("#addli")
addli.addEventListener('click',()=>{
    let li=document.createElement('li')
    li.textContent="Item-"+counter++
    list.appendChild(li)
})