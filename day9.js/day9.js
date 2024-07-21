//Selecting and Manipulating Elements
document.getElementById("heading").textContent+="Manipulation"

document.getElementsByClassName("content")[0].style.backgroundColor="black"

//Creating and Appending Elmenents

let div=document.createElement('div')
div.textContent="This is appended to the body"
document.body.appendChild(div)

let li=document.createElement('li')
li.textContent="New Li"
document.querySelector('.list1').appendChild(li)

//Removing Elements

document.querySelector("#remove").remove()

document.querySelector(".list2").lastElementChild.remove()

//Modifying Attributes and Classes
document.querySelector("img").setAttribute('src','https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=400')

document.body.classList.add("flex")
document.body.classList.remove("flex")
document.body.classList.toggle("flex")


//Event Handling

let bt =document.querySelector("button")
let content =document.querySelector(".textarea")

bt.addEventListener('click',(e)=>{
    if(content.innerHTML=="")
        content.innerHTML="Clicked"
    else
        content.innerHTML=""
})

bt.addEventListener('mouseenter',(e)=>{
    e.target.classList.add("border")
})

bt.addEventListener('mouseleave',(e)=>{
    e.target.classList.remove("border")
})

