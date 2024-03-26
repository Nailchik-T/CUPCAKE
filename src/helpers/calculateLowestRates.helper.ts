import { IRates } from "../interfaces/rates.interface.ts";

export const calculateLowestRates = (
  firstRates: IRates,
  secondRates: IRates,
  thirdRates: IRates,
): Partial<IRates> => {
  const currencies = Object.keys(firstRates) as (keyof IRates)[];
  const lowestRates: Partial<IRates> = {};
  currencies.forEach((currency) => {
    lowestRates[currency] = Math.min(
      firstRates[currency],
      secondRates[currency],
      thirdRates[currency],
    );
  });

  return lowestRates;
};

export default calculateLowestRates;
