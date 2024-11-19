import {DateTime} from 'luxon';
import {ChartDataItem, ElectricityPrice} from '../../types/types.ts';

export const formatElectricityPriceData = (
  prices: ElectricityPrice[],
): ChartDataItem[] => {
  const todaysPrices = prices.filter((price) => {
    return DateTime.fromISO(price.startDate).day === DateTime.now().day;
  });

  return todaysPrices
    .sort((a, b) =>
      DateTime.fromISO(a.startDate)
        .diff(DateTime.fromISO(b.startDate))
        .toMillis(),
    )
    .map((price) => {
      const hour = DateTime.fromISO(price.startDate).hour;
      return {
        label: String(hour),
        value: price.price,
      };
    });
};
