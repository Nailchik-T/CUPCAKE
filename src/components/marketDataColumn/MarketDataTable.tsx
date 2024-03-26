import React from "react";
import calculateLowestRates from "../../helpers/calculateLowestRates.helper.ts";
import { IRates } from "../../interfaces/rates.interface.ts";
import RateCell from "./rateCell/RateCell.tsx";
import "./MarketDataTable.css";
import { ICurrencyRate } from "../../interfaces/currencyRate.interface.ts";

interface MarketDataColumnProps {
  data: ICurrencyRate[];
}

const MarketDataTable: React.FC<MarketDataColumnProps> = ({ data }) => {
  const [firstRates, secondRates, thirdRates] = data;
  const lowestRates = calculateLowestRates(
    firstRates.rates,
    secondRates.rates,
    thirdRates.rates,
  );
  const currencies = Object.keys(firstRates.rates) as (keyof IRates)[];

  return (
    <div className="table-responsive">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">First</th>
            <th scope="col">Second</th>
            <th scope="col">Third</th>
          </tr>
        </thead>
        <tbody>
          {currencies.map((currency) => (
            <tr key={currency}>
              <td>{currency}/CUPCAKE</td>
              <RateCell
                rate={firstRates.rates[currency]}
                lowestRate={lowestRates[currency]}
              />
              <RateCell
                rate={secondRates.rates[currency]}
                lowestRate={lowestRates[currency]}
              />
              <RateCell
                rate={thirdRates.rates[currency]}
                lowestRate={lowestRates[currency]}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarketDataTable;
