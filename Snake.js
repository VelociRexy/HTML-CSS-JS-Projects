const gameOverSound=new Audio('gameover.mp3');
const foodSound=new Audio('food.mp3');
const moveSound=new Audio('move.mp3');
const board=document.getElementById('board');
let vel={x:0,y:0};
let disp=0;
let snakeArr=[
  {x:3,y:3}
]
let foodPos={x:10,y:10};
let score=0;
let hi=localStorage.getItem("high");// High score
if(hi==null) 
  hi=0;
if(score>hi){
  hi=score;
  localStorage.setItem("high",hi)
}
scoreCur.innerHTML=`Score:${score} High Score:${hi}`// My HTML element that displays score and high score
let up=document.getElementById("ArrowUp");
let left=document.getElementById("ArrowLeft");
let down=document.getElementById("ArrowDown");
let right=document.getElementById("ArrowRight");

function main(time){
  window.requestAnimationFrame(main);
  if((time-disp)/1000<0.2)
    return;
  disp=time;
  gameEngine();
}

function Collided(sArr){
// Snake collides with itself
  for(let i=1;i<sArr.length;++i){
    if(sArr[0].x===sArr[i].x && sArr[0].y===sArr[i].y)
      return true;
  }
// Snake collides with the border
  if((sArr[0].x>=18||sArr[0].x<=0) || (sArr[0].y>=18||sArr[0].y<=0))
     return true;
  return false;
}

function gameEngine(){
  board.innerHTML="";
//Events when Snake is collided
  if(Collided(snakeArr)){
    gameOverSound.play();
    vel={x:0,y:0};
    snakeArr=[
  {x:3,y:3}];
    score=0;
    scoreCur.innerHTML=`Score:${score} High Score:${hi}`
}


//Food eating events
  if(snakeArr[0].x===foodPos.x && snakeArr[0].y===foodPos.y){
    snakeArr.unshift({x:snakeArr[0].x + vel.x, y:snakeArr[0].y + vel.y});
    let a=2,b=16;
    foodPos={x : Math.round(a+(b-a)*Math.random()),y :Math.round(a+(b-a)*Math.random()) };
    foodSound.play();
    score+=5;
    if(score>hi){
      hi=score;
      localStorage.setItem("high",hi)
    }
    scoreCur.innerHTML=`Score:${score} High Score:${hi}`
  }


//Moving the Snake
  for (let i=snakeArr.length-2; i >=0; i--) {
     snakeArr[i+1]={...snakeArr[i]};
  }
  snakeArr[0].x+=vel.x;
  snakeArr[0].y+=vel.y;

  snakeArr.forEach((e,ind)=>{
//Creating head of snake 
    let h=document.createElement("div");
    h.style.gridRowStart=e.y;
    h.style.gridColumnStart=e.x;
    if(ind===0)
      h.classList.add("head");
    else
      h.classList.add("body");
    board.appendChild(h);
  })
// Creating food for snake
  let food=document.createElement("div");
  food.style.gridRowStart=foodPos.y;
  food.style.gridColumnStart=foodPos.x;
  food.classList.add("food");
  board.appendChild(food);
}

window.requestAnimationFrame(main);

up.addEventListener("click",(e)=>{
  console.log("Arrow up");
  moveSound.play();
  vel.x=0;
  vel.y=-1;
})

left.addEventListener("click",(e)=>{
  console.log("Arrow left");
  moveSound.play();
  vel.x=-1;
  vel.y=0;
})

right.addEventListener("click",(e)=>{
  console.log("Arrow right");
  moveSound.play();
  vel.x=1;
  vel.y=0;
})

down.addEventListener("click",(e)=>{
  console.log("Arrow down");
  moveSound.play();
  vel.x=0;
  vel.y=1;
})
