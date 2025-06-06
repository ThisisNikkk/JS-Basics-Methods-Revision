//Write a function to find the intersection of two arrays (common elements).
const arr = [2,4,6,8,9]
const arrr = [1,2,3,4,5,6,7,8,9]

function intersection(a,b){
    return a.filter(item => b.includes(item));
}

console.log(intersection(arr,arrr))