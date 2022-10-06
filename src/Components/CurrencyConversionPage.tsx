import Rates from '../rates'
import { useState } from "react";
import { CURRENCIES } from '../const';
import CurrencyInput from './CurrencyInput';

interface CurrencyConversionPageProps {
  rates: Rates
}

export default function CurrencyConversionPage({ rates } : CurrencyConversionPageProps) {

  const [value, setValue] = useState(1);

  return (
    <section className="input-container">
      <div className="input-div">
        <header className="currency-converter-header">
          {Object.entries(CURRENCIES).map(([code, symbol]) => (
            <div key={code} className="currency-converter-euro">
              <span>{code}: {rates[code].toFixed(2)} {symbol}</span>
            </div>
          ))}
        </header>
        <h1 className="currency-converter">Currency Converter</h1>
        <CurrencyInput value={value} rates={rates} onChange={setValue} />
        <CurrencyInput value={value} rates={rates} onChange={setValue} />
      </div>
    </section>
  );
}