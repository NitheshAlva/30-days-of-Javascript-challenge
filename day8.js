//Template Literals
let name ="ABC",age="123"
let str=`${name} is ${age} year old`
console.log(str)

//Destructuring and Rest
let arr=[1,2,3,4,5],a,b,rest,c,d;
[a,b]=arr
console.log(a,b);

[a,b,...rest]=arr
console.log(rest);

[a, ,b,...rest]=arr
console.log(a,b,rest);

[a,b,...[c,d,...rest]]=arr;
console.log(a,b,c,d,rest);

let book={
    author: "ABC",
    title: "XYZ"
}

let {author,title,price="free"}=book
console.log(author,title,price)



//Spread 
let arr2=[0,...arr,6,7]
console.log(arr2)


let obj={...arr}
console.log(obj)

//Object literals
let brand="X"
let model="Y"
let colour="Z"
let horn=()=>{
    console.log("peem peem..");
}

let car={brand,model,colour,horn}

console.log(car.model)
car.horn()