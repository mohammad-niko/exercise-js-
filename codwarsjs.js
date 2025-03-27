// write me a stringy function that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return: '101010'.

// with size 4 should return: '1010'.

// with size 12 should return: '101010101010'.

// The size will always be positive and will only use whole numbers.

// function stringy(size) {
//     return '10'.repeat(Math.ceil(size / 2)).slice(0, size);// کد چت جی
//   }

// function stringy(size){
//     let rezult = "";
//     for (let i = 0 ; i < size ; i++){
//         rezult += i % 2 === 0 ? 1 : 0
//     }
//     return rezult
// }

// -----------------------------------------------------------------------------------------------------------------------
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// function basicOp(operation, value1, value2){
//      return eval(`${value1} ${operation} ${value2}`);// ایول قدرت منده و خطرناک باید از ورودی مطمین باشیم
//   }

// ----------------------------------------------------------------------------------------------------------------------

// Your Job
// Find the sum of all multiples of n below m

// Keep in Mind
// n and m are natural numbers (positive integers)
// m is excluded from the multiples:

// function sumMul(n, m) {

//     if ( n < 0 || n ===0 || m < 0 || m ===0) return "INVALID"


//   let num = 0;
//   for (let i = n; i < m; i += n) {
//     num = num += i;
//   }
//   return num;
// }
// ---------------------------------------------------------------------------------------------------------------------------
// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// Good luck :)

// function unusualFive(num) {
//     let nam = "moham"
//     return  nam.length;
//   }

// ------------------------------------------------------------------------------------------------------------------------------------------
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// function findNeedle(haystack) {
//    let indexNedl =  haystack.indexOf("needle")
// return `found the needle at position ${indexNedl}`
//   }
//   console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));

// ------------------------------------------------------------------------------------------------------------------------------------------

// function maps(x){
//     let arr = [];
//   for (let i  = 0 ;  i < x.length ; i++){
//     if ( x[i] === 0 ){
//         arr.push(x[i] + 2 ) ;
//     }else {arr.push(x[i] *2);

//     } 
//   }
//     return arr
//   }
//   console.log(maps( [ 2, 4, 6 ]));

//   function maps(x){
// x.map(i => i*2)
//   }