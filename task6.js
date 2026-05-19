{
console.log("-----Task 6-----");

// 1. API Task - User Names Uppercase

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    let upperUsers = data.map((user) => user.username.toUpperCase());

    console.log("Uppercase Usernames:");
    console.log(upperUsers);
  })
  .catch((error) => console.log(error));


// 2. API Task - Expensive Products

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {

    let expensiveProducts = products.filter(
      (product) => product.price > 100
    );

    console.log("Products Price Greater Than 100:");
    console.log(expensiveProducts);
  })
  .catch((error) => console.log(error));


// 3. Date Concept Task - Digital Clock

let currentDate = new Date();

let hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();

console.log(hours + " : " + minutes + " : " + seconds);


// 4. String Concept Task - Username Checker

let userName = "   Naveen Kumar   ";

let finalName = userName.trim().toUpperCase();

console.log("Final String:", finalName);

console.log("Includes KUMAR:", finalName.includes("KUMAR"));


// 5. Array Concept Task - Student Rank System

let marks = [450, 300, 700, 200, 900];

let sortedMarks = marks.sort((a, b) => b - a);

let top3 = sortedMarks.slice(0, 3);

console.log("Sorted Marks:", sortedMarks);

console.log("Top 3 Marks:", top3);

}