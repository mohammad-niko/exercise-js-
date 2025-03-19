// ? Question-3:write a function to remove all the items which are number from the array and return the array
const notNumberArray = ["1", 1, "100", 100, "-9", 2, 96, -22, "", true, null]; // => ['1','100', '-9', '', true, null]

// !Answer:
function removeNumbers(notNumber) {
  for (let i = notNumber.length - 1; i >= 0; i--) {
    if (typeof notNumber[i] === "number") {
      return notNumber.splice(i, 1);
    }
  }
}
removeNumbers(notNumberArray);
console.log(notNumberArray);
