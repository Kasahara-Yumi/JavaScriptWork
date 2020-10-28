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
