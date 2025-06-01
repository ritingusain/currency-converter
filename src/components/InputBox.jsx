import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  const handleAmountChange = (e) => {
    const value = e.target.value;
    if (value === '') {
      onAmountChange && onAmountChange("");
    } else {
      onAmountChange && onAmountChange(Number(value));
    }
  };

  return (
    <div className={`bg-white/20 p-4 rounded-xl text-sm flex backdrop-blur-sm border border-white/30 ${className}`}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputId}
          className="text-gray-600 font-medium mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          className="outline-none w-full bg-transparent py-2 text-gray-800 text-lg font-semibold focus:ring-2 focus:ring-indigo-500/40 rounded-md transition-all duration-200"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-gray-600 font-medium mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-3 py-2 bg-indigo-50 cursor-pointer outline-none text-gray-800 font-medium hover:bg-indigo-100 transition-colors duration-200 focus:ring-2 focus:ring-indigo-500/40 w-full max-w-[140px]"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
