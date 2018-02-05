window.onload = function () {

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z']

var a_canvas = document.getElementById("a")
var context = a_canvas.getContext("2d")
var word = ""


var line = function(x1,y1,x2,y2){
    context.beginPath()
    context.moveTo(x1,y1)
    context.lineTo(x2,y2)
    context.stroke()
}

var body = function(){
    line(95,80,95,135)
}

var leftArm = function(){
    line(95,90,110,125)
}

var leftLeg = function(){
    line(95,135,110,170)
}

var rightArm = function(){
    line(95,90,80,125)
}

var rightLeg = function(){
    line(95,135,80,170)
}

var head = function(){
    context.beginPath()
    context.arc(95,69,10,0,Math.PI*2,false)
    context.stroke()
}

var floor = function() {
    line(20,185,150,185)
}

var pole = function() {
    line(20,185,20,30)
}

var bar = function() {
    line(20,30,95,30)
}

var noose = function(){
    line(95,30,95,60)
}

var struct = function(){
    floor()
    pole()
    bar()
    noose()
}

var ledger = document.getElementById("#word")
var 

    for(i=0; i<word.length; i++){
        ledger.innerHTML("_")
    }

struct()

}