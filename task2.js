// 1. Print Numbers

{
console.log("-----Task 3-----");

for(let i = 1; i <= 20; i++){
    console.log(i);
}

// 2. Odd Numbers
for(let i = 1; i <= 50; i++){
    if(i % 2 != 0){
        console.log(i);
    }
}

// 3. Multiplication Table
for(let i = 1; i <= 10; i++){
    console.log("7 x " + i + " = " + (7 * i));
}

// 4. Reverse Counting
let i = 20;

while(i >= 1){
    console.log(i);
    i--;
}

// 5. Sum of Numbers
let sum = 0;

for(let i = 1; i <= 100; i++){
    sum = sum + i;
}

console.log(sum);

// 6. Array Loop
let fruits = ["apple","banana","orange","grapes"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

// 7. Count Even Numbers
let count = 0;

for(let i = 1; i <= 50; i++){
    if(i % 2 == 0){
        count++;
    }
}

console.log(count);

// 8. Star Pattern
for(let i = 1; i <= 5; i++){
    let star = "";

    for(let j = 1; j <= i; j++){
        star = star + "*";
    }

    console.log(star);
}

// 9. Simple Function
function welcome(){
    console.log("Welcome to JavaScript");
}

welcome();

// 10. Function with Parameter
function greet(name){
    console.log("Hello " + name);
}

greet("Naveen");

// 11. Add Two Numbers
function add(a, b){
    return a + b;
}

console.log(add(10, 20));

// 12. Salary Bonus
function salaryBonus(salary, bonus){
    return salary + bonus;
}

console.log(salaryBonus(50000, 5000));

// 13. Object Loop
let student = {
    name : "Rahul",
    course : "JavaScript",
    marks : 95
};

for(let key in student){
    console.log(key + " : " + student[key]);
}

// 14. Find Largest Number
function largest(a, b){
    if(a > b){
        return a;
    }
    else{
        return b;
    }
}

console.log(largest(10, 50));

// 15. Mini Employee Task
let employee = {
    name : "Rahul",
    department : "IT",
    salary : 50000
};

function salaryAfterBonus(salary, bonus){
    return salary + bonus;
}

console.log("Employee Name : " + employee.name);
console.log("Department : " + employee.department);
console.log("Salary : " + employee.salary);
console.log("Salary after bonus : " + salaryAfterBonus(employee.salary, 5000));
}