//========================?Q-4==================================
//? write an if statement that types "even" for an even number and "odd" for  an odd numbers  in the console.
let  random =Math.ceil(Math.random()  * 10 );
if(random % 2 === 0 ){
    console.log("even");
}else{
    console.log("odd");
}
let ceil = random % 2 === 0 ?("even") :("odd") ;
console.log(ceil);