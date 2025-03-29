/*
7. Write a function to find the number of common elements of both arrays.
Example ===> [1, 2, 3, 4], [1, 2, 3, 5] = 3
*/


function common(arr1 , arr2){
let commonNumbers = 0;
    for(let i = 0 ; i < arr1.length ; i++ ){
        for (let o = 0 ; o < arr2.length ;  o++){
            if(arr1[i] === arr2[o]) {
                commonNumbers++
            }
        }
    }
return commonNumbers
};
console.log(common([1, 2, 3, 4 , 10 , 18 , 9],[1, 2, 3, 5 , 14 , 10 , 25 ,9]));



function common(arr1 , arr2){
    let Calculate = arr1.filter(element => arr2.includes(element) )
return Calculate.length;
}