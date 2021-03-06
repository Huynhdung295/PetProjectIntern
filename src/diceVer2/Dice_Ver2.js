import React, { useRef, useState } from "react";


import "./Dice.css";
function Dice_Ver2() {
  const typeDice = {
    D4: 4,
    D6: 6,
    D8: 8,
    D10: 10,
    D12: 12,
    D20: 20,
  };
  const amount = {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
  };

  const [numberType, setNumberType] = useState(typeDice.D4);
  const [amountDice, setAmountDice] = useState(amount[1]);
  const [arrayResult, setArrayResult] = useState([]);
  const [amountRoll, setAmoutRoll] = useState(0);

  // const sideDice = useRef(0);
  // const numberDice = useRef(0);
  const resultDice = useRef(0);
  // const sumDice = useRef(0);

  let result;
  let i;

  const submit = (e) => {
    e.preventDefault();
  };

  function createArrayOfDice() {
    result = 0;
    for (i = 1; i <= amountDice; i++) {
      result = Math.floor(Math.random() * numberType + 1);
      setArrayResult(arrayResult.push(result));
    }
  }

  const sumOfAllDices = () => {
    resultDice.current.innerHTML = "";
    result = 0;
    for (i = 0; i < arrayResult.length; i++) {
      result += arrayResult[i];
      resultDice.current.innerHTML = `${resultDice.current.innerHTML}<div class='dice__roll'> ${arrayResult[i]} </div>`;
    }
    // sumDice.current.innerHTML = `<div class='dicesum'>${result}</div>`;
  };
  const updateAmountRoll = () => {
    // eslint-disable-next-line
    if (amountDice == 0) {
      setAmoutRoll(amountRoll);
    } else {
      setAmoutRoll(amountRoll + 1);
    }
  };
  const resetRoll = () => {
    setAmoutRoll(0);
    setNumberType(typeDice.D4);
    setAmountDice(amount[1]);
    setArrayResult([]);
    sumOfAllDices()
  
  };

  const handleRoll = () => {
    createArrayOfDice();
    updateAmountRoll();
    sumOfAllDices();
    setArrayResult([]);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="project-dice">
          <div className="">
            <h1 className="dice-title ">DICE - Cybersoft</h1>
          </div>
          <form className="" onSubmit={submit}>
            <div className="">
              <p className="dice-title dice-content">Ch???n lo???i x??c x???c</p>
              <select
                className="dice-form"
                value={numberType}
                onChange={(e) => setNumberType(e.target.value)}
              >
                {Object.entries(typeDice).map((type) => (
                  <option className="dice-option" value={type[1]}>
                    {type[0]}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <div className="">
              <p className="dice-title dice-content">Nh???p s??? x??c x???c</p>
              <select
                className="dice-form"
                value={amountDice}
                onChange={(e) => setAmountDice(e.target.value)}
              >
                {Object.entries(amount).map((type) => (
                  <option className="dice-option" value={type[1]}>
                    {type[0]}
                  </option>
                ))}
              </select>
              {/* <input
                onChange={(e) => setAmountDice(e.target.value)}
                ref={numberDice}
                type="text"
                className="dice-form"
              /> */}
            </div>
            <br />
            <div>
              <p className="dice-title dice-content">
                S??? l???n b???n ???? roll: {amountRoll}
              </p>
            </div>
            <input
              value="ROLL"
              type="submit"
              className="dice-form dice-button"
              onClick={handleRoll}
            />
            <input
              value="RESET"
              type="submit"
              className="dice-form dice-button"
              onClick={resetRoll}
            />
          </form>
          <p ref={resultDice} className="dice-result" />
          {/* <p ref={sumDice} /> */}
        </div>
        <div className="drops">
          <div className="drop drop-2" />
          <div className="drop drop-3" />
          <div className="drop drop-5" />
        </div>
      </div>
    </div>
  );
}

export default Dice_Ver2;
