/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");
//global constants
const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence*/
const clueStartHoldTime = 1000;

//Global Variables
var new_clueHoldTime;
var new_cluePauseTime;
var new_nextClueWaitTime;
var new_Timebase;
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var pattern;
var strikes;
var buttons = 4;

var DEFUALT_START_TIME = 5;
var timer;
var timerSet;

var ready = false;


/* changes the speed of the game baseed on user input, user must pick a speed or the program wont work properly*/
function selectedSpeed(speed) {
  new_clueHoldTime = clueHoldTime / speed;
  new_cluePauseTime = cluePauseTime / speed;
  new_nextClueWaitTime = nextClueWaitTime / speed;
  if(speed == 1)
    new_Timebase = 0;
  else if(speed == 2)
    new_Timebase = 1;
  else if(speed == 4)
    new_Timebase = 2;
  timer = DEFUALT_START_TIME - new_Timebase;
  ready = true;
  document.getElementById("speedDisplay").innerHTML = "Speed Selected times " + speed;
  
}

/*randomly populates the pattern */ 
function populatePattern() {
  pattern = [];
  console.log(buttons);
  for (let i = 0; i < 8; i++)
    pattern.push(Math.floor(Math.random() * buttons) + 1);
  console.log(pattern);
}

/* starts the game */ 
function startGame() {
  populatePattern();
  hideMoreButtons();
  
  //initialize game variables
  progress = 0;
  strikes = 3;
  gamePlaying = true;
  
  // swap the Start and Stop buttons, also enables timer display
  document.getElementById("startButton").classList.add("hidden");
  document.getElementById("stopButton").classList.remove("hidden");
  document.getElementById("Remainingtime").innerHTML = "Start Time:" + timer;
  document.getElementById("Lives").innerHTML = "Strikes reamining: ";
  document.getElementById("picLives").classList.remove("hidden");
  document.getElementById("picLives1").classList.remove("hidden");
  document.getElementById("picLives2").classList.remove("hidden");
  document.getElementById("picLives3").classList.remove("hidden");
  
  playClueSequence();
}

/*stops the game*/
function stopGame() {
  //initialize game variables
  timer = DEFUALT_START_TIME - new_Timebase;
  buttons = 4;
  gamePlaying = false;
  
  //restores buttons
  viewMoreButtons();
  
  // swap the Start and Stop buttons, also disables timer display
  document.getElementById("stopButton").classList.add("hidden");
  document.getElementById("startButton").classList.remove("hidden");
  document.getElementById("picLives").classList.add("hidden");
  playIntro();
  clearInterval(timerSet);
}

/* adds more buttons can be improved in the future to hold more buttons*/
function moreButtons(buttonNumber) {
  document.getElementById("button5").classList.remove("hidden");
  document.getElementById("Buttons_5").classList.add("hidden");
  document.getElementById("Buttons_6").classList.add("hidden");
  buttons = 5;
  if (buttonNumber == 6) {
    buttons = 6;
    document.getElementById("button6").classList.remove("hidden");
  }
  document.getElementById("removeButtons").classList.remove("hidden");
}

/*deletes the extra buttons */
function backtoFour() {
  buttons = 4;
  document.getElementById("button5").classList.add("hidden");
  document.getElementById("Buttons_5").classList.remove("hidden");
  document.getElementById("Buttons_6").classList.remove("hidden");
  document.getElementById("button6").classList.add("hidden");
  document.getElementById("removeButtons").classList.add("hidden");
}

/* enables the lit property to a button*/
function lightButton(button) {
  document.getElementById("button" + button).classList.add("lit");
}

/* disables the lit property to a button*/
function clearButton(button) {
  document.getElementById("button" + button).classList.remove("lit");
}

/*plays a single clue helper method to playClueSequence*/ 
function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, new_clueHoldTime);
    setTimeout(clearButton, new_clueHoldTime, btn);
  }
}

/* plays a series of clues */ 
function playClueSequence() {
  document.getElementById("Lives").innerHTML = "Strikes reamining: ";
  guessCounter = 0;
  context.resume();
  let delay = new_nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += new_clueHoldTime;
    delay += new_cluePauseTime;
  }
  timer = (DEFUALT_START_TIME - new_Timebase) * (progress + 1);
  setTimeout(startTimer, delay);
}

/* creates an alert stating the user lost*/
function loseGame() {
  stopGame();
  alert("Game Over. You lost.");
}

/* creates an alert stating the user won*/
function winGame() {
  stopGame();
  alert("Game Over. You Won!");
}

/* checks if the user pressed the correct button, and processes how many clicks are left */
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // add game logic here
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) {
      clearInterval(timerSet);
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  } else {
    strikes--;
    if(strikes == 2)
      document.getElementById("picLives3").classList.add("hidden");
    if(strikes == 1)
      document.getElementById("picLives2").classList.add("hidden");
      
    clearInterval(timerSet);
    playClueSequence();
    if (strikes == 0)
    {
        document.getElementById("picLives1").classList.add("hidden");
        loseGame();
    }
      //third strike
      
  }
}

/*helper method when the game starts*/
function hideMoreButtons() {
  document.getElementById("moreButtonsPrompt").classList.add("hidden");
  document.getElementById("Buttons_5").classList.add("hidden");
  document.getElementById("Buttons_6").classList.add("hidden");
  document.getElementById("removeButtons").classList.add("hidden");
  document.getElementById("Remainingtime").classList.remove("hidden");
  document.getElementById("Lives").classList.remove("hidden");
}

/*helper method when the game stops*/
function viewMoreButtons() {
  document.getElementById("moreButtonsPrompt").classList.remove("hidden");
  document.getElementById("Buttons_5").classList.remove("hidden");
  document.getElementById("Buttons_6").classList.remove("hidden");
  document.getElementById("button5").classList.add("hidden");
  document.getElementById("button6").classList.add("hidden");
  document.getElementById("Remainingtime").classList.add("hidden");
  document.getElementById("Lives").classList.add("hidden");
}

/* creates a timer*/
function myTimer() {
  timer -= 1;
  document.getElementById("Remainingtime").innerHTML = "";
  document.getElementById("Remainingtime").innerHTML = "Time reamining: " + timer;
  // out of time
  if (timer <= -1) {
    loseGame();
    timer = DEFUALT_START_TIME - new_Timebase;
    nextClueWaitTime = 1000;
    clearInterval(timerSet);
  }
}

/*helper method to myTimer*/
function startTimer() {
  if (gamePlaying) {
    // make new timer variable for next sequence
    timerSet = setInterval(myTimer, 1000);
    timer = (DEFUALT_START_TIME - new_Timebase) * (progress + 1);
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 534.4,
  6: 602.6,
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

function playIntro() {
  document.getElementById("IntroMusic").play();
}
function pauseIntro() {
  document.getElementById("IntroMusic").pause();
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
