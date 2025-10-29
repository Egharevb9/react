import React, { useState } from 'react';

function ExpenseList({ expenses, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editDesc, setEditDesc] = useState('');
  const [editAmt, setEditAmt] = useState('');

  const startEdit = (expense) => {
    setEditingId(expense.id);
    setEditDesc(expense.description);
    setEditAmt(expense.amount);
  };

  const saveEdit = (id) => {
    onUpdate({ id, description: editDesc, amount: parseFloat(editAmt), category: expenses.find(e => e.id === id).category, date: expenses.find(e => e.id === id).date });
    setEditingId(null);
  };

  return (
    <ul className="list">
      {expenses.map(exp => (
        <li key={exp.id} className={`item ${exp.category}`}>
          {editingId === exp.id ? (
            <>
              <input value={editDesc} onChange={e => setEditDesc(e.target.value)} />
              <input type="number" value={editAmt} onChange={e => setEditAmt(e.target.value)} />
              <button onClick={() => saveEdit(exp.id)}>💾</button>
            </>
          ) : (
            <>
              <span>{exp.description} - ₦{exp.amount.toFixed(2)} ({exp.category}) on {exp.date}</span>
              <button onClick={() => startEdit(exp)}>✏️</button>
              <button onClick={() => onDelete(exp.id)}>🗑️</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;