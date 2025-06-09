//Write a function to find the intersection of two arrays (common elements).
a = [1,2,3,4,5]
b = [2,3,5,6,8]

//[2,3,5]

const ans = a.filter(items => b.includes(items))
console.log(ans)