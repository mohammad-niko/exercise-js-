/**
 * /*
 * john and mike both play basketball in diffrent teams. in the latest 3 games,
 *  john's team scored 89 , 120 and 103 points, while mike's team scored 116, 94 and 123 points.
 * 1. calculate the average score for each team.
 * 2. decide which teams wins in average( highest average score), and print the winner
 * to the console. also include the average score in the output.
 * 3. then change the scores to show diffrent winners . don't forget to take into
 *  account there might be a draw (the same average score)
 *
 * 4. EXTRA : Mary also plays basketball , and her team scored 97 , 134 and 105 points .
 *  like before , log the average winner to the console. Hint: you will need the && operator to
 *   take the decision .
 *
 * 5 . change the scores to generate diffrent winners , keeping in mind there might be draws.
 *
 * Gook Luck :D
 *
 *
 *
 *
 *
 *
 *
 *
 * john and his family went on a holiday and went to 3 diffrent restaurants. the bill s were $124 ,
 *  $48 and $268 .
 * to tip the waiter a fair amount , john created a simple tip calculator (as a function).
 *  He likes to tip %20 of the bill when the bill is less than $50 , 15% when the bill is between
 *   $50 and $200 , and 10% if the bill is more than $200.
 * In the end. John would like to have 2 arrays :
 * 1) containing all three tips (one for each bill)
 * 2) containing all three final paid amounts (bill + tip)
 *  Good Luck
 *
 * @format
 */
// part one :
const mike = [1, 2, 3];
const jan = [1, 2, 3];
function average(mike, jan) {
    if (!Array.isArray(mike) && !Array.isArray(jan) && mike.length === 0 && jan.length === 0)  return "⚠️ Cannot calculate average!";
    
  let fullNumMike = 0;
  let fullNumJan = 0;
  for (let a = 0; a < mike.length; a++) {
    fullNumMike = fullNumMike + mike[a];
  }
  for (let b = 0; b < jan.length; b++) {
    fullNumJan = fullNumJan + jan[b];
  }
  fullNumMike = fullNumMike / mike.length ;
  fullNumJan = Math.round(fullNumJan / jan.length );
  // console.log(`average  mike : ${fullNumMike}`);
  // console.log(`average jan : ${fullNumJan}`);
  let averageScore = [];
  averageScore.push(fullNumMike, fullNumJan);
  return averageScore;
}

function compar(avreageArr) {
  
  if (avreageArr[0] > avreageArr[1])
    return `high point : mike team ${avreageArr[0]}`;
  else if (avreageArr[0] < avreageArr[1])
    return `high poin : jan team${avreageArr[0]}`;
  else if (avreageArr[0] === avreageArr[1])
    return `🏆 We have a tie!  
✨ Mike: ${avreageArr[0]}  
✨ John: ${avreageArr[1]}  
Everyone played amazingly well! 🔥`;
  else return "inavled value";
}

console.log(compar(average(mike, jan)));

const mary = [1, 2, 3];
function addMary(mary) {
    if (!Array.isArray(mary) || mary.length === 0) return "⚠️ Cannot calculate average!";
    
  let fullNumMary = 0;
  for (let c = 0; c < mary.length; c++) {
    fullNumMary = fullNumMary + mary[c];
  }
  fullNumMary = fullNumMary / mary.length;
  console.log(`average mary : ${fullNumMary}`);
  return fullNumMary;
}

function lastCompar(janAndMikeTeam, maryTeam) {
  if (janAndMikeTeam[0] > janAndMikeTeam[1] && janAndMikeTeam[0] > maryTeam)
    return `high point : mike team ${janAndMikeTeam[0]}`;
  else if (
    janAndMikeTeam[1] > janAndMikeTeam[0] &&
    janAndMikeTeam[1] > maryTeam
  )
    return `high point : jan team ${janAndMikeTeam[1]}`;
  else if (maryTeam > janAndMikeTeam[0] && maryTeam > janAndMikeTeam[1])
    return `high point : mary team ${maryTeam}`;
  else if (maryTeam === janAndMikeTeam[1] && maryTeam === janAndMikeTeam[0])
    return `🏆 We have a tie!  
✨ Mike: ${janAndMikeTeam[0]}  
✨ John: ${janAndMikeTeam[1]}  
✨ Mary: ${maryTeam}  
Everyone played amazingly well! 🔥`;
  else return "invaid value";
}

console.log(lastCompar(average(mike, jan), addMary(mary)));
