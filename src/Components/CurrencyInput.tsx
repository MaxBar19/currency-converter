import React from 'react'
import propTypes from "prop-types"
import { useState, useEffect } from "react";
import { CURRENCY_CODES } from '../const'
import Rates from '../rates'

interface CurrencyInputProps {
  value: number,
  rates: Rates,
  onChange: (_: number) => void
}

function roundUp(number: number) {
  return number.toFixed(4);
}

const CurrencyInput = ({ value, rates, onChange } : CurrencyInputProps) => {
  const [amount, setAmount] = useState(1);
  const [code, setCode] = useState('EUR');

  useEffect(() => { setAmount(value * rates[code]) }, [value, code, rates]);

  function handleChange(newAmount: number, newCode: string) {
    setAmount(newAmount);
    setCode(newCode);
    if (newAmount)
      onChange(newAmount / rates[newCode]);
  }

  return (
    <div className="currency-input">
      <input type="text" value={typeof amount === 'number' ? roundUp(amount) : ''}
        onChange={event => handleChange(parseFloat(event.target.value), code)} />

      <select value={code} onChange={event => handleChange(amount, event.target.value)}>
        {CURRENCY_CODES.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
    </div>
  )
}

CurrencyInput.propTypes = {
  value: propTypes.number.isRequired,
  rates: propTypes.object.isRequired,
  onChange: propTypes.func.isRequired
}

export default CurrencyInput