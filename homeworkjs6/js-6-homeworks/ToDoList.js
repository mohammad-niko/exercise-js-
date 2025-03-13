// لطف کنید کد پایین رو برسی کنید اگه مشکلی داشت یا چیزی نیاز بود بهم بگید

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

// اینم روش دومش

const tasks = ["exercis js", "learning English", "personal development"];
const promptUser = prompt("enter action:add,remove,show list, search")
  .toLowerCase()
  .trim();
console.log(doSomeThing(promptUser));
function doSomeThing(action) {
  switch (action) {
    case "add":
      return addTask();
    case "remove":
      return removeTask();
    case "show":
      return showTask();
    case "search":
      return searchTask();
  }
}
// ----------------------------------------------add task----------------------------------------------
function addTask() {
  const newTask = prompt("What task would you like to add? 😃");
  if (!newTask) return "⚠️ Task cannot be empty!";
  newTask = newTask.toLowerCase().trim();
  const priority = prompt("Enter task priority (high, medium, low):")
    .toLowerCase()
    .trim();
  if (!["high", "medium", "low"].includes(priority))
    return "⚠️ Invalid priority!";

  if (priority === "high") {
    tasks.unshift(newTask);
  } else {
    tasks.push(newTask);
  }

  return `Task added with ${priority} priority: ${newTask} your task update ✅:${tasks}`;
}
// ----------------------------------------------remove task----------------------------------------------

function removeTask() {
  const taskNew = prompt("Enter task to remove:");
  if (!taskNew) return "⚠️ Task name cannot be empty!";
  taskNew = taskNew.toLowerCase().trim();
  const indexTask = tasks.indexOf(taskNew);
  if (indexTask === -1) return `⚠️ Task ${taskNew} not found!`;
  tasks.splice(indexTask, 1);
  return `Task removed: ${taskNew} your task update ✅ ${tasks}`;
}
// --------------------------------------------------show Task-------------------------------------------

function showTask() {
  if (tasks.length === 0) return "No tasks available!";
return `your task: ${tasks}`
}
// --------------------------------------------------search Task-------------------------------------------
function searchTask(){
    const tasSearch = prompt("Enter task to search:").toLowerCase().trim();
    const found = tasks.includes(tasSearch);
    return found ? `Task found: ${tasSearch}` : `Task ${tasSearch}not found!`;
}