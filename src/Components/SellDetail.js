export default function SellDetail({
  sellRate,
  setSellRate,
  setIncludeDp,
  setTax,
}) {
  return (
    <>
      <label>Sell Rate</label>
      <input
        type="text"
        value={sellRate}
        onChange={(e) => {
          const value = e.target.value;
          value === " " ||
            (/^[0-9]*$/.test(value) && setSellRate(Number(e.target.value)));
        }}
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
