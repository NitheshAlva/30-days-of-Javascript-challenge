//Array creation and access
let arr=[1,2,3,4,5]
console.log(arr)
console.log("first: "+arr[0]+"\nLast:"+arr[arr.length-1])

//Array Methods
arr.push(6)
console.log(arr)
arr.pop()
console.log(arr)
arr.shift()
console.log(arr)
arr.unshift(1)
console.log(arr)

//Array Methods 2
let arr2= arr.map((x)=>{
    return 2*x
})
console.log(arr2)

let odds= arr.filter((x)=>{
    return x%2
})
console.log(odds)

let sum = arr.reduce((acc,x)=>{
    return acc+=x;
})
console.log(sum)

//Array Iteration

for(let i=0;i<arr2.length;i++)
    console.log(arr2[i])

arr.forEach((x)=>{
    console.log(x)
})

for( x of arr)
    console.log(x)

//Multi Dimenntional matrix 
let matrix =[[1,3,5],[2,4,6],[10,20,30]]

for(let i=0;i<matrix.length;i++)
    for(let j=0;j<matrix[0].length;j++)
        console.log(matrix[i][j])

