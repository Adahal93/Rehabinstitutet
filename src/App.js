import React from 'react';
import './App.css';
import HomePage from './views/HomePage';

function App() {
  console.log('App component is rendering'); // Debug log
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <HomePage />
    </div>
  );
}

export default App;