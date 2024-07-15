//Number check
let num=74
if(num>0)
    console.log("Positive")
else if(num<0)
    console.log("Negative")
else
    console.log("Zero")


//Voting Eligibility
let age=14
if(age>=18)
    console.log("You can vote")
else
    console.log("You cannot vote")


//Largest of Three
let x=10,y=3,z=29
if(x>y){
    if(x>z)
        console.log(x)
    else
        console.log(z)
}
else{
    if(y>z){
        console.log(y)
    }
    else
        console.log(z)
}


//Day of the week
let day=4
switch(day){
    case 1: console.log("Sunday")
            break
    case 2: console.log("Monday")
            break
    case 3: console.log("Tuesday")
            break
    case 4: console.log("Wednesday")
            break
    case 5: console.log("Thursday")
            break
    case 6: console.log("Friday")
            break
    case 7: console.log("Saturday")
            break
    default: console.log("Invalid Entry")
}


//Grades
let marks = 56;
let grade;

switch (true) {
    case marks > 80:
        grade = "A";
        break;
    case marks > 60:
        grade = "B";
        break;
    case marks > 40:
        grade = "C";
        break;
    case marks > 30:
        grade = "D";
        break;
    default:
        grade = "Fail";
}
console.log(grade);


//Leap year check
let year=7480

if(year%4==0&&(year%100!=0||year%400==0))
    console.log("It's a Leap year")
else
    console.log("Not a Leap year")