// プリミティブ型とオブジェクト 
const str1 = new String("文字列");
console.log(typeof str1);
console.log(str1.length);
console.log(str1);

const str2 = "文字列";
console.log(typeof str2);
console.log(str2.length);
console.log(str2);

// ", ', `
console.log();
const str3 = "文字列";
const str4 = '文字列';
const str5 = `文字列`;
console.log(str3);
console.log(str4);
console.log(str5);
console.log(str3 === str4);
console.log(str3 === str5);
console.log(str4 === str5);
const str6 = `1行目
2行目
3行目`;
console.log(str6);
const str7 = "1行目\n2行目\n3行目";
console.log(str7);

// 結合
console.log();
const str8 = "a" + "b";
console.log(str8);

const name = "JavaScript";
console.log("Hello " + name + "!");
console.log(`Hello ${name}!`);

console.log(str3[0]);
console.log(str3[1]);
console.log(str3[2]);
console.log(str3[3]);

// 
console.log();
str9 = "アイウエオ";
console.log(str9.charCodeAt(0).toString(16));
console.log(str9.charCodeAt(1).toString(16));
console.log(str9.charCodeAt(2).toString(16));
console.log(str9.charCodeAt(3).toString(16));
console.log(str9.charCodeAt(4).toString(16));
console.log(str9.charCodeAt(5).toString(16));
const str10 = String.fromCharCode(
0x30a2,
0x30a4,
0x30a6,
0x30a8,
0x30aa
);
console.log(str10);

const str11 = str6.split("\n");
console.log(str11);
console.log(str6);
const [s1,s2,s3] = str6.split("\n");
console.log(s1);
console.log(s2);
console.log(s3);
const str12 = str6.split("\n").join("/");
console.log(str12);

const str13 = "a     b    c      d";
const str14 = str13.split(/\s+/);
console.log(str14);
console.log(str14.length);

// 比較
console.log();
console.log("文字列" === '文字列');

console.log("A".charCodeAt(0));
console.log("B".charCodeAt(0));
console.log("A" > "B");
console.log("ABC" > "ABD");
console.log("AB" > "ABC");

// 取得
console.log();
const str15 = "ABCDE";
console.log(str15.slice(1));
console.log(str15.slice(1, 5));
console.log(str15.slice(-1));
console.log(str15.slice(1, 4));
console.log(str15.slice(4, 1));
console.log(str15.slice(-1, 1));
console.log(str15.slice(1, -1));
console.log();
console.log(str15.substring(1));
console.log(str15.substring(1, 5));
console.log(str15.substring(-1));
console.log(str15.substring(1, 4));
console.log(str15.substring(4, 1));
console.log(str15.substring(-1, 1));
console.log(str15.substring(1, -1));

const url = "https://example.com?param=1";
const indexOfQuery = url.indexOf("?");
const queryString = url.slice(indexOfQuery);
console.log(queryString);

// 検索
console.log();
const str16 = "にわにはにわにわとりがいる";
console.log(str16.indexOf("にわ"));
console.log(str16.lastIndexOf("にわ"));
console.log(str16.indexOf("未知のキーワード")); 

console.log(str16.startsWith("にわ"));
console.log(str16.startsWith("いる"));
console.log(str16.endsWith("にわ"));
console.log(str16.endsWith("いる"));
console.log(str16.includes("にわ"));
console.log(str16.includes("いる"));

// 正規表現
console.log();
// ロード時にエラー
function main1() {
//    const invalidPattern = /[/;
}
main1();
// 実行時にエラー
function main2() {
//    const invalidPattern = new RegExp("[");
}
main2();

const str17 = "ABC123EFG";
const searchPattern1 = /\d{3}/;
console.log(str17.search(searchPattern1));
const searchPattern2 = /\d+/;
console.log(str17.search(searchPattern2));
console.log();
const str18 = "ABC あいう DE えお";
const searchPattern3 = /[a-zA-Z]+/;
const results = str18.match(searchPattern3);
console.log(results.length);
console.log(results[0]);
console.log(results.index);
console.log(results.input);
console.log(results);
console.log();
const searchPattern4 = /[a-zA-Z]+/g;
const resultsWithG = str18.match(searchPattern4);
console.log(resultsWithG.length);
console.log(resultsWithG[0]);
console.log(resultsWithG[1]);
console.log(resultsWithG.index);
console.log(resultsWithG.input);
console.log(resultsWithG);
console.log();
const matchesIterator = str18.matchAll(searchPattern4);
for (const match of matchesIterator) {
    console.log(`match: "${match[0]}", index: ${match.index}, input: "${match.input}"`);
}

console.log();
console.log(searchPattern4.lastIndex);
const result1 = searchPattern4.exec(str18);
console.log(result1[0]);
console.log(searchPattern4.lastIndex);
console.log(result1);
const result2 = searchPattern4.exec(str18);
console.log(result2[0]);
console.log(searchPattern4.lastIndex);
console.log(result2);
const result3 = searchPattern4.exec(str18);
console.log(result3);
console.log(searchPattern4.lastIndex);

console.log();
let matches;
while (matches = searchPattern4.exec(str18)) {
    console.log(`match: ${matches[0]}, index: ${matches.index}, lastIndex: ${searchPattern4.lastIndex}`);
}

// 置換
console.log();
const str19 = str2.replace("文字", "");
console.log(str19);

console.log(str16.replace("にわ", "niwa"));
console.log(str16.replace(/にわ/, "niwa"));
console.log(str16.replace(/にわ/g, "niwa"));

function toDateJa(dateString) {
    return dateString.replace(/(\d{4})-(\d{2})-(\d{2})/, (all, year, month, day) => {
        return `${year}年${month}月${day}日`;
    });
}
console.log(toDateJa("本日ハ晴天ナリ"));
console.log(toDateJa("今日は2020-10-10です"));

/* 参考
https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Regular_Expressions
*/