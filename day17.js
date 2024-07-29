const { head } = require("lodash")

//Linked List 
class node{
    constructor(val){
        this.value=val
        this.next=null   
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
    }
    insert=(val)=>{
        let newNode= new node(val)
        if(this.head==null)
            this.head=this.tail=newNode
        else{
            this.tail.next=newNode
            this.tail=newNode
        }
    }
    delete=()=>{
        
        if(this.head==null)
            console.log("List is empty")
        else{
            console.log(this.head.value," has been removed")
            this.head=this.head.next
        }
    }
    display=()=>{
        
        if(this.head==null)
            console.log("List is empty")
        else{
            let curr=this.head
            while(curr!=null){
                console.log(curr.value)
                curr=curr.next
            }
        }
    }
    
}

let ll = new LinkedList()

ll.insert(10)
ll.insert(20)
ll.insert(30)
ll.display()
ll.delete()
ll.delete()
ll.display()


//Stack
class stack{
    constructor(){
        this.arr=[]
        this.top=-1
    }
    push=(val)=>{
        this.arr.push(val)
        this.top++
    }
    pop=()=>{
        if(this.top==-1)
            console.log("stack is empty")
        else{
            console.log(this.arr[this.top--]," has been popped")
        }
    }
    peek=()=>{
        if(this.top==-1)
            console.log("stack is empty")
        else{
            console.log(this.arr[this.top])
        }
    }
}

let st = new stack()
st.push(10)
st.push(20)
st.push(30)
st.peek()
st.pop()
st.peek()
st.pop()
st.peek()

//Queue

class queue{
    constructor(){
        this.arr=[]
    }
    enqueue=(val)=>{
        this.arr.push(val)
    }
    deque=()=>{
        if(this.arr.length<1)
            console.log("Queue is empty")
        else{
            console.log(this.arr[0]," has been removed")
            this.arr.shift()
        }
    }
    front=()=>{
        if(this.top==-1)
            console.log("stack is empty")
        else{
            console.log(this.arr[0])
        }
    }
}

let q = new queue()
q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.front()
q.deque()
q.front()
q.deque()
q.front()