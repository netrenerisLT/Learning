import Input from "./components/Input";
import Result from "./components/Result";
import { useState } from "react";
import { calculateInvestmentResults, formatter } from "./util/investment";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: "",
    expectedReturn: "",
    annualInvestment: "",
    duration: "",
  });

  function getInputValue(event) {
    const value = event.target.value;
    const field = event.target.name;
    setInputValue((prevValue) => {
      return { ...inputValue, [field]: +value };
    });
  }

  const calculatedValues = calculateInvestmentResults(inputValue);

  const inputIsValid = inputValue.duration >= 1;
  return (
    <>
      <div id="user-input">
        <form action="" className="input-group">
          <Input
            onClick={getInputValue}
            name={"initialInvestment"}
            type={"number"}
            value={inputValue.initialInvestment}
          >
            Initial Investment
          </Input>
          <Input
            onClick={getInputValue}
            name={"expectedReturn"}
            type={"number"}
            value={inputValue.expectedReturn}
          >
            Expected Return (%)
          </Input>
          <Input
            onClick={getInputValue}
            name={"annualInvestment"}
            type={"number"}
            value={inputValue.annualInvestment}
          >
            Annual Investment
          </Input>
          <Input
            onClick={getInputValue}
            name={"duration"}
            type={"number"}
            value={inputValue.duration}
            min={1}
          >
            Duration (year)
          </Input>
        </form>
      </div>
      <div>
        {inputIsValid ? (
          <Result
            calculatedValues={calculatedValues}
            totalInvest={inputValue.initialInvestment}
          />
        ) : (
          <p>Please enter duration greater than zero.</p>
        )}
      </div>
    </>
  );
}

export default App;
