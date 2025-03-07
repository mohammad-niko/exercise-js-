// Switch Statement:

// let num = Math.ceil(Math.random() * 100)

// switch (num % 2){
//     case 0 :
//     console.log("even")
//     break;
//     default:
// console.log("odd");
// }

// new date :
// اینو یادم باشه که سوییچ مقدار ثابت میگیرد
// let time = new Date().getDay();

// switch (time) {
//   case 0:
//     console.log("sunday");
//     break;
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("tuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//  case 6:
//     console.log("saturday");
// default:
//     console.log("relly?");
// }

// Array:

// let fruits = ["apple", "orange", "painaaple"];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[2]);
// console.log(fruits[3] = "bluebary");
// console.log(fruits[1] = "bnanan");
// console.log(Object.keys(fruits));

// methhods:

// const numbers = [""];
// numbers.push(1, 2, 3, 4, 5);
// numbers.unshift(-1, 0);
// numbers.pop();
// numbers.shift()
// numbers[1]= 0.5;
// console.log(numbers);

// reverse:

// let original = [1, 2, 3, 4];
// let reversed = [...original].reverse();
// console.log(original); // تغییر نکرده: [1, 2, 3, 4]
// console.log(reversed); // خروجی: [4, 3, 2, 1]

// exers:

// let city = ["tariz", "shiraz", "ormo", "marand"];
// console.log(city.includes("thran"));
// console.log(city.indexOf("shiraz"));
// let cityreversed = [...city].reverse();
// console.log(cityreversed);
// console.log(city.slice(0, 2));
// city.splice(1, 0, "jolfa");
// let citysotr =[...city].sort();
// console.log(citysotr);
// console.log(city);

// let num = [1, 200, 650, 787 , 500];
// console.log(num.sort());

// let num2 = [5 , 100 , 22 , 3 , 45 ];
// num2.sort((a , b ) => a - b)
// // console.log(num2.sort((a , b ) => a - b));
// // console.log(num2.sort((a , b ) => b - a ));
// let numWithSort = num2.sort((a , b ) => b - a);
// let numSortReverse = [...numWithSort].reverse()
// console.log(numSortReverse);

// // array.filter((عنصر) => شرط مورد نظر);
// // if strting --------------->.filter( p => p.length > 3 )
// let mantors = ["mohammad", "ali", "hasanc", "jasa", "a"];
// const nameWithsort = [...mantors].sort((a, b) => a.length - b.length);
// console.log(nameWithsort.filter((p) => p.length > 3));

// // if number ---------------> .filter(p => = p > 10);
// let price = [1200, 300, 4500, 150];
// let priceSort = [...price].sort((a, b) => a - b);
// console.log(priceSort.filter((p) => p > 500));

// even or odd:
// let promptMath = +prompt('say a random number') ;
// let numArray = [ 7 , 65 , 37 , 550] ;
// numArray.push(promptMath) ;
// console.log(numArray);
// let numWithSort = [...numArray].sort((a , b) => b - a) ;
// let numSortFilter = numWithSort.filter( p => p % 2 === 0 && p > 10 && p < 100)
// ;

// let mantors = ["mohammad", "ali", "hasanc", "jasa", "a"];
// const nameWithsort = [...mantors].sort((a, b) => a.length - b.length);
// console.log(nameWithsort.filter((p) => p.includes('m')));

// excer:

// let task = ["book", "excer", "play", "runing"];
// let action = prompt(
//   `add , removelast , removefirst , list , revrse , search  `
// );

// switch (action) {
//   case "add":
//     task.push(prompt("add new task"));
//     console.log(task);
//     break;
//   case "removefirst":
//     task.shift();
//     console.log(task);
//     break;
//   case "removelast":
//     task.pop();
//     console.log(task);
//     break;

//   case "list":
//     console.log(task);
//     break;

//   case "revrse":
//     let lastOrFirst = prompt("all or last");
//     switch (lastOrFirst) {
//       case "first":
//         console.log(task);
//         break;
//       case "last":
//         let taskReversed = [...task].reverse();
//         console.log(taskReversed);
//         break;
//       default:
//         console.log("have you problm😐?");
//     }
//     break;

//   case "search":
//     let searchTask = prompt("enter task to search");
//     if (task.includes(searchTask)) {
//       console.log("Good luck! Task found");
//     } else {
//       console.log("you don't have tihs task");
//     }
//     break;
//   default:
//     console.log("Invalid action!");
// }

let tasks = ["learn j", "go to gym", "play game", "run"];
let action = prompt("enter action: add , remove , search ")
  .trim()
  .toLowerCase();

switch (action) {
  case "add":
    let newTask = prompt("enter new task").trim().toLowerCase();
    let priority = prompt("enter task priorty (high, medium, low):  ")
      .trim()
      .toLowerCase();
    switch (priority) {
      case "high":
        tasks.unshift(newTask);
        console.log("High priority task added:", newTask);
        console.log(tasks);

        break;
      case "medium":
        tasks.push(newTask);
        console.log("medium priority task added:", newTask);
        console.log(tasks);
        break;

      case "low":
        tasks.push(newTask);
        console.log("low priority task added:", newTask);
        console.log(tasks);
        break;
      default:
        console.log("Invalid priority!");
    }
    break;

  case "remove":
    let removeTask = prompt("Enter task to remove:").trim().toLowerCase();
    if (tasks.includes(removeTask)) {
      tasks.splice(tasks.indexOf(removeTask), 1);
      console.log("Task removed:", removeTask);
      console.log("Updated tasks:", tasks);
    } else {
      console.log("Task not found!");
    }
    break;

  case "search":
    let searchTask = prompt("Enter to search:").trim().toLowerCase();
    if (tasks.includes(searchTask)) {
      console.log("task found:", searchTask);
    } else {
      console.log("task not found");
    }
    break;

  default:
    console.log("Invalid action!");
}
