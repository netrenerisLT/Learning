import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(form);
    event.target.reset();
    setForm({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleForm}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            min="0.01"
            step="0.01"
            value={form.name}
            onChange={handleForm}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            name="date"
            min="2020-01-01"
            max="2023-12-31"
            value={form.date}
            onChange={handleForm}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
