//for loop
for(let i=0;i<5;i++){
    console.log("For Loop Iteration:"+i);
    i++;
}
//while loop 
let j=0;
while(j<5){
    console.log("While Loop Iteration:"+ j);
    j++;
}
//do while loop
let k=0;
do {
    console.log("Do While Loop Iteration:" + k);
    k++;
} while(k<5);
//for...of loop
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
    console.log("For...of Loop Value: " + value);
}
//for...in loop
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log("For...in Loop Key: " + key + ", Value: " + obj[key]);
}
//forEach loop
arr.forEach((value, index) => {
    console.log("ForEach Loop Index: " + index + ", Value: " + value);
});
//map loop
let day="Monday";
switch(day){
    case "Monday":
        console.log("It's Monday");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    case "Wednesday":
        console.log("It's Wednesday");
        break;
    case "Thursday":
        console.log("It's Thursday");
        break;
    case "Friday":
        console.log("It's Friday");
        break;
    case "Saturday":
        console.log("It's Saturday");
        break;
    case "Sunday":
        console.log("It's Sunday");
        break;
    default:
        console.log("Invalid day");
}
//function in javascript
function add(a,b) {
    return a + b;
}
let a=5;
let b=10;
let sum= add(a, b);
console.log("Sum of " + a + " and " + b + " is: " + sum);
//function without parameters
function sub() {
    console.log((x-y));
}