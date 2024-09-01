const productContainer= document.querySelector("#product-container")
const cartCount = document.querySelector("#cart-count")
let data,count=0;

window.addEventListener('load',async ()=>{
    let response= await fetch("products.json")
    data = await response.json();
    console.log(data)

    data.forEach((ele,index) => {
        let div=document.createElement('div')
        div.className="bg-white p-4 rounded-lg shadow-lg"
        div.innerHTML=`<img src="${ele.imageUrl}" alt="Product Image" class="w-full h-48 object-cover rounded-t-lg">
                <div class="mt-4">
                    <h3 class="text-lg font-semibold">${ele.name}</h3>
                    <p class="text-gray-600 mt-1">$${ele.price}</p>
                    <p class="text-gray-500 mt-2">${ele.description}</p>
                    <button onclick="addCart(${index})" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add to Cart</button>
                </div>`
        productContainer.appendChild(div)
    });
})

const addCart=(index)=>{
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.name === data[index].name);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity++;
    } 
    else{
        cart.push({ "name":data[index].name, "price":data[index].price, "quantity": 1 });        
    }
    cartCount.innerHTML=cart.length
    console.log(cart)
    localStorage.setItem('cart', JSON.stringify(cart));
}

const navigateToCart=async()=>{
    window.location.href = "http://127.0.0.1:5500/30-days-of-Javascript-challenge/day28/cart.html";
}
