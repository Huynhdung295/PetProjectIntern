import React, {  useRef, useState } from "react";

import "./Dice.css";
function Dice_Ver2() {
  const typeDice  = {
    D4: 4,
    D6: 6,
    D8: 8,
    D10: 10,
    D12: 12,
    D20: 20
  }

  const [numberType, setNumberType] = useState(typeDice.D4);
  const [amountDice, setAmountDice] = useState(0);
  const [arrayResult, setArrayResult] = useState([]);
  
  

  // const sideDice = useRef(0);
  const numberDice = useRef(0);
  const resultDice = useRef(0);
  const sumDice = useRef(0)

  let result;
  let i;


  const submit = (e) => {
    e.preventDefault();
    // setNumberType(sideDice.current.value);
    setAmountDice(numberDice.current.value);
    
  };

  function createArrayOfDice() {
      result = 0
    for ( i = 1; i <= amountDice; i++) {
      result = Math.floor(Math.random() * numberType + 1);
      setArrayResult(arrayResult.push(result));
    }
  }


  const sumOfAllDices = () => {
    resultDice.current.innerHTML = "";
    result = 0
    for (i = 0; i < arrayResult.length; i++) {
     console.log(`Đang check ở tổng tất cả dice - 1: ${result}`);
      result += arrayResult[i];
      console.log(`Đang check ở tổng tất cả dice - 2: ${result}`);
     resultDice.current.innerHTML = `${resultDice.current.innerHTML}<div class='dice__roll'> ${arrayResult[i]} </div>`;
    }
    sumDice.current.innerHTML = `<div class='dicesum'>${result}</div>`;
    console.log("------------------------------");

  }

  const handleRoll = () => {
    createArrayOfDice();
    sumOfAllDices();
    setArrayResult([]);
 
  };

  return (
    <div>
      <div className="project-dice">
        <div className="dice__header">
          <h1 className="dice__title ">DICE - Cybersoft</h1>
          <p>Need some dice? We got you</p>
        </div>
        <form className="form-group-dice" onSubmit={submit}>
        <div className="group-amount display-flex">
        <p className="dice__side">Chọn loại xúc xắc</p>
          {/* <input ref={sideDice} type="text" className="dice__input" /> */}
          <select className="dice__input" value={numberType} onChange={e => setNumberType(e.target.value)}>
            {Object.entries(typeDice).map(type => (
              <option value={type[1]}>{type[0]}</option>
            ))}
          </select>
        </div>
          <br />
         <div className="group-type display-flex">
         <p className="dice__number">Nhập số xúc xắc</p>
          <input ref={numberDice} type="text" className="dice__input" />
         </div>
          <br />
          <input
            value="ROLL"
            type="submit"
            className="dice__button "
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
