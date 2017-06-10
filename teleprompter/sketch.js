

/* Teleprompter for the tvstudio
 * 'cause why not?
 * Written by Ethan Horn.
*/
/*
var Nblue;
var Ngreen;
var Ngrey;
var Nyellow;
var Nblack;
var textColor;
//look ma', github!

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

var Scripts = [
  "Good Morning Tigers!", Nyellow,
  "Today is " + dispDay[d.getDay()] + ", " + dispMonth[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(), Nyellow,
  "Today's lunch menu includes:", Nyellow,
  "And now to _____", Nyellow,
  "with the quote of the day!", Nyellow,
  "", Nblack,
  "", Nblack,
  "Thank you, _____,", Ngreen,
  "for that tasty lunch report!", Ngreen,
  "", Nblack,
  "Quote of the day:", Ngreen,
  quote, Ngreen,
  "  - " + quoteAuthor, Ngreen,
  "", Ngreen,
  "Band groups: ", Ngreen,
  band, Ngreen,
  "Student Announcements:", Ngreen,
  "", Ngreen,
  "And now to _____", Ngreen,
  "With today's weather!", Ngreen,
  "", Nblack,
  "", Nblack,
  "Thank you, _____,", Nblue,
  "for that lovely weather report!", Nblue,
  "", Nblue,
  "On this day in history:", Nblue,
  "In " + onthisdayYear + ",", Nblue,
  "  " + onthisday, Nblue,
  "", Nblue,
  "Happy birthday to:", Nblue,
  birthdays, Nblue,
  "",Nblue,
  "Please stand and face your flag for", Nblue,
  "'The Pledge of Allegiance'", Nblue,
  "(PAUSE FOR 5 SECONDS)", Ngrey,
  "'I pledge allegiance...'", Nblue,
  "", Nblack,
  "", Nblack,
  "From ____, ____, _____, and the whole", Nyellow,
  "behind-the scenes crew,", Nyellow,
  "this is ____ saying", Nyellow,
  "Have a " + wordoftheday + " day, Lafayette!", Nyellow
]
var scriptsColor = [
  Nyellow,Nyellow,Nyellow,Nyellow,Nyellow,
  Nblack,Nblack,
  Ngreen,Ngreen,
  Nblack,
  Ngreen,Ngreen,Ngreen,
  Nblack,
  Ngreen,Ngreen,Ngreen,Ngreen,
  Nblack,Nblack,
  Nblue,Nblue,
  Nblack,
  Nblue,Nblue,Nblue,
  Nblack,
  Nblue,Nblue,
  Nblack,
  Nblue,Nblue,
  Ngrey,
  Nblue,
  Nblack,Nblack,
  Nyellow,Nyellow,Nyellow,Nyellow
]

function setup() {
  createCanvas(windowWidth-4,windowHeight-4);
  textSize(fontSize);
  Nblue = color('#a0a0ff');
  Nblack = color('#000000');
  Ngreen = color('#a0ffa0');
  Ngrey = color('#a0a0a0');
  Nyellow = color('#fff0a0');
  textColor = color('#fefefe');
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

function displayText() {
  textFont("goudy old style");
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  for (var i = 0; i < Scripts.length/2; i++) {
    var colTemp = scriptsColor[i];
    fill(colTemp);
    rect(40,i*fontSize+loc,windowWidth,fontSize);
    fill(textColor);
    text(Scripts[i*2],40,i*fontSize+loc);
  }
}
*/