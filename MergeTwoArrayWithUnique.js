//Merge two arrays [1, 2, 3] and [3, 4, 5] such that the resulting array has only unique values.

const arr1 = [1,2,3]
const arr2 = [2,3,5]

const res = [...new Set([...arr1, ...arr2])];
console.log(res)