// 配列リテラル 
const emptyArray = [];
const array = [1, 2, 3];

console.log(emptyArray);
console.log(array);


const array1 = ["index1:1","index2:2","index3:3"];

console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);

const matrix = [
    ["a", "b"],
    ["c", "d"]
];
console.log(matrix);
console.log(matrix[0][0]);
console.log(matrix[1][1]);

// 
console.log();
const sparseArray = [1, , 3];
console.log(sparseArray.length);
console.log(sparseArray[1]); 
console.log(sparseArray[sparseArray.length - 1]);
console.log(sparseArray);

//
console.log();
const obj = {};
const arr = [];
console.log(Array.isArray(obj));
console.log(Array.isArray(arr));

console.log(typeof obj);
console.log(typeof arr);

//
console.log();
const number = ["one", "two", "three"];
const [first, second, third] = number;
console.log(first);
console.log(second);
console.log(third);
const [f1, s2, t3] = number;
console.log(f1);
console.log(s2);
console.log(t3);

//
console.log();
const denseArray = [1, undefined, 3];
console.log(denseArray[1]);
console.log(sparseArray[1]);
console.log(denseArray.hasOwnProperty(1));
console.log(sparseArray.hasOwnProperty(1));

//
const array2 = ["Java", "JavaScript", "Ruby"];
const indexOfJS = array2.indexOf("JavaScript");
console.log(indexOfJS);
console.log(array2[indexOfJS]);
console.log(array2.indexOf("JS"));
console.log(array2.lastIndexOf("JavaScript"));

//
console.log();
const obj2 = { key: "value" };
const arr2 = ["A", "B", obj];
console.log(arr2.indexOf({ key: "value" }));
console.log(obj2 === { key: "value" });
console.log(arr2.indexOf(obj2));
console.log(arr2);
console.log(obj2);
console.log(arr2[2]);

//
console.log();
const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];
console.log(colors);
const indexOfBlue = colors.findIndex((obj) => {
    return obj.color === "blue";
});
console.log(indexOfBlue);
console.log(colors[indexOfBlue]); 

const blueColor = colors.find((obj) => {
    return obj.color === "blue";
});
console.log(blueColor);
const whiteColor = colors.find((obj) => {
    return obj.color === "white";
});
console.log(whiteColor);
const redColor = colors.find((obj) => {
    return obj.color === "red";
});
console.log(redColor);

// slice
console.log();
const array3 = ["A", "B", "C", "D", "E"];
console.log(array3.slice(1, 4));    // B~D
console.log(array3.slice(1));       // B~E
console.log(array3.slice(-1));      // E
console.log(array3.slice(1, 1));    // []
console.log(array3.slice(4, 1));    // []

//
console.log();
const array4 = ["A", "B", "C"];
console.log(array4);

array4.push("D");
console.log(array4);
const poppedItem = array4.pop();
console.log(poppedItem);
console.log(array4);

array4.unshift("S");
console.log(array4);
const shiftedItem = array4.shift();
console.log(shiftedItem);
console.log(array4);

// 
console.log();
const array5 = ["A", "B", "C"];
const array6 = array5.concat(["D", "E"]);
console.log(array6);
const array7 = ["F", "G"];
const array8 = array6.concat(array7);
console.log("array5");
console.log(array5);
console.log("array6");
console.log(array6);
console.log("array7");
console.log(array7);
console.log("array8");
console.log(array8);

console.log();
const array9 = ["X", "Y", "Z", ...array5];
console.log(array9);
const array10 = ["X", "Y", "Z"].concat(array5);
console.log(array10);

// flat
console.log();
const array11 = [[["A"], "B"], "C"];
console.log(array11.flat());
console.log(array11.flat(1));
console.log(array11.flat(2));
console.log(array11.flat(Infinity));
const array12 = array11.flat(Infinity);
console.log(array12);
console.log(array12.flat(Infinity));

// splice
console.log();
array12.splice(1, 1);
console.log(array12);
console.log(array12.length);
console.log(array12[1]);
array12.splice(0, array12.length);
console.log(array12.length);
console.log(array12);

console.log(array10);
array10.length = 0;
console.log(array10); 

let array13 = ["A", "B", "C"];
console.log(array13);
array13 = [];   // constで宣言した配列には再代入できない
console.log(array13);

//
console.log();
const array14 = [1, 2, 3];
array.forEach((value, index, array) => {
    console.log(value, index, array);
});
const array15 = array14.map((value, index, array) => {
    return value * 10;
});
console.log(array14);
console.log(array15);
const array16 = array14.filter((value, index, array) => {
    return value % 2 === 1;
});
console.log(array14);
console.log(array16);
const totalValue = array14.reduce((accumulator, value, index, array) => {
    return accumulator + value;
}, 0);
console.log(array14);
console.log(totalValue);

// array-like
console.log();
function myFunc1() {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    console.log(typeof arguments.forEach);
}
myFunc1("a", "b", "c");
function myFunc2() {
    console.log(Array.isArray([1, 2, 3]));
    console.log(Array.isArray(arguments));
}
myFunc2("a", "b", "c");

//
console.log();
const array17 = ["a"].concat("b").concat("c").concat("D");
console.log(array17);

/* 参考
https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array
*/