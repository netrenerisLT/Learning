import Expenses from "./components/Expenses/Expenses.js";
import NewExpense from "./components/NewExpense/NewExpense.js";
import React, { useState } from "react";

const DUMMY_ex = [
  { id: 1, title: "care you", amount: 100, date: new Date(2022, 10, 12) },
  { id: 2, title: "care you", amount: 101, date: new Date(2022, 1, 12) },
  { id: 3, title: "care you", amount: 92.2, date: new Date(2021, 1, 12) },
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
