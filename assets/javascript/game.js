// Setting Variables
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var inningsValue = 9;
var winsValue = 0;
var lossesValue = 0;
var lastGuessValue = "";
var alreadyGuessedValue = [];
var userLastGuess = document.getElementById("lastGuess");
var userAlreadyGuessed = document.getElementById("alreadyGuessed");
var wordsList = ["grandslam", "homerun", "doubleplay", "infieldfly", "ondeck", "pinchhitter", "perfectgame", "nohitter", "dugout", "worldseries"];
var wordsListLength = wordsList.length;

// console.log("inningsValue")

var main = [];
var mainWordArray = [];
var mainWordUnderlined = [];

var mainWord = "test";
var mainWordU = "";

function pullMainWord() {
    var newWord = wordsList[Math.floor(Math.random()* wordsListLength)];
    mainWord = newWord;
    document.getElementById("wordToPlay").textContent = mainWord;
    console.log(mainWord);
}

function setUnderline() {
    pullMainWord();
    for (i = 0; i < mainWord.length; i++) {
        mainWordArray[i] = mainWord.charAt(i);
        console.log(mainWord.charAt(i));
        mainWordUnderlined[i] = "_";
        console.log(mainWordUnderlined[i])
    }
    mainWordU = mainWordUnderlined.join("");
    document.getElementById("wordToPlay").textContent = mainWordU;
}
