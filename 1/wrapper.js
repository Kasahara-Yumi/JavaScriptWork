// ラッパーオブジェクト

const str1 = "文字列";
console.log(typeof str1);
console.log(str1);
const wra1 = new String("文字列");
console.log(typeof wra1);
console.log(wra1);

const str2 = "string";
str2.toUpperCase();
console.log((new String(str2)).toUpperCase());

const wra2 = new String("文字列");
console.log(wra2.valueOf());
