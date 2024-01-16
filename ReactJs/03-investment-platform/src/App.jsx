import Input from "./components/Input";
import Result from "./components/Result";

function App() {
  return (
    <>
      <div id="user-input">
        <form action="" className="input-group">
          <Input name={"initialInvestment"} type={"number"}>
            Initial Investment
          </Input>
          <Input name={"expectedReturn"} type={"number"}>
            Expected Return
          </Input>
          <Input name={"annualInvestment"} type={"number"}>
            Annual Investment
          </Input>
          <Input name={"duration"} type={"number"}>
            Duration (year)
          </Input>
        </form>
      </div>
      <div>
        <Result />
      </div>
    </>
  );
}

export default App;
