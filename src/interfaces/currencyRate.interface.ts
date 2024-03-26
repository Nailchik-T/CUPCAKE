export interface ICurrencyRate {
  rates: {
    RUB: number;
    USD: number;
    EUR: number;
  };
  base: string;
  timestamp: number;
  date: string;
}

export interface ICurrencyData {
  source: string;
  rates: {
    RUB: number;
    USD: number;
    EUR: number;
  };
}
