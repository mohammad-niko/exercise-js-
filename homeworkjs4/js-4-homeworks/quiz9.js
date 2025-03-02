//========================?Q-9==================================

/** @format */

// using if, else if, else write code for below conditions:
/*
    if Shaden is a mentor print out "Hi Shaden, you are a mentor"
    if Shaden is a student print out "Hi Shaden, you are student"
    if Shaden is a teacher print out "Hi Shaden, you are a teacher"
    if she is none of above, print out "Hi Shaden, you should join APS"
*/

let yourName = "Shaden";
let yourRole = "mentor";
 
if (yourName.includes("Shaden") === true ){
if (yourRole.includes("mentor") === true){
    console.log("Hi Shaden, you are a mentor");
}else if (yourRole.includes("student") === true){
    console.log("Hi Shaden, you are student");
}else if (yourRole.includes("teacher") === true){
    console.log("Hi Shaden, you are a teacher");
}else{
    console.log("Hi Shaden, you should join APS");
}
}else{
    console.log("how are you?");
}

/* 
EXPECTED RESULT
---------------
Hi Shaden, you are a mentor.
*/
