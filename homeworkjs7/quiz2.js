// ? Question-2:write a function to find the biggest number in this  array and push it to a new array
const findBigNumber = [5, 2, -10, 50, 35];
let biggestNumbersArray = [];
// !Answer:
function biggest(findBiggestNumber) {
    //first metode:
//   let sortArray = [...findBiggestNumber].sort((a, b) => a - b);
//   let lastItem = sortArray[sortArray.length - 1];
//   return biggestNumbersArray.push(lastItem);

// secend metode:
let max = findBiggestNumber[0]
for(let  i = 1 ; i < findBiggestNumber.length ; i++){
    if (findBiggestNumber[i] > max){
        max= findBiggestNumber[i]
    }
}
 return biggestNumbersArray.push(max)
}

biggest(findBigNumber);
console.log(biggestNumbersArray);
