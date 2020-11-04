// Async Function
async function doAsync1() {
    return "値1";
}
doAsync1().then(value => {
    console.log(value);
});

function doAsync2() {
    return Promise.resolve("値2");
}
doAsync2().then(value => {
    console.log(value);
});

// 
async function resolveFn() {
    return "返り値";
}
resolveFn().then(value => {
    console.log(value);
});
async function rejectFn() {
    return Promise.reject(new Error("エラーメッセージ"));
}
rejectFn().catch(error => {
    console.log(error.message);
});
async function exceptionFn() {
    throw new Error("例外が発生しました");
}
exceptionFn().catch(error => {
    console.log(error.message);
});

// 
async function doAsync3() {
    
}
async function asyncMain1() {
    await doAsync3();
    console.log("この行は非同期処理が完了後に実行される");
}
asyncMain1();

async function asyncMain2() {
    const value = await Promise.resolve(42);
    console.log(value);
}
asyncMain2();

function asyncMain3() {
    return Promise.resolve(42).then(value => {
        console.log(value);
    });
}
asyncMain3();

async function asyncMain4() {
    const value = await Promise.reject(new Error("エラーメッセージ:asyncMain4"));
}
asyncMain4().catch(error => {
    console.log(error.message);
});

async function asyncMain5() {
    try {
        const value = await Promise.reject(new Error("エラーメッセージ:asyncMain5"));
    } catch (error) {
        console.log(error.message);
    }
}
asyncMain5().catch(error => {
    console.log("asyncMain5:エラーメッセージ");
});

//
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
function fetchAB() {
    const results = [];
    return dummyFetch1("/resource/A").then(response => {
        results.push(response.body);
        return dummyFetch1("/resource/B");
    }).then(response => {
        results.push(response.body);
        return results;
    });
}
fetchAB().then((results) => {
    console.log(results);
});

//
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
async function fetchResources1(resources) {
    const results = [];
    for (let i = 0; i < resources.length; i++) {
        const resource = resources[i];
        const response = await dummyFetch2(resource);
        results.push(response.body);
    }
    return results;
}
const resources = [
    "/resource/A",
    "/resource/B",
    "/resource/C"
];
fetchResources1(resources).then((results) => {
    console.log(results);
});

//
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
async function fetchAllResources(resources) {
    const promises = resources.map(function(resource) {
        return dummyFetch3(resource);
    });
    const responses = await Promise.all(promises);
    return responses.map((response) => {
        return response.body;
    });
}
/*
const resources = [
    "/resource/A",
    "/resource/B",
    "/resource/C"
];
*/
fetchAllResources(resources).then((results) => {
    console.log(results);
});

// 
async function asyncMain6() {
    await new Promise((resolve) => {
        setTimeout(resolve, 16);
    });
}
console.log("1. asyncMain関数を呼び出します");
asyncMain6().then(() => {
    console.log("3. asyncMain関数が完了しました");
});
console.log("2. asyncMain関数外では、次の行が同期的に呼び出される");

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
async function fetchResources2(resources) {
    const results = [];
    console.log("1. fetchResourcesを開始");
    resources.forEach(async function(resource) {
        console.log(`2. ${resource}の取得開始`);
        const response = await dummyFetch4(resource);
        console.log(`5. ${resource}の取得完了`);
        results.push(response.body);
    });
    console.log("3. fetchResourcesを終了");
    return results;
}
//const resources = ["/resource/A", "/resource/B"];
fetchResources2(resources).then((results) => {
    console.log("4. fetchResourcesの結果を取得");
    console.log(results); // => []
});


/*
# まとめ
    - 非同期処理はその処理が終わるのを待つ前に次の処理を評価すること
    - 非同期処理であってもメインスレッドで実行されることがある
    - エラーファーストコールバックは、非同期処理での例外を扱うルールの1つ
    - Promiseは、ES2015で導入された非同期処理を扱うビルトインオブジェクト
    - Async Functionは、ES2017で導入された非同期処理を扱う構文
    - Async FunctionはPromiseの上に作られた構文であるため、Promiseと組み合わせて利用する
*/
