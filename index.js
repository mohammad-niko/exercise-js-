// Use Bracket Notation to Find the Last Character in a String
// const lastName = "love you";

// const lastLetterOfLastName = lastName[lastName.length - 1];
// console.log(lastLetterOfLastName);
// Use Bracket Notation to Find the Nth-to-Last Character in a String
// const secondToLastLetterOfLastName = lastName[lastName.length - 2];
// console.log(secondToLastLetterOfLastName);
// Word Blanks
// In JavaScript, strings can be concatenated using the + operator to form a complete sentence.
// const myNoun = "dog";
// const myAdjective = "big";
// const myVerb = "ran";
// const myAdverb = "quickly";
// const wordBlanks =
//   "the" +
//   " " +
//   myAdjective +
//   " " +
//   myNoun +
//   " " +
//   myVerb +
//   " " +
//   myAdverb +
//   ".";
// console.log(wordBlanks);
// توجه داشته باشم که داخل کوتیشن ها نباید بنویسم چون استرینگ میشه و درست اعمال نمشه

// ---------------------------------------------------------------------------------------------------------------------------------------------------
// number:

// let num1 = 133;
// let num2 = 264;

// let sum = num1 + num2;
// console.log(sum);

// let difference = num1 - num2;
// console.log(difference);

// let product = num1 * num2;
// console.log(product);

// let quotient = num1 / num2;
// console.log(quotient);

// string :

// let firstName = "mohammad";
// let lastName = "niko";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// // template literal
// let answer = `my name is ${fullName}`;
// console.log(answer);

// let answerlength = answer.length;
// console.log(` answer length ${answerlength}`);
// ------------------------------------------------------------------------------------------------------------------------------------------

// numbers and Strings :

// let num1 = 15;
// let num2 = 3;

// let all =
//   " one " +
//   (num1 + num2) +
//   " two " +
//   num1 * num2 +
//   " three " +
//   (num1 - num2) +
//   " four " +
//   (num1 % num2) +
//   " five " +
//   num2 / num1 + " six " + (num1 ** num2);
// console.log(all);

// num1 = 20;
// num2 = 35;
// let scoreOne = num1 + 5;
// let scoreTwo = num2 - 10;
// console.log(scoreOne);
// console.log(scoreTwo);

// console.log(" num1 = ", num1);
// console.log(" num2 = ", num2);

// num1++;
// ++num1;
// num2--;
// --num2;
// console.log(num1, num2);

// num1 += 10 ;
// num2 -= 5 ;
// console.log(num1, num2);

// let AdditionAssignment = num1 += num2 ;
// let  SubtractionAssignment  = num1 -= num2 ;
// console.log(AdditionAssignment  , SubtractionAssignment)

// let firstName = "mohammd";
// let lastName = "niko";

// let masagge = `Hello I'm ${firstName} ${lastName} , I try  learn js in 2025 and i wana tnx me...`;
// console.log(masagge);

// const currentYear = 2025;
// const yearOfMyBirth = 2000;

// let myAge = currentYear - yearOfMyBirth;
// let masagge2 = `I'm ${myAge} years old`;
// console.log(masagge2);

// let masaggelength = "masagge.length = " + masagge.length;
// console.log(masaggelength);

// -----------------------------------------------------------------------------------------------------------------------------------------
//  Boolean:

// console.log(Boolean("Hello"));
// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(123));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// این قسمت پایین رو هنوز نخوندیم فقط برای اینکه ببینم پایین نوشتم.
// let age = 15;

// if (age >= 18) {
//   console.log("You are an adult!");
// } else {
//   console.log("You are a minor!");
// }

// let num = 5897 ;

// if (num % 2 === 0){
//   console.log("The number is even")
// } else {
//   console.log("The number is odd");
// }
// --------------------------------------------------------------------------------------------------------------------------------------------

// let firstName = "mohammad";
// let lastName = "niko";
// console.log(firstName[3]);
// let fullName = firstName.concat(" " + lastName);
// console.log(fullName);
// let fullName2 = lastName.concat(" " + firstName);
// console.log(fullName2);

// let masagge = `hello I am ${firstName} ${lastName}`;
// console.log(masagge);

// let age = 25 ;
// let str = firstName + age ;
// console.log(str);
// هرزمان یک نامبر با استرینگ جکع شد یعنی کانکتینیت شد نتیجه همیشه میشه استرینگ
// ------------------------------------------------------------------------------------------------------------------------------------------

// SOME STRING METHODS:
// toUpperCase()
// const greeting = "this is  power";
// let greetingaUper = greeting.toUpperCase();
// console.log("toUpperCase = ", greetingaUper);
// console.log("toLowerCase = ", greetingaUper.toLowerCase());
// const score = " i have space in first and end ";
// console.log("trim = ", score.trim());
// const word = "!JavaScript is awesome";
// console.log("charAt = ", word.charAt(10));
// console.log("substring = ", word.substring(3, 7));
// //  substring
// //   به ما توسط میاد نگاه میکنه مثلا از ایندکس 3 تا هفت رو برامون میاره که چی هست در  این  ایندکس ها.index که بهش میدیم یه
// const masagge = "I love programming";
// console.log("includes = ", masagge.includes("programming"));
// console.log(masagge.includes("play"));
// // includes
// // به ما کمک میکنه تا بتونیم ببینیم در این ورییبل ما کلمه که میخواهیم هست یا نه مثلا در مثال بالا من گفتم که کلمه پروگرمینگ هست در مسیج یا نه اومد گفت اره  هست
// console.log("indexOf = ", masagge.indexOf("v"));
// console.log("indexOf = ", masagge.indexOf("s"));
// // indexof با
// // میتونیم بفهمیم که کاراکتری که میخواهیم در کدوم ایندکس هستش
// // مثال کاربردی در پایین
// let email = "user123@gmail.com";
// let atIndex = email.indexOf("@");

// if (atIndex !== -1) {
//     console.log("این ایمیل معتبر است، نماد '@' در ایندکس: ", atIndex);
// } else {
//     console.log("ایمیل نامعتبر است! نماد '@' وجود ندارد.");
// }
// --------------------------------------------------------------------------------------------------------------------------------------------------

// const sentence = "Javascript is amazing";
// console.log("slice = ", sentence.slice(5, 15));
// console.log("slice = ", sentence.slice(-10));
//  console.log(sentence.slice(sentence.indexOf("is") + 2))
//  تمرین:
//  const email = "user@email.com";
//  console.log(email.slice(email.indexOf("@") + 1))
// const good = "this is a bed idea!";
// console.log(good.replace("bed" , "good"));



// const text = "I fuck you and i fuck you.";
// console.log(text.replaceAll("fuck" , "love" ));

// const line = "fuck love";
// console.log(line.repeat(5));
// const line2 = "-";
// console.log(line2.repeat(10) + "sara" +line2.repeat(10));

// const email5 =prompt("enter your email").trim() ;
// let email6= "*****" + email5.slice(5);
// if (email5.includes("@")){
//     if(email5.endsWith("gmail.com")){
//         let maskedEmail = email5.length > 5 ? "*****" + email5.slice(5) : "*****";  
//         console.log(`holle welcom😎 (yor email ${maskedEmail})`)  
//     }
//     else{
//         console.log("don't forgt: gmail.com🫡")
//     }
// }

// else{
//     console.log("do you want sing up or not😑")
// }

