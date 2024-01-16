import Input from "./components/Input";
import Result from "./components/Result";
import { useState } from "react";
import { calculateInvestmentResults } from "./util/investment";

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
    setInputValue({ ...inputValue, [field]: +value });
  }

  const calculatedValues = calculateInvestmentResults(inputValue);
  console.log(calculatedValues);

  return (
    <>
      <div id="user-input">
        <form action="" className="input-group">
          <Input
            onClick={getInputValue}
            name={"initialInvestment"}
            type={"number"}
          >
            Initial Investment
          </Input>
          <Input
            onClick={getInputValue}
            name={"expectedReturn"}
            type={"number"}
          >
            Expected Return
          </Input>
          <Input
            onClick={getInputValue}
            name={"annualInvestment"}
            type={"number"}
          >
            Annual Investment
          </Input>
          <Input onClick={getInputValue} name={"duration"} type={"number"}>
            Duration (year)
          </Input>
        </form>
      </div>
      <div>
        <Result
          calculatedValues={calculatedValues}
          totalInvest={inputValue.initialInvestment}
        />
      </div>
    </>
  );
}

export default App;
