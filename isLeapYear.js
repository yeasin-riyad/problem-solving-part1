function isLeapYear(year){
    const result=( year%100 !==0 && year%4===0 || year%100===0 && year%400===0) ? `${year} is Leap Year..`:`${year} is not Leap Year..`
    return result;
}

console.log(isLeapYear(2100))
console.log(isLeapYear(2400))
console.log(isLeapYear(1900))
console.log(isLeapYear(2052))