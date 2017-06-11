function Objlin(content,col,splace) {
    this.content = content;
    this.col = col;
    this.splace = splace
}

Objlin.prototype.bg = function() {
    if (this.col==5) {
        fill(color(0,0,255,100));
    } else
    if (this.col==3) {
        fill(color(255,255,0,100));
    } else
    if (this.col==4) {
        fill(color(0,255,0,100));
    } else
    if (this.col==0) {
        fill(color(0,0,0));
    } else
    if (this.col==1) {
        fill(color(160,160,160));
    } 
    rect(40,this.splace*72+loc,windowWidth,fontSize);
}

Objlin.prototype.txt = function() {
    textStyle(NORMAL);
    textAlign(LEFT,TOP);
    textFont("goody old style");
    fill(255,255,255);
    text(this.content,40,this.splace*72+loc);
}