//Write a function to count the number of vowels in a string.

function vowelCounts(str){
    let count=0;

    for(let char of str){
        if(char==='a'|| char==='e'|| char==='i'|| char==='o' ||char==='u'){
            count++;
            console.log(char)

        }
    }
    return count;

}

console.log(vowelCounts("Hi I am Yeasin Riyad. aei"))