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

function salerSistam(fastName, fastmany) {
  let fastFood = ["hamebargar", "pizza", "pasta", "koka"];
  let isPrice;
  if (fastFood.includes(fastName)) {
    if (fastName === "hamebargar") {
      isPrice = 10 * fastmany;
    } else if (fastName === "pizza") {
      isPrice = 15 * fastmany;
    } else if (fastName === "pasta") {
      isPrice = 8 * fastmany;
    } else if (fastName === "koka") {
      isPrice = 2 * fastmany;
    }
  } else {
    isPrice = "Food not fuond!";
  }

  let withOff;
  if (typeof isPrice === "number") {
    if (fastmany > 5) {
      switch (fastmany) {
        case 6:
          withOff = isPrice - 2;
          break;

        case 7:
          withOff = isPrice - 2.5;
          break;

        case 8:
          withOff = isPrice - 3;
          break;

        case 9:
          withOff = isPrice - 3.5;
          break;

        case 10:
          withOff = isPrice - 3.6;
          break;

        default:
          withOff = isPrice - 5;
      }
    } else {
      withOff = isPrice;
    }
  }else {
    withOff = isPrice; 
  }
  return `${fastName} $ ${withOff}`;
}

let karbar = prompt("what would you like? hamebargar, pizza , pasta , koka")
  .trim()
  .toLowerCase();
let howMach = +prompt("how many do you want");
console.log(salerSistam(karbar, howMach));





// اینو یادم باشه که چطور از ترنری استفاده کرده
// let discount = fastmany >= 10 ? 3.6 : 
//               fastmany >= 9 ? 3.5 : 
//               fastmany >= 8 ? 3 : 
//               fastmany >= 7 ? 2.5 : 
//               fastmany >= 6 ? 2 : 5;

// withOff = isPrice - discount;