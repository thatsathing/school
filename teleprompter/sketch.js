/* Teleprompter for the tvstudio
 * 'cause why not?
 * Written by Ethan Horn.
*/
// ~ Editable stuff below ~
var fontSize = 72;

// I recommend you don't edit the stuff below unless you know what you're doing.
var loc = 40;

var quote = new String(prompt("(1/7) Please give a quote of the day.",""));
var quoteAuthor = new String(prompt("(2/7) Who is the author of that quote?", ""));
var onthisday = new String(prompt("(3/7) What happened, on this day in history?", ""));
var onthisdayYear = new String(prompt("(4/7) On what year did this happen?"));
var birthdays = new String(prompt("(5/7) Whose birthdays are today? Also include belated birthdays.", ""));
var band = new String(prompt("(6/7) What are the band periods for today?", ""));
var wordoftheday = new String(prompt("(7/7) And finally, give a word of the day!", ""));

var d = new Date();
var dispDay = new Array(7);
  dispDay[0] =  "Sunday";
  dispDay[1] = "Monday";
  dispDay[2] = "Tuesday";
  dispDay[3] = "Wednesday";
  dispDay[4] = "Thursday";
  dispDay[5] = "Friday";
  dispDay[6] = "Saturday";
var dispMonth = new Array(12);
  dispMonth[0] = "January";
  dispMonth[1] = "February";
  dispMonth[2] = "March";
  dispMonth[3] = "April";
  dispMonth[4] = "May";
  dispMonth[5] = "June";
  dispMonth[6] = "July";
  dispMonth[7] = "August";
  dispMonth[8] = "September";
  dispMonth[9] = "October";
  dispMonth[10] = "Novemeber";
  dispMonth[11] = "December";

function setup() {
  createCanvas(windowWidth-4,windowHeight-4);
  textSize(fontSize);
}

function draw() {
  background(0);
  checkForKeys();   
  displayText();
  timeTicker();
}

function checkForKeys() {
    if (keyIsDown(DOWN_ARROW)) {loc += -5;}
    if (keyIsDown(UP_ARROW)) {loc += 5;}
}

function windowResized() {
  resizeCanvas(windowWidth-4,windowHeight-4);
}

function timeTicker() {
  fill(255,0,0,100);
  textAlign(RIGHT,BOTTOM);
  textFont("courier new");
  var ticker = round(millis() * 100)
  text((floor((millis()*100)/10000))/10,width-20,height-20);
}

var Scripts = [
  "Good Morning Tigers!",
  "Today is " + dispDay[d.getDay()] + ", " + dispMonth[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(),
  "Today's lunch menu includes:",
  "And now to _____",
  "with the quote of the day!",
  "",
  "",
  "Thank you, _____,",
  "for that tasty lunch report!",
  "",
  "Quote of the day:",
  quote,
  "  - " + quoteAuthor,
  "",
  "Band groups: ",
  band,
  "Student Announcements:",
  "",
  "And now to _____",
  "With today's weather!",
  "",
  "",
  "Thank you, _____,",
  "for that lovely weather report!",
  "",
  "On this day in history:",
  "In " + onthisdayYear + ",",
  "  " + onthisday,
  "",
  "Happy birthday to:",
  birthdays,
  "",
  "Please stand and face your flag for",
  "'The Pledge of Allegiance'",
  "(PAUSE FOR 5 SECONDS)",
  "'I pledge allegiance...'",
  "",
  "",
  "From ____, ____, _____, and the whole",
  "behind-the scenes crew,",
  "this is ____ saying",
  "Have a " + wordoftheday + " day, Lafayette!"

]

function displayText() {
  fill('#fefefe');
  textFont("goudy old style");
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  for (var i = 0; i < Scripts.length; i++) {
    text(Scripts[i],40,i*fontSize+loc);
  }
}