let inputNum = document.getElementById("number");
console.log(inputNum.value);
let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);
let score = document.getElementById("#scr");
let chance = 10;
let btn = document.getElementById("btn");
let restartBtn = document.querySelector(".restart");

btn.addEventListener("click", function () {
  const inputVal = inputNum.value;

  if (chance !== -1) {
    if (!inputVal) {
      document.getElementById("Span").innerHTML = "Please Enter Number";
    } else if (inputVal > 100) {
      document.getElementById("Span").innerHTML =
        "Please Enter Number between 1 to 100";
    } else {
      if (inputVal == randomNum) {
        document.getElementById("Span").innerHTML = "👍Winner";
        document.querySelector(".img").style.backgroundImage = "url('Win.png')";
        // document.querySelector(".main").style.backgroundColor="#42f551";
        document.querySelector("#scr").textContent = " Score = " + chance * 10;
        chance = -1;
        Restart();
      } else if (inputVal > randomNum) {
        document.getElementById("Span").innerHTML = "😒Too High";
        chance--;
        document.querySelector(".chance").textContent = "Chance = " + chance;
      } else {
        document.getElementById("Span").innerHTML = "😒Too Low";
        chance--;
        document.querySelector(".chance").textContent = "Chance = " + chance;
      }
    }
    inputNum.value = "";
    if (chance == 0) {
      document.getElementById("Span").innerHTML = "😫Game Over..... ";
      document.querySelector(".img").style.backgroundImage = "url('loser.png')";
      // document.querySelector(".main").style.backgroundColor="#800909";
      document.querySelector("#scr").textContent = " Score = " + chance;
      document.querySelector(".main").style.backgroundColor = "red";
    }
  }
});
restartBtn.addEventListener("click", function () {
  randomNum = Math.floor(Math.random() * 100) + 1;
  document.getElementById("Span").innerHTML = "🧐Start Guessing.....";
  document.querySelector(".img").style.backgroundImage = "url('Thinking.png')";
  score = 0;
  document.querySelector("#scr").textContent = " Score = " + score;
  chance = 10;
  document.querySelector(".chance").textContent = "Chance = " + chance;
  inputNum.value = "";
  document.querySelector(".main").style.backgroundColor = "";
});
