/*  
 *  An attempt on making the teleprompter object-oriented.
 *  Written by Ethan    
 *
 */ 

var loc = 40;
var locmod = 5;
var fontSize = 72;

var timeMode = false;
var timeStarted;

var quote = new String(prompt("(1/7) Please give a quote of the day.",""));
var quoteAuthor = new String(prompt("(2/7) Who is the author of that quote?", ""));
var onthisday = new String(prompt("(3/7) What happened, on this day in history?", ""));
var onthisdayYear = new String(prompt("(4/7) On what year did this happen?"));
var birthdays = new String(prompt("(5/7) Whose birthdays are today? Also include belated birthdays.", ""));
var band = new String(prompt("(6/7) What are the band periods for today?", ""));
var wordoftheday = new String(prompt("(7/7) And finally, give a word of the day!", ""));

function setup() {
    createCanvas(windowWidth-4,windowHeight-4);
    noStroke();
    setcolarr();
    textSize(fontSize);
    generateArray();
}

function draw() {
    background(0);
    checkForKeys();
    layoutBG();
    layoutText();
    renderTime();
}

function windowResized() {resizeCanvas(windowWidth-4,windowHeight-4);}

function checkForKeys() {
    if (keyIsDown(UP_ARROW)) {loc += locmod;}
    if (keyIsDown(DOWN_ARROW)) {loc -= locmod;}
}

function keyPressed() {
    switch(keyCode) {
        case 77:
            timeMode = !timeMode;
        break;
        case 32:
            timeStarted = millis();
        break;
    }
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

function renderTime() {
    textFont("courier new");
    fill(255,20,20,200);
    textStyle(BOLD);
    if (timeMode==false) {
        textAlign(RIGHT,BOTTOM);
        text(hour() + ":" + minute()%60 + ":" + second(),windowWidth-40,windowHeight-40);
        textAlign(LEFT,BOTTOM);
        text((d.getMonth()+1) + "/" + d.getDate() + "/" + d.getFullYear(),40,windowHeight-40)
    } else
    if (timeMode==true) {
        textAlign(RIGHT,BOTTOM);
        text((round(round(millis()/10)/10 - round(timeStarted/10)/10))/10,windowWidth-40,windowHeight-40);
    }
}