const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']        //these variables allows you to play the keys from your keyboard
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']                  //the keys_sound need to be in the exact order as your keyboard. also, make sure to setup and event listener to play these - keydown

const keys_sound = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')



keys_sound.forEach(key => {
  key.addEventListener('click', () => playNote(key))          //going to use playNote to create a function to pass the 'key' that we want to play
})

document.addEventListener('keydown', e => {
  const key = e.key                                           //get the key you pressed
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])      //important to keep the keys arrays in the correct order 
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])      //important to keep the keys arrays in the correct order 
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note) //this pulls the Audio element from piano.html based on the data note that we pressed
  noteAudio.currentTime = 0                                   //this will start the note from the beginning with each click. otherwise you have to wait for the note to finish before you can play it again.
  noteAudio.play()
  key.classList.add('active')                                 // animates the color when clicked by calling the .white.active css selector.
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}


//=============================My Piano JS==========================





// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];

//This loop iterates through keys and pushes them to the empty notes array.
keys.forEach(function(key){  //this .forEach method loops through the keys array and pushes them to the empty notes array. 
  notes.push(document.getElementById(key));
})


//--------------------Event Handlers ------------------------
// 1. & 2. 
// First Named function that change the color of the keys at pointerdown
const keyPlay = function(event) {
  event.target.style.backgroundColor = '#6df0c2'; //event.target returns the property that triggered the event
}

// Second Named function returns the background color of the keys to their default '' at pointerup
const keyReturn = function(event){
  event.target.style.backgroundColor  = '';
  
}

// 3. & 4.
// Event Handler function used to assign color Keyplay (color change) pointer down events to the key notes. Uses 1 parameter "note."
let eventAssignment = function(note) {
  note.onpointerdown = function() {
    keyPlay(event);   //we need to assign this event handler the keyPlaytrigger to the function keyplay. We could use note.onpointerdown = keyPlay; but we want to pass in a function that can trigger keyPlay. Use an anonymous function() here so we can essentially pass in another function has the handler for that specific note.
  } 
  note.onpointerup = function() {
    keyReturn(event); // 5. pointerup event. the function call is the only thing that we change for when the pointer is released.
  }
}


//  6. this .forEach method loops through the keys array one at a time when clicked and passes the them through to the eventAssignment function for pointerup & pointerdown event. 
notes.forEach(eventAssignment); //pass the function definition, not the function call itself note.forEach(function(eventAssignemtn)) {};

// 7. Test the code. When you pointerdown on any key it will stay green until the pointerup event

// course code) Below in this Section, these variables store the buttons that progress the user through the lyrics. nextOne grabs the element by the ID of first-next-line, which grabs the nextTwo and so on.
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let nextFour = document.getElementById('fourth-next-line');
let nextFive = document.getElementById('fifth-next-line');
let nextSix = document.getElementById('sixth-next-line');
let nextSeven = document.getElementById('seventh-next-line');

let secondVerse = document.getElementById('next-second-verse');
let nextEight = document.getElementById('eighth-next-line');  
let nextNine = document.getElementById('ninth-next-line');
let nextTen = document.getElementById('tenth-next-line');
let nextEleven = document.getElementById('eleventh-next-line');
let nextTwelve = document.getElementById('twelvth-next-line');
let nextThirteen = document.getElementById('thirteenth-next-line');

let thirdVerse = document.getElementById('next-third-verse');
let nextFourteen = document.getElementById('fourteenth-next-line');
let nextFifteen = document.getElementById('fifteenth-next-line');
let nextSixteen = document.getElementById('sixteenth-next-line');
let nextSeventeen = document.getElementById('seventeenth-next-line');
let nextEighteen = document.getElementById('eighteenth-next-line');
let nextNineteen = document.getElementById('nineteenth-next-line');
let nextTwenty = document.getElementById('twentieth-next-line');

let fourthVerse = document.getElementById('next-fourth-verse');
let nextTwentyOne = document.getElementById('twentyfirst-next-line');
let nextTwentyTwo = document.getElementById('twentysecond-next-line');
let nextTwentyThree = document.getElementById('twentythird-next-line');
let nextTwentyFour = document.getElementById('twentyfourth-next-line');
let nextTwentyFive = document.getElementById('twentyfifth-next-line');
let nextTwentySix = document.getElementById('twentysixth-next-line');

