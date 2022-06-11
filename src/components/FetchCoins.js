import React, { useEffect, useState } from "react";
import Coin from "./Coin";
import Footer from "./Footer";
import Loading from "./Loading";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true";

const FetchCoins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = coins.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(coins);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
      <section className="section section-search">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">search your favorite Krypto</label>
            <input type="text" onChange={(e) => searchItems(e.target.value)} />
          </div>
        </form>
      </section>

      <section className="section coin-container">
        {searchInput.length > 1
          ? filteredResults.map((item) => {
              return <Coin key={item.id} {...item} />;
            })
          : coins.map((item) => {
              return <Coin key={item.id} {...item} />;
            })}
      </section>

      <Footer />
    </>
  );
};

export default FetchCoins;
