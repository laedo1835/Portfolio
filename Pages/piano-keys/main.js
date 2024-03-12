// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];

//This loop iterates through keys and pushes them to the empty notes array.
keys.forEach(function(key){  //this .forEach method loops through the keys array and pushes them to the empty notes array. 
  notes.push(document.getElementById(key));
})


//--------------------Event Handlers ------------------------
// 1. & 2. 
// First Named function that change the color of the keys at mousedown
const keyPlay = function(event) {
  event.target.style.backgroundColor = '#6df0c2'; //event.target returns the property that triggered the event
  
}

// Second Named function returns the background color of the keys to their default '' at mouseup
const keyReturn = function(event){
  event.target.style.backgroundColor  = '';
  
}

// 3. & 4. & 5 
// Event Handler function used to assign events to the key notes. Uses 1 parameter "note."
let eventAssignment = function(note) {
  note.onmousedown = function() {
    keyPlay(event);   //we need to assign this event handler the keyPlaytrigger to the function. We could use note.onmousedown = keyPlay; but we want to pass in a function that can trigger keyPlay. Use an anonymous function() here so we can essentially pass in another function has the handler for that specific note.
  } 
  note.onmouseup = function() {
    keyReturn(event); //the function call is the only thing that we change for when the mouse is released.
  }
}


// 6. this .forEach method loops through the keys array and passes the them through to the eventAssignment function for mouseup & mousedown event. 
notes.forEach(eventAssignment); //pass the function definition, not the function call itself note.forEach(function(eventAssignemtn)) {};




// course code) Below in this Section, these variables store the buttons that progress the user through the lyrics. nextOne grabs the element by the ID of first-next-line, which grabs the nextTwo and so on.
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// course code) This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// course code) These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;




//----------------- Events For All  !Progress Button! -------------

// 8. 9.  First Progress Button: Write anonymous event handler property and function with a click event on the 'next one' button element stored under nextOne. So, we want an .onclick event targeting that element. 
nextOne.onclick = function() {
  nextTwo.hidden = false;               //when nextOne is clicked, it becomes hidden and nextTwo becomes visible
  nextOne.hidden = true;
  /* 10. --------   -----*/
  document.getElementById('letter-note-five').innerHTML = "D"; //switches the letter of the note with each line click
  document.getElementById('letter-note-six').innerHTML = "C";
}

//  11. 12.  Write anonymous event handler property and function for the second progress button
nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;
/* 13. ---  below, document nodes are swapping the note letters with each click event */
  document.getElementById('word-five').innerHTML = 'DEAR'; //the goal here is to swap the '-five', "DEAR", with   element with '-six', "FRI-"
  document.getElementById('word-six').innerHTML = 'FRI-';
 /*14. the lastLyric variable stores the '-END' to the song box. */ 
  lastLyric.style.display = 'inline-block';
/* 15. --- ---*/
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five to').innerHTML = 'C';
  document.getElementById('letter-note-six ').innerHTML = 'B';
}

// 16. 17. ---Create another handler for Third .onclick evtn
nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hiddn = true;
  // 18. - change the lyrics
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';
  // 19. -- change the notes
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
  // 20. Remove the -END button
  lastLyric.style.display = 'none';
}

//Determine the value of the variable sum after the given block of code executes.startOver
const numbers = [10, 20, 30, 40];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}
