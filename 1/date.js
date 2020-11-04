// Date
const now1 = new Date();
console.log(Date.now());
console.log(now1.getTime());
console.log(now1.toISOString());

const date0 = new Date(1136214245999);
console.log(date0.toISOString());

console.log();
const inUTC = new Date("2006-01-02T15:04:05.999Z");
console.log(inUTC.toISOString());

const inLocal = new Date("2006-01-02T15:04:05.999");
console.log(inLocal.toISOString());

console.log();
const date1 = new Date(2006, 0, 2, 15, 4, 5, 999);
console.log(date1.toISOString());

const ms = Date.UTC(2006, 0, 2, 15, 4, 5, 999);
const date2 = new Date(ms);
console.log(date2.toISOString());

console.log();
function formatDate(date) {
    const yyyy = String(date.getFullYear());
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");
    return `${yyyy}/${mm}/${dd}`;
}
const date3 = new Date("2006-01-02T15:04:05.999");
console.log(formatDate(date3));

console.log();
const now2 = new Date();
const timezoneOffsetInHours = now2.getTimezoneOffset() / 60;
console.log(`Hours in UTC: ${now2.getHours() + timezoneOffsetInHours}`);
console.log(now2.getHours());
console.log(timezoneOffsetInHours);
