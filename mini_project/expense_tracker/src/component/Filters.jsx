import React from 'react';

function Filters({ categories, current, onFilter }) {
  return (
    <div className="filters">
      <button onClick={() => onFilter('All')} className={current === 'All' ? 'active' : ''}>All</button>
      {categories.map(cat => (
        <button key={cat} onClick={() => onFilter(cat)} className={current === cat ? 'active' : ''}>{cat}</button>
      ))}
    </div>
  );
}

export default Filters;
