// Write a function to convert temperature from Celsius to Fahrenheit.
function fahrenheitToCelcius(F){
    const C=((F-32)*(5/9)).toPrecision(6);
    return C;

}

console.log(fahrenheitToCelcius(6))