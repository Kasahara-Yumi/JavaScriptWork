// 例外処理
try {
    console.log("try節:この行は実行されます");
    undefinedFunction();
} catch (error) {
    console.log("catch節:この行は実行されます");
    console.log(error instanceof ReferenceError);
    console.log(error.message);
} finally {
    console.log("finally節:この行は実行されます");
}

console.log();
try {
    undefinedFunction();
} catch (error) {
    console.error(error);
}
/*
try {
    undefinedFunction();
} finally {
    console.log("この行は実行されます");
}
//ここで ReferenceError: undefinedFunction is not defined が発生し後続処理が実行されない
*/

try {
    throw new Error("例外が投げられました");
} catch (error) {
    console.log(error.message);
}

console.log();
function assertPositiveNumber(num) {
    if (num < 0) {
        throw new Error(`${num} is not positive.`);
    }
}
try {
    assertPositiveNumber(-1);
} catch (error) {
    console.log(error instanceof Error);
    console.log(error.name);
    console.log(error.message);
}

try {
    console.log(x);
} catch (error) {
    console.log(error instanceof ReferenceError);
    console.log(error.name);
    console.log(error.message);
}

try {
    eval("foo! bar!");
} catch (error) {
    console.log(error instanceof SyntaxError);
    console.log(error.name);
    console.log(error.message);
}

function reverseString(str) {
    if (typeof str !== "string") {
        throw new TypeError(`${str} is not a string`);
    }
    return Array.from(str).reverse().join("");
}
try {
    console.log(reverseString(1234));
} catch (error) {
    console.log(error instanceof TypeError);
    console.log(error.name);
    console.log(error.message);
}

function fn() {
    console.log("メッセージ");
    console.error("エラーメッセージ");
}
fn();
