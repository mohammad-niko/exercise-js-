/* 
5. Define a function that takes an array of numbers as its parameter. The function returns an array that contains array's length, the smallest element, the largest element, and the average of all elements.
*/

function numbers(arr) {
  let smallestAndBigest = arr.sort((a, b) => a - b);
  let numAvrage = 0;
  let average = arr.filter((index) => (numAvrage = numAvrage += index));
  numAvrage = numAvrage / arr.length;
  return [
    `array's length:${+arr.length}`,
   `smallest:${+smallestAndBigest[0]}`,
    `largest:${+smallestAndBigest[smallestAndBigest.length - 1]}`,
    `average:${+numAvrage}`,
  ];
}
console.log(numbers([5, 10, 2, 8]));

function numbers(arr) {
    let smallestAndBigest = arr.sort((a, b) => a - b);
    let numAvrage = 0;
    let average = arr.filter((index) => (numAvrage = numAvrage += index));
    numAvrage = numAvrage / arr.length;
    return [
      arr.length,
     smallestAndBigest[0],
      smallestAndBigest[smallestAndBigest.length - 1],
      numAvrage
    ];
  }
  console.log(numbers([5, 10, 2, 8]));