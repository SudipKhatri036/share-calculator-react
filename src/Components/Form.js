import { useState } from "react";

export default function Form({
  selectedOption,
  onCalculationDetail,
  onShowResult,
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
    onShowResult();
  }
  return (
    <form onSubmit={handleForm}>
      <label>Buy Rate</label>
      <input
        type="number"
        value={buyRate}
        onChange={(e) => setBuyRate(Number(e.target.value))}
      />

      <label>Stock quantity</label>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuatity(Number(e.target.value))}
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

function SellDetail({ sellRate, setSellRate, setIncludeDp, setTax }) {
  return (
    <>
      <label>Sell Rate</label>
      <input
        type="number"
        value={sellRate}
        onChange={(e) => setSellRate(Number(e.target.value))}
      />

      <label>Include DP Charge</label>
      <select
        onChange={(e) => {
          setIncludeDp(e.target.value);
        }}
      >
        <option value="yes">Yes</option>
        <option value="no">No</option>
      </select>

      <label>Capital Gain Tax</label>
      <select
        onChange={(e) => {
          setTax(Number(e.target.value));
        }}
      >
        <option value={0.075}>7.5%</option>
        <option value={0.05}>5%</option>
      </select>
    </>
  );
}
