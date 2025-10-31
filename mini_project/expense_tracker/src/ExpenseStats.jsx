import React from 'react';

function ExpenseStats({ expenses }) {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const highest = Math.max(0, ...expenses.map(e => e.amount));
  const breakdown = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {});

  return (
    <div className="stats">
      <p>Total Spent: ₦{total.toFixed(2)}</p>
      <p>Number of Expenses: {expenses.length}</p>
      <p>Highest Expense: ₦{highest.toFixed(2)}</p>
      <div>
        {Object.entries(breakdown).map(([cat, amt]) => (
          <p key={cat}>{cat}: ₦{amt.toFixed(2)}</p>
        ))}
      </div>
    </div>
  );
}

export default ExpenseStats;