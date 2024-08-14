import { useState } from "react";
import SellDetail from "./SellDetail";

export default function Form({
  selectedOption,
  onCalculationDetail,
  onShowResult,
  onSubmitted,
}) {
  const [buyRate, setBuyRate] = useState("");
  const [sellRate, setSellRate] = useState("");
  const [quantity, setQuatity] = useState("");
  const [includeDp, setIncludeDp] = useState("Yes");
  const [tax, setTax] = useState(0.075);

  function handleForm(e) {
    e.preventDefault();

    if (!buyRate || !quantity) return;
    if (selectedOption === "sell")
      if (!buyRate || !sellRate || !quantity) return;

    const sellObj = selectedOption === "sell" && {
      sellRate,
      includeDp,
      tax,
    };

    const newObj = {
      buyRate,
      quantity,
      ...sellObj,
    };

    onCalculationDetail(newObj);
    onSubmitted();
    onShowResult();
  }
  return (
    <form onSubmit={handleForm}>
      <label>Buy Rate</label>
      <input
        type="text"
        value={buyRate}
        onChange={(e) => {
          const value = e.target.value;
          value === " " ||
            (/^[0-9]*$/.test(value) && setBuyRate(Number(e.target.value)));
        }}
      />

      <label>Stock quantity</label>
      <input
        type="text"
        value={quantity}
        onChange={(e) => {
          const value = e.target.value;
          value === " " ||
            (/^[0-9]*$/.test(value) && setQuatity(Number(e.target.value)));
        }}
      />

      {selectedOption === "sell" && (
        <SellDetail
          sellRate={sellRate}
          setSellRate={setSellRate}
          setIncludeDp={setIncludeDp}
          setTax={setTax}
        />
      )}

      <div className="btn-container">
        {selectedOption === "sell" ? (
          <button type="submit" className="sell">
            Calculate Sell
          </button>
        ) : (
          <button type="submit" className="buy">
            Calculate Buy
          </button>
        )}
      </div>
    </form>
  );
}
