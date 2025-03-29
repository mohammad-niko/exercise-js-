/*
6. Write a function to compute the sum of all the digits that occur in a given string.
Example ===> abcd21hd8kl7 
2 + 1 + 8 + 7 = 18
*/

function number(str) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      if ( !isNaN(str[i]) && str[i] !== " ") {
      total = total += Number(str[i]);
    }
  }
  return total;
}
console.log(number("abcd21hd8kl7"));