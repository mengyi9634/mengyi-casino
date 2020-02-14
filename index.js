var randomNumber1 = Math.ceil(Math.random() * 6)
var randomNumber2 = Math.ceil(Math.random() * 6)

var randomDiceImg1 = "images/dice" + randomNumber1 + ".png"
var randomDiceImg2 = "images/dice" + randomNumber2 + ".png"

document.querySelector(".img1").setAttribute("src", randomDiceImg1)
document.querySelector(".img2").setAttribute("src", randomDiceImg2)

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 wins!"
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins!🚩"
} else {
  document.querySelector("h1").innerHTML = "It's a tie!"
}
