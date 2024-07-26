//Class Definition
//Getter and Setter
class person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet=()=>{
        console.log("hello from "+this.name)
    }
    changeAge(age){
        this.age=age
        console.log(this.age)
    }
    
    static greet=()=>{
        console.log("This a general hello")
    }
    getName(){
        return this.name
    }
    setName(name){
        this.name=name
    }
}

let John = new person("John Doe",44)
John.greet()
John.changeAge(20)
person.greet()
John.setName("aaa")


//Class inheritance 
//Static Methods  and Properties
class student extends person{
    static count=0
    constructor(name,age,studentID){
        super(name,age)
        this.studentID=studentID
        student.count++
        console.log("This is student number: ",student.count)
    }
    
    getID=()=>{
        return this.studentID
    }
    greet=()=>{
        console.log("hello from student "+this.name)
    }
}

let st1=new student("Kendel Roy",68,63)
console.log(st1.getID())
st1.greet()


//Private Fields
 class Account{
    #balance
    constructor(balance){
        this.#balance=balance
    }
    withdraw(amount){
        this.#balance-=amount
        console.log(`${amount} has been debited\n${this.#balance} is the updated balance`)
        
    }
    deposit(amount){
        this.#balance+=amount
        console.log(`${amount} has been Credited\n${this.#balance} is the updated balance`)

    }
 }

 let acc1= new Account(10000)
 acc1.deposit(1000)
 acc1.withdraw(1500)
//  console.log(acc1.#balance) not accesiblle outside the class