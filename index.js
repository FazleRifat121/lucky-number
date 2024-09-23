let num = document.getElementById("number");
let text = document.getElementById("text");
let btn = document.getElementById("gen");

btn.addEventListener("click", function () {
  let yourNum = prompt("Enter your guess 1 to 10");
  let random = Math.floor(Math.random() * 10) + 1;
  num.innerHTML = random;
  if (yourNum == random) {
    text.innerHTML = "You won!";
  } else {
    text.innerHTML = "You lose!";
  }
  return yourNum;
});
