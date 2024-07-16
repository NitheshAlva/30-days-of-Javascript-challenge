//Number printing
for(let i=1;i<=10;i++)
    console.log(i)

//Multiplication table
let x=5
for(let i=1;i<=10;i++)
    console.log(x+"x"+i+"="+x*i)


//Pattern printing
let n=6
for(let i=0;i<n;i++){
    for(let j=0;j<=i;j++)
        process.stdout.write("* ")
    console.log(" ")
}

//Break and Continue
let y=1
while(y<10){
    if(y===5){
        y+=2
        continue
    }
    if(y===8)
        break
    y++
}

//Factorial
let fact=1,m=10
while(--m){
    fact*=m+1;
}
console.log(fact)