// json
const json1 = '{ "id": 1, "name": "js-primer" }';
const obj1 = JSON.parse(json1);
console.log(obj1.id);
console.log(obj1.name);

const json2 = "[1, 2, 3]";
console.log(JSON.parse(json2));

const userInput = "not json value";
try {
    const json = JSON.parse(userInput);
} catch (error) {
    console.log("パースできませんでした");
}

console.log();
const obj2 = { id: 1, name: "js-primer", bio: null };
console.log(JSON.stringify(obj2));

const replacer1 = (key, value) => {
    if (value === null) {
        return undefined;
    }
    return value;
};
console.log(JSON.stringify(obj2, replacer1, 4));

const replacer2 = ["id", "name"];
console.log(JSON.stringify(obj2, replacer2));
console.log(JSON.stringify(obj2, null, 2));
console.log(JSON.stringify(obj2, null, "\t"));

const obj3 = {
    foo: "foo",
    toJSON() {
        return "bar";
    }
};
console.log(JSON.stringify(obj3));
console.log(JSON.stringify({ x: obj3 }));
