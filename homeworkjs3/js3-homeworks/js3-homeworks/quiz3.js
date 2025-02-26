//3) Write a code that hides email addresses by replacing the first 5 characters with ( * ) to
// prevent unauthorized access.
// Fitzzgerald@gmail.com => *****gerald@gmail.com
// const email = "Fitzzgerald@gmail.com";
// let email1= "*****" + email.slice(5);
// console.log(email1)


const email3 = "moahammadniko@gmail.com";
let email4= "*****" + email3.slice(5);
console.log(email4)

const email5 =prompt("enter your email").trim() ;
let email6= "*****" + email5.slice(5);
if (email5.includes("@")){
    if(email5.endsWith("gmail.com")){
        let maskedEmail = email5.length > 5 ? "*****" + email5.slice(5) : "*****";  
        console.log(`holle welcom😎 (yor email ${maskedEmail})`)  
    }
    else{
        console.log("don't forgt: gmail.com🫡")
    }
}

else{
    console.log("do you want sing up or not😑")
}
//  پایینی رو یه لحضه به فکر زد که خودشو بزنم بعد دیگه ننرفتم فایل دیگه همین جا زدم کد شو



