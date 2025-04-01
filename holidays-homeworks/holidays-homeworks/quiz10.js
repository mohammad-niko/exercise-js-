/*
10. Write a function to remove all characters from a given string that appear more than once.
Example ===> "abcdabc" = d
*/

function remove(chr) {
//   let arr = chr.split("");
//   let rezult = [];
//   for ( let i = 0 ; i < arr.length ; i++ ){
//     if(chr.indexOf(arr[i]) === chr.lastIndexOf(arr[i])){
//         rezult.push(arr[i])
//     }
//   }
//   return rezult
// =============================================================================================================================
return  chr.split("").filter(item => chr.indexOf(item)===chr.lastIndexOf(item))
}

console.log(remove("abcdmabc"));
