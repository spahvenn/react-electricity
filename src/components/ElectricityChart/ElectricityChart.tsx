import {CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import useElectricityPrices from '../../hooks/useElectricityPrices.ts';
import {formatElectricityPriceData} from './utils.ts';

export default function ElectricityChart() {
  const prices = useElectricityPrices();

  if (!prices.data) {
    return null;
  }

  const electricityPricesData = formatElectricityPriceData(prices.data);

  return (
    <LineChart width={600} height={300} data={electricityPricesData}>
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="label" />
      <YAxis domain={[0, 40]} />
      <Tooltip />
    </LineChart>
  );
}
