import { useQuery } from "@tanstack/react-query";
import { ICurrencyRate } from "../interfaces/currencyRate.interface";
import axiosInstance from "./config";

export const useQueryCurrency = () => {
  return useQuery<ICurrencyRate[], Error>({
    queryKey: ["getQueryCurrency"],
    queryFn: async () => {
      try {
        const responses = await Promise.all([
          axiosInstance.get<ICurrencyRate>("/first/poll"),
          axiosInstance.get<ICurrencyRate>("/second/poll"),
          axiosInstance.get<ICurrencyRate>("/third/poll"),
        ]);

        return responses.map((response) => response.data);
      } catch (error) {
        throw new Error("Failed to fetch currency data");
      }
    },
    refetchInterval: 5000,
  });
};
