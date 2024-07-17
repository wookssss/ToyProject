let randomTime = Math.random() * 5000 + 100;
let timer_box = document.getElementById("timer_box");
let startBtn = document.querySelector("button");
let click_space = document.getElementById("click_space");
let text_box = document.getElementById("text_box");

let start = false; // 시작상태 변수
let ready = false; // 클릭신호 변수

// 반응속도 구하기 위한 시간 변수
let startTime;
let stopTime;
let response;

// 페이지 접속시 초기 설정
setStart();
startBtn.addEventListener("click", startTest);
click_space.addEventListener("click", stopTimer);

function setStart() {
  startBtn.style.display = "inline-block";
  click_space.style.display = "none";
  ready = false;
}

/* 
버튼을 클릭할 경우 버튼이 사라지고 시작 상태 설정
버튼이 있던 공간에 클릭 공간이 나타남
배경색은 클릭 대기 중인 표시로 하늘색 설정
*/
function startTest() {
  start = true;
  startBtn.style.display = "none";
  click_space.style.display = "inline-block";
  timer_box.style.backgroundColor = "rgb(0, 251, 255)";
  stratTimer();
}

/* 
클릭을 위한 배경색 변경
클릭 신호가 나타나면 타이머 시작 
*/
function changeBackgrond() {
  ready = true;
  timer_box.style.backgroundColor = "green";
  startTime = new Date();
}

/* 랜덤 시간 뒤에 배경색이 바뀌도록 설정 */
function stratTimer() {
  setTimeout(changeBackgrond, randomTime);
}

/* 
클릭했을때 이벤트 설정
준비가 안됐을때는 초기 화면으로, 이후엔 반응속도를 구하는 함수 실행
*/
function stopTimer() {
  if (ready == false) {
    alert("아직 준비되지 않았습니다. 다시 시작해주세요");
    location.href = "main.html";
  }
  timer_box.style.backgroundColor = "red";
  click_space.innerText = "측정종료";
  start = false;
  stopTime = new Date();

  response = stopTime - startTime;
  var text = document.createTextNode("당신의 반응속도 : " + response + "ms");
  text_box.appendChild(text);
  text_box.style.display = "block";

  click_space.onclick = function () {
    text_box.style.display = "none";
    location.href = "main.html";
  };
}
