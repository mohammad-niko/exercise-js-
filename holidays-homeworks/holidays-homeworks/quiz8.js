/*
8. Write a function to check whether all the digits in a given number are the same or not.
Example ===>
12346 = false
1111 = true
*/

function same(num) {
  let sameNumber = num.toString();
 let sameNumberTwo = sameNumber.split("").filter((index) => index !== sameNumber[0]);
  return sameNumberTwo.length === 0
}
console.log(same(2222));
