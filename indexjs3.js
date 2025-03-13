// Functions:

// function introduce(name, age, city) {
//   console.log(`hi my name is ${name} i'm ${age} and i live in ${city}`);
// }

// introduce("mmad", 20, "tabriz");
// function calculateArea(tool, arze) {
//   console.log(tool * arze);
// }

// calculateArea(7 , 10);

// function circal(shoa) {
//   return shoa ** 2 * Math.PI;
// }
// let result = circal(8).toFixed(2);
// console.log(+result);

// function calculateArea(length , width){
//     let area = length * width ;
//     let paramiter = (length + width) * 2

//     return  [area , paramiter]
// }

// let result2 = calculateArea( 2  , 9) ;
// console.log(result2);

// function plus(a, b) {
//   let result = [];

//   result.push(a + b);

//   result.push(a - b);

//   result.push(a * b);

//   if (b / 2 !== 0) {
//     result.push(a / b);
//   } else {
//     result.push("Cannot divide by zero");
//   }

//   return result;
// }

// let lobLobLobLa = plus(5, 7);
// console.log(lobLobLobLa);

// console.log(lobLobLobLa[2]);

// function cAndF(F){

//  let C =((F - 32) * (5 /9));
//  return C

// }

// console.log(cAndF(52));
// --------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------

// function salerSistam(fastName, fastmany) {
//   let fastFood = ["hamebargar", "pizza", "pasta", "koka"];
//   let isPrice;
//   if (fastFood.includes(fastName)) {
//     if (fastName === "hamebargar") {
//       isPrice = 10 * fastmany;
//     } else if (fastName === "pizza") {
//       isPrice = 15 * fastmany;
//     } else if (fastName === "pasta") {
//       isPrice = 8 * fastmany;
//     } else if (fastName === "koka") {
//       isPrice = 2 * fastmany;
//     }
//   } else {
//     isPrice = "Food not fuond!";
//   }

//   let withOff;
//   if (typeof isPrice === "number") {
//     if (fastmany > 5) {
//       switch (fastmany) {
//         case 6:
//           withOff = isPrice - 2;
//           break;

//         case 7:
//           withOff = isPrice - 2.5;
//           break;

//         case 8:
//           withOff = isPrice - 3;
//           break;

//         case 9:
//           withOff = isPrice - 3.5;
//           break;

//         case 10:
//           withOff = isPrice - 3.6;
//           break;

//         default:
//           withOff = isPrice - 5;
//       }
//     } else {
//       withOff = isPrice;
//     }
//   }else {
//     withOff = isPrice;
//   }
//   return `${fastName} $ ${withOff}`;
// }

// let karbar = prompt("what would you like? hamebargar, pizza , pasta , koka")
//   .trim()
//   .toLowerCase();
// let howMach = +prompt("how many do you want");
// console.log(salerSistam(karbar, howMach));

// اینو یادم باشه که چطور از ترنری استفاده کرده
// let discount = fastmany >= 10 ? 3.6 :
//               fastmany >= 9 ? 3.5 :
//               fastmany >= 8 ? 3 :
//               fastmany >= 7 ? 2.5 :
//               fastmany >= 6 ? 2 : 5;

// withOff = isPrice - discount;

// -----------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

// To do list:

// const tasks = ["exercis js", "learning English", "personal development"];
// const toggleTask = ["fnisht", "fnisht", "Nall"];
// const promptUser = prompt("enter action:add,remov,toggleTask,show list, search")
//   .toLowerCase()
//   .trim();

// console.log(doSomeThing(promptUser));
// function doSomeThing(item) {
//   if (item === "add") {
//     const newtask = prompt("what do you want add your task 😃")
//       .toLowerCase()
//       .trim();
//     const priorityTask = prompt("enter task priorty (high, medium, low):  ")
//       .trim()
//       .toLowerCase();
//     switch (priorityTask) {
//       case "high":
//         tasks.unshift(newtask);
//         return `Task added with high priority: ${newtask}`;
        
//       case "medium":
//         tasks.push(newtask);
//         return `Task added with medium priority: ${newtask}`;
       
//       case "low":
//         tasks.push(newtask);
//         return `Task added with low priority: ${newtask}`;
        
//       default:
//         return "invalid task";
//     }
//   } else if (item === "remove") {
//     let removeTask = prompt("Enter task to remove:").trim().toLowerCase();
//     if (tasks.includes(removeTask)) {
//       tasks.splice(tasks.indexOf(removeTask), 1);

