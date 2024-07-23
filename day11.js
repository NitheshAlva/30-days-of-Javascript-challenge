//Understanding Promises

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved after 2 secs")
    },2000)
}).then((msg)=>{
    console.log(msg)
})

new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject("Alignment Problem!!")
    }, 2000);
})
.catch((msg)=>{
    console.error(msg)
})


//Chaining Promises

new Promise((resolve,reject)=>{
    resolve(1)
})
.then((value)=>{
    return value+773
})
.then((val)=>{
    return val+54
})
.then((v)=>{
    console.log(v)
});


//Using Async/Await

(async ()=>{
        await new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("hello 5 secs")
            }, 5000);
        })
        .then((msg)=>{
            console.log(msg)
        })
        new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve("hello 10 secs")
            }, 5000);
        })
        .then((msg)=>{
            console.log(msg)
        })
})();

(async()=>{
    try{
        await new Promise((resolve,reject)=>{
            setTimeout(() => {
                reject(100)
            }, 1000);
        }) 
    }
    catch(err){
        console.error(err)
    }
})();


//Fetching data from an API 

let jokeFetch=fetch("https://official-joke-api.appspot.com/random_joke")
jokeFetch.then((Response)=>{
    if(!Response.ok)
        console.log("ERROR");
    else{
        return Response.json();
    }
})
.then((data)=>{
    console.log(data.setup)
    setTimeout(()=>{
        console.log(data.punchline)
    },2000)  
});


(async()=>{
    let resp = await fetch("https://official-joke-api.appspot.com/random_joke")
    let data = await resp.json()
    console.log(data)
    
})();


//Promise.all() / Promise.race()

let p1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"one")
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"two")
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,500,"three")
})

Promise.all([p1,p2,p3]).then(res=>console.log(res))
Promise.race([p1,p2,p3]).then(res=>console.log(res))