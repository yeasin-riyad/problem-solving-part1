function inchToFeet(hide){
    const feetFraction=hide/12;
    const feetNumber=Math.floor(feetFraction);
    const inch=hide%12;
    const height=`${feetNumber} feet ${inch} inch..`
    return height

}

// console.log(inchToFeet(14))

function mileTokilometer(mile){
    const kilometer=mile*1.609344;
    const result=`${mile} Mile = ${kilometer} Kilometer`;
    return result;
}

// console.log(mileTokilometer(2))

function kilometerToMile(kilo){
    const mile=(kilo/1.609344).toPrecision(5);
    const result=`${kilo} kilo = ${mile} Mile.. `
    return mile;
}

console.log(kilometerToMile(5))