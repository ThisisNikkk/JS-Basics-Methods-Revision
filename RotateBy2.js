//Given an array [10, 20, 30, 40, 50], how do you rotate it by 2 positions?

function rotateBy2(arr){
    return arr.slice(2).concat(arr.slice(0,2))
}
const arr = [10,20,30,40,50]
console.log(rotateBy2(arr))
