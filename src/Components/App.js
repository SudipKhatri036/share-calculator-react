import { useState, useRef, useEffect } from "react";
import RadioBtn from "./RadioBtn";
import ResultCalculation from "./ResultCalculation";
import Form from "./Form";

function App() {
  const [selectedOption, setSelectedOption] = useState("buy");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [allDetails, setAllDetails] = useState({});

  const resultRef = useRef();

  useEffect(() => {
    if (resultRef.current)
      resultRef.current.scrollIntoView({ behaviour: "smooth" });
  }, [isSubmitted]);

  function handleBuySell(e) {
    e.target.value === "sell"
      ? setSelectedOption(e.target.value)
      : setSelectedOption("buy");

    setShowResult(false);
    setIsSubmitted(false);
  }
  function handleShowResult() {
    setShowResult(true);
  }
  function handleCalculationDetail(obj) {
    setAllDetails(obj);
  }

  return (
    <div>
      <h1>Share calculator</h1>
      <RadioBtn onBuySell={handleBuySell} selectedOption={selectedOption} />
      <Form
        selectedOption={selectedOption}
        onShowResult={handleShowResult}
        onCalculationDetail={handleCalculationDetail}
        onSubmitted={setIsSubmitted}
      />
      {showResult && (
        <ResultCalculation
          allDetails={allDetails}
          selectedOption={selectedOption}
          resultRef={resultRef}
        />
      )}
    </div>
  );
}

export default App;
