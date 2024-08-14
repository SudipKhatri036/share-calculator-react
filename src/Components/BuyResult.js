export default function BuyResult({
  allDetails,
  totalBuyPrice,
  dpFee,
  onBrokerCommision,
}) {
  const buySebonCommision = totalBuyPrice * 0.00015;

  const buyBrokerCommision = totalBuyPrice * onBrokerCommision(totalBuyPrice);
  console.log(typeof buyBrokerCommision);
  const totalBrokerPrice =
    totalBuyPrice + dpFee + buySebonCommision + buyBrokerCommision;
  return (
    <>
      <div className="flex">
        <h2>Nos Of Kitta</h2>
        <p>{allDetails?.quantity}</p>
      </div>

      <div className="flex">
        <h2>Purchase Price</h2>
        <p>NPR. {allDetails?.buyRate}</p>
      </div>

      <div className="flex">
        <h2>Total "Purchase" Amount</h2>
        <p>NPR. {totalBuyPrice}</p>
      </div>

      <div className="flex">
        <h2>Sebon Commision</h2>
        <p>NPR. {buySebonCommision}</p>
      </div>

      <div className="flex">
        <h2>Broker Commision</h2>
        <p>NPR. {buyBrokerCommision}</p>
      </div>
      <div className="flex">
        <h2>DP Charge</h2>
        <p>NPR. {dpFee}</p>
      </div>

      <div className="flex">
        <h2>Total Amount Payment to broker</h2>
        <p>NPR. {totalBrokerPrice}</p>
      </div>
    </>
  );
}
