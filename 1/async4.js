// Promiseチェーン
function dummyFetch1(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
const results = [];
dummyFetch1("/resource/A").then(response => {
    results.push(response.body);
    return dummyFetch1("/resource/B");
}).then(response => {
    results.push(response.body);
}).then(() => {
    console.log(results);
});

function delay1(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(timeoutMs);
        }, timeoutMs);
    });
}
const promise1 = delay1(1);
const promise2 = delay1(2);
const promise3 = delay1(3);
Promise.all([promise1, promise2, promise3]).then(function(values) {
    console.log(values);
});

function dummyFetch2(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
const fetchedPromise2 = Promise.all([
    dummyFetch2("/resource/A"),
    dummyFetch2("/resource/B")
]);
fetchedPromise2.then(([responseA, responseB]) => {
    console.log(responseA.body);
    console.log(responseB.body);
});

function dummyFetch3(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
const fetchedPromise3 = Promise.all([
    dummyFetch3("/resource/A"),
    dummyFetch3("/not_found/B")
]);
fetchedPromise3.then(([responseA, responseB]) => {
    
}).catch(error => {
    console.error(error);
});

function delay2(timeoutMs) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(timeoutMs);
        }, timeoutMs);
    });
}
const racePromise = Promise.race([
    delay2(1),
    delay2(32),
    delay2(64),
    delay2(128)
]);
racePromise.then(value => {
    console.log(value);
});

function timeout(timeoutMs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error(`Timeout: ${timeoutMs}ミリ秒経過`));
        }, timeoutMs);
    });
}
function dummyFetch4(path) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (path.startsWith("/resource")) {
                resolve({ body: `Response body of ${path}` });
            } else {
                reject(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    });
}
Promise.race([
    dummyFetch4("/resource/data"),
    timeout(500),
]).then(response => {
    console.log(response.body);
}).catch(error => {
    console.log(error.message);
});
