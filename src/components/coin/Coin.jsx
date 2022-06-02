import React from 'react';
import './coin.scss';

export default function Coin({ name, image, symbol, price, volume, priceChange, marketCap}) {
  return (
    <div className='coinContainer'>
      <div className="coinRow">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className='coinSymbol'>{symbol.toUpperCase()}</p>
        </div>
        <div className="coinData">
          <p className='coinPrice'>${price.toLocaleString()}</p>
          <p className='coinVolum'>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='coinPercent red'>
              {priceChange.toFixed(2)}%
            </p>
          ) : <p className='coinPercent green'>
          {priceChange.toFixed(2)}%
        </p>}
        <p className='coinMerketCap'>
          Mkt Cap: ${marketCap.toLocaleString()}
        </p>
        </div>
      </div>
    </div>
  )
}
