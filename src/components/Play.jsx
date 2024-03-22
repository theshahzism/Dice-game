import React from "react";
import { useState } from "react";

const Play = () => {
  const [btnValue,setBtnValue]=useState(1);
  const [score,setScore]=useState(0);
  const [diceValue,setDiceValue]=useState(0)

  const playGame=()=>{
    const randomDecimal = Math.random();
    const randomNumber = Math.floor(randomDecimal * 6) + 1;
    setDiceValue(randomNumber)
    if(btnValue===randomNumber){
      setScore(score+1);
    }else{
      setScore(score-1)
    };
  }
  const resetbtn=()=>{
    setScore(0)
  }

  return (
    <div className="play-container">
      <div className="play-nav">
        <div className="score">
          <h1 className="score-tag">{score}</h1>
          <h1 >Total Score</h1>
        </div>
        <div className="select-nmbr">
          <div className="btns">
            <button onClick={()=>setBtnValue(1)}>1</button>
            <button onClick={()=>setBtnValue(2)}>2</button>
            <button onClick={()=>setBtnValue(3)}>3</button>
            <button onClick={()=>setBtnValue(4)}>4</button>
            <button onClick={()=>setBtnValue(5)}>5</button>
            <button onClick={()=>setBtnValue(6)}>6</button>

          </div>
          <div className="selector">
            <h3>{`Selected Button is ${btnValue}`}</h3>
            <h3>{`Dice value is ${diceValue}`}</h3>
            <h3>{btnValue===diceValue? 'Success': 'Fail'}</h3>
          </div>
        </div>
      </div>
      <div className="play-content">
        <img onClick={playGame} src="/images/cube.png" alt="Dice Image" />
        <h3>Click on dice to roll</h3>
        <button className="reset-btn" onClick={resetbtn}>Reset Score</button>
      </div>
    </div>
  );
};

export default Play;
