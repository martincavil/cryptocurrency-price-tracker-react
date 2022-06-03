import './app.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Coin from './components/coin/Coin';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const APICOINGEKCO = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=500&page=1&sparkline=false';

  useEffect(() => {
    axios.get(APICOINGEKCO)
    .then(res => {
      setCoins(res.data);
    }).catch((error => console.log('url API Error')));
  }, []);


  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div className="app">
      <div className="coinApp">
        <div className="coinSearch">
          <h1 className='cointText'>Cryptocurrencies List</h1>
          <form >
            <input
              type="text"
              placeholder='Search a coin'
              className='coinInput'
              onChange={handleChange}/>
          </form>
        </div>
        <div className="dataDesc">
          <div className="descPrice">Current Price</div>
          <div className="descVolume">Volume</div>
          <div className="desc24hChange">24h</div>
          <div className="descMarketCap">Market Cap.</div>
      </div>
        {filteredCoins.map(coin => {
          return (
            <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketCap={coin.market_cap}
            volume={coin.total_volume} />
          )
        })}
      </div>
    </div>
  );
}

export default App;
