import React from 'react'

const MainPage = ({playbtn}) => {
  return (
    <div className='container-mainpage'>
      <div className='mainpage-image'>
        <img src="/images/dices.png" alt="Dice image" />
      </div>
      <div className='mainpage-content'>
        <div className='mainpage-content-container'>
          <h1>DICE GAME</h1>
          <button className='play-btn' onClick={playbtn}>Play now</button>
        </div>
      </div>
    </div>
  )
}

export default MainPage;
