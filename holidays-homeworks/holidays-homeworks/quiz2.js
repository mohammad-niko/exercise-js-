/*
2. Write a function that converts a 2D array into a 1D array.
Example ===> [[1, 2, 3], [4, 5, 6], [7, 8, 9]] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
// with .map()


console.log(Falt([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

function Falt(towDarray){
    let arr = [];
    let oneDArray = towDarray.join(",");

let rezlt =  oneDArray.split(",").map(chr => arr.push(parseInt(chr)))//دیگه از این بهتر روش دیگ9ه ای به ذهنم نرسید

    return arr
}


// function Falt(towDarray){
//      let oneDArray = towDarray.flat()
//      return  oneDArray
// }