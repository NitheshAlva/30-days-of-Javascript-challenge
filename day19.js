//Basic Regular Expressions

let str="java javaScript JavaScript javascript java script ello world"
console.log(str.match(/JavaScript/g))
console.log(str.match(/JavaScript/gi))

str="this is day 19 of 30 days of javascript"
console.log(str.match(/[1-8]/g))

//Charecter Classes and Quantifiers

str="java javaScript JavaScript javascript Java script Hello world"
console.log(str.match(/\b[A-Z][A-Za-z]*\b/g))

str="this is day 19 of 30 days of javascript 74449 3 3"
console.log(str.match(/\d+/g))

//Grouping and Capturing

str ="(123) 456-7890"
let result=str.match(/\((\d+)\) (\d+)-(\d+)/);
console.log(`US Phone Number: ${result[0]}\nArea Code: ${result[1]}\nCentral Office Code: ${result[2]}\nLine Number: ${result[3]}\n`)

let str1="nithesh.ai22@sahyadri.edu.in"
let str2="nitheshalva@gmail.com"

console.log(str1.replace(/(\S+)@(\w+)/,"Username: $1\nDomain Name: $2"))
console.log(str2.replace(/(\S+)@(\w+)/,"Username: $1\nDomain Name: $2"))


//Assertion and Boundaries
str ='hello hello world world'

console.log(str.match(/^hello/g))
console.log(str.match(/world$/g))

//Practical Application

let password1='Password1!'
let password2='password'
let password3='P@ssw0rd123'
let password4='Pass1&'

let verify=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[~!@#$%^&*()]).{8,}$/

console.log(verify.test(password1))
console.log(verify.test(password2))
console.log(verify.test(password3))
console.log(verify.test(password4))


let verifyURL=/^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/.*)?$/



const urls = [
    'http://www.example.com',
    'https://example.com',
    'www.example.com',
    'example.com',
    'example.com:8080/path/to/resource'
]

urls.forEach((url)=>{
    console.log(verifyURL.test(url))
})

