/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const button = document.querySelector("#Execute");

button.addEventListener("click", card);

function card() {
  let CardNum = [
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
  let Symbols = ["Hearts", "Clubs", "Diamonds", "Spades"];
  let CardNumber = Math.floor(Math.random() * CardNum.length);
  let Symb = Math.floor(Math.random() * Symbols.length);
  let FinSym = Symbols[Symb];

  document.getElementById("Number").innerHTML = CardNum[CardNumber];
  document.getElementById("Symbol").className = "";
  document.getElementById("Symbol").classList.add(getSymbol(FinSym));

  function getSymbol(Symbols) {
    switch (Symbols) {
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

setInterval(card, 10000);
