import './App.css';
import CurrencyField from './components/CurrencyField';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';

function App() {
  const url = 'https://api.exchangeratesapi.io/latest'
  const [currencies, setCurrencies] = useState([])
  const [fromCurrency, setFromCurrency] = useState([])
  const [toCurrency, setToCurrency] = useState([])
  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState()
  const [fromBoxAmount, setFromBoxAmount] = useState(true)

  let toAmount, fromAmount
  if (fromBoxAmount) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }

  useEffect(() => {
    async function fetchUrl() {
      try {
        let response = await fetch(url)
        response = await response.json()
        const baseCurrency = Object.keys(response.rates)[0]
        setCurrencies([response.base, ...Object.keys(response.rates)])
        setFromCurrency(response.base)
        setToCurrency(baseCurrency)
        setExchangeRate(response.rates[baseCurrency])
      }
      catch (err) {
        alert(err)
      }
    }
    fetchUrl()
  }, [])

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      async function fetchUrl() {
        try {
          let response = await fetch(`${url}?base=${fromCurrency}&symbols=${toCurrency}`)
          response = await response.json()
          setExchangeRate(response.rates[toCurrency])
        }
        catch (err) {
          alert(err)
        }
      }
      fetchUrl()
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setFromBoxAmount(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setFromBoxAmount(false)
  }

  return (
    <>
      <div className="App">
        <h1>Currency Converter</h1>
        <CurrencyField
          currencies={currencies}
          selectCurrency={fromCurrency}
          onChangeCurrency={e => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <h2>=</h2>
        <CurrencyField
          currencies={currencies}
          selectCurrency={toCurrency}
          onChangeCurrency={e => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </div>
      <Footer />
    </>
  );
}

export default App;