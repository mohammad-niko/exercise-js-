/* 1.Write code that first checks whether a name is in the first array. If it is, the price of all products in the second array is reduced by 30%.
2. Write code that asks the user for a password of length 8 and then checks that the password contains numbers and uppercase and lowercase letters.
    - If the user enters a password of less than 8 characters, the message "The password is too short" should be displayed and the user should be asked for the password again.
    - If the password does not have the specified items, the message "The password is weak" should be displayed and the user should be asked for the password again.
3. Let's play a game!
    You need to write code that randomly selects a name from a list (array) and displays it to the user so that the user can enter its reverse. If the user enters it correctly, a message saying "You won" is displayed, otherwise a message saying "You lost" is displayed.
4. Write a code that takes a name from the user and if the user's name is in the list, it will send a message that your name is available. If it is not, it will add the name to the array and then first write the message that your name has been added and then show the list of names.
    */

// first one :نمدونم  دقیقا منظورت این بود یا نه ولی خب
// console.log(
//   checks(["mmad", "fuizah", "gazak", "spideh", "ronaldo"], ["ronaldo", "mmad"] , 20)
// );
// function checks(item1, item2  , price) {
//   for (let i = 0; i < item1.length; i++) {
//     if (item2.includes(item1[i])) {
//         let lower = (price / 100) * 30;
//         return price - lower
//     }
// }
// return    price
// }

// 2:
// function checkEmail(email) {
//   if (email.length < 8)
//     return "Your email should be at least 8 characters long.";

//   let hasNumber = false;
//   let hasUpper = false;
//   let hasLower = false;

//   for (let i = 0; i < email.length; i++) {
//     let chr = email[i];
//     // !isNaN(parseInt(chr)) بهترین روش برای برسی اینکه کاراکتر عدد هست یا نه
//     if (!isNaN(parseInt(chr))) hasNumber = true;
//     else if (chr === chr.toUpperCase() && chr !== chr.toLowerCase())
//       hasUpper = true;
//     else if (chr === chr.toLowerCase() && chr !== chr.toUpperCase())
//       hasLower = true;
//   }

//   if (!hasNumber) return "Your email should contain at least one number.";
//   if (!hasUpper)
//     return "Your email should contain at least one uppercase letter.";
//   if (!hasLower)
//     return "Your email should contain at least one lowercase letter.";

//   return "Email is valid.";
// }
// console.log(checkEmail("mohammadniko19A"));
// 3:
// function game(arr) {
//   let numberRandom = Math.floor(Math.random() * arr.length);
//   let randomItem = arr[numberRandom];
//   let userRevars = prompt(`can you revers this name ${randomItem}`);
// let reversItem = randomItem.split('').reverse().join('');
//   if (userRevars == reversItem) return "You won";
//   else return "You lost";
// }
// console.log(game(["mmad", "fuizah", "gazak", "spideh", "ronaldo"]));

// 4;
// let arrName = ["mmad", "fuizah", "gazak", "spideh", "ronaldo"];
// let user = prompt("enter your name 🙂");
// function search(userName){
// if(arrName.includes(userName)){
//     return `your name is available ${arrName}`
// }else{
// arrName.push(user);
// return `your name has been added ${arrName}`
// }
// }

// console.log(search(user));

// تابع charCodeAt() مقدار کد یونیکد (ASCII یا Unicode) یک کاراکتر را برمی‌گرداند. این کد عددی نشان‌دهنده‌ی موقعیت کاراکتر در جدول یونیکد است.
// 📌 حروف بزرگ از 65 (A) تا 90 (Z) هستند.
// 📌 حروف کوچک از 97 (a) تا 122 (z) هستند.
// 📌 اعداد ۰ تا ۹ از 48 (0) تا 57 (9) هستند.
// function isUpperCase(chr) {
//     let code = chr.charCodeAt(0);
//     return code >= 65 && code <= 90;
// }
// !isNaN(parseInt(chr)) بهترین روش برای برسی اینکه کاراکتر عدد هست یا ن

// function chickemail(email) {
//   if (email.length < 8)
//     return "Your email should be at least 8 characters long.";

//   let hasNumber = false;
//   let hasUpperCase = false;
//   let hasLowerCase = false;

//   for (let i = 0; i < email.length; i++) {
//     let chr = email[i];
//     if (chr.charCodeAt(0) > 48 && chr.charCodeAt(0) < 57) hasNumber = true;
//     else if (chr.charCodeAt(0) > 65 && chr.charCodeAt(0) < 90)
//       hasUpperCase = true;
//     else if (chr.charCodeAt(0) > 97 && chr.charCodeAt(0) < 122)
//       hasLowerCase = true;
//   }

//   if (!hasNumber) return "Your email should contain at least one number.";
//   if (!hasUpperCase)
//     return "Your email should contain at least one uppercase letter.";
//   if (!hasLowerCase)
//     return "Your email should contain at least one lowercase letter.";

//   return "Email is valid.";
// }
// console.log(chickemail("Mohammadniko19"));
// ------------------------------------------------------------------------------------------------------------------------------------------

// 1:
// const daysOfTheWeek = [
//   "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday , Sunday",
// ];
// function days(arr) {
//   if (!arr) return "invaled value";
//   let daysArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let m = 0; m < daysOfTheWeek.length; m++) {
//       if (daysOfTheWeek[m] !== arr[i] || daysOfTheWeek[m] === arr[i]) {
//         daysArr.push(daysOfTheWeek[m]);
//       }
//     }
//   }
//   return daysArr;
// }
// console.log(days(["Tuesday,Thursday,Saturday"]));

// 2:
// function bigestAndSmallest(...num) {
//   if (!num || num.length === 0) return "invaled value";
//   let toSplit = num.sort((a, b) => a - b);
//   let evenNum = toSplit.filter(n => n % 2 === 0);
// console.log(evenNum);
//   return `Bigest number: ${toSplit[toSplit.length - 1]} , Smallest number: ${toSplit[0]} , Even number :${evenNum} `;
// }
// console.log(bigestAndSmallest(55, 5, 2, 74, 8, 256, 85, 2, 58, 42));

// function someName(randomNumber) {
//     let sumName = ["Thursday, Friday, Saturday , Sunday, mmad , asgar , ahbar"];
//     let rezult = [];
//     if (!randomNumber || typeof randomNumber !== "number") return "invaled value";
//     if (randomNumber <= 1 || randomNumber >= 4)
//         return "you shold write number between 1 and 4";
//     for (let i =0 ; i <=someName.length; i++) {
//         let randomNumbersss = Math.floor(Math.random()* 3) ;
//         rezult.push(someName[randomNumber])
//         rezult.push(sumName[randomNumber])
// console.log(sumName[1]);
//   }
// return rezult;
// }
// console.log(someName(3));




