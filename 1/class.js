// クラス

class MyClass1 {
    constructor() {}
}
const MyClass2 = class MyClass2 {
    constructor() {}
};
const AnonymousClass = class {
    constructor() {}
};
console.log(MyClass1);
console.log(MyClass2);
console.log(AnonymousClass);

class MyClass3 {
}
const myClass3 = new MyClass3();
const myClassAnother = new MyClass3();
console.log(myClass3 === myClassAnother);
console.log(myClass3 instanceof MyClass3);
console.log(myClassAnother instanceof MyClass3);

class Point1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const point1 = new Point1(3, 4);
console.log(point1.x);
console.log(point1.y);
const point2 = new Point1("a", "b");
console.log(point2.x);
console.log(point2.y);

class Counter1 {
    constructor() {
        this.count = 0;
    }
    increment() {
        this.count++;
    }
}
const counterA = new Counter1();
const counterB = new Counter1();
counterA.increment();
console.log(counterA.count);
console.log(counterB.count);
const counterC = new Counter1();
console.log(counterC.count);
counterC.increment();
counterC.increment();
console.log(counterC.count);
console.log(counterA.increment === counterB.increment);
console.log(counterA.increment === counterC.increment);


class ArrowClass {
    constructor() {
        this.method = () => {
            return this;
        };
    }
}
const instance1 = new ArrowClass();
const method1 = instance1.method;
console.log(method1());

class PrototypeClass {
    method() {
        return this;
    };
}
const instance2 = new PrototypeClass();
const method2 = instance2.method;
console.log(method2());

// アクセッサプロパティ
console.log();
class NumberWrapper {
    constructor(value) {
        this._value = value;
    }
    get value() {
        console.log("getter");
        return this._value;
    }
    set value(newValue) {
        console.log("setter");
        this._value = newValue;
    }
}
const numberWrapper = new NumberWrapper(1);
console.log(numberWrapper.value);
numberWrapper.value = 42;
console.log(numberWrapper.value);

console.log();
class ArrayLike {
    constructor(items = []) {
        this._items = items;
    }
    get items() {
        return this._items;
    }
    get length() {
        return this._items.length;
    }
    set length(newLength) {
        const currentItemLength = this.items.length;
        if (newLength < currentItemLength) {
            this._items = this.items.slice(0, newLength);
        } else if (newLength > currentItemLength) {
            this._items = this.items.concat(new Array(newLength - currentItemLength));
        }
    }
}
const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
arrayLike.length = 2;
console.log(arrayLike.items.join(", "));
arrayLike.length = 5;
console.log(arrayLike.items.join(", "));

console.log();
class ArrayWrapper {
    constructor(array = []) {
        this.array = array;
    }
    static of(...items) {
        return new ArrayWrapper(items);
    }
    get length() {
        return this.array.length;
    }
}
const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
const arrayWrapperB = ArrayWrapper.of(1, 2, 3);
console.log(arrayWrapperA.length);
console.log(arrayWrapperB.length);

// 2種類のインスタンスメソッドの定義 
console.log();
class ConflictClass {
    constructor() {
        this.method = () => {
            console.log("インスタンスオブジェクトのメソッド");
        };
    }
    method() {
        console.log("プロトタイプのメソッド");
    }
}
const conflict1 = new ConflictClass();
conflict1.method();
delete conflict1.method;
conflict1.method();
const conflict2 = new ConflictClass();
conflict2.method();

// プロトタイプオブジェクト
console.log();
function fn1() {
}
console.log(typeof fn1.prototype === "object");

class MyClass4 {
}
console.log(typeof MyClass4.prototype === "object");
class MyClass5 {
    method() { }
}
console.log(typeof MyClass5.prototype.method === "function");
console.log(MyClass5.prototype.constructor === MyClass5);

// プロトタイプチェーン 
console.log();
class MyClass6 {
    method() {
        console.log("プロトタイプのメソッド");
    }
}
const instance3 = new MyClass6();
instance3.method();

class MyClass7 {
    method() {
        console.log("プロトタイプのメソッド");
    }
}
const instance4 = new MyClass7();
const MyClassPrototype = Object.getPrototypeOf(instance4);
console.log(MyClassPrototype === MyClass7.prototype);
MyClassPrototype.method();

const instance5 = new MyClass7();
if (instance5.hasOwnProperty("method")) {
    instance5.method();
} else {
    const prototypeObject = Object.getPrototypeOf(instance5);
    if (prototypeObject.hasOwnProperty("method")) {
        prototypeObject.method.call(instance5);
    }
}

// 継承
console.log();
class Parent1 {
    constructor(...args) {
        console.log("Parentコンストラクタの処理", ...args);
    }
}
class Child1 extends Parent1 {
    constructor(...args) {
        super(...args);
        console.log("Childコンストラクタの処理", ...args);
    }
}
const child1 = new Child1("引数1", "引数2");

class Parent2 {
    constructor() {
        this.name = "Parent";
    }
}
class Child2 extends Parent2 {
    constructor() {
        super();
        this.name = "Child";
    }
}
const parent2 = new Parent2();
console.log(parent2.name);
const child2 = new Child2();
console.log(child2.name);

class Parent3 {
    method() {
        console.log("Parent#method");
    }
}
class Child3 extends Parent3 {
}
const instance6 = new Child3();
instance6.method();

class Parent4 {
    static hello() {
        return "Hello";
    }
}
class Child4 extends Parent4 {}
console.log(Child4.hello());

class Parent5 {
    method() {
        console.log("Parent#method");
    }
}
class Child5 extends Parent5 {
    method() {
        console.log("Child#method");
        super.method();
    }
}
const child5 = new Child5();
child5.method();

class Parent6 {
    static method() {
        console.log("Parent#method");
    }
}
class Child6 extends Parent6 {
    static method() {
        console.log("Child#method");
        super.method();
    }
}
Child6.method();

console.log();
class MyArray extends Array {
    get first() {
        if (this.length === 0) {
            return undefined;
        } else {
            return this[0];
        }
    }
    get last() {
        if (this.length === 0) {
            return undefined;
        } else {
            return this[this.length - 1];
        }
    }
}
const array = MyArray.from([1, 2, 3, 4, 5]);
console.log(array.length);
console.log(array.first);
console.log(array.last);
