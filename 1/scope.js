// スコープ

function fn() {
    const x = 1;
    console.log(x);
}
fn();
//console.log(x); // ReferenceError: x is not defined

// 
function fnA() {
    let x;
}
function fnB() {
    let x;
}

// ブロックスコープ
{
    const x = 1;
    console.log(x);
}
//console.log(x); // ReferenceError: x is not defined
if (true) {
    const x = "inner";
    console.log(x);
}
//console.log(x); // ReferenceError: x is not defined

const array = [1, 2, 3, 4, 5];
for (const element of array) {
    console.log(element);
}
//console.log(element); // ReferenceError: element is not defined


{
    const x = "x";
    {
        const y = "y";
        console.log(x);
    }
//    console.log(y); // ReferenceError: y is not defined
}
//console.log(x); // ReferenceError: x is not defined
//console.log(y); // ReferenceError: y is not defined


const x = "Global";
{
    const x = "Outer";
    {
        const x = "Inner";
        console.log(x);
    }
    console.log(x);
}
console.log(x);

// varとlet
//console.log(let_x); // ReferenceError: Cannot access 'let_x' before initialization
console.log(var_x); // undefined になるがエラーにならない
let let_x;
var var_x;
console.log(let_x);
console.log(var_x);
let_x = "letのx";
var_x = "varのx";
console.log(let_x);
console.log(var_x);

console.log();
(function() {
    var foo = "foo";
    console.log(foo);
})();
console.log(typeof foo === "undefined");

function fn() {
    var foo = "foo";
    console.log(foo);
}
fn();
console.log(typeof foo === "undefined");

{
    const foo = "foo";
    console.log(foo);
}
console.log(typeof foo === "undefined");

// クロージャー
console.log();
function createCounter() {
    let count = 0;
    function increment() {
        count = count + 1;
        return count;
    }
    return increment;
}
const myCounter = createCounter();
console.log(myCounter());
console.log(myCounter());
const newCounter = createCounter();
console.log(newCounter());
console.log(newCounter());
console.log(myCounter());
console.log(newCounter());

console.log();
const z = 10;
function printX() {
    console.log(z);
}
function run() {
    const z = 20;
    printX();
}
run();

console.log();
function greaterThan(n) {
    return function(m) {
        return m > n; 
    };
}
const greaterThan5 = greaterThan(5);
console.log(greaterThan5(4));
console.log(greaterThan5(5));
console.log(greaterThan5(6));

// this
console.log(globalThis);
console.log(this);
