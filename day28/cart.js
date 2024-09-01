const itemContainer= document.querySelector("#container")
const checkoutForm=document.querySelector("#checkout-form")
const email=document.querySelector("#email")
const address=document.querySelector("#address")
const orderSummary=document.querySelector("#order-summary")
const orderEmail=document.querySelector("#order-email")
const orderAddress=document.querySelector("#order-address")
const orderTotal=document.querySelector("#order-total")
const emptyCart=document.querySelector("#empty-message")

function loadItems(){
    itemContainer.innerHTML=""
    let x = JSON.parse(localStorage.getItem('cart')) || [];
    if(x.length==0)
        emptyCart.classList.remove("hidden")
    else
        emptyCart.classList.add("hidden")

    for(let value of x){
        let div =document.createElement('div');
        div.className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center justify-between"
        div.innerHTML=`<div class="flex-1">
                <h3 class="text-xl font-semibold">${value.name}</h3>
                <p class="text-gray-600">Price: ${value.price}</p>
                <div class="mt-2 flex items-center">
                    <button class="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-200" onclick="changeQuantity('${value.name}',-1)">-</button>
                    <input type="text" value="${value.quantity}" readonly class="mx-2 w-12 text-center border border-gray-300 rounded-lg">
                    <button class="px-3 py-1 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-200" onclick="changeQuantity('${value.name}',1)">+</button>
                </div>
            </div>
            <button class="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600" onclick="removeItem('${value.name}')">Remove</button>`
        itemContainer.appendChild(div)
    }
    checkoutForm.classList.remove("hidden")
    orderSummary.classList.add("hidden")
}

const changeQuantity=(name,count)=>{
    let x = JSON.parse(localStorage.getItem('cart')) || [];
    let index= x.findIndex(item=> item.name===name)
    x[index].quantity+=count;
    if(x[index].quantity==0)
        removeItem(name)
    else{
        localStorage.setItem('cart',JSON.stringify(x))
        loadItems()
    }
}

const removeItem=(name)=>{
    let x = JSON.parse(localStorage.getItem('cart')) || [];
    let index = x.findIndex(item => item.name === name);    x.splice(index,1)
    localStorage.setItem('cart',JSON.stringify(x))
    loadItems()
}

document.addEventListener('DOMContentLoaded', loadItems);

checkoutForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    let x = JSON.parse(localStorage.getItem('cart')) || [];
    if(x.length!=0){
        orderEmail.innerHTML=email.value
        orderAddress.innerHTML=address.value
        let total=0
        for(it of x){
            total=total+it.price*it.quantity;
        }
        orderTotal.innerHTML=total.toFixed(2)
        checkoutForm.classList.add("hidden")
        orderSummary.classList.remove("hidden")
    }
    email.value=""
    address.value=""
})