{
console.log("-----Task 4-----");

// Task 1 — Student Registration Form

let studentName = prompt("Enter Student Name");
let department = prompt("Enter Department");
let age = prompt("Enter Age");

console.log(`Welcome ${studentName}`);
console.log(`Department: ${department}`);
console.log(`Age: ${age}`);

// Task 2 — ATM Withdrawal System

let balance = 10000;
let withdrawAmount = Number(prompt("Enter Withdrawal Amount"));

if (withdrawAmount >= 100 && withdrawAmount <= balance) {
    console.log("Transaction Successful");
} else {
    console.log("Insufficient Balance");
}

// Task 3 — Swiggy Discount Checker

let orderAmount = Number(prompt("Enter Order Amount"));

orderAmount > 499
    ? console.log("Free Delivery Available")
    : console.log("Delivery Charges Applied");

// Task 4 — Instagram Login System

let username = prompt("Enter Username");

if (username === "admin") {

    let password = prompt("Enter Password");

    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }

} else {
    console.log("Invalid Username");
}

// Task 5 — Traffic Signal System

let signal = prompt("Enter Signal Color");

switch (signal) {

    case "red":
        console.log("STOP");
        break;

    case "yellow":
        console.log("READY");
        break;

    case "green":
        console.log("GO");
        break;

    default:
        console.log("Invalid Signal");
}

// Task 6 — Employee Salary Calculator

function salaryCalculation(basicSalary, bonus) {
    return basicSalary + bonus;
}

let totalSalary = salaryCalculation(25000, 5000);

console.log(totalSalary);

// Task 7 — E-Commerce Cart Total

let prices = [100, 200, 300, 400];

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total = total + prices[i];
}

let average = total / prices.length;

console.log("Total Price:", total);
console.log("Average Price:", average);

// Task 8 — WhatsApp Contact Book

let contact = {
    name: "Rahul",
    phone: "9876543210",
    status: "Busy"
};

for (let key in contact) {
    console.log(key + " : " + contact[key]);
}

// Task 9 — Movie Ticket Booking

function payment() {
    console.log("Payment Completed");
}

function bookTicket(callback) {
    console.log("Ticket Booked");
    callback();
}

bookTicket(payment);

// Task 10 — Food Delivery Time Tracker

function* deliveryStatus() {

    yield "Order Confirmed";
    yield "Preparing Food";
    yield "Out for Delivery";
    yield "Delivered";
}

let order = deliveryStatus();

console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);
console.log(order.next().value);

}