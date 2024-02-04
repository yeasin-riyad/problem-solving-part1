//You are given an array of numbers. Count how many times the a number is repeated in the array.
function countNumber(array,number){
    let count=0;
    for(let val of array){
        if(val===number) count++;
    }

    return count;
}

let array=[1,34,5,7,66,5,5,66]

console.log(countNumber(array,66))