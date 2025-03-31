/*
12. Write a function to get the largest even number from an array of integers.
Example ===> [20, 40, 200, 301] = 200
*/
function largestEven(num) {
    let evenLarge =  num.filter((chr) => chr % 2 === 0).sort((a, b) => a - b);
     return  evenLarge[evenLarge.length -1]
}
console.log(largestEven([20, 40, 200, 301]));