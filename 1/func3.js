"use strict";

// 関数とthis

function fn1() {console.log(this)}
const fn2 = function() {console.log(this)};
const fn3 = () => {console.log(this)};
fn1();
fn2();
fn3();

console.log();
const obj1= {
    method1: function() {
        console.log(this)
    },
    method2() {
        console.log(this)
    },
    method3: () => {
        console.log(this)
    }
};
obj1.method1();
obj1.method2();
obj1.method3();

const person1 = {
    fullName: "Brendan Eich",
    sayName: function() {
        return this.fullName;
    }
};
console.log(person1.sayName());
console.log(person1.fullName);

function say(message) {
    return `${message} ${this.fullName}！`;
}
console.log(say.apply(person1, ["こんにちは"]));
//say("こんにちは"); // TypeError: Cannot read property 'fullName' of undefined

const sayPerson = say.bind(person1, "こんにちは");
console.log(sayPerson());


//
console.log();
//const Prefixer1 = {
//    prefix: "pre",
//    prefixArray(strings) {
//        return strings.map(function(str) {
//            return this.prefix + "-" + str;
//        });
//    }
//};
//Prefixer1.prefixArray(["a", "b", "c"]);

//const Prefixer2 = {
//    prefix: "pre",
//    prefixArray(strings) {
//        const callback = function(str) {
//            return this.prefix + "-" + str;
//        };
//        return strings.map(callback);
//    }
//};
//Prefixer2.prefixArray(["a", "b", "c"]);

const Prefixer3 = {
    prefix: "pre",
    prefixArray(strings) {
        const that = this;  // <-
        return strings.map(function(str) {
            return that.prefix + "-" + str;
        });
    }
};
const prefixedStrings1 = Prefixer3.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings1);

const Prefixer4 = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map(function(str) {
            return this.prefix + "-" + str;
        }, this);   // <-
    }
};
const prefixedStrings2 = Prefixer4.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings2);

const Prefixer5 = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map((str) => {
            return this.prefix + "-" + str;
        });
    }
};
const prefixedStrings3 = Prefixer5.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings3);

const fn4 = () => {
    return this;
};
console.log(fn4());
console.log(fn4.call({}));


const obj2 = {
    method() {
        const arrowFunction = () => {
            return this;
        };
        return arrowFunction();
    }
};
console.log(obj2.method());
console.log(obj2.method.call("THAT"));
