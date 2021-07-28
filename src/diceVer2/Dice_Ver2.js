import React, { useRef, useState } from "react";

import "./Dice.css";
function Dice_Ver2() {
  const [numberType, setNumberType] = useState(0);
  const [amountDice, setAmountDice] = useState(0);
  const [arrayResult, setArrayResult] = useState([]);

  const sideDice = useRef(0);
  const numberDice = useRef(0);
  const resultDice = useRef(0);
  const sumDice = useRef(0)

  let result = 0;
  let i;

  const submit = (e) => {
    setNumberType(sideDice.current.value);
    setAmountDice(numberDice.current.value);
    e.preventDefault();
  };

  function createArrayOfDice() {
    for (i = 1; i <= amountDice; i++) {
      result = Math.floor(Math.random() * numberType + 1);
      setArrayResult(arrayResult.push(result));
    }
  }
  function sumOfAllDices() {
    resultDice.current.innerHTML = "";
    for (i = 0; i < arrayResult.length; i++) {
      result = result + arrayResult[i];
      resultDice.current.innerHTML = `${resultDice.current.innerHTML}<div class='dice__roll'>${arrayResult[i]}</div>`;
    }
    sumDice.current.innerHTML = `<div class='dicesum'>${result}</div>`;
  }

  const handleRoll = () => {
    createArrayOfDice();
    sumOfAllDices();
    setArrayResult([]);
  };

  return (
    <div>
      <div>
        <header className="dice__header">
          <h1 className="dice__title theme-custom-1">DICE - Cybersoft</h1>
        </header>
        <form onSubmit={submit}>
        <div className="group-amount theme-custom-1">
        <p className="dice__side">Nhập số mặt xúc xắc</p>
          <input ref={sideDice} type="text" className="dice__input" />
        </div>
          <br />
         <div className="group-type theme-custom-1">
         <p className="dice__number">Nhập số xúc xắc</p>
          <input ref={numberDice} type="text" className="dice__input" />
         </div>
          <br />
          <input
            value="ROLL"
            type="submit"
            className="dice__button theme-custom-1"
            onClick={handleRoll}
          />
        </form>
        <p ref={resultDice}  />
        <p ref={sumDice}  />
      </div>
    </div>
  );
}

export default Dice_Ver2;
