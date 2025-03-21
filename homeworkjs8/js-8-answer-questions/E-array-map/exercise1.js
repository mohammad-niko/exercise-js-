// Using the .map() method, create a new array with numbers multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

// first :
function multiple(num){
  return  num * 100
};
const solutionOne = numbers.map(multiple) ;


// second :
const solutionTwo = numbers.map((num)=>{
   return num * 100
});


// Third:
const solutionThree = numbers.map(num => num * 100);

