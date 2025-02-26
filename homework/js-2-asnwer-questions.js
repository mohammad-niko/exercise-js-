// 🌟 Open your vscode, then try to solve the following questions there. Finally, send your javascript file considering your answers.
// 1️⃣. Write a code that capitalizes all letters of your name.

const firstName = "mohammad";
const lastName = "niko";
let fullName = firstName + lastName ;
console.log(fullName.toUpperCase());

// 2️⃣. Write a code that writes all the letters of your name in lowercase.
 console.log(fullName.toLowerCase()) 

// 3️⃣. Write code that shows the length of your name in the output.
console.log(fullName.length) 


// 4️⃣. Write a code that removes the empty space of a string. For example, "   hello    " should be transformed into "hello".
let sms = "   hello    ";
console.log(sms.trim())

// 5️⃣. Write code that stores your first name in one variable and your last name in another, then show them side by side in the console.
// I do it in first  one.

// 6️⃣. Write a code that stores your first and last name in a variable, but only shows the last name in the console. (use string indexing with [])
console.log(fullName.slice(8))
//  حالا منظورتون رو درست متوجه نشدم از استرینگ ایندکس ولی خب..

// 7️⃣. Write a code that shows the following text as string in the console:
// "Lorem ipsum", or "lipsum" as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of "Cicero's De Finibus Bonorum et Malorum" for use in a type specimen book.
let text = `"Lorem ipsum", or "lipsum" as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of "Cicero's De Finibus Bonorum et Malorum" for use in a type specimen book.`;
//  حالا نمیدونم منظورتون این بود که با ذابل کت ها باشند یا نه ح الا میتونستم با استفاده از ${} میتونستم اونا رو هم بر دارم یا اصلا ملا خود دابل ها رو
console.log(text);

// 8️⃣. There is a const variable named "abc" given to you to use for the following questions:
const abc = 'abcdefghijklmnopqrstuvwxyz'
// ● Return your name using the abc variable and string indexing with [].
console.log(abc.replace(`abcdefghijklmnopqrstuvwxyz` , "mohammdniko"))
let name1 = abc[13] + abc[8] + abc[10] + abc[14];
console.log(name1);
// ● Return "APSignals" using the abc variable and string indexing with [].
console.log(abc.replace(`abcdefghijklmnopqrstuvwxyz` , "APSignals"))
let name2 = abc[0] + abc[15] + abc[18] + abc[8] + abc[6] + abc[13] + abc[0] + abc[11];
console.log(name2);
