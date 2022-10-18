import React, { useState } from "react";
import Card from "../UI/Card.js";
import ExpenseItem from "./ExpenseItem.js";
import ExpensesFilter from "./ExpensesFilter.js";
import "./Expenses.css";
import ExpensesChart from "./ExpensesChart.js";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ul className="expenses-list">
        {filteredExpenses.length === 0 ? (
          <h3 className="expenses-list__fallback">No expenses found :(</h3>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </ul>
    </Card>
  );
}

export default Expenses;
