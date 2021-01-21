var image = document.querySelector('img');
var imagew = image.width/2;
var imageh = image.height/2;
const body = document.querySelector('body');
const audio = document.querySelector('audio');
const div = document.querySelector('div');
const audio2 = new Audio('sfx3.wav')
const bodyw = body.clientWidth
const bodyh = body.clientHeight
let score = 0;
let centerw = bodyw/2-imagew + 'px';
let centery = bodyh/2-imageh + 'px';
let Gamemode = 0;
image.style = "transform: translate(" + centerw + ", " + centery + "); display:none;";
console.log(bodyw)
console.log(imageh + ' ' + bodyw + ' ' + bodyh + ' ' + imagew)
console.log(div)

function Jacobs(params){
    alert('This mode has not been implemented yet!');
}

function Baby(params){
    Gamemode = 1300;
    image.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    div.style ="display:none;"
}

function Easy(params) {
    Gamemode = 1000;
    image.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    div.style ="display:none;"
    con
}

function Difficult(params) {
    Gamemode = 750;
    image.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    div.style ="display:none;"
}

function Impossible(params) {
    Gamemode = 500;
    image.style ="display:block; transform: translate(" + centerw + ", " + centery + ");"
    div.style ="display:none;"
}



 console.log(Math.round(getRandomArbitrary(1, bodyw)) + ' ' + Math.round(getRandomArbitrary(2, bodyh)))
// this is the game part yay OwO

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var randomX =  Math.round(getRandomArbitrary(1, bodyw));
var randomY =  Math.round(getRandomArbitrary(1, bodyh));


function reloadF() {

location.reload();
    
}

//score == tensTable[index]
let currentNumber = 0;
let tensTable = [];
function tens(params) {
  for (let index = 0; index < params; index++ ){
    currentNumber = currentNumber + 1;
    
    let newLength = tensTable.push(currentNumber*10)
   } 
 
}



function clicked() { 
    tens(2)
    score = score + 1;
    document.getElementById("demo").innerHTML = "score: " + score;
    randomX =  Math.round(getRandomArbitrary(1, bodyw-200)) + 'px';
    randomY =  Math.round(getRandomArbitrary(1, bodyh-200)) + 'px';


    for (let index = 0; index <tensTable.length; index++){
        if (score == tensTable[index]) {
            console.log('yay')
            audio2.play();
        } else {
            audio.play();
        }
    }
        
    
    image.style = "transform: translate(" + randomX + ", " + randomY + ");";
    console.log(image.x + ' ' + image.y)
     var myvary = setTimeout(reloadF,Gamemode);
    function clearT(params) {
        clearTimeout(myvary)
    }
    image.addEventListener("click",clearT)
    
    console.log(tensTable)
}







  
