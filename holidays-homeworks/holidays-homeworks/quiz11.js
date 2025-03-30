/*
11. Write a function to find the number of even digits in a given integer.
Example ===> 450 = 2
Example ===> 125 = 1
*/

function even(num){
    let evenDigits = num.toString().split("").filter(index => index % 2 === 0);
    return evenDigits.length
}
console.log(even(450));


function even(num) {
  let evenNum = 0;
  let  stringAndArr = num.toString().split("")
  for (let i = 0; i < stringAndArr.length; i++) {
    if (stringAndArr[i] % 2 === 0) {
      evenNum++;
    }
  }
  return evenNum;
}
