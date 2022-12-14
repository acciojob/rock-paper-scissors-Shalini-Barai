const b1=document.querySelector('#rock');
const b2=document.getElementById('paper');
const b3=document.getElementById('scissors');
const gm1=document.querySelector('#play-game');
gm1.addEventListener('click',start);
console.log(b1);
console.log(b2);
console.log(b3);

var initialcount;
 var a=0;
function start(){
     a=document.getElementById('game-number').value;
     initialcount=document.getElementById('game-number').value;
     console.log(a);   
      b1.addEventListener('click',gamea);
      b2.addEventListener('click',gameb);
      b3.addEventListener('click',gamec);
      
}

 var winningcount=0;
 //else{
//a--;
 function gamea(){ 
    
    a--;
        if(a==0){
            declareResult();
            return;
        }
    
    console.log("gamea");
    let cpu1=Math.floor(Math.random()*3);
    let cpu2=['SCISSORS', 'PAPER' ,'ROCK'][0,1,2];
    console.log(cpu2);
    if(cpu2=='ROCK'){
        document.getElementById('round-result').innerHTML="TIE";
    }
    else if(cpu2=='PAPER'){
        document.getElementById('round-result').innerHTML="LOSS";
    }
    else if(cpu2=='SCISSORS'){
        winningcount++;
        document.getElementById('round-result').innerHTML="WON";
        // count++;
        // console.log("Count is "+count);
    }
    console.log("updated count", a);
}




 function gameb(){
    console.log("gameb");
    a--;
    if(a==0){
        declareResult();
        return;
    }
    
    let cpu1=Math.floor(Math.random()*3);
    let cpu2=['SCISSORS', 'PAPER' ,'ROCK'][0,1,2];
    console.log(cpu2);
    if(cpu2=='PAPER'){
        document.getElementById('round-result').innerHTML="TIE";
    }
    else if(cpu2=='ROCK'){
        document.getElementById('round-result').innerHTML="WON";
        winningcount++;
    }
    else if(cpu2=='SCISSORS'){
        document.getElementById('round-result').innerHTML="LOSS";
      
        // console.log("Count is "+count);

    }
    
}

 function gamec(){
    a--;
    console.log("gamec");
    if(a==0){
        declareResult();
        return;
    }
    
    let cpu1=Math.floor(Math.random()*3);
    let cpu2=['SCISSORS', 'PAPER' ,'ROCK'][0,1,2];
     console.log(cpu2);
    if(cpu2=='SCISSORS'){
        document.getElementById('round-result').innerHTML="TIE";
    }
    else if(cpu2=='PAPER'){
        document.getElementById('round-result').innerHTML="WON";
        winningcount++;
    }
    else if(cpu2=='ROCK'){
        document.getElementById('round-result').innerHTML="LOSS";
        // count++;
        // console.log("Count is "+count);

    }
    
}
//}
// console.log("Count is "+count);
function declareResult(){
    if(winningcount>initialcount/2){
        document.getElementById('game-result').innerHTML="User Win";
    }
    else if(winningcount==initialcount/2){
        document.getElementById('game-result').innerHTML="TIE";
        //print tie
    }
    else{
        document.getElementById('game-result').innerHTML="User LOSS";
        //print lost
    }
}
