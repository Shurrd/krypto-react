import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import Loading from "./Loading";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

const FetchCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCoins = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoins(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    getCoins();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className="section coin-container">
        {coins.map((item) => {
          return <Coin key={item.id} {...item} />;
        })}
      </section>
    </>
  );
};

export default FetchCoins;
