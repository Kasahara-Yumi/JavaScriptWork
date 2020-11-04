// Map/Set
const map1 = new Map();
console.log(map1.size);
console.log(map1);

const map2 = new Map([["key1", "value1"], ["key2", "value2"]]);
console.log(map2.size);
console.log(map2);

console.log();
const map3 = new Map();
map3.set("key", "value1");
console.log(map3.size);
console.log(map3.get("key"));
map3.set("key", "value2");
console.log(map3.get("key"));
console.log(map3.has("key"));
console.log(map3.has("foo"));
console.log(map3);
map3.set("foo","value3");
console.log(map3);

console.log();
const map4 = new Map();
map4.set("key1", "value1");
map4.set("key2", "value2");
map4.set("key3", "value3");
console.log(map4.size);
console.log(map4);
map4.delete("key1");
console.log(map4.size);
console.log(map4);
map4.clear();
console.log(map4.size);
console.log(map4);

console.log();
const map5 = new Map([["key1", "value1"], ["key2", "value2"], ["key3","value3"]]);
console.log(map5);
const results1 = [];
map5.forEach((value, key) => {
    results1.push(`${key}:${value}`);
});
console.log(results1);
const map6 = new Map();
map5.forEach((value, key) => {
    map6.set(value, key);
})
console.log(map6);

console.log();
const keys = [];
for (const key of map5.keys()) {
    keys.push(key);
}
console.log(keys);
const keysArray = Array.from(map5.keys());
console.log(keysArray);
console.log(map5.keys());

const entries = [];
for (const [key, value] of map5.entries()) {
    entries.push(`${key}:${value}`);
}
console.log(entries);
console.log(map5.entries());

const results2 = [];
for (const [key, value] of map5) {
    results2.push(`${key}:${value}`);
}
console.log(results2);

//
console.log();
console.log();
class ShoppingCart {
    constructor() {
        this.items = new Map();
    }
    addItem(item) {
//        const count = this.items.get(item) ?? 0;
        let num = this.items.get(item);
        if (num === undefined) {
            num = 0;
        }
        const count = num;
        this.items.set(item, count + 1);
    }
    getTotalPrice() {
        return Array.from(this.items).reduce((total, [item, count]) => {
            return total + item.price * count;
        }, 0);
    }
    toString() {
        return Array.from(this.items).map(([item, count]) => {
            return `${item.name}:${count}`;
        }).join(",");
    }
}
const shoppingCart = new ShoppingCart();
const shopItems = [
    { name: "みかん", price: 100 },
    { name: "リンゴ", price: 200 },
];
shoppingCart.addItem(shopItems[0]);
console.log(shoppingCart);
shoppingCart.addItem(shopItems[0]);
console.log(shoppingCart);
shoppingCart.addItem(shopItems[1]);
console.log(shoppingCart);
console.log(shoppingCart.getTotalPrice());
console.log(shoppingCart.toString());

//
console.log();
const listenersMap = new WeakMap();
class EventEmitter {
    addListener(listener) {
//        const listeners = listenersMap.get(this) ?? [];
        let item = listenersMap.get(this);
        if (item === undefined) {
            item = [];
        }
        const listeners = item;
        const newListeners = listeners.concat(listener);
        listenersMap.set(this, newListeners);
    }
}
let eventEmitter = new EventEmitter();
eventEmitter.addListener(() => {
    console.log("イベントが発火しました");
});
eventEmitter = null;
console.log(eventEmitter);

console.log();
const map7 = new Map();
map7.set(NaN, "value");
console.log(NaN === NaN);
console.log(map7.has(NaN));
console.log(map7.get(NaN));
console.log(map7);

// Set
console.log();
const set1 = new Set();
console.log(set1.size);
const set2 = new Set(["value1", "value2", "value2"]);
console.log(set2.size);

console.log();
const set3 = new Set();
set3.add("a");
console.log(set3.size);
set3.add("a");
console.log(set3.size);
console.log(set3.has("a"));
console.log(set3.has("b"));

console.log();
const set4 = new Set();
set4.add("a");
set4.add("b");
console.log(set4.size);
console.log(set4);
set4.delete("a");
console.log(set4.size);
console.log(set4);
set4.clear();
console.log(set4.size);
console.log(set4);

const set5 = new Set(["a", "b"]);
const results3 = [];
set5.forEach((value) => {
    results3.push(value);
});
console.log(results3);
console.log(set5);

console.log();
const set6 = new Set(["a", "b"]);
console.log(set6);
const keysResults = [];
for (const value of set6.keys()) {
    keysResults.push(value);
}
console.log(keysResults);
console.log(set6.keys());
const entryResults = [];
for (const entry of set6.entries()) {
    entryResults.push(entry);
}
console.log(entryResults);
console.log(set6.entries());

const results4 = [];
for (const value of set6) {
    results4.push(value);
}
console.log(results4);
