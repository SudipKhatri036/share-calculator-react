import SellResult from "./SellResult";
import BuyResult from "./BuyResult";

export default function ResultCalculation({
  allDetails,
  selectedOption,
  resultRef,
}) {
  function handleBrokerCommision(price) {
    return price < 2500
      ? 10
      : price > 2500
      ? 0.0036
      : price > 50000
      ? 0.0033
      : price > 500000
      ? 0.0031
      : 0.0027;
  }

  const isSell = selectedOption === "sell";
  const totalBuyPrice = allDetails?.quantity * allDetails?.buyRate;
  const totalSellPrice = allDetails?.sellRate * allDetails?.quantity || "";
  const dpFee = 25;

  return (
    <div className="result" ref={resultRef} style={{ marginTop: "20px" }}>
      {isSell ? (
        <SellResult
          allDetails={allDetails}
          dpFee={dpFee}
          totalSellPrice={totalSellPrice}
          totalBuyPrice={totalBuyPrice}
          onBrokerCommision={handleBrokerCommision}
        />
      ) : (
        <BuyResult
          allDetails={allDetails}
          dpFee={dpFee}
          totalBuyPrice={totalBuyPrice}
          onBrokerCommision={handleBrokerCommision}
        />
      )}
    </div>
  );
}
