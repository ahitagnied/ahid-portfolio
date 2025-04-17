// src/App.js

import React from 'react';
import './App.css';
import { Bookshelf } from './components/BookShelf';
import books from './contents/Books';

function App() {
  return (
    <div className="App">
      <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Bookshelf books={books} />
      </main>
    </div>
  );
}

export default App;