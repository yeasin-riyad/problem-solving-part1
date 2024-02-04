
function removeDuplicates(array){
    const Array=[];
    for (let val of array){
        if(!Array.includes(val)){
            Array.push(val)
        }
    }

    return Array;
}


// console.log(removeDuplicates([12,34,56,12,34,56]))

const date=new Date()
console.log(date.getHours());