//Reverse only the even-indexed elements in an array, keep odd-indexed elements unchanged.

function reverseEvenIndexed(arr){
    const evenElements = arr.filter((_,i) => i%2 == 0).reverse();
    let evenIndex = 0
    return arr.map((val,i) => ( i % 2 == 0 ? evenElements[evenIndex++] : val ));
}

const arr = [3,5,6,8,9,0,4,3,1]
console.log(reverseEvenIndexed(arr))