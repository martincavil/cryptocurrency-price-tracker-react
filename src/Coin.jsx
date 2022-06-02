import React from 'react'

export default function Coin() {
  return (
    <div className='coinContainer'>
      <div className="coinRow">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className='coinSymbol'>{symbol}</p>
        </div>
        <div className="coinData">
          <p className='coinPrice'>{price}</p>
          <p className='coinVolum'>{volume.}</p>
        </div>
      </div>
    </div>
  )
}
