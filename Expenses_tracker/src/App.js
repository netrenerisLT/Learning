import Expenses from "./components/Expenses/Expenses.js";

const App = () => {
  const expenses = [
    { id: 1, title: "care you", amount: 222, date: new Date(2022, 1, 12) },
    {
      id: 2,
      title: "wow is osom",
      amount: 22.23,
      date: new Date(1021, 11, 30),
    },
  ];

  return (
    <>
      <Expenses items={expenses} />
    </>
  );
};

export default App;
