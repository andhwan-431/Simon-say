let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purpule", "green"]; //btn ke class names array me string ke fom me rakhna

let started = false;
let level = 0;

let h2 = document.querySelector("h2"); //access element

document.addEventListener("keypress", function () { //step:- 1
    if (started == false) {
        console.log("game started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {   // step:- 3 //btn ko flash karane ke liye function jo flash class ko add/remove karta hai.
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {            //step:- 2
    userSeq = []; //userSeq reset
    level++;

    h2.innerText = `level ${level}`;

    //random btn flash
    let randIdx = Math.floor(Math.random() * 4) ; //random index num choosing 0 to 3 
    let randColor = btns[randIdx];    // array list se random btn class name access 
    let randBtn = document.querySelector(`.${randColor}`); //button access using class name
   gameSeq.push(randColor);  //array me random color push karna
   console.log( "Game sequence :-", gameSeq);
    btnFlash(randBtn); //btn ko flash karane ke liye function me btn ko as a parameter pass karna
}

function checkAns(idx){ //step:- 6

if(userSeq[idx] === gameSeq[idx]){
if(userSeq.length == gameSeq.length){
   setTimeout(levelUp, 1000);
}
}else{
    h2.innerHTML = `Game over! Your score was <b>${level}</b> <br> Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
    },150);
    reset();
}
}

function btnPress() { //step:- 5
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log( "User sequence", userSeq);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn"); //access elements  //step:- 4
for (btn of allBtns) {
    btn.addEventListener("click", btnPress); //button clicked function trigger
}

function reset(){  //step:- 7
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
