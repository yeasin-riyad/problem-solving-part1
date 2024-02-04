function oddAverage(array){
    let sum=0;
    let Array=[];
    for(val of array){
        if(val%2!==0){
            Array.push(val)
            sum+=val;
        }
    }

    const Avg=sum/Array.length;
    return Avg;


    // for(val of array){
    //     if(val%2!==0){
    //         sum+=val;

    //     }
    // }
    // let avg=sum/array.length;
    // return avg;
}


console.log(oddAverage([1,2,3,5]))