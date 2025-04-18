import React from 'react';
import './App.css';
import Reading from './pages/Reading';

function App() {
  return (
    <div className="App">
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Reading />
      </main>
    </div>
  );
}

export default App;