let count = 0;
let randomTime = Math.random() * 5000;
let btn_wrap = document.getElementById("btn_wrap");
let startBtn = document.querySelector("button");

let startTime;
let stopTime;

setStart();
startBtn.addEventListener("click", startTest);

function setStart() {
  startBtn.style.display = "block;";
}

function startTest() {
  startBtn.style.display = "none";
  btn_wrap.style.backgroundColor = "rgb(0, 251, 255)";
  stratTimer();
}

function changeBackgrond() {
  btn_wrap.style.backgroundColor = "red";
}

function stratTimer() {
  setTimeout(changeBackgrond, randomTime);
  startTime = new Date();
}

function stopTimer() {
  btn_wrap.style.backgroundColor = "#fff";
  stopTime = new Date();
}

//
