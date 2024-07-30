//Sorting Algorithms

//bubble sort
let bubbleSort=(a)=>{
    let n=a.length
    for(let i=0;i<n;i++){
        let flag=1
        for(let j=0;j<n-i-1;j++){
            if(a[j]>a[j+1]){
                let t=a[j]
                a[j]=a[j+1]
                a[j+1]=t
                flag=0
            }
        }
        if(flag==1)
            return 
    }
}

//Selection Sort
let SelectionSort=(a)=>{
    let n=a.length
    for(let i=0;i<n;i++){
        let minIndex=i
        for(let j=i+1;j<n;j++){
            if(a[j]<a[minIndex]){
                minIndex=j
            }
        }
       let t=a[minIndex] 
       a[minIndex]=a[i]
       a[i]=t
    }
}

//Quick Sort
let partition=(arr,low,high)=>{
    let i=low,j=high,pivot=arr[low]
    while(i<j){
        while(i<=high&&arr[i]<=pivot){
            i++
        }
        while(j>=low&&arr[j]>pivot){
            j--
        }
        if(i<j){
            let t=arr[j] 
            arr[j]=arr[i]
            arr[i]=t
        }
    }
    let t=arr[j] 
    arr[j]=arr[low]
    arr[low]=t
    return j
}

let quickSort=(arr,low,high)=>{
    if(low<high){
        let pivIndex=partition(arr,low,high)
        quickSort(arr,low,pivIndex-1)
        quickSort(arr,pivIndex+1,high)
    }
}


let arr

arr=[4, 6, 2, 5, 7, 9, 1, 3]
console.log(arr)
bubbleSort(arr)
console.log(arr)

arr=[4, 6, 2, 5, 7, 9, 1, 3]
console.log(arr)
SelectionSort(arr)
console.log(arr)

arr=[4, 6, 2, 5, 7, 9, 1, 3]
console.log(arr)
quickSort(arr,0,arr.length-1)
console.log(arr)

