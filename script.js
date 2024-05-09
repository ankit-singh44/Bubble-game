function makeBubble(){
    var clutter="";


for(var i=1;i<=180;i++){
    var rn=Math.floor(Math.random()*10);
    clutter+= `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}
makeBubble();

var timer=10;

function runTimer(){
    var samay=setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(samay);
        }
    },1000);
}

runTimer();