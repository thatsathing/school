var arrlin = [];

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
  "(READ PAPERS)",
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
/*
var 5 = color('#a0a0ff');
var 4 = color('#a0ffa0');
var 1 = color('#a0a0a0');
var 3 = color('#fff0a0');
var 0 = color('#000000');
var textColor = color('#fefefe');


var 5;
var 4;
var 1;
var 3;
var 0;
var textColor;
var scCol;
*/
function setcolarr() {
scCol = [
  3,3,3,3,3,
  0,0,
  4,4,0,4,4,4,0,4,4,4,1,0,4,4,
  0,0,
  5,5,0,5,5,5,0,5,5,0,5,5,1,5,0,0,3,3,3,3
]
}
function generateArray() {
    for (var p = 0; p < Scripts.length; p++) {
        arrlin[p] = new Objlin(Scripts[p],scCol[p],p);
    }
}

function Objlin(content, col, splace) {
    this.content = content;
    this.col = col;
    this.splace = splace;
}

Objlin.prototype.bg = function() {
    if (this.col==5) {
        fill(color(160,160,255,100));
    } else
    if (this.col==3) {
        fill(color(255,255,0,100));
    } else
    if (this.col==4) {
        fill(color(160,255,160,100));
    } else
    if (this.col==0) {
        fill(color(0,0,0,100));
    } else
    if (this.col==1) {
        fill(color(160,160,160,100));
    } 
    rect(40,this.splace*72+loc,windowWidth,fontSize);
}

Objlin.prototype.txt = function() {
    textAlign(LEFT,TOP);
    textFont("goody old style");
    fill(255,255,255);
    text(str(this.content),40,this.splace*72+loc);
}