/*
 *  An attempt on making the teleprompter object-oriented.
 *  Written by Ethan
 *  Quotes from BrainyQuotes
 */

var loc = 40;
var locmod = 5;
var fontSize = 72;

var timeMode = false;
var timeStarted;
var scriptst;
var quotest;
var scripts;
var quotes;
var quotesRand;
var fontType;
var quote;
var quoteAuthor;
var onthisday;
var onthisdayYear;
var birthdays;
var band;
var wordoftheday;

function preload() {
    scriptst = loadJSON("scripts.json");
    quotest = loadJSON("quotes.json");
    fontType = loadFont("assets/Inconsolata-Regular.ttf")
    scripts = [];
    quotes = [];
}

function setup() {
    createCanvas(windowWidth-4,windowHeight-4);
    noStroke();
    textSize(fontSize);

    for (var p = 0; p < scriptst.arr.length; p++) {
        scripts[p] = new Objlin(scriptst.arr[p].content,scriptst.arr[p].col,p);
    }
    for (var g = 0; g < quotest.jsonquotesarr.length; g++) {
        quotes[g] = quotest.jsonquotesarr[g];
    }

    quotesRand = random(0,quotes.length);
    quote = new String(prompt("(1/7) Please give a quote of the day.", ""));
    quoteAuthor = new String(prompt("(2/7) Who is the author of that quote?", ""));
    onthisday = new String(prompt("(3/7) What happened, on this day in history?", ""));
    onthisdayYear = new String(prompt("(4/7) On what year did this happen?"));
    birthdays = new String(prompt("(5/7) Whose birthdays are today? Also include belated birthdays.", ""));
    band = new String(prompt("(6/7) What are the band periods for today?", ""));
    wordoftheday = new String(prompt("(7/7) And finally, give a word of the day!", ""));

    for (var o = 0; o < scripts.length; o++) {
        scripts[o].content = scripts[o].content.replace("{{dayName}}",dispDay[d.getDay()])
        scripts[o].content = scripts[o].content.replace("{{monthName}}",dispMonth[d.getMonth()])
        scripts[o].content = scripts[o].content.replace("{{date}}",d.getDate())
        scripts[o].content = scripts[o].content.replace("{{year}}",d.getFullYear())
        scripts[o].content = scripts[o].content.replace("{{band}}",band)
        scripts[o].content = scripts[o].content.replace("{{quote}}",quote)
        scripts[o].content = scripts[o].content.replace("{{quoteAuthor}}",quoteAuthor)
        scripts[o].content = scripts[o].content.replace("{{onthisday}}",onthisday)
        scripts[o].content = scripts[o].content.replace("{{onthisdayYear}}",onthisdayYear)
        scripts[o].content = scripts[o].content.replace("{{wordoftheday}}",wordoftheday)
        scripts[o].content = scripts[o].content.replace("{{birthdays}}",birthdays)
    }
    timeStarted = millis();
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
    if (keyIsDown(81) {locmod++;}
    if (keyIsDown(65)) {locmod--;}
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
    for (var p = 0; p<scripts.length; p++) {
        scripts[p].bg();
    }
}
function layoutText() {
    for (var p = 0; p<scripts.length; p++) {
        scripts[p].txt();
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
        var passedMin = floor((floor((floor(millis()-timeStarted))/1000))/60);
        var passedSec = floor((floor(millis()-timeStarted)/1000)%60);
        var passedMil = floor(millis()/100-timeStarted/100)%10
        if (passedSec<=9) {
            text(passedMin + ":0" + passedSec + "." + passedMil,windowWidth-40,windowHeight-40);
        } else {
            text(passedMin + ":" + passedSec + "." + passedMil,windowWidth-40,windowHeight-40);
        }
    }
    text(locmod,width-40,height-fontSize-60);
};
