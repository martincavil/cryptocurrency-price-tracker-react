import React from 'react';
import './coin.scss';

export default function Coin({ name, image, symbol, price, volume, priceChange, marketCap}) {
  return (
    <div className='coinContainer'>
      <div className="dataDesc">
        <div className="descPrice">Current Price</div>
        <div className="descVolume">Volume</div>
        <div className="desc24hChange">24h Change</div>
        <div className="descMarketCap">Market Cap.</div>
      </div>
      <div className="coinRow">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className='coinSymbol'>{symbol.toUpperCase()}</p>
        </div>
        <div className="coinData">
          <p className='coinPrice'>${price.toLocaleString()}</p>
          <p className='coinVolume'>${volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className='coinPercent red'>
              {priceChange.toFixed(2)}%
            </p>
          ) :
            <p className='coinPercent green'>
              {priceChange.toFixed(2)}%
            </p>
          }
          {
            marketCap < 1000000000 ? (
              <p className='coinMarketCap'>Mkt Cap: ${Math.trunc(marketCap / 1000000)}M</p>
            ) :
              <p className='coinMarketCap'>Mkt Cap: ${Math.trunc(marketCap / 1000000000)}B</p>
          }
        </div>
      </div>
    </div>
  )
}
