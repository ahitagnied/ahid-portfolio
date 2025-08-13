// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Reading from './pages/Reading';
import Publications from './pages/Publications';
// import Projects from './pages/Projects';
import Essays from './pages/Essays';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/publications" element={<Publications />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/essays" element={<Essays />} />
          <Route path="/essays/:slug" element={<Essays />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;