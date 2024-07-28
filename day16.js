//Basic Recursion
let factorial=(n)=>{
    if(n<=1)
        return 1;
    return n*factorial(n-1)
}
console.log(factorial(10))

let fibonacci=(n)=>{
    if(n<=2)
        return n-1;
    return fibonacci(n-1)+fibonacci(n-2)
}
console.log(fibonacci(10))

//Recursion with Arrays
let arr=[10,27,27,7,40,324,27,588],n=8

let sum=(arr,n)=>{
    if(n>0){
        return arr[n-1]+sum(arr,n-1)
    }
    return 0;
}

let max=(arr,n)=>{
    if(n>0){
        let x=max(arr,n-1)
        return (arr[n-1]>=x)?arr[n-1]:x;
    }
    return -1;
}

console.log(sum(arr,n))
console.log(max(arr,n))


//String manipulation with recursion

let reverse=(str)=>{
    if(str.length<=1){
        return str
    }
    return reverse(str.slice(1))+str[0]
}
console.log(reverse("abcdefg"))

let checkPalindrome=(str)=>{
    if(str.length<=1)
        return true
    if(str[0]!=str[str.length-1])
        return false
    return checkPalindrome(str.slice(1,-1))
}

console.log(checkPalindrome("malayalam"))
console.log(checkPalindrome("abcdefg"))

//Recursive Search

let binarySearch=(arr,beg,end,target)=>{
    if(beg<=end){
        let mid=(beg+mid)/2
        if(arr[mid]==target)
            return mid
        else if(arr[mid]>target)
            return binarySearch(arr,beg,mid-1,target)
        else
            return binarySearch(arr,mid+1,end,target)
    }
    else
        return -1
}

