//?Q-1:Write a code, give a number from 0 to 6, and show the day of the week (solve it with switch case).
// Please use variables given to you and Do Not change the name of them!!
/*
 0=>monday
1=>tuesday

...
*/

let number = new Date().getDay();
let result;
switch (number) {
  case 0:
    result = "sunday";
    break;

  case 1:
    result = "monday";
    break;

  case 2:
    result = "tuesday";
    break;

  case 3:
    result = "wednesday";
    break;

  case 4:
    result = "thursday";
    break;

  case 5:
    result = "friday";
    break;

  case 6:
    result = "saturday";
    break;

  default:
    console.log("have you bronlem?         مشکل داری؟");
}

console.log(result);
