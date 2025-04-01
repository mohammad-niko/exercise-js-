/*
17. Write a function to test whether an array of integers of length 2 does not contain 4 or 6.
Example ===>
[3, 2] = true
[6, 1] = false
*/

function harchy(arr) {
//   if (arr[0] !== 4 && arr[0] !== 6) {
//     if (arr[1] !== 4 && arr[1] !== 6) return true;
//     else return false;
//   } else {
//     return false;
//   }
// -------------------------------------------------------------------------------------------------------------

let chickArr = arr.filter(chr => chr !== 4 && chr !== 6)
return (chickArr.length === 2) ? true : false;
}
console.log(harchy([1,2]));


