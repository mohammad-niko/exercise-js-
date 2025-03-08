//?Q-6:Read these documents and write an example for each method.
//todo-1:https://www.programiz.com/javascript/library/array/includes
//todo-2:https://www.programiz.com/javascript/library/array/indexof
//todo-3:https://www.programiz.com/javascript/library/array/slice
//todo-4:https://www.programiz.com/javascript/library/array/sort

let shopingList = ['Milk' , 'Bread' , 'Eggs' , 'Butter' , 'cheese' , 'Tomatoes'];

console.log(shopingList.slice(0 , 3));

console.log(shopingList.includes('Eggs'));

console.log(shopingList.indexOf('Bread'));

console.log(shopingList.sort());
// حالا چوئن کمن منظورتون رو متوجه نمیشم که منظورتون بالایی هست یا نه اینا رو هم اضافه میکنم

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




let promptMath = +prompt('say a random number') ;
let numArray = [ 7 , 65 , 37 , 550] ;
numArray.push(promptMath) ;
console.log(numArray);
let numWithSort = [...numArray].sort((a , b) => b - a) ;
let numSortFilter = numWithSort.filter( p => p % 2 === 0 && p > 10 && p < 100)
;

let mantors = ["mohammad", "ali", "hasanc", "jasa", "a"];
const nameWithsort = [...mantors].sort((a, b) => a.length - b.length);
console.log(nameWithsort.filter((p) => p.includes('m')));