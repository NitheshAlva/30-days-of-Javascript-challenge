//Understanding Session Storage

let str="Hello world!!"
sessionStorage.setItem("strkey",str)
console.log(sessionStorage.getItem("strkey"))

let obj={
    name:"John Doe",
    age:33
}
sessionStorage.setItem("person",JSON.stringify(obj))

console.log(JSON.parse(sessionStorage.getItem("person")))
sessionStorage.removeItem("person")
console.log(JSON.parse(sessionStorage.getItem("person")))

//Using LocalStorage

let form= document.querySelector("form")
let fni=document.querySelector("#first-name")
let lni=document.querySelector("#last-name")
let ei=document.querySelector("#emaili")

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    sessionStorage.setItem("first-name",fni.value)
    sessionStorage.setItem("last-name",lni.value)
    sessionStorage.setItem("email",ei.value)
    location.reload();
})


let fno=document.querySelector("#fn")
let lno=document.querySelector("#ln")
let eo=document.querySelector("#email")

document.body.onload=(e)=>{
    fno.innerText=sessionStorage.getItem("first-name")
    lno.innerText=sessionStorage.getItem("last-name")
    eo.innerText=sessionStorage.getItem("email")
}


let clearSessionStorage=()=>{
    sessionStorage.clear()
}

let clrbt=document.querySelector("#clear")

clrbt.addEventListener('click',(e)=>{
    clearSessionStorage();
})