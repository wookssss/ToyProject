//ID로 문서를 가져오는 변수
let screen = document.getElementById("screen");
let note = document.getElementById("note");
let start = document.getElementById("start");

let timeP = document.getElementById("time");
let scoreP = document.getElementById("score");

//노트의 클래스 이름 설정용 배열
let universe = [
  "moon",
  "sun",
  "mercury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
];

let noteInv;
let timeInv;

let score = 0;
let timer = 30;

//노트 관련 변수들
let x;
let y;
let radius;
let index;

start.addEventListener("click", setStart);

function setStart() {
  score = 0;
  timer = 30;
  start.style.display = "none";
  startGame();
}

function startGame() {
  note.addEventListener("click", getScore);
  noteInv = setInterval(randomNote, 800);
  timeInv = setInterval(runTime, 1000);
}

function getScore() {
  if (index == 0) {
    //달을 클릭하면 마이너스 점수
    if (score != 0) score -= 1;
  } else if (index >= 1 && index <= 3) {
    score += 1;
  } else if (index >= 4 && index <= 5) {
    score += 2;
  } else score += 3;

  scoreP.innerText = score;
  note.style.display = "none";
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
  //좌표, 크기, 클래스 설정
  x = Math.floor(Math.random() * 1100 + 50);
  y = Math.floor(Math.random() * 500 + 50);
  radius = Math.floor(Math.random() * 100) + 50;
  index = Math.floor(Math.random() * 8);

  //note 영역에 반영
  note.style.top = y + "px";
  note.style.left = x + "px";
  note.style.width = radius + "px";
  note.style.height = radius + "px";
  note.style.display = "block";
  note.className = universe[index];
  console.log(index);
}
