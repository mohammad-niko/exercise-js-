// ? Question-4:Consider the array that you created from the previous question (Q-3) and write a function to calculate the sum of all its numbers.
// todo1: Consider the array that you created from the previous question (Q-3)
// todo2: write a function that first convert array of string to array of number (hint: use parseInt())
// todo3: remove all the items that are NaN: (hint: use isNaN())
// todo4: calculate the sum of all its numbers
// !Answer:
const arr = ["1", "100", "-9", "", true, null];
function SumNumbers(number) {
  let num = 0;
  for (let i = 0; i < number.length; i++) {
    let tabdil = parseInt(number[i]);
    if (!isNaN(tabdil)) {
      num += tabdil;
    }
  }
  return num;
}

console.log(SumNumbers(arr));
