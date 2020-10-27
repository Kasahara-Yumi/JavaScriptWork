const obj1 = {};
console.log(obj1);
console.log(obj1.toString());
console.log(typeof Object.prototype.toString);
console.log(typeof obj1.toString);

console.log(obj1.hasOwnProperty("toString"));
console.log("toString" in obj1);

//
console.log();
const array = [];
console.log(array.hasOwnProperty);
console.log(Object.prototype.hasOwnProperty);

//
console.log();
const numbers = [1, 2, 3];
console.log(numbers.toString());
console.log(numbers);

//
console.log();
const obj2 = Object.create(null);
const obj3 = {};
console.log(obj2.hasOwnProperty);
console.log(obj3.hasOwnProperty);
console.log(obj2["toString"]);
console.log(obj3["toString"]);

// 
console.log();
const map = new Map();
console.log(map.has("toString"));
