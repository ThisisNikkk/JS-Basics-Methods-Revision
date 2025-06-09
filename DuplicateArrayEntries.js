// /Given an array 1 to 10 , need a function to duplicate entries in the array

const arr = [1,2,3,4,5,6,7,8,9,10]
const res = arr.flatMap(x => [x,x]);
const res2 = [...arr,...arr];
console.log(res)
