

// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Filter from './components/Filter';
import ShoppingList from './components/ShoppingList';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? 'dark-mode' : ''}>
      <Header onDarkModeClick={toggleDarkMode} />
      <Filter onCategoryChange={handleCategoryChange} />
      <ShoppingList/>
    </div>
  );
}

export default App;

