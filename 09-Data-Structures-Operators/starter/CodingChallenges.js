const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// // Coding Challenge #1
// // 1. Create players arrays for each team
// const players1 = game.players[0];
// const players2 = game.players[1];

// // 2. Create a var for the goalie and an array of all field players (use deconstruction)
// const [gk, ...fieldPlayers] = players1;

// // 3. Create an array of all players
// const allPlayers = [...players1, ...players2];

// // 4. During the game, Team 1 used 3 subs, create an array with all og players plus subs
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// // 5. based on object games.odds, create a var for each odd
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// // 6. Create a function that take an arbitrary number of player names,prints them to the consol, and returns the number
// function printGoals(...players) {
//   let goals = 0;
//   for (let i = 0; i < players.length; i++) {
//     goals++;
//     console.log(players[i]);
//   }
//   console.log(goals);
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // 7. lower odds means more likely to win, print which team is most likely to win without using ternary or if/else
// team1 < team2 && console.log('Team 1 is more likely to win!');
// team2 < team1 && console.log('Team 2 is more likely to win!');

// // Coding Challenge #2
// // 1. Loop over the game.scored array and print each player name to the console,
// // along with the goal number (Example: "Goal 1: Lewandowski")
// for (const [goal, player] of game.scored.entries()) {
//   console.log(`Goal ${goal + 1}: ${player}`);
// }
// // // 2. Use a loop to calculate the average odd and log it to the console (We already
// // // studied how to calculate averages, you can go check if you don't remember)
// const odds = Object.values(game.odds);
// let oddsAvg = 0;
// for (const odd of odds) {
//   oddsAvg += odd;
// }
// oddsAvg /= odds.length;
// console.log(oddsAvg);

// // // 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// // // Odd of victory Bayern Munich: 1.33
// // // Odd of draw: 3.25
// // // Odd of victory Borrussia Dortmund: 6.5
// // // Get the team names directly from the game object, don't hardcode them
// // // (except for "draw"). Hint: Note how the odds and the game objects have the
// // // same property names
// console.log(Object.entries(game.odds));
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}: `;
//   console.log('Odds of ' + teamStr + odd);
// }
// // // Bonus: Create an object called 'scorers' which contains the names of the
// // // players who scored as properties, and the number of goals as the value. In this
// // // game, it will look like this:
// // // {
// // //   Gnarby: 1,
// // //   Hummels: 1,
// // //   Lewandowski: 2
// // // }
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// //console.log(scorers);
// console.log(Object.keys(game));
// console.log(Object.values(game));
// console.log(Object.entries(game));
// console.log(game.scored.entries());

// // Coding Challenge #3
// // Let's continue with our football betting app! This time, we have a map called
// // 'gameEvents' (see below) with a log of the events that happened during the
// // game. The values are the events themselves, and the keys are the minutes in which
// // each event happened (a football game has 90 minutes plus some extra time).
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '🔁 Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '🔁 Substitution'],
//   [64, '🔶 Yellow card'],
//   [69, '🔴 Red card'],
//   [70, '🔁 Substitution'],
//   [72, '🔁 Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🔶 Yellow card'],
// ]);

// // // 1. Create an array 'events' of the different game events that happened (no
// // // duplicates)
// const events = new Set(gameEvents.values());
// console.log(events);

// // // 2. After the game has finished, is was found that the yellow card from minute 64
// // // was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
// console.log(gameEvents);
// // // 3. Compute and log the following string to the console: "An event happened, on
// // // average, every 9 minutes" (keep in mind that a game has 90 minutes)
// console.log(
//   `An event happeend, on average, every ${90 / gameEvents.size} minutes`
// );
// // // 4. Loop over 'gameEvents' and log each element to the console, marking
// // // whether it's in the first half or second half (after 45 min) of the game, like this:
// // // [FIRST HALF] 17: ⚽ GOAL
// for (const [minute, gEvent] of gameEvents) {
//   const half = minute < 45 ? 'FIRST' : 'SECOND';
//   console.log(`[${half} HALF] ${minute}: ${gEvent}`);
// }

// // Coding Challenge #4
// // Write a program that receives a list of variable names written in underscore_case
// // and convert them to camelCase.
// // The input will come from a textarea inserted into the DOM (see code below to
// // insert the elements), and conversion will happen when the button is pressed.
// // Test data (pasted to textarea, including spaces):
// // underscore_case
// //  first_name
// // Some_Variable
// //   calculate_AGE
// // delayed_departure
// // Should produce this output (5 separate console.log outputs):
// // underscoreCase      ✅
// // firstName           ✅✅
// // someVariable        ✅✅✅
// // calculateAge        ✅✅✅✅
// // delayedDeparture    ✅✅✅✅✅
// // Hints:
// // § Remember which character defines a new line in the textarea 😉
// // § The solution only needs to work for a variable made out of 2 words, like a_b
// // § Start without worrying about the ✅. Tackle that only after you have the variable
// // name conversion working 😉
// // § This challenge is difficult on purpose, so start watching the solution in case
// // you're stuck. Then pause and continue!

// // Afterwards, test with your own test data!

// // GOOD LUCK 😀

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btn = document.querySelector('button');

//console.log(text);
btn.addEventListener('click', function () {
  const text = document.querySelector('textarea').value.toLowerCase();
  const lines = text.split('\n');
  for (const [i, line] of lines.entries()) {
    let [pre, post] = line.trim().split('_');
    post = post.replace(post[0], post[0].toUpperCase());
    const output = `${pre}${post}`;
    console.log(output.padEnd(20, ' ') + '✅'.repeat(i + 1));
  }
});