let startOver = document.getElementById('next-start-over');




// course code) This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// course code) These statements are "hiding" all the progress buttons, but the first one

nextTwo.hidden = true;
nextThree.hidden = true;
nextFour.hidden = true;
nextFive.hidden = true;
nextSix.hidden = true;
nextSeven.hidden = true;

secondVerse.hidden = true;

nextEight.hidden = true;
nextNine.hidden = true;
nextTen.hidden = true;
nextEleven.hidden = true;
nextTwelve.hidden = true;
nextThirteen.hidden = true;
nextFourteen.hidden = true;

thirdVerse.hidden = true;

nextFifteen.hidden = true;
nextSixteen.hidden = true;
nextSeventeen.hidden = true;
nextEighteen.hidden = true;
nextNineteen.hidden = true;
nextTwenty.hidden = true;

fourthVerse.hidden = true;

nextTwentyOne.hidden = true;
nextTwentyTwo.hidden = true;
nextTwentyThree.hidden = true;
nextTwentyFour.hidden = true;
nextTwentyFive.hidden = true;
nextTwentySix.hidden = true;

startOver.hidden = true;




//----------------- 1st Verse  !PLAY Button! -------------


nextOne.onclick = function() {
  nextTwo.hidden = false;              
  nextOne.hidden = true;
  document.getElementById('word-one').innerHTML = '';
  document.getElementById('word-two').innerHTML = ' ';
  document.getElementById('word-three').innerHTML = ' ';
  document.getElementById('word-four').innerHTML = ' ';
  document.getElementById('word-five').innerHTML = ' ';
  document.getElementById('word-six').innerHTML = ' ';
}


nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = ' ';
  document.getElementById('word-three').innerHTML = ' ';
  document.getElementById('word-four').innerHTML = ' ';
  document.getElementById('word-five').innerHTML = ' ';
  document.getElementById('word-six').innerHTML = ' ';
}


// 16. 17. ---Create another handler for Third .onclick evtn
nextThree.onclick = function() {
  nextFour.hidden = false;
  nextThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = ' ';
  document.getElementById('word-four').innerHTML = ' ';
  document.getElementById('word-five').innerHTML = ' ';
  document.getElementById('word-six').innerHTML = ' ';
}


//  Bonus > > >  My additional "Next Note Button" anonymous funtion
nextFour.onclick = function() {
  nextFive.hidden = false;
  nextFour.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = ' ';
  document.getElementById('word-five').innerHTML = ' ';
  document.getElementById('word-six').innerHTML = ' ';
}

nextFive.onclick = function() {
  nextSix.hidden = false;
  nextFive.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP- ';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('word-six').innerHTML = '';
}

nextSix.onclick = function() {
   nextSeven.hidden = false;
   nextSix.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP- ';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = '';
}

nextSeven.onclick = function() {
  secondVerse.hidden = false;
  nextSeven.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP- ';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
}





//----------------- 2nd Verse  !PLAY Button! -------------


nextEight.onclick = function() {
  nextNine.hidden = false;              
  nextEight.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = '';
  document.getElementById('word-three').innerHTML = '';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'C';
}


nextNine.onclick = function() {
  nextTen.hidden = false;
  nextNine.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = '';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'C';
}


// 16. 17. ---Create another handler for Third .onclick evtn
nextTen.onclick = function() {
  nextEleven.hidden = false;
  nextTen.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'C';
}


//  Bonus > > >  My additional "Next Note Button" anonymous funtion
nextEleven.onclick = function() {
  nextTwelve.hidden = false;
  nextEleven.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = ' ';
  document.getElementById('word-six').innerHTML = ' ';
}

nextTwelve.onclick = function() {
  nextThirteen.hidden = false;
  nextTwelve.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP- ';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = '';
}

nextThirteen.onclick = function() {
   thirdVerse.hidden = false;
   nextThirteen.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP- ';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
}

nextFourteen.onclick = function() {
  nextFifteen.hidden = false;
  nextFourteen.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = '';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = '';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'B';
  document.getElementById('word-optional').innerHTML = '';
  document.getElementById('letter-note-optional').innerHTML = 'A';
  lastLyric.style.display = 'inline-block';
}


