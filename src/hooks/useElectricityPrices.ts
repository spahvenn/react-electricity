import {useQuery, UseQueryResult} from '@tanstack/react-query';
import Axios from 'axios';
import {ElectricityPrice} from '../types/types.ts';

const PRICE_ENDPOINT = 'http://localhost:3000/latest-prices';

type ElectricityPricesResponse = {
  prices: ElectricityPrice[];
};

export default function useElectricityPrices(): UseQueryResult<
  ElectricityPrice[]
> {
  return useQuery({
    queryKey: ['electricityPrices'],
    queryFn: async () => {
      const res = await Axios.get<ElectricityPricesResponse>(PRICE_ENDPOINT);
      return res.data.prices;
    },
  });
}
