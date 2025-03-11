/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const button = document.querySelector("#Execute");

button.addEventListener("click", generateCard);

function generateCard() {
  /*Se cambio el nombre de card a generateCard*/
  const cardNumbers = [
    /*Se cambio de let a const para mejorar la inicializacion de la variable y se cambio el nombre de la variable de cardnum a cardnumbers para una mejor lectura*/
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const cardSuits = [
    "Hearts",
    "Clubs",
    "Diamonds",
    "Spades"
  ]; /*Se cambio de let a const para mejorar la inicializacion de la variable y se cambio el nombre de la variable symbols a cardSuits para una mejor lectura*/

  const randomNumber = Math.floor(
    Math.random() * cardNumbers.length
  ); /*Se cambio de let a const para mejorar la inicializacion de la variable y se cambio el nombre de la variable de cardnumber a randomNumber para una mejor lectura*/

  const randomSuit = Math.floor(
    Math.random() * cardSuits.length
  ); /* Se cambio de let a const para mejorar la inicializacion de la variable*/

  const finalSuit =
    cardSuits[
      randomSuit
    ]; /*Se cambio de let a const para mejorar la inicializacion de la variable y se cambio el nombre de la variable de FinSym a finalSuit para una mejor lectura*/

  document.getElementById("Number").innerHTML = cardNumbers[randomNumber];
  document.getElementById("Suit").className = "";
  document.getElementById("Suit").classList.add(getSuit(finalSuit));

  function getSuit(Suits) {
    /*Se cambio el nombre de la funcion a getSuit para una mejor lectura*/

    switch (Suits) {
      case "Hearts":
        return "heart";
      case "Clubs":
        return "club";
      case "Diamonds":
        return "diamond";
      case "Spades":
        return "spade";
    }
  }
}

setInterval(generateCard, 10000);
