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
          <div className="info-container">
            <h1>{name}</h1>
            <h3 className="symbol">{symbol}</h3>
            <h3 className="price">
              Price: <span>${price}</span>{" "}
            </h3>
          </div>
          {/* <h4>{marketCap}</h4> */}
          <div className="image">
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
    </>
  );
}
