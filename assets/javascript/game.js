window.onload = function () {

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
"i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
"t", "u", "v", "w", "x", "y", "z"]
var word = ["p","a","d","d","i","e","s"]

var bar = document.getElementById("choice")
bar.setAttribute("style", "margin: auto;")
var letArray = []
var attempts = 5
var choiceBar = function() {
    
    for(i=0; i<alphabet.length; i++){
        letter = document.createElement("button")
        letter.setAttribute("type","button")
        letter.classList.add("btn")
        letter.classList.add("btn-outline-success")
        letter.setAttribute("id", "press")
        letter.innerHTML = alphabet[i]
        select();
        bar.appendChild(letter)  
    }
}

var select = function() {
    letter.onclick = function() {
        this.setAttribute("style", "background-color: black")
        letArray.push(this.innerHTML)
        console.log(letArray)
        for(i=0; i<word.length; i++){
            var bool = false
            if(this.innerHTML === word[i]){
                var hit = document.getElementById(word[i]+"_")
                hit.innerHTML = this.innerHTML
                bool = true
                this.onclick = null
            }
            else if(i===word.length-1 && bool===false){
                sketchMan[attempts]()
                attempts--
                if(attempts < 0){
                    var gameOver = document.createElement("h1")
                    gameOver.innerHTML = "Game Over"
                    var head = document.getElementById("title")
                    head.appendChild(gameOver) 
                }
            }
        }
    }
}


var ghostWord = function() {
        var ledger = document.createElement("ul")
        ledger.setAttribute("style", "list-style: none;")
        var sec = document.getElementById("word")
        sec.appendChild(ledger)
        console.log(word.length)

        for(i=0; i<word.length; i++){
            var list = document.createElement("li")
            list.innerHTML = " _ "
            list.setAttribute("style", "display: inline; font-size: 6em")
            list.id = word[i] + "_"
            ledger.appendChild(list)    
        }
    }

choiceBar()

var canvas = document.getElementById("screen")
var context = canvas.getContext("2d")





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

var sketchMan = [leftLeg, rightLeg, leftArm, rightArm, body, head]

struct()
ghostWord()


}
