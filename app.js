let gameSeq=[];
let userSeq=[];

let color=["red","green","orange","purple"];

let start=false;
let level=0;
let h2=document.querySelector("h2");
let body=document.querySelector("body");
let btn=document.querySelector(".gameSt");
// let h3=document.querySelector("h3");
// let highScore=0;

document.addEventListener("keypress",()=>{
    if(start==false)
    {
        //console.log("game started");
        start=true;
    }

    levelUp();
});

btn.addEventListener("click",()=>{
    if(start==false)
    {
        //console.log("game started");
        start=true;
    }

    levelUp();
});

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    // Give a random btn in btnFlash function
    let ranIdx=Math.floor(Math.random()*3);
    let ranColor=color[ranIdx];
    let ranBtn=document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    gameFlash(ranBtn);
    //console.log(gameSeq);
}

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    },250);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx])
    {
       if(userSeq.length==gameSeq.length)
       {
        setTimeout(levelUp,500);
       }
    }
    else
    {
        h2.innerHTML=`Game over ! <b> Your score is ${level} </b> <br> Press any key for start again`;
        reset();
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";
        },200);
    }
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");

    userSeq.push(userColor);
    checkAns(userSeq.length-1);
    console.log(userSeq);
}

let allBtn=document.querySelectorAll(".btn")
{
    for(btn of allBtn)
    {
        btn.addEventListener("click",btnPress);
    }
}

function reset(){
    start=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}