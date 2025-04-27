import { useEffect, useState } from "react";
import "./App.css";

const CurrencyInput = ({ name, amount, onChangeHandler }) => {
  return (
    <div>
      <span>{name}: </span>
      <input
        type="number"
        value={amount}
        onChange={(e) => onChangeHandler(e, name)}
      />
    </div>
  );
};

function App() {
  const [amount, setAmount] = useState({
    krw: 0,
    usd: 0
  });

  const onChangeAmount = (e, type) => {
    if (type === "krw") {
      setAmount({
        krw: e.target.value,
        usd: e.target.value / 1300
      })
    } else {
      setAmount({
        krw: e.target.value * 1300,
        usd: e.target.value
      })
    }
  }

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <CurrencyInput name="krw" amount={amount.krw} onChangeHandler={onChangeAmount} />
      <CurrencyInput name="usd" amount={amount.usd} onChangeHandler={onChangeAmount} />
    </>
  );
}

export default App;
