//Write a function to find the longest word in a given string.

function longestWord(str){
    let strArray=str.split(" ")
    let longest="";
    for(let val of strArray){

       longest= val.length>longest.length?val:longest;

    }

    return longest;
    
}

let longestWor="I am learning Programming to become a programmer.";

// console.log(longestWord(longestWor));

let a=5;
let b="riyad"
console.log([a,b]=[b,a])

console.log(typeof a)