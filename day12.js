//Bsic Error handling with Try-Catch
try{
    console.log("executing...");
    throw("Error occured!")
}
catch(msg){
    console.error(msg)
}

let devide=(x,y)=>{
    try{
        if(y==0)
            throw("Cannot devide by Zero!");
        return x/y;
    }
    catch(msg){
        console.error(msg)
        return ""
    }
}
console.log(devide(20,10))
console.log(devide(20,0))

//Finnaly Block

try{
    console.log("This is try Block");
    throw("This is a error msg")
}
catch(msg){
    console.error(msg)
    console.log("This is a catch block")
}
finally{
    console.log("This is a finally block")
}

//Custom Error objects

class customError extends Error{
    constructor(msg){
        super(msg)
        this.name="custom error"
    }
}

function heyy(){
    throw(new customError("this is a error"))
}
try{
    heyy()
}
catch(e){
    console.log(e.name+": "+e.message)
}

function validate(data){
    if(data==""||data==undefined)
        throw new customError("Validation Failed!!")
    console.log(data)
}

try{
    validate("heyey")
    validate()
}
catch(err){
    console.log(err.name+": "+err.message)
}

//Error handling in promises
new Promise((resolve,reject)=>{
    if(Math.floor(Math.random()*2)==0)
        reject("Error: Cannot fullfill the promise")
    else    
        resolve("Promise resolved")
})
.then((data)=>{
    console.log(data)
})
.catch((msg)=>{
    console.error(msg)
});


(async()=>{
    try{
        await new Promise((resolve,reject)=>{
            if(Math.floor(Math.random()*2)==0){
                setTimeout(() => {
                    reject("Error: Cannot fullfill the promise")
                }, 2999);
            }
            else    
                resolve("Promise resolved")
        })
    }
    catch(msg){
        console.error(msg)
    }
})();


//Gracefull Error Handling in Fetch

fetch("invalidUrl")
.catch((err)=>{
    console.log(err.code,": ",err.message)
});


    (async()=>{
        try{
            let x=await fetch("hdskdkkd")
        }
        catch(err){
            console.log(err.message)
        }

    })();