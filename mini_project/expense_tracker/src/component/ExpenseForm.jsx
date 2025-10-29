import React, { useState } from 'react';

function ExpenseForm({ categories, onAdd }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || parseFloat(amount) <= 0) return;
    onAdd({ description, amount: parseFloat(amount), category });
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" />
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount (₦)" />
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(cat => <option key={cat}>{cat}</option>)}
      </select>
      <button type="submit">Add</button>
    </form>
  );
}

export default ExpenseForm;