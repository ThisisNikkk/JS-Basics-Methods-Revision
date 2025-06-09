// Given an array of [1,2,3,4,5,6,7,1,4,10,19,12,19,23,2,43,5,11,7,32] need addition of the unique value in this array.

const arr = [1,2,3,4,5,6,7,1,4,10,19,12,19,23,2,43,5,11,7,32]
const res = [...new Set(arr)];
const sum = res.reduce((x,y)=> x+y ,0)
console.log(sum)