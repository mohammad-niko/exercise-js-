/*

1.Write a function that returns the number of vowels in a string.
vowels => a e i o u
Example ===> "Hello" = 2
*/

// function vowels(word) {
//   let arr = [];
//   for (let i = 0; i < word.length; i++) {
//     switch (word[i]) {
//       case "a":
//         arr.push(word[i]);
//         break;
//       case "e":
//         arr.push(word[i]);
//         break;
//       case "i":
//         arr.push(word[i]);
//         break;
//       case "o":
//         arr.push(word[i]);
//         break;
//       case "u":
//         arr.push(word[i]);
//         break;
//     }
//   }
//   return `${word} = ${arr.length}`;
// }

// function vowels(word) {
//   let arr = [];
//   for (let i = 0; i < word.length; i++) {
//     if (
//       word[i] === "a" ||
//       word[i] === "e" ||
//       word[i] === "i" ||
//       word[i] === "o" ||
//       word[i] === "u"
//     ) {
//       arr.push(word[i]);
//     }
//   }
//   return `${word} = ${arr.length}`;
// }

// function vowels(word) {
//   let count = 0;
//   let vowels = "a e i o u A E I O U";

//   for (let char of word){
//     if (vowels.includes(char)){
//         count++
//     }
//   }
//   return `${word} = ${count}`;
// }

function vowels(word) {
  let vowels = "a e i o u A E I O U";
  let count = word.split("").filter((chr) => vowels.includes(chr)).length;
  return `${word} = ${count}`;
}

console.log(vowels("JavaScript"));
