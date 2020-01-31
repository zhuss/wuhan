let viewStart = document.querySelector(".view-start");
//开始按钮
let startBtn =  document.querySelector(".btn-start");
//再来一次按钮
let replayBtn = document.querySelector(".replay-btn");

let timeBoard = document.querySelector(".time");
let countBoard = document.querySelector(".count");

let viewPlay = document.querySelector(".view-play");

let viewEnd = document.querySelector(".view-end");

// let audio = document.querySelectorAll(".audio");
 let audio = document.querySelector(".audio");

let time = 20;

let count = 0;

let timer = null;

let width = document.body.clientWidth;
let heigth = document.body.clientHeight;

console.log(width);
console.log(heigth);

createjs.Sound.registerSound( {src:"file/tap.mp3", id:"tap"} );

//点击开始按钮
startBtn.onclick = function(){
  viewStart.style.display = "none";
  //倒计时
  timer = setInterval(function(){
    if(time <= 0){
      clearInterval(timer);
      viewEnd.style.display = "block";
      countBoard.innerHTML = count;
      document.title = "我消灭了"+count+"个病毒，你也一起来吧。"
    }else{
      time--;
      timeBoard.innerHTML = time;
    }
  },1000);
  //初始化5个病毒
  for(let i = 0; i < 5; i++){
    createCoronavirus();
  }
}

//点击再来一次按钮
replayBtn.onclick = function(){
  count = 0;
  time = 20;
  viewEnd.style.display = "none";
  //倒计时
  timer = setInterval(function(){
    if(time <= 0){
      clearInterval(timer);
      viewEnd.style.display = "block";
      countBoard.innerHTML = count;
      document.title = "我消灭了"+count+"个病毒，你也一起来吧。"
    }else{
      time--;
      timeBoard.innerHTML = time;
    }
  },1000);
};

function createCoronavirus(){
  let left = Math.floor(Math.random()*(width-40)); //0-9整数
  let top = Math.floor(Math.random()*(heigth-40)); //0-9整数
  let coronavirus =   document.createElement("DIV");
  coronavirus.className = "coronavirus";
  coronavirus.style="left:"+left+"px;top:"+top+"px";
  viewPlay.appendChild(coronavirus);
  coronavirus.addEventListener("click",function(){
    createjs.Sound.play("tap");
     this.remove();
     count++;
     setTimeout(function(){
      createCoronavirus();
     },500);
     
  },false);

}