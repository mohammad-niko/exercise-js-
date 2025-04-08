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
// ------------------------------------------------------------------------------------------------------------------------------------------
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// function solution(number) {
//   if (number < 0) return 0;
//   let sum = 0;
//   for (let i = 0; i < number; i++) {
//     if (i % 3 === 0 ||i % 5 === 0 ) {
//       sum += i
//     }
//   }
// return sum
// }
// ------------------------------------------------------------------------------------------------------------------------------------------

// function order(words) {
//   if (!words) return "";
//   let wordSplit = words.split(" ");
//   function extraNumber(word) {
//     for (let chr of word) {
//       if (chr >= "0" && chr <= "9") {
//         return Number(chr);
//       }
//     }
//     return 0;
//   }

//   wordSplit.sort((a,b)=> {
// let numA = extraNumber(a);
// let numB = extraNumber(b);
// return numA - numB
//   }
// )

// return wordSplit.join(" ")
// }
// console.log(order("is2 Thi1s T4est 3a"));

// function order(words){ //با ریجکس کد بالا

//     return words.split(' ').sort(function(a, b){
//         return a.match(/\d/) - b.match(/\d/);
//      }).join(' ');
//   }
// ------------------------------------------------------------------------------------------------------------------------------------------

// function toCamelCase(str) {
//   if(!str || str === "") return "";
//   let toSplit = str.split("-");
//   let saveToSplit = toSplit;
//   let saveFirstIndex = toSplit[0];
//   let toRemoveFirstIndex = saveToSplit.shift();
//   let toSaveArrLower = [saveFirstIndex];
//   if (
//     saveFirstIndex[0].charCodeAt(0) >= 97 &&
//     saveFirstIndex[0].charCodeAt(0) <= 122
//   ) {
//     let filter = saveToSplit.map((chr) => chr[0].toUpperCase() + chr.slice(1));
//     toSaveArrLower.push(filter);
//     return toSaveArrLower.flat().join("");
//   } else {
//     let filter1 = toSplit.map((chr) => chr[0].toUpperCase() + chr.slice(1));
//     toSaveArrLower.push(filter1);
//     return toSaveArrLower.flat().join("");
//   }
// }
// console.log(toCamelCase("the-stealth-warrior"));
// کد من بالایی هست با دهن سرویسی کد پایین کد هوش چقدر قشنگ نوشته دهنت سرویس ممد

// function toCamelCase(str) {
//   if (!str) return "";

//   let words = [];
//   let word = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "-" || str[i] === "_") {
//       words.push(word);
//       word = "";
//     } else {
//       word += str[i];
//     }
//   }
//   words.push(word);

//   for (let i = 1; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join("");
// }

//کد باب استفاده از ریجکس
// function toCamelCase(str) {
//   if (!str) return ""; // اگر رشته خالی بود، همون موقع برگردونیم

//   return str
//     .split(/[-_]/) // رشته رو با توجه به "-" و "_" بشکن
//     .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1)) // کلمات بعدی رو Capitalize کن
//     .join(""); // به هم بچسبون

// پاینی کدریجکس هستش
// let harch = "apple;banana,grape;orange";
// console.log(harch.split(/[;:,]/));

// ------------------------------------------------------------------------------------------------------------------------------------------

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

// function solution(roman) {
//   if (!roman) return "";
//   let toSplit = roman.split("");
//   let arr = [];
//   let rezult = 0;
//   for (let i = 0; i < toSplit.length; i++) {
//     switch (toSplit[i]) {
//       case "I":
//         arr.push(1);
//         break;
//       case "V":
//         arr.push(5);
//         break;
//       case "X":
//         arr.push(10);
//         break;
//       case "L":
//         arr.push(50);
//         break;
//       case "C":
//         arr.push(100);
//         break;
//       case "D":
//         arr.push(500);
//         break;
//       case "M":
//         arr.push(1000);
//         break;
//     }
//   }
//   console.log(arr);
//   for (let i = arr.length -1; i >= 0; i--) {

//     if (arr[i] < arr[i +1]) {
//       rezult = rezult -= arr[i];
//     } else {
//       rezult = rezult +=  arr[i];
//     }
//     console.log(rezult);
//   }
//   return rezult;
// }
// console.log(solution("MCMXC"));//تاین تمرین خیلی دهن سرویس بود

// ------------------------------------------------------------------------------------------------------------------------------------------

// function moveZeros(arr) {
//   let harch = [];
//   if (!arr || arr === "") return "";
//   let find = arr.filter((num) => num === 0);
//   let remove = arr.filter((item) => item !== 0);
//   for (let m = 0; m < remove.length; m++) {
//     harch.push(remove[m]);
//   }
//   for (let i = 0; i < find.length; i++) {
//     harch.push(find[i]);
//   }
//   return harch;
// }
// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// // کد تمیز تر

// function moveZeros(arr) {
// return arr.filter(item => item !==0).concat(arr.filter(item=> item === 0))
//   }
// ------------------------------------------------------------------------------------------------------------------------------------------
// function FilterNumbers(str) {
//   return str
//     .split("")
//     .filter((c) => isNaN(parseInt(c)))
//     .join("");
// }
// console.log(FilterNumbers("test123"));