//       return `"Task removed:" ${removeTask} and "Updated tasks:" ${tasks} `;
//     } else {
//       return "Task not found!"
     
//     }
//   } else if (item === "toggleTask") {
//     const findTaskForToggle = prompt(
//       "so you want edit  or add new toggle. which own?"
//     ).trim().toLowerCase();

//     if (findTaskForToggle === "edit") {
//       const indexTask = tasks.indexOf(prompt("which task?"));
//       toggleTask[indexTask] = prompt("ok.Edit it").trim().toLowerCase();
//       return;
//     } else if (findTaskForToggle === "add") {
//       toggleTask.push(prompt("type what do you love🙂").trim().toLowerCase());
//       return;
//     }
//   } else if (item === "show list") {
//     return `Current tasks: ${tasks.join(', ')}`;
   
//   } else if (item === "search") {
//     const searchTask = prompt("type for search").trim().toLowerCase();
//     const findOrNot = tasks.includes(searchTask) ? "find task😃" : "can't find";
//     return findOrNot;
//   } else {
//     return "⚠️ Invalid action!"
//   }
// }






// کد پاینی کد پیشرفته تر و بهینه ت رکدی که چت نوشته

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const toggleTask = JSON.parse(localStorage.getItem("toggleTask")) || [];

const promptUser = prompt("Enter action: add, remove, toggleTask, show list, search").toLowerCase().trim();

console.log(doSomething(promptUser));

function doSomething(action) {
  switch (action) {
    case "add":
      return addTask();
    case "remove":
      return removeTask();
    case "toggleTask":
      return toggleTaskAction();
    case "show list":
      return showList();
    case "search":
      return searchTask();
    default:
      return "⚠️ Invalid action!";
  }
}

function addTask() {
  const newTask = prompt("What task would you like to add? 😃").toLowerCase().trim();
  if (!newTask) return "⚠️ Task cannot be empty!";
  
  const priority = prompt("Enter task priority (high, medium, low):").toLowerCase().trim();
  if (!["high", "medium", "low"].includes(priority)) return "⚠️ Invalid priority!";

  if (priority === "high") {
    tasks.unshift(newTask);
  } else {
    tasks.push(newTask);
  }

  saveData();
  return `Task added with ${priority} priority: ${newTask}`;
}

function removeTask() {
  const removeTask = prompt("Enter task to remove:").toLowerCase().trim();
  if (!removeTask) return "⚠️ Task name cannot be empty!";
  
  const index = tasks.indexOf(removeTask);
  if (index === -1) return `⚠️ Task "${removeTask}" not found!`;
  
  tasks.splice(index, 1);
  saveData();
  return `"Task removed: ${removeTask}"`;
}

function toggleTaskAction() {
  const actionType = prompt("Do you want to edit or add a toggle? (edit/add)").toLowerCase().trim();
  if (actionType === "edit") {
    return editTaskToggle();
  } else if (actionType === "add") {
    return addToggle();
  } else {
    return "⚠️ Invalid action for toggle!";
  }
}

function editTaskToggle() {
  const taskToEdit = prompt("Which task would you like to edit?").toLowerCase().trim();
  const index = tasks.indexOf(taskToEdit);
  if (index === -1) return `⚠️ Task "${taskToEdit}" not found!`;
  
  const newToggle = prompt("Edit the toggle status:").toLowerCase().trim();
  toggleTask[index] = newToggle;
  saveData();
  return `Task "${taskToEdit}" updated with toggle: ${newToggle}`;
}

function addToggle() {
  const newToggle = prompt("Type what you love 🙂").toLowerCase().trim();
  toggleTask.push(newToggle);
  saveData();
  return "New toggle added!";
}

function showList() {
  if (tasks.length === 0) return "No tasks available!";
  
  let taskList = "Current tasks: \n";
  tasks.forEach((task, index) => {
    taskList += `${task} - Status: ${toggleTask[index] || "Not Set"}\n`;
  });
  return taskList;
}

function searchTask() {
  const searchQuery = prompt("Enter task to search:").toLowerCase().trim();
  const found = tasks.includes(searchQuery);
  return found ? `Task found: ${searchQuery}` : `Task ${searchQuery}not found!`;
}

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  localStorage.setItem("toggleTask", JSON.stringify(toggleTask));
}