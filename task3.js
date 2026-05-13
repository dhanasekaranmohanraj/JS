// Task 1 — Basic Function

{
console.log("-----Task 4-----");

function welcomeUser(name) {
    console.log("Welcome " + name);
}

welcomeUser("Naveen");


// Task 2 — Parameter + Return

function squareNumber(num) {
    return num * num;
}

console.log(squareNumber(5));


// Task 3 — Object Function

let employee = {
    name: "Rahul",
    salary: 50000
};

function employeeBonus(bonus) {
    console.log(employee.name);
    console.log(employee.salary + bonus);
}

employeeBonus(5000);


// Task 4 — Scope Checking

function scopeCheck() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a); // Works

    // console.log(b); // Error
    // console.log(c); // Error
}

scopeCheck();


// Task 5 — Arrow Function

let add = (a, b) => {
    console.log(a + b);
};

add(5, 3);


// Task 6 — Callback Function

function multiply(a, b) {
    return a * b;
}

function calculator(callback, x, y) {
    console.log(callback(x, y));
}

calculator(multiply, 5, 2);


// Task 7 — Generator Function

function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let data = offers();

console.log(data.next().value);
console.log(data.next().value);
console.log(data.next().value);


// Task 8 — Default Parameter

function student(name, course = "JavaScript") {
    console.log(name);
    console.log(course);
}

student("Rahul");
student("Navi", "React");


// Task 9 — Currying

function multi(a) {
    return function (b) {
        return function (c) {
            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));


// Task 10 — Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let finalArray = [...arr1, ...arr2];

console.log(finalArray);


// Task 11 — Object Spread

let obj1 = {
    name: "Navi"
};

let obj2 = {
    role: "Developer"
};

let finalObject = {
    ...obj1,
    ...obj2
};

console.log(finalObject);


// Task 12 — Rest Operator

function numbers(...num) {

    console.log(num);

    let sum = 0;

    for (let i of num) {
        sum += i;
    }

    console.log(sum);
}

numbers(1, 2, 3, 4);



// Mini Challenge 🔥
// Student Management System

let students = [];

function addStudent(name, marks) {

    let student = {
        name,
        marks
    };

    students.push(student);
}

function printStudents() {
    console.log(students);
}

function calculateMarks(...marks) {

    let total = 0;

    for (let m of marks) {
        total += m;
    }

    return total;
}

function bonusMarks(callback, bonus, ...marks) {

    let total = callback(...marks);

    console.log("Total Marks :", total + bonus);
}

addStudent("Rahul", 80);
addStudent("Navi", 90);

printStudents();

bonusMarks(calculateMarks, 10, 50, 60, 70);
}