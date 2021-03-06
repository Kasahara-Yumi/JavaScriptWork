const program = require("commander");
// fsモジュールをfsオブジェクトとしてインポートする
const fs = require("fs");

// コマンドライン引数からファイルパスを取得する
program.parse(process.argv);
const filePath = program.args[0];

// ファイルを非同期で読み込む
//fs.readFile(filePath, (err, file) => {
//    console.log(file);
//});

// ファイルをUTF-8として非同期で読み込む
//fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
//    console.log(file);
//});

// ファイルを非同期で読み込む
fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
    if (err) {
        console.error(err.message);
        // 終了ステータス 1（一般的なエラー）としてプロセスを終了する
        process.exit(1);
        return;
    }
    console.log(file);
});

// 起動
// $ node main5.js sample.md