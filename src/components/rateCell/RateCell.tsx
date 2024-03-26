import React from "react";

interface RateCellProps {
  rate: number;
  lowestRate: number | undefined;
}

const RateCell: React.FC<RateCellProps> = ({ rate, lowestRate }) => {
  return (
    <td className={rate === lowestRate ? "lowestRate" : "noBorder"}>
      {rate.toFixed(2)}
    </td>
  );
};

export default RateCell;
