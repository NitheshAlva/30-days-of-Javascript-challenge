//square(Function declaration-hoisted)
console.log(square(6))
function square(n){
    return n*n
}

//concat string(Function expression-not hoisted)
// console.log(concat("Hello ","world"))concat not defined

let concat= function(s1,s2){
    return s1+s2
}
console.log(concat("Hello ","world"))


//Arrow function
let contains = (str,c)=>{
    for(i of str)
        if(i===c)
            return true
    return false
}

console.log(contains("hello",'l'))



//Default parameters
let multiply=(x,y=1)=>{
    console.log(x*y)
}

multiply(24)


//Higher order function

let sample=(y)=>{
    console.log(y)
}

let ho = (n,sample)=>{
    if(n==0)
        return
    sample(n)
    ho(n-1,sample)
}
ho(5,sample)


let ho2=(x,sq,sm)=>{
    let s=sq(x)
    sm(s)
}

ho2(10,square,sample)



