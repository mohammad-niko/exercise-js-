//?Q-2:-Sort the following array once ascending and once descending, and show two new arrays.
// Please use variables given to you and Do Not change the name of them!!
const numbers = [10, 50, -8, 3, 0, 100, 70];
console.log(numbers);
let ascendingNumbers = [...numbers].sort((a , b) => a - b);
console.log(ascendingNumbers);
let descendingNumbers = [...numbers].sort((a  , b) => b - a);
console.log(descendingNumbers);


// .sort(function (a , b){ 
// return a - b
// })
