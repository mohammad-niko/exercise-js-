//?Q-1:solve these puzzles by follow these steps:
//todo-1:Write a code to show if it is triangle or not and which type of triangle is this by its angles(you have to use if, else if, else, ||, &&) :
//todo-2:Is it  a triangle or not?
//todo-3. Is it an equilateral triangle?
//todo-4.Is it a right triangle ?

let angle1 = 60;
let angle2 = 60;
let angle3 = 60;

if (angle1 + angle2 + angle3 === 180) {
    if (
        angle1  === 60 &&
        angle2  === 60 &&
        angle3  === 60
    ) {
        console.log("equilateral triangle");
    } else if(
    angle1 === 90 ||
    angle2  === 90 ||
    angle3 === 90)
    {
        console.log("right triangle");
    }else{
        console.log("this is triangle");
    }
} else {
  console.log("Are you shuer?");
}

//Q-2:Which one is truthy ?
/* 

1) ''
2) ""
3) "false"  //this
4) 0

*/
