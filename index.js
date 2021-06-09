var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.floor(Math.random()*6) + 1;

randomDice1 = "images/dice" + randomNumber1 + ".png";
randomDice2 = "images/dice" + randomNumber2 + ".png";

var player1 = document.querySelectorAll("img")[0];
var player2 = document.querySelectorAll("img")[1];

player1.setAttribute("src",randomDice1);
player2.setAttribute("src",randomDice2);


if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "Draw!";
}
