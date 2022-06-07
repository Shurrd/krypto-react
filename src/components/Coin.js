import React, { useEffect } from "react";
export default function Coin({
  id,
  name,
  symbol,
  image,
  current_price: price,
  market_cap: marketCap,
}) {
 



  return (
    <>
      <div className="coin">
        <div className="coin-div">
          <h1>{name}</h1>
          <h3>{symbol}</h3>
          <h3>{price}</h3>
          <h4>{marketCap}</h4>
          <img src={image} alt={name} />
        </div>
      </div>
    </>
  );
}
