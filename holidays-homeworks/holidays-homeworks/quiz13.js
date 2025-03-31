/*
13. Write a function to check whether a given number is in a given range.
Example ===> 
(1,2,4) => 2 is between 1 and 4 ===> return ==> true
(1,2,-3) = 2 is not between 1 and -3 ===> return ==> false
*/

function givenRange(a, num, b) {
  if (
    typeof a !== "number" &&
    typeof num !== "number" &&
    typeof b !== "number"
  ) {
    return "invalied value";
  }
  if (num > Math.min(a, b) && num < Math.max(a, b)) return true;
  else return false;
}
console.log(givenRange(true, 2, -4));

function givenRange(a, num, b) {
  if (
    typeof a !== "number" ||
    typeof num !== "number" ||
    typeof b !== "number"
  ) {
    return "invalid value";
  }
  return num > Math.min(a, b) && num < Math.max(a, b);
}
