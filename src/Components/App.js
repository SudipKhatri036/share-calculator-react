import { useState } from "react";
import RadioBtn from "./RadioBtn";
import ResultCalculation from "./ResultCalculation";
import Form from "./Form";

function App() {
  const [selectedOption, setSelectedOption] = useState("buy");
  const [showResult, setShowResult] = useState(false);
  const [allDetails, setAllDetails] = useState({});

  function handleBuySell(e) {
    e.target.value === "sell"
      ? setSelectedOption(e.target.value)
      : setSelectedOption("buy");

    setShowResult(false);
  }
  function handleShowResult() {
    setShowResult(true);
  }
  function handleCalculationDetail(obj) {
    setAllDetails(obj);
  }

  return (
    <div>
      <h1>Retail Buy Sell calculator</h1>
      <RadioBtn onBuySell={handleBuySell} selectedOption={selectedOption} />
      <Form
        selectedOption={selectedOption}
        onShowResult={handleShowResult}
        onCalculationDetail={handleCalculationDetail}
      />
      {showResult && (
        <ResultCalculation
          allDetails={allDetails}
          selectedOption={selectedOption}
        />
      )}
    </div>
  );
}

export default App;
