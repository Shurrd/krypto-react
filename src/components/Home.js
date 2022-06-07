import React, { useState, useEffect } from "react";
import FetchCoins from "./FetchCoins";
import Loading from "./Loading";
import Search from "./Search";

const Home = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Search />
      <FetchCoins />
    </>
  );
};

export default Home;
