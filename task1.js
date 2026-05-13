// Task 1 – Predict the Output

console.log("-----Task 2-----");

{
console.log("10" + 5);         
// Output: "105"
// Datatype: string

console.log(10 + true);        
// Output: 11
// Datatype: number

console.log(false + null);     
// Output: 0
// Datatype: number

console.log("Hello" + undefined); 
// Output: "Helloundefined"
// Datatype: string

console.log([1,2] + 5);        
// Output: "1,25"
// Datatype: string

// Task 2 – Implicit Type Casting
// ==========================================

// 1. String + Number

let a = "100" + 20;
console.log(a);
console.log(typeof a);

// 2. Boolean + Number

let b = true + 5;
console.log(b);
console.log(typeof b);

// 3. Array + String

let c = [1,2,3] + "JS";
console.log(c);
console.log(typeof c);

// 4. Object + Number

let d = {} + 10;
console.log(d);
console.log(typeof d);

// 5. Null + Number

let e = null + 50;
console.log(e);
console.log(typeof e);

// Task 3 – Explicit Type Casting

console.log(Number("500"));    

console.log(Number(true));     

console.log(Number(false));    

console.log(Number(null));     

console.log(Number("abc"));    

console.log(Number([100]));    

// Task 4 – Boolean Constructor

console.log(Boolean(""));           
// false

console.log(Boolean("javascript")); 
// true

console.log(Boolean(0));            
// false

console.log(Boolean(1));            
// true

console.log(Boolean(null));         
// false

console.log(Boolean(undefined));    
// false

console.log(Boolean([]));           
// true

console.log(Boolean({}));           
// true

// Task 5 – Student Pass or Fail

let mark = 45;

if (mark > 35) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Task 6 – Voting Eligibility

let age = 20;

if (age >= 18) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}

// Task 7 – Greatest Number

let num1 = 50;
let num2 = 80;
let num3 = 30;

if (num1 > num2 && num1 > num3) {
    console.log("num1 is greatest");
}
else if (num2 > num1 && num2 > num3) {
    console.log("num2 is greatest");
}
else {
    console.log("num3 is greatest");
}

// Task 8 – Traffic Light System

let signal = "red";

switch(signal) {

    case "red":
        console.log("stop");
        break;

    case "yellow":
        console.log("ready");
        break;

    case "green":
        console.log("go");
        break;

    default:
        console.log("Invalid Signal");
}

// Task 9 – Login System

let username = "admin";
let password = "1234";

if (username == "admin") {

    if (password == "1234") {
        console.log("Login Success");
    }
    else {
        console.log("Invalid Password");
    }

}
else {
    console.log("Invalid Login");
}

// Task 10 – Session Finder

let hour = 14;

if (hour >= 1 && hour <= 12) {
    console.log("Morning");
}
else if (hour >= 13 && hour <= 15) {
    console.log("Afternoon");
}
else if (hour >= 16 && hour <= 19) {
    console.log("Evening");
}
else if (hour >= 20 && hour <= 24) {
    console.log("Night");
}
else {
    console.log("Invalid Hour");
}
}