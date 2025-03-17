// loop for:

// for (let i = 1 ; i < 100 ; i += 2){
//     console.log(i);
// }

// for (let c = 0 ; c < 100 ; c += 5){
//     console.log(c);
// }

// for (let i = 0 ; i < 50 ; i+= 3 ){
//     console.log(i);

// }
//  for (let i = 20 ; i > 0 ; i -= 2){
//     console.log(i);
//  }
// for ( let i = 0 ; i < 100 ; i += 7){
//     console.log(i);
// }

// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   console.log( sum += numbers[i]);

// }

// let names = ["Ali", "Sara", "Reza", "Mina"];

// for (let i = names.length -1 ; i >= 0 ; i--){
//   console.log(names[i]);
// }

// let cities = ["tehran", "mashhad", "shiraz"];
// let uperCase = [];

// for (let i = 0; i < cities.length; i++) {
//   uperCase.push(cities[i].toUpperCase());
// }
// console.log(uperCase);

// let shab = "In shabi ke migan shab nist, age shabe mese dishab nist";
// for (let i = 0; i < 6; i++) {
//   console.log(shab);
// }

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
//   for (let c = 0; c <= 10; c++) {
//     console.log(`${c} * ${i} = ${c * i}`);
//   }
// }

// let num = [1,2,3,4];
// for (let i = 0; i < 1; i++) {
//   console.log(num.reverse());
// }

// از طریق روش زیر میتونیم ایندکس کاراکتر خاص رو داخل یک متن پیدا کنیم
// let shab = "In shabi ke migan shab nist, age shabe mese dishab nist";

// let mmad = []
// function contCharacter(str, chr) {
//   let cont = 0;

//   for (let i = 0; i < shab.length; i++) {

//     if (str[i] === chr) {
// mmad.push(i)
//       cont++;
//     }
//   }
//   console.log(cont);
//   return cont;
// }
// console.log(contCharacter(shab.toLowerCase(), "i"));
// console.log(mmad);

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let mmad = 0;

// for (let i = 0; i < num.length; i++) {
//   mmad = mmad += num[i];
//   console.log();
// }
// console.log(mmad);

let star = "******";

let star2 = "";

// for (let i = 0; i < star.length; i++) {
//   star2 += "*";
//   console.log(star2);
// }

// for (let i = star.length; i > 0; i--) {
// console.log(  star.slice(0 ,i));
// }

//  چالش ضرب
// const user = prompt("type nuuber to multiply");
// for (let i = 0; i <1;i++){
//   for( let c = 0; c <= 10 ;c++){
//     console.log(`${+user} x ${c} = ${+user * c}`);
//   }
// }
// چالش مربع کردن عداد

// const user2 =prompt("add your number ")

// for (let i = 0 ; i < +user2 ; i++){
//   let num  = " "
// for(let d = 0 ; d < +user2 ; d++){
// num+= i + " "
// }
// console.log(num);
// }

// سرچ عدد

// let numbers = [
//   [10, 15, 20],
//   [25, 30, 35],
//   [40, 45, 50],
// ];
// let index = [];
// let user = prompt("say one number between 10 an 50");
// for (let i = 0; i < numbers.length; i++) {
//   let anser = numbers[i].indexOf(+user);

//   index.push(anser);

//   for (let c = 0; c < numbers[i].length; c++) {
//     let anser2 = numbers[i].indexOf(+user);

//     index.push(anser2);
//   }
// }
// console.log(index);

//  while loop :

// let num = 0;
// let i = 0;
// while (i <= 20) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }

//   i++;
// }

// const user = prompt("type a number");
// let i = user.length - 1;
// let reversed = "";
// while (0 <= i) {
// reversed +=user[i]
// i--
// }
// console.log(reversed);


// let number= [10, 20, 35, 45, 50, 60, 70]; 
 
// let i = 0 ;
// while(i< number.length){
//     if(number[i]>50){
//         console.log(number[i]);
//         break
//     }
//     i++
// }





