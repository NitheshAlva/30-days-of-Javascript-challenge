//Understanding LocalStorage
let str="Hello world!!"
localStorage.setItem("strkey",str)
console.log(localStorage.getItem("strkey"))

let obj={
    name:"John Doe",
    age:33
}
localStorage.setItem("person",JSON.stringify(obj))

console.log(JSON.parse(localStorage.getItem("person")))
localStorage.removeItem("person")
console.log(JSON.parse(localStorage.getItem("person")))

//Using LocalStorage

let form= document.querySelector("form")
let fni=document.querySelector("#first-name")
let lni=document.querySelector("#last-name")
let ei=document.querySelector("#emaili")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    localStorage.setItem("first-name",fni.value)
    localStorage.setItem("last-name",lni.value)
    localStorage.setItem("email",ei.value)
    location.reload();
})


let fno=document.querySelector("#fn")
let lno=document.querySelector("#ln")
let eo=document.querySelector("#email")

document.body.onload=(e)=>{
    fno.innerText=localStorage.getItem("first-name")
    lno.innerText=localStorage.getItem("last-name")
    eo.innerText=localStorage.getItem("email")
}

let clearSessionStorage=()=>{
    sessionStorage.clear()
}

let clrbt=document.querySelector("#clear")

clrbt.addEventListener('click',(e)=>{
    clearSessionStorage();
})
