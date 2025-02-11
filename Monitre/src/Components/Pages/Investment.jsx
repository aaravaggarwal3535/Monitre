import React, { useState, useEffect } from "react";
// import Card from "../Card.jsx";
import InvestmentCard from "../InvestmentCard";

function Investment() {
  const [stocks, setStocks] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const stockData = [
      {
        symbol: "AAPL",
        name: "Apple Inc.",
        price: 229.79,
        changesPercentage: 0.94004,
        change: 2.14,
        dayLow: 227.2,
        dayHigh: 230.585,
        exchange: "NASDAQ",
      },
      {
        symbol: "MSFT",
        name: "Microsoft Corporation",
        price: 412.22,
        changesPercentage: 0.60281,
        change: 2.47,
        dayLow: 410.92,
        dayHigh: 415.4624,
        exchange: "NASDAQ",
      },
      {
        symbol: "GOOGL",
        name: "Alphabet Inc.",
        price: 185.35,
        changesPercentage: -0.60063,
        change: -1.12,
        dayLow: 185.35,
        dayHigh: 188.2,
        exchange: "NASDAQ",
      },
      {
        symbol: "TSLA",
        name: "Tesla, Inc.",
        price: 346.75,
        changesPercentage: -1.13478,
        change: -3.98,
        dayLow: 346.75,
        dayHigh: 362.7,
        exchange: "NASDAQ",
      },
    ];

    console.log("Setting stocks:", stockData); // Debugging log
    setStocks(stockData);
  }, []);

  return (
    <>
      <div className="text-[#04AD83] font-bold text-3xl mx-[3rem] pt-[1rem]">
        Investment
      </div>
      
      {/* Green background box */}
      <div className="bg-green-300 rounded-3xl mt-4 p-6 min-h-[400px] flex flex-wrap justify-center items-center overflow-auto">
        {/* Stock cards inside the green box */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {stocks.map((stock) => (
            <InvestmentCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Investment;
