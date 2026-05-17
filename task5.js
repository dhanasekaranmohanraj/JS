{
console.log("-----Task 5-----");

// 5 Real-Time JavaScript Questions
// Topic : Array + Object + HOF + Spread


// 1. Student Attendance System

let presentStudents = ["Rahul", "Naveen", "Karthik"];
let absentStudents = ["Arun", "Vijay"];

let allStudents = [...presentStudents, ...absentStudents];

allStudents.push("Suresh");

console.log("Final Student List:");
console.log(allStudents);

// 2. E-Commerce Cart

let mobile = {
    brand: "Samsung",
    price: 25000
};

let charger = {
    type: "Fast Charger",
    warranty: "1 Year"
};

let cartDetails = {
    ...mobile,
    ...charger,
    deliveryDate: "20-May-2026"
};

console.log("Final Cart Object:");
console.log(cartDetails);

// 3. Food Delivery App

function orderFood(...items) {

    console.log("Total items ordered:", items.length);

    console.log("First item:", items[0]);

    console.log("Last item:", items[items.length - 1]);
}

orderFood("Pizza", "Burger", "French Fries", "Coke");

// 4. Employee Salary Filter

let employees = [
    { name: "Rahul", salary: 45000 },
    { name: "Naveen", salary: 60000 },
    { name: "Karthik", salary: 75000 },
    { name: "Arun", salary: 40000 }
];

let highSalaryEmployees = employees.filter((emp) => {
    return emp.salary > 50000;
});

console.log("Employees with Salary Above 50000:");
console.log(highSalaryEmployees);

// 5. Online Game Score Board

let scores = [100, 200, 150, 300, 250];

let totalScore = scores.reduce((total, score) => {
    return total + score;
}, 0);

console.log("Total Score:");
console.log(totalScore);

}