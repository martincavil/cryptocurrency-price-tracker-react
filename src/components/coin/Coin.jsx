import React from 'react';
import './coin.scss';

export default function Coin({ name, image, symbol, price, volume}) {
  return (
    <div className='coinContainer'>
      <div className="coinRow">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>Name</h1>
          <p className='coinSymbol'>{symbol}</p>
        </div>
        <div className="coinData">
          <p className='coinPrice'>{price}</p>
          <p className='coinVolum'>{volume.toString()}</p>

        </div>
      </div>
    </div>
  )
}
