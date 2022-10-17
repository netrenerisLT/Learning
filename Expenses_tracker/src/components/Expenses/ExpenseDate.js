import "./ExpenseDate.css";
import React from "react";
import Card from "../UI/Card.js";

function ExpenseDate(props) {
  const year = props.date.getFullYear();
  const month = props.date.toLocaleString("lt-LT", { month: "long" });
  const day = props.date.toLocaleString("lt-LT", { day: "2-digit" });

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}

export default ExpenseDate;
