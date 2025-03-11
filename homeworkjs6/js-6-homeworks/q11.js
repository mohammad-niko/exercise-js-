//?:Write a function called operation that calculate the square, double and cube of a number
// Get a number and operator from the user and calculate the number based on the operator.(^=square, **=double, ***=cube)
//example: operation(3, ‘^’) = 9, 		operation(3, ‘**’) = 6, 	operation(3, ‘***’) = 27







function operation(number , operator ){
    if (operator == "^"){
        return  number * number 
    }else if(operator == "**"){
        return  number * 2 
    }else if(operator == "***"){
        return number ** 3
    }else {
        return 'Invalid operator';  // اگر عملگر اشتباه وارد شود
      }
}
console.log(square(3 , "***"));