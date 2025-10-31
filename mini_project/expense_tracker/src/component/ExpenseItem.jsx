import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ExpenseItem({ expense, isEditing, editDesc, editAmt, setEditDesc, setEditAmt, startEdit, saveEdit, onDelete }) {
  const categoryColors = {
    Food: '#ffe0e0',
    Transport: '#e0f7ff',
    Bills: '#fff5e0',
    Entertainment: '#e0ffe4',
    Others: '#f0e0ff',
  };

  return (
    <li className="item" style={{ backgroundColor: categoryColors[expense.category] }}>
      {isEditing ? (
        <>
          <input value={editDesc} onChange={e => setEditDesc(e.target.value)} />
          <input type="number" value={editAmt} onChange={e => setEditAmt(e.target.value)} />
          <button onClick={() => saveEdit(expense.id)}>💾</button>
        </>
      ) : (
        <>
          <span>{expense.description} - ₦{expense.amount.toFixed(2)} ({expense.category}) on {expense.date}</span>
          <button onClick={() => startEdit(expense)}>🖊️</button>
          


          <button onClick={() => onDelete(expense.id)}>🗑️</button>
        </>
      )}
    </li>
  );
}

export default ExpenseItem;
