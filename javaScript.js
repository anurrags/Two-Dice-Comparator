var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// console.log(randomNumber1);
switch (randomNumber1) {
  case 1:
    document.querySelector(".img1").setAttribute("src", "images/dice1.png");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src", "images/dice2.png");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src", "images/dice3.png");
    break;
  case 4:
    document.querySelector(".img1").setAttribute("src", "images/dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src", "images/dice5.png");
    break;
  default:
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

switch (randomNumber2) {
  case 1:
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    break;
  case 3:
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    break;
  case 4:
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    break;
  default:
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "🚩 Player1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player2 wins! 🚩";
} else {
  document.querySelector("h1").textContent = "It's a draw!";
}
