//Given an array [1,2,3,4,2,3,1,5], remove all duplicates without using Set.

function removeDuplicates(arr) {
    // const res = [];
    // for(let x in arr){
    //     if(res.indexOf(arr[x]) === -1) res.push(arr[x]);
    // }
    // return res;

    const uniVal = new Set(arr);
    return uniVal;
}

const arr = [1,2,3,4,2,3,1,5];
console.log(removeDuplicates(arr))
