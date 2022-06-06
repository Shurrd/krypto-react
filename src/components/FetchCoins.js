import React, { useEffect, useState } from "react";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

const FetchCoins = () => {
  const [coins, setCoins] = useState([]);

  const getCoins = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCoins(data);
  };
  useEffect(() => {
    getCoins();
  }, []);

  return (
    <>
      {coins.map((item) => {
        const { id, name, symbol, image } = item;
        return (
          <div key={id} {...item}>
            <h1>{name}</h1>
            <h3>{symbol}</h3>
            <img src={image} alt={name} />
          </div>
        );
      })}
    </>
  );
};

export default FetchCoins;
