/*
14. Write a function that takes a sentence as a parameter and returns the longest word of the sentence.
Example ===> "kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam" = 
یه رقصمون نشه؟
azaraaaam
*/

// function longestWord(sentence) {
//   if (typeof sentence !== "string") return "invalid value";
//   let longest = sentence.split(" ");
//   longest.sort((a, b) => b.length - a.length);
//   return longest[0];
// }

console.log(
  longestWord(
    "kaftar kakol be sar hay hay, in khabar az man bebar vay vay, bego be yaram nakon azaraaaam"
  )
);

function longestWord(sentence) {
  if (typeof sentence !== "string") return "invalid value";
  let splitSentence = sentence.split(" ");
  let wordLength = "";

  for (let word of splitSentence) {
    if (word.length > wordLength) {
        wordLength = word;
    }
  }
  return wordLength;
}
