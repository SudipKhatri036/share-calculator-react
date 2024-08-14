export default function RadioBtn({ selectedOption, onBuySell }) {
  return (
    <div className="buy-sell-container">
      <label className="label-check">
        Buy
        <input
          type="radio"
          name="buysell"
          value="buy"
          checked={selectedOption === "buy"}
          onChange={onBuySell}
        />
      </label>
      <label className="label-check">
        Sell
        <input
          type="radio"
          name="buysell"
          value="sell"
          checked={selectedOption === "sell"}
          onChange={onBuySell}
        />
      </label>
    </div>
  );
}
