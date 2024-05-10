function makeBubble(){
    var clutter="";


for(var i=1;i<=180;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+= `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}

var timer=20;

function runTimer(){
    var samay=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(samay);
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
        }
    },1000);
}

var hitRn;
function getNewHit(){
    hitRn= Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitRn;
}
var sum=0;

function Sumplus(){
    sum+=10;
    document.querySelector("#scoreVal").textContent=sum;
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    var clickedNum=Number(details.target.textContent);
    if(hitRn==clickedNum){
        Sumplus();
        getNewHit();
        makeBubble();
    }
})

makeBubble();
runTimer();
getNewHit();