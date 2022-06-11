import React, { useEffect } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
export default function Coin({
  id,
  name,
  symbol,
  image,
  current_price: price,
  market_cap: marketCap,
  sparkline_in_7d: sparkline,
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
            <h3 style={{ marginTop: "20px" }}>
              <Sparklines data={sparkline.price}>
                <SparklinesLine color="teal" />
              </Sparklines>
            </h3>
          </div>

          <div className="image">
            <img src={image} alt={name} />
          </div>
        </div>
      </div>
    </>
  );
}
