let screen = document.getElementById("screen");
let note = document.getElementById("note");
let start = document.getElementById("start");

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
  while (timer != 0) {
    randomNote();
    setTimeout(runTime, 1000);
  }
}

function runTime() {
  timer--;
}

function randomNote() {
  x = Math.floor(Math.random() * 1600 + 60);
  y = Math.floor(Math.random() * 800 + 60);
  note.style.top = y + "px";
  note.style.left = x + "px";
  note.style.display = "block";
}
