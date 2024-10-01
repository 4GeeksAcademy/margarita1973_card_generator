/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cardNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let cardSuits = ["♦", "♥", "♠", "♣"];
function randomGenerator(Array) {
  return Math.floor(Math.random() * Array.length);
}
function newcard() {
  const randomCardNumber = cardNumbers[randomGenerator(cardNumbers)];
  const randomCardSuits = cardSuits[randomGenerator(cardSuits)];
  let suitTop = document.getElementById("suit-top");
  let suitBottom = document.getElementById("suit-bottom");
  let cardNumber = document.getElementById("card-number");

  cardNumber.innerHTML = randomCardNumber;
  suitBottom.innerText = randomCardSuits;
  suitTop.innerText = randomCardSuits;
  let card = document.querySelector(".card");
  card.className =
    randomCardSuits == "♦" || randomCardSuits == "♥"
      ? "card poker-card-red"
      : "card poker-card-black";
}

const addNewCardButtom = document.getElementById("newcard");
addNewCardButtom.addEventListener("click", newcard);

window.onload = function() {
  newcard();
};

function resizeCard() {
  const cardHeight = document.getElementById("cardHeight");
  const cardWidth = document.getElementById("cardWidth");
  let card = document.querySelector(".card");
  card.style.width = cardWidth.value + "px";
  card.style.height = cardHeight.value + "px";
  cardHeight.value = "";
  cardWidth.value = "";
}

const resizeButton = document.getElementById("resizebutton");
resizeButton.addEventListener("click", resizeCard);
