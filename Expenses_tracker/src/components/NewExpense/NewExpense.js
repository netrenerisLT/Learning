import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseForm from "./ExpenseForm.js";
import "./NewExpense.css";

function NewExpense(props) {
  const [isActive, setIsActive] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsActive(true);
  };

  const stopEditingHandler = () => {
    setIsActive(false);
  };

  return (
    <Card className="new-expense">
      {!isActive ? (
        <button onClick={startEditingHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </Card>
  );
}

export default NewExpense;
