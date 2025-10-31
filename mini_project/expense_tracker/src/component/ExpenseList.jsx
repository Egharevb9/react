import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';



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
              <button onClick={() => saveEdit(exp.id)}>✅</button>
            </>
          ) : (
            <>
              <span>{exp.description} - ₦{exp.amount.toFixed(2)} ({exp.category}) on {exp.date}</span>
              {/* <button onClick={() => startEdit(exp)}>
             <i className="fas fa-pen-nib"></i>
              </button> */}
              <button onClick={() => startEdit(exp)}>
              <span className="material-icons">edit</span>
              </button>




              {/* <button onClick={() => startEdit(exp)}>✏️</button> */}

              <button onClick={() => onDelete(exp.id)}>
              <FontAwesomeIcon icon={faTrash} />
              </button>


              {/* <button onClick={() => onDelete(exp.id)}>🗑️</button> */}
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;


// import { useState } from 'react';
// import ExpenseItem from './ExpenseItem';

// function ExpenseList({ expenses, onDelete, onUpdate }) {
//   const [editingId, setEditingId] = useState(null);
//   const [editDesc, setEditDesc] = useState('');
//   const [editAmt, setEditAmt] = useState('');

//   const startEdit = (expense) => {
//     setEditingId(expense.id);
//     setEditDesc(expense.description);
//     setEditAmt(expense.amount);
//   };

//   const saveEdit = (id) => {
//     const original = expenses.find(e => e.id === id);
//     onUpdate({ ...original, description: editDesc, amount: parseFloat(editAmt) });
//     setEditingId(null);
//   };

//   return (
//     <ul className="list">
//       {expenses.map(exp => (
//         <ExpenseItem
//           key={exp.id}
//           expense={exp}
//           isEditing={editingId === exp.id}
//           editDesc={editDesc}
//           editAmt={editAmt}
//           setEditDesc={setEditDesc}
//           setEditAmt={setEditAmt}
//           startEdit={startEdit}
//           saveEdit={saveEdit}
//           onDelete={onDelete}
//         />
//       ))}
//     </ul>
//   );
// }

// export default ExpenseList;
// // 