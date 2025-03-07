//?Q-3:Consider this array; if it contains the word "javascript", print it to the console."The array contains javascript".
// otherwise print "The array does not contain javascript.
// Please use variables given to you and Do Not change the name of them!!
let programs = ['java', 'kotlin', 'javascript', 'python', 'typeScript'];
let javascriptContain;

switch (programs.includes('javascript')){

    case true :
      javascriptContain = "The array contains javascript" ;
        break
        default:
            console.log("The array does not contain javascript");
}
console.log(javascriptContain);