// http
const fetch = require('node-fetch'); // パッケージimport

const userId = "js-primer-example";
fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
        console.log(response.status);
        return response.json().then(userInfo => {
            console.log(userInfo);
        });
    }).catch(error => {
        console.error(error);
    });

