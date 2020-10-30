function asyncTask() {
    return Math.random() > 0.5 ? Promise.resolve("成功") : Promise.reject(new Error("失敗"));
}
asyncTask()
    .then(function onFulfilled(value) {　
        console.log(value);
    })
    .catch(function onRejected(error) {
        console.log(error.message);
    });

function dummyFetch(path) {
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
let isLoading = true;
dummyFetch("/resource/A").then(response => {
    console.log(response);
}).catch(error => {
    console.error(error);
}).finally(() => {
    isLoading = false;
    console.log("Promise#finally");
});
