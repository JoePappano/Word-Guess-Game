// Setting Variables
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var inningsValue = 9;
var winsValue = 0;
var lossesValue = 0;
var lastGuessValue = "";
var alreadyGuessedValue = [];
var alreadyGuessedValuePrevious = [];
var userInningsRemaining = document.getElementById("inningsRemaining");
var userLastGuess = document.getElementById("lastGuess");
var userAlreadyGuessed = document.getElementById("alreadyGuessed");
var wordsList = ["grandslam", "homerun", "doubleplay", "infieldfly", "ondeck", "pinchhitter", "perfectgame", "nohitter", "dugout", "worldseries"];
var wordsListLength = wordsList.length;

// console.log("inningsValue")

var main = [];
var mainWordArray = [];
var mainWordArrayPrevious = [];
var mainWordUnderlined = [];

var mainWord = "";
var mainWordU = "";

function pullMainWord() {
    var newWord = wordsList[Math.floor(Math.random() * wordsListLength)];
    mainWord = newWord;
    document.getElementById("wordToPlay").textContent = mainWord;
    console.log(mainWord);
}


function setUnderline() {
    mainWordArrayPrevious = mainWordArray;
    mainWordArray = [];
    alreadyGuessedValue = [];
    inningsValue = 9;
    pullMainWord();
    for (i = 0; i < mainWord.length; i++) {
        mainWordArray.push("_");
    }
    mainWordU = mainWordArray.join(" ");
    document.getElementById("wordToPlay").textContent = mainWordU;
    userInningsRemaining.textContent = "Innings Remaining: 9";
    userLastGuess.textContent = "Last Guess: ";
    userAlreadyGuessed.textContent = "Already Guessed: ";
    document.getElementById("playButton").disabled = "true";
}

document.onkeyup = function (event) {
    var userGuess = event.key;
    if (userGuess === "a" || userGuess === "b" || userGuess === "c" || userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" || userGuess === "h" || userGuess === "i" || userGuess === "j" || userGuess === "k" || userGuess === "l" || userGuess === "m" || userGuess === "n" || userGuess === "o" || userGuess === "p" || userGuess === "q" || userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || userGuess === "v" || userGuess === "w" || userGuess === "x" || userGuess === "y" || userGuess === "z"){
        var mainChanges = 0;
        var mainChangesTwo = 0;
        alert("You have selected: " + userGuess)
        for (i = 0; i < mainWord.length; i++) {
            lastGuess = 0;
            if (userGuess == mainWord[i]) {
                mainWordArray[i] == userGuess;
                mainWordArray.splice(i, 1, userGuess);
                mainChanges += 1;
            }
        }
        if (mainChanges === mainChangesTwo) {
            inningsValue -= 1;
            console.log(mainChanges)
            console.log(mainChangesTwo)
        }
        alreadyGuessedValue.push(userGuess);
        userAlreadyGuessed.textContent = "Already Guessed: " + alreadyGuessedValue;
        userInningsRemaining.textContent = "Innings Remaining: " + inningsValue;
        userLastGuess.textContent = "Last Guess: " + userGuess;
        mainWordU = mainWordArray.join(" ");
        document.getElementById("wordToPlay").textContent = mainWordU;

        if (inningsValue == 0) {
            alert("That's unfortunate, you lost! Click the 'Click to Play' button to Play again!");
            lossesValue++;
            document.getElementById("losses").textContent = "Losses: " + lossesValue;
            mainWordArray.splice(0, 100, "");
            userInningsRemaining.textContent = "Innings Remaining: 9";
            userLastGuess.textContent = "Last Guess: ";
            userAlreadyGuessed.textContent = "Already Guessed: ";
            // document.getElementById("playButton").disabled = "false";
            setUnderline();


        }



        var mainWordArrayTwo = mainWordArray.join("")

        if (mainWordArrayTwo === mainWord) {
            alert("You won! Click the 'Click to Play' button to Play again!")
            winsValue++;
            document.getElementById("wins").textContent = "Wins: " + winsValue;
            mainWordArray.splice(0, 100, "");
            userInningsRemaining.textContent = "Innings Remaining: 9";
            userLastGuess.textContent = "Last Guess: ";
            userAlreadyGuessed.textContent = "Already Guessed: ";
            // document.getElementById("playButton").disabled = "false";
            setUnderline();

        }

    }
    document.getElementById("playButton").disabled = "false";
}

document.getElementById("playButton").onclick = function () { setUnderline() };






