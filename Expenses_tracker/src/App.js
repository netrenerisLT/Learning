import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useState } from "react";

const DUMMY_ex = [
  { id: 1, title: "care you", amount: 222, date: new Date(2022, 1, 12) },
  {
    id: 2,
    title: "wow is osom",
    amount: 22.23,
    date: new Date(2021, 11, 30),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_ex);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
};

export default App;
