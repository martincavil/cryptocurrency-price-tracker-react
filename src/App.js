import './app.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {

  const [conins, setCoins] = useState([])

  const urlAPI = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

  useEffect(() => {
    axios.get(urlAPI)
    .then(res => {
      setCoins(res.data);
      console.log(res.data);
    });
  });


  return (
    <div className="app"></div>
  );
}

export default App;
