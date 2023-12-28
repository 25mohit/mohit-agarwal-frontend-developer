import React from 'react'

const Stars = () => {

    const numbersOfStar = 160
    const starsArray = Array.from({ length: numbersOfStar }, (_, index) => index + 1);

  return (
    <div className='stars'>
         {starsArray.map((starNumber) => (
        <div key={starNumber} className='star' style={{top: `${Math.random()*100}%`, left: `${Math.random()*100}%`}}/>
      ))}
    </div>
  )
}

export default Stars