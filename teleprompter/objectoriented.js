/*  
 *  An attempt on making the teleprompter object-oriented.
 *  Written by Ethan    
 *
 */ 

var loc = 40;
var locmod = 5;
var fontSize = 72;
/*
var Nblue;
var Ngreen;
var Ngrey;
var Nyellow;
var Nblack;
var textColor;
*/

/* COLOR REFERENCE
 * 0 = black
 * 1 = grey
 * 2 = white (text)
 * 3 = yellow
 * 4 = green
 * 5 = blue
*/
var quote = new String(prompt("(1/7) Please give a quote of the day.",""));
var quoteAuthor = new String(prompt("(2/7) Who is the author of that quote?", ""));
var onthisday = new String(prompt("(3/7) What happened, on this day in history?", ""));
var onthisdayYear = new String(prompt("(4/7) On what year did this happen?"));
var birthdays = new String(prompt("(5/7) Whose birthdays are today? Also include belated birthdays.", ""));
var band = new String(prompt("(6/7) What are the band periods for today?", ""));
var wordoftheday = new String(prompt("(7/7) And finally, give a word of the day!", ""));

function setup() {
    createCanvas(windowWidth-4,windowHeight-4);
    noStroke(); /*
    Nblue = color(160,160,255);
    Nblack = color(0,0,0);
    Ngreen = color(160,255,160);
    Ngrey = color(160,160,160);
    Nyellow = color(255,240,160);
    textColor = color(254,254,254); */
    setcolarr();
    textSize(fontSize);
    generateArray();
}

function draw() {
    background(0);
    checkForKeys();
    layoutBG();
    layoutText();
}

function windowResized() {resizeCanvas(windowWidth-4,windowHeight-4);}

function checkForKeys() {
    if (keyIsDown(UP_ARROW)) {loc += locmod;}
    if (keyIsDown(DOWN_ARROW)) {loc -= locmod;}
}

function layoutBG() {
    for (var p = 0; p<arrlin.length; p++) {
        arrlin[p].bg();
    }
}
function layoutText() {
    for (var p = 0; p<arrlin.length; p++) {
        arrlin[p].txt();
    }
}