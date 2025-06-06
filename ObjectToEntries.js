const data = { name: "John", age: 25 };
const entry = Object.entries(data);
const back2Obj = Object.fromEntries(entry);
console.log(entry)
console.log(back2Obj)
