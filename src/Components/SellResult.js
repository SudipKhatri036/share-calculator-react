export default function SellResult({
  allDetails,
  totalBuyPrice,
  dpFee,
  totalSellPrice,
  onBrokerCommision,
}) {
  const sellSebonCommision = (totalSellPrice * 0.00015).toFixed(2);
  const sellBrokerCommision =
    totalSellPrice * onBrokerCommision(totalSellPrice);

  let totalReceivableAmt = totalSellPrice - dpFee - sellSebonCommision;

  let profitorloss = totalReceivableAmt - totalBuyPrice;

  const isProfit = profitorloss > 0;
  const taxAmt = profitorloss > 0 ? profitorloss * allDetails?.tax : 0;

  totalReceivableAmt -= taxAmt;
  profitorloss -= taxAmt;

  return (
    <>
      <div className="flex">
        <h2>Nos Of Kitta</h2>
        <p>{allDetails?.quantity}</p>
      </div>
      <div className="flex">
        <h2>Purchase Price</h2>
        <p>{allDetails?.buyRate}</p>
      </div>
      <div className="flex">
        <h2>Selling Price</h2>
        <p>NPR. {allDetails?.sellRate}</p>
      </div>

      <div className="flex">
        <h2>Total Selling Amount</h2>
        <p>NPR. {totalSellPrice}</p>
      </div>

      <div className="flex">
        <h2>Sebon Commision</h2>
        <p>NPR. {sellSebonCommision}</p>
      </div>

      <div className="flex">
        <h2>Broker Commision</h2>
        <p>NPR. {sellBrokerCommision}</p>
      </div>

      <div className="flex">
        <h2>DP Charge</h2>
        <p>NPR. {dpFee}</p>
      </div>

      <div className="flex">
        <h2>Capital Gain Tax</h2>
        <p>NPR. {taxAmt}</p>
      </div>

      <div className="flex">
        <h2>Net Recivable Amount</h2>
        <p>NPR. {totalReceivableAmt}</p>
      </div>

      <div className={`profit-loss ${isProfit ? "profit" : "loss"}`}>
        NPR. {profitorloss.toFixed(2)} {isProfit ? "Profit" : "Loss"}
      </div>
    </>
  );
}
