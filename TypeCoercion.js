console.log([] + []); // [object Object]
console.log([] + {}); // [object Object]
console.log({} + []); // [object Object]
console.log([] == false); //true
console.log([] == []); //false
console.log(null == undefined); //true
console.log(typeof null); //object
console.log(typeof NaN); //number
console.log(0.1 + 0.2 === 0.3); //false
console.log(1 + '2' + '2'); // 122
console.log(1 + +'2' + '2'); // 32
console.log(1 + -'1' + '2'); // 02
console.log(+'1' + '1' + '2'); // 112
console.log('A' - 'B' + '2'); // NaN
console.log('A' - 'B' + 2); // NaN


const a = [1, 2, 3];
const b = [...a];
b[0] = 99;
console.log(a);
