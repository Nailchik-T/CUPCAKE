import { useQueryCurrency } from "../services/useQueryCurrency.service.ts";
import MarketDataTable from "../components/marketDataColumn/MarketDataTable.tsx";
import { FC } from "react";

const HomePage: FC = () => {
  const { data = [], isLoading } = useQueryCurrency();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No data available.</div>;

  return <MarketDataTable data={data} />;
};
export default HomePage;
