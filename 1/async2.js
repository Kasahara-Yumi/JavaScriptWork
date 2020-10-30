function dummyFetch(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/success")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND")); // at Timeout._onTimeout (async2.js:7:24) ←こういうエラーがでてしまう・・・？
            }
        }, 1000 * Math.random());
    });
}
dummyFetch("/success/data").then(function onFulfilled(response) {
    console.log(response);
}, function onRejected(error) {
    console.log("この行は実行されません");
});
dummyFetch("/failure/data").then(function onFulfilled(response) {
    console.log("この行は実行されません");
}, function onRejected(error) {
    console.log(error);
});

console.log();
function delay(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timeoutMs);
    });
}
delay(10).then(() => {
    console.log("10ミリ秒後に呼ばれる");
});

console.log();
function errorPromise(message) {
    return new Promise((resolve, reject) => {
        reject(new Error(message));
    });
}
errorPromise("thenでエラーハンドリング").then(undefined, (error) => {
    console.log(error.message);
});
errorPromise("catchでエラーハンドリング").catch(error => {
    console.log(error.message);
});

console.log();
function throwPromise() {
    return new Promise((resolve, reject) => {
        throw new Error("例外が発生");
    });
}
throwPromise().catch(error => {
    console.log(error.message);
});

const fulFilledPromise = Promise.resolve(42);
fulFilledPromise.then(value => {
    console.log(value);
});

const promise = new Promise((resolve) => {
    console.log("1. resolveします");
    resolve();
});
promise.then(() => {
    console.log("3. コールバック関数が実行されました");
});
console.log("2. 同期的な処理が実行されました");
