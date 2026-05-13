// Section 1: Variables (1-8)

console.log("-----Task 1-----");

{
var a = 10;
a = 15;

console.log(a);

let b = 20;
b = 30;
console.log(b);

const c = 50;
console.log(c);

// const x = 10;
// x = 20;
// console.log(x);

var p = 5;
var p = 10;
console.log(p);

let q = 25;
q = q + 10;
console.log(q);

const r = 7;
console.log(r + 3);

let z = 10;
console.log(z);

// Section 2: Console Methods (9-12)

// 9. Which method prints normal output?

// console.log() prints normal output.

// 10. Which method shows warning?

// console.warn() shows warning message.

// 11. Which method shows error?

// console.error() shows error message.

// 12. What does this do?

// console.clear() clears the console.

// Section 3: Data Types (13 - 18) 

let d = "hello";
console.log(typeof d);

let e = 100;
console.log(typeof e);

let f = false;
console.log(typeof f);

let g;
console.log(g);

let h = null;
console.log(typeof h);

let num = Number("25");
console.log(num);

// Section 4: Arrays (19 - 24):

let fruits = ["apple", "banana", "mango"];
console.log(fruits);

let arr = ["a","b","c"];
console.log(arr[1]);

let ar = ["x","y","z"];
console.log(ar[ar.length-1]);

let i = ["apple","banana","mango"];
console.log(i[0]);

let j = ["apple","banana","mango"];
console.log(j[0]);

let k = ["apple","banana"];
k.push("mango");
console.log(k);

// Section 5: Objects (25 - 28)

let obj = {
    name: "Naveen",
    age: 25
};
console.log(obj);

let l = {name:"Naveen"};
console.log(l.name);

let m = {
    fruits: ["apple","banana"]
};
console.log(m.fruits[1]);

// Use array length minus 1 to access the last element inside the object array.

// Section 6: Arithmetic Operators (29 - 32) 

console.log(5 + 3);

console.log(10 % 3);

console.log(2 ** 3);

console.log(10 / 2);

// Section 7: Increment/Decrement (33 - 38)

let n = 5;
n++;
console.log(n);

let o = 5;
let s = o++;
console.log(o, s);

let t = 5;
let y = ++t;
console.log(t, y);

let u = 3;
let v = u--;
console.log(u, v);

// Section 8: Comparison & Logical (37–39)

console.log(5 == "5");

console.log(5 === "5");

console.log(true && false || true);

// Section 9: Ternary (40)

5 > 3 ? console.log("Yes") : console.log("No");

}