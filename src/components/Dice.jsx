import React, { useState } from "react";
import emptyDice from "../assets/images/dice-empty.png";
import Dice1 from "../assets/images/dice1.png";
import Dice2 from "../assets/images/dice2.png";
import Dice3 from "../assets/images/dice3.png";
import Dice4 from "../assets/images/dice4.png";
import Dice5 from "../assets/images/dice5.png";
import Dice6 from "../assets/images/dice6.png";

function Dice() {
  let diceArray = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  function handleClick() {
    setDice(emptyDice);
    return new Promise(() => {
      setTimeout(() => {
        setDice(diceArray[Math.floor(Math.random() * diceArray.length)]);
      }, 1000);
    });
  }

  async function asyncCall() {
    await handleClick();

    // Expected output: "resolved"
  }

  const [dice, setDice] = useState(Dice1);
  return (
    <div>
      <img alt="" src={dice} onClick={asyncCall} />
    </div>
  );
}

export default Dice;