//----------------- 3rd Verse  !PLAY Button! -------------


nextFifteen.onclick = function() {
  nextSixteen.hidden = false;              
  nextFifteen.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = '';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'B';
  document.getElementById('word-optional').innerHTML = '';
  document.getElementById('letter-note-optional').innerHTML = 'A';
  lastLyric.style.display = 'inline-block';
}


nextSixteen.onclick = function() {
  nextSeventeen.hidden = false;
  nextSixteen.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'B';
  document.getElementById('word-optional').innerHTML = '';
  document.getElementById('letter-note-optional').innerHTML = 'A';
  lastLyric.style.display = 'inline-block';
}


// 16. 17. ---Create another handler for Third .onclick evtn
nextSeventeen.onclick = function() {
  nextEighteen.hidden = false;
  nextSeventeen.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'B';
  document.getElementById('word-optional').innerHTML = '';
  document.getElementById('letter-note-optional').innerHTML = 'A';
  lastLyric.style.display = 'inline-block';

}


//  Bonus > > >  My additional "Next Note Button" anonymous funtion
nextEighteen.onclick = function() {
  nextNineteen.hidden = false;
  nextEighteen.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'B';
  document.getElementById('word-optional').innerHTML = '';
  document.getElementById('letter-note-optional').innerHTML = 'A';
  lastLyric.style.display = 'inline-block';
}

nextNineteen.onclick = function() {
  nextTwenty.hidden = false;
  nextNineteen.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'CHIP-';
  document.getElementById('letter-note-six').innerHTML = 'B';
  document.getElementById('word-optional').innerHTML = '';
  document.getElementById('letter-note-optional').innerHTML = 'A';
  lastLyric.style.display = 'inline-block';
}

nextTwenty.onclick = function() {
  fourthVerse .hidden = false;
  nextTwenty.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'CHIP-';
  document.getElementById('letter-note-six').innerHTML = 'B';
  document.getElementById('word-optional').innerHTML = 'PYYYY';
  document.getElementById('letter-note-optional').innerHTML = 'A';
  lastLyric.style.display = 'inline-block';
}
nextTwentyOne.onclick = function() {
  nextTwentyTwo.hidden = false;
  nextTwentyOne.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('word-two').innerHTML = '';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('word-three').innerHTML = '';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

nextTwentyTwo.onclick = function() {
  nextTwentyThree.hidden = false;
  nextTwentyTwo.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('word-three').innerHTML = '';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

nextTwentyThree.onclick = function() {
  nextTwentyFour.hidden = false;
  nextTwentyThree.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

nextTwentyFour.onclick = function() {
  nextTwentyFive.hidden = false;
  nextTwentyFour.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

nextTwentyFive.onclick = function() {
  nextTwentySix.hidden = false;
  nextTwentyFive.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

nextTwentySix.onclick = function() {
  startOver.hidden = false;
  nextTwentySix.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = 'YOU!!';
  document.getElementById('letter-note-six').innerHTML = 'C';
}







//----------------- Fourth Verse  !PLAY Button! -------------





//Determine the value of the variable sum after the given block of code executes.startOver
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// This is the event handler property and function for the startOver button
secondVerse.onclick = function() {
  nextEight.hidden = false;
  secondVerse.hidden = true;
  document.getElementById('word-one').innerHTML = '';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = '';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = '';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'C';
}

thirdVerse.onclick = function() {
  nextFourteen.hidden = false;
  thirdVerse.hidden = true;
  document.getElementById('word-one').innerHTML = '';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = '';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = '';
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'B';
  document.getElementById('word-optional').innerHTML = '';
  document.getElementById('letter-note-optional').innerHTML = 'A';
  lastLyric.style.display = 'inline-block';
}

fourthVerse.onclick = function() {
  nextTwentyOne.hidden = false;
  fourthVerse.hidden = true;
  document.getElementById('word-one').innerHTML = '';
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('word-two').innerHTML = '';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('word-three').innerHTML = '';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'C';
  lastLyric.style.display = 'none';
}

startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = '';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = '';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = '';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = '';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = '';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = '';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
