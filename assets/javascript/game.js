var wins = 0;              // integer number of correctly guessed words
var guessRemaining = 13;   // integer number of guesses remaining. initialize with value of 13
var randomIndex = null;    // integer number that holds a value between 1 and 20 (this is used to pick a random title)
var indexNumber = null;    // holds the index value of the letter found in solutionTitle
var letterFound = 0;       // holds boolean 0 when the letter was not found, 1 when the letter was found. initialize to 0  
var remainingLetters = 7;
var concatGuessedTitle = "";
var movie = "";
var i = 0;
var lettersGuessed = "";   // array that holds incorrect guessed letters 
var guessedLetter = "";    // holds letter typed by player
var presscont = "";
var movieTitles = ["aladdin", "amadeus", "bananas", "cabaret", "chicago", "dracula", "dragnet", "hancock", "kingpin", "macbeth", "network", "platoon", "rebecca", "robocop", "stripes", "tangled", "titanic", "tremors", "vertigo", "warrior"];
var movieHint = ["After a sultan gives his daughter, Jasmine, three days to find a husband, she escapes the palace and encounters a street-savvy urchin man, who charms his way into her heart. ",
    "The life, success and troubles of a prolific composer, as told by another composer, Antonio Salieri, who was insanely jealous of his talent and claimed to have murdered him. ",
    "When a bumbling New Yorker is dumped by his activist girlfriend, he travels to a tiny Latin American nation and becomes involved in its latest rebellion.",
    "A female girlie club entertainer in Weimar Republic era Berlin romances two men while the Nazi Party rises to power around them.",
    "Two death-row murderesses develop a fierce rivalry while competing for publicity, celebrity, and a sleazy lawyer's attention.",
    "The centuries old vampire comes to England to seduce his barrister Jonathan Harker's fiancée Mina Murray and inflict havoc in the foreign land.",
    "The equally-straight-laced and 'by the book' nephew of Joe Friday must work with his more laid-back partner to solve a mystery.",
    "He is a superhero whose ill considered behavior regularly causes damage in the millions. He changes when the person he saves helps him improve his public image.",
    "A star bowler whose career was prematurely 'cut off' hopes to ride a new prodigy to success and riches.",
    "The Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, he murders his king and takes the throne for himself.",
    "A television network cynically exploits a deranged former anchor's ravings and revelations about the news media for its own profit.",
    "A young soldier in Vietnam faces a moral crisis when confronted with the horrors of war and the duality of man.",
    "A self-conscious bride is tormented by the memory of her husband's dead first wife.",
    "In a dystopic and crime-ridden Detroit, a terminally wounded cop returns to the force as a powerful cyborg haunted by submerged memories.",
    "Two friends who are dissatisfied with their jobs decide to join the army for a bit of fun.",
    "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time, and who she really is.",
    "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. transatlantic ship.",
    "Natives of a small isolated town defend themselves against strange underground creatures which are killing them one by one.",
    "A former police detective juggles wrestling with his personal demons and becoming obsessed with a hauntingly beautiful woman.",
    "The youngest son of an alcoholic former boxer returns home, where he's trained by his father for competition in a mixed martial arts tournament - a path that puts the fighter on a collision course with his estranged, older brother."]
var solutionTitle = [];                                      // array that holds all letters in one title. Array should be length 7.
var guessedTitle = ["_", "_", "_", "_", "_", "_", "_"];      // array that holds all correct letters guessed.

function newgame () { 
    guessRemaining = 13;   // integer number of guesses remaining. initialize with value of 13
    randomIndex = null;    // integer number that holds a value between 1 and 20 (this is used to pick a random title)
    indexNumber = null;    // holds the index value of the letter found in solutionTitle
    letterFound = 0;       // holds boolean 0 when the letter was not found, 1 when the letter was found. initialize to 0  
    remainingLetters = 7;
    concatGuessedTitle = "";
    movie = "";
    i = 0;
    lettersGuessed = "";   // array that holds incorrect guessed letters 
    guessedLetter = "";    // holds letter typed by player
    presscont = "";
    solutionTitle = [];                                      // array that holds all letters in one title. Array should be length 7.
    guessedTitle = ["_", "_", "_", "_", "_", "_", "_"];      // array that holds all correct letters guessed.   
        
    document.getElementById("wins-counter").innerHTML = wins;
    document.getElementById("guesses-remain").innerHTML = guessRemaining;
    document.getElementById("guessed-letters").innerHTML = lettersGuessed;
    document.getElementById("current-word").innerHTML = guessedTitle[0] + " " + guessedTitle[1] + " " + guessedTitle[2] + " " + guessedTitle[3] + " " + guessedTitle[4] + " " + guessedTitle[5] + " " + guessedTitle[6];
    
    randomIndex = Math.floor(Math.random() * 19);
    movie = movieTitles[randomIndex];
    document.getElementById("hint").innerHTML = movieHint[randomIndex];
    for (i = 0; i < 7; i++) {
    solutionTitle[i] = movie.charAt(i);
    console.log(solutionTitle[0], solutionTitle[1], solutionTitle[2], solutionTitle[3], solutionTitle[4], solutionTitle[5], solutionTitle[6]);
    }
}

newgame ();

document.onkeyup = function (e) {
    var guessedLetter = e.key;
    letterFound = 0;
    for (i = 0; i < 7; i++) {

        if (solutionTitle[i] === guessedLetter) {
            guessedTitle[i] = guessedLetter;
            solutionTitle[i] = "_";
            letterFound++;
            remainingLetters--;
        }

        concatGuessedTitle = guessedTitle[0] + " " + guessedTitle[1] + " " + guessedTitle[2] + " " + guessedTitle[3] + " " + guessedTitle[4] + " " + guessedTitle[5] + " " + guessedTitle[6];
        document.getElementById("current-word").innerHTML = concatGuessedTitle;
    }
    
    if (letterFound === 0) {
        lettersGuessed = lettersGuessed.concat(guessedLetter, " ");
        guessRemaining--;
    }
    
    if (guessRemaining === 0) {
        alert ("Y O U  L O S T  !!!");
        newgame ();
    }
    
    if (remainingLetters === 0) {
        wins++;
        document.getElementById("wins-counter").innerHTML = wins;
        newgame ();
    }
    console.log("lettersGuessed: ", lettersGuessed);
    document.getElementById("guesses-remain").innerHTML = guessRemaining;
    document.getElementById("guessed-letters").innerHTML = lettersGuessed;
}