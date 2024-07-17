let screen = document.getElementById("screen");
let note = document.getElementById("note");
let start = document.getElementById("start");

let timeP = document.getElementById("time");
let scoreP = document.getElementById("score");

let noteInv;
let timeInv;

let score = 0;
let timer = 30;
let x;
let y;

start.addEventListener("click", setStart);

function setStart() {
  score = 0;
  timer = 30;
  start.style.display = "none";
  startGame();
}

function startGame() {
  noteInv = setInterval(randomNote, 1000);
  timeInv = setInterval(runTime, 1000);

  note.onclick = function () {
    score++;
    scoreP.innerText = score;
    note.style.display = "none";
  };
}

function stopGame() {
  clearInterval(timeInv);
  clearInterval(noteInv);
  alert("게임이 종료되었습니다.\n당신의 점수는 " + score + "점입니다.");
  location.href = "touchGame.html";
}

function runTime() {
  if (timer == 0) {
    stopGame();
  }
  timer--;
  timeP.innerText = timer;
}

function randomNote() {
  x = Math.floor(Math.random() * 1200 + 80);
  y = Math.floor(Math.random() * 600 + 80);
  note.style.top = y + "px";
  note.style.left = x + "px";
  note.style.display = "block";
  console.log(score);
}
