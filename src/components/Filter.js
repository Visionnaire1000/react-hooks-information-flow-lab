
// Filter.js
import React from 'react';

function Filter({ onCategoryChange }) {
  return (
    <div>
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="all">All</option>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
        {/* Add other options as needed */}
      </select>
    </div>
  );
}

export default Filter;
