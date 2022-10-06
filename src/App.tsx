import './App.css';
import useFetch from './Hooks/useFetch';
import { CURRENCY_CODES } from './const'
import Rates from './rates'
import CurrencyConversionPage from './Components/CurrencyConversionPage';

interface FixerResponse {
  success: boolean,
  timestamp: number,
  base: string,
  date: Date,
  rates: Rates
}

function App() {
  const { data, loading, error } = useFetch<FixerResponse>(
    `http://data.fixer.io/api/latest?access_key=106ab470d06b4c14d00c10f864ef62b6&symbols=${CURRENCY_CODES.join(',')}`
  );

  if (loading)
    return <div>Loading...</div>;

  if (error)
    return <div>Error: {error}</div>;

  if (!(data && data.rates))
    return <div>Error: data is missing</div>;

  return <CurrencyConversionPage rates={data.rates} />
}

export default App;
