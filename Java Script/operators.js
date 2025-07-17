let x=10;
let y=20;
console.log("x + =5", x);
console.log("y*=2", y);

let q=2;
let r='2';
console.log("\nAssignment Operators");
console.log("Equal with type coercion",q==r);
console.log("Strict equal",q===r);
console.log("Not equal",q!=r);
console.log("Strict not equal",q!==r);
console.log("Greaterthan",q>r);
console.log("Lessthan",q<r);
console.log("Greaterthen or equals to",q>=r);
console.log("Lessthen or equals to",q<=r);
console.log("\nLogical Operators");
console.log("AND",q>5 && r< 10);
console.log("OR",q>5 || r< 10);
console.log("NOR",!(q>5));
console.log("\nBitwise Operators");
console.log("Bitwise And:", q & r);
console.log("OR:",q|r);
console.log("XOR:",q^r);
console.log("L shift:", q<<1);
console.log("R shift:", q>>1);

let age1=18;
let canVote=(age >= 18)? "You can vote" : "You cannot vote";
console.log("\nTernary Operator");
console.log("Result:",canVote);
console.log("\nTypeof Operator");
console.log("Type of q:", typeof q);
console.log("Type of r:", typeof r);
console.log("Type of x:", typeof x);
console.log("Type of y:", typeof y);
console.log("Type of canVote:", typeof canVote);

let age=18;
if(age>18){
    console.log("eligible to vote");
}else if (age<18) {
    console.org("Note eligible to vote");
}else if(age === 18){
    console.log("You are exact 18");
}