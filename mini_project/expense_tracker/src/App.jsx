import React, { useState } from 'react';
import ExpenseForm from './component/ExpenseForm';
import ExpenseList from './component/ExpenseList';
import Filters from './component/Filters';
import Statistics from './component/Statistics';
// import './styles.css';

const categories = ['Food', 'Transport', 'Bills', 'Entertainment', 'Others'];

function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState('All');

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now(), date: new Date().toLocaleDateString() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  const updateExpense = (updated) => {
    setExpenses(expenses.map(e => (e.id === updated.id ? updated : e)));
  };

  const filteredExpenses = filter === 'All' ? expenses : expenses.filter(e => e.category === filter);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm categories={categories} onAdd={addExpense} />
      <Filters categories={categories} current={filter} onFilter={setFilter} />
      <ExpenseList expenses={filteredExpenses} onDelete={deleteExpense} onUpdate={updateExpense} />
      <Statistics expenses={expenses} />
    </div>
  );
}

export default App;


