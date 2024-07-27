//understanding Closures


let outer=()=>{
    let name="John"
    let inner=()=>{
        console.log(name)
    }
    return inner
}

let myFunc=outer()
myFunc()


let counter=()=>{
    let count=0;
    return {
        increment: (x)=>{
            count+=x
        },
        decrement: (x)=>{
            count-=x
        },
        getCount: ()=>{
            console.log(count)
        }
    }
}

let countObj=counter()

countObj.increment(100)
countObj.getCount()
countObj.decrement(43)
countObj.getCount()


//Practical Closures

let uniqueID=()=>{
    let id=1
    return ()=>{
        return id++
    }
}

let genID=uniqueID()
console.log(genID())
console.log(genID())
console.log(genID())


let getGreet=(argname)=>{
    let name=argname
    return ()=>{
        console.log("Hello  "+name)
    }
}

let greet=getGreet("John Snow")
greet()


//Closures in loops
let arr=[]
for(let i=0;i<10;i++){
    arr.push(((index)=>{
        return ()=>{
            console.log(index)
        }
    })(i))
}

arr[9]()
arr[4]()

//Memorize
let memorize=(func)=>{
    const cache = new Map();

    return function(...args){
        const key = JSON.stringify(args)

        if(cache.has(key)){
            console.log("returning from cache: ",key)
            return cache.get(key)
        }

        const result=func(...args)
        cache.set(key,result)
        console.log("Computing results for key: ",key)
        return result
    }

}

//demonstration

let factorial=(n)=>{
    if(n<=1)
        return 1;
    return n*factorial(n-1)
}

let memorizeFactorial=memorize(factorial)

console.log(memorizeFactorial(5))
console.log(memorizeFactorial(6))
console.log(memorizeFactorial(6))
console.log(memorizeFactorial(5))