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

//  let user = prompt("enter your email"); درسته کار نمیکنه و یکم مشکل داره ولی خب😂😂😐

//  function checkEmail(email){
// if (email.length >= 8 ) {
//     for (let i = 0 ; i < email.length ; i++){
//         if (typeof email[i] === "number"){
// if (email[i] === email[i].toUpperCase() && email[i] === email[i].toLowerCase() ){
// return `holle welcom😎 (yor email ${email})`
// }else{
//     return "your email shoud have number one word to Uper case";
// }
//         }else{
//             return "your email shoud have number between 0 and 9";
//         }
//     }
// }else{
// return "your email shoud mordan 8 chr";
// }
//  }

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