//?:Write two functions:
//todo-1: one to calculate the area of a circle
//todo-2:and another to calculate the circumference.
//hint: (area = r*r*pi, circumference = 2*r*pi)
//example: area(3) = 28.27, 		circumference(3) = 18.85



function calculateCircleArea(area){
    let mathPi = Math.PI.toFixed(2)
    return mathPi * (area * area) ;
}
 console.log(calculateCircleArea(3));



function calculateCircleCircumference(area){
    let mathPi = Math.PI.toFixed(2);
    return area * (mathPi * 2)
}
console.log(calculateCircleCircumference(3));