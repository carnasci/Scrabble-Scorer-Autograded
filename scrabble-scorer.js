// This assignment is inspired by a problem on Exercism (https://exercism.org/tracks/javascript/exercises/etl) that demonstrates Extract-Transform-Load using Scrabble's scoring system. 

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt(word) {
   word = input.question("Let's play some scrabble! Enter a word:");
   return word;
};
//console.log(oldScrabbleScorer(word));
//let simpleScorer = simpleScorer();
let simpleScorer = function simpleScorer(word){
   score = word.length;
return score;
};

//let vowelBonusScorer = vowelBonusScorer();
let vowelBonusScorer = function vowelBonusScorer(word){
   let vowels = ["a", "e", "i", "o", "u"];
   let score = 0;
   for (let i = 0; i<word.length; i++){
      if (vowels.includes(word[i].toLowerCase())){
         score +=3;
      } else if (vowels.includes(word[i].toLowerCase()) === false){
         score++
      }
   } return score;
};

 
   let scrabbleScorer = function scrabbleScorer(word){
      //word.toLowerCase();
      let score = 0;
      for (i = 0; i < word.length; i++){
                
               score+= Number(newPointStructure[word[i]]);
               //console.log(score);   
      } return score;
   }
let scrabble = {
   name: "Scrabble",
   description: "The traditional scoring algorithm.",
   scorerFunction: scrabbleScorer
};

let simpleScore = {
   name: "Simple Score",
   description: "Each letter is worth one point.",
   scorerFunction: simpleScorer
};

let bonusVowels = {
   name: "Bonus Vowels",
   description: "Vowels are 3pts, consonants are 1 pt.",
   scorerFunction: vowelBonusScorer
};

const scoringAlgorithms = [simpleScore, bonusVowels, scrabble];

function scorerPrompt() {
   let algorithmChoice = input.question(`Which scoring algorithm would you like to use? 
                  \n\n0 - Simple: One point per character
                  \n1 - Vowel Bonus: Vowels are worth 3 points
                  \n2 - Scrabble: Uses Scrabble point system
                  \nEnter 0, 1, or 2:`);
      /*if (algorithmChoice === String || 2 < algorithmChoice < 0){
         console.log("Please input a number from 0 to 2")
      } else*/
      
   //return `Score for '${initialPrompt}': ${scoringAlgorithms[algorithmChoice].scorerFunction(initialPrompt)}`;
   return scoringAlgorithms[algorithmChoice];
};
function transform(oldPointStructure) {
   newPointObject = {};
   //newPointObject[" "] = 0;
   for (item in oldPointStructure) {
      let array = (oldPointStructure[item]);
         array = ((array.join(",")).toLowerCase()).split(",");
      for (let i = 0; i < array.length; i++){
         newPointObject[array[i]] = Number(item);
         
      }
   } return newPointObject;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   //console.log(newPointStructure)
   let userWord = initialPrompt().toLowerCase();
   let scorerAlgorithm = scorerPrompt();
   console.log(`Score for '${userWord}': ${scorerAlgorithm.scorerFunction(userWord)}`);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScorer: simpleScorer,
   vowelBonusScorer: vowelBonusScorer,
   scrabbleScorer: scrabbleScorer,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};
