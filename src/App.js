import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Reading from './pages/Reading';
import Publications from './pages/Publications';
// import Projects from './pages/Projects';
import Essays from './pages/Essays';
import Photography from './pages/Photography';
import './App.css';

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading" element={<Reading />} />
          <Route path="/publications" element={<Publications />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="/essays" element={<Essays />} />
          <Route path="/essays/:slug" element={<Essays />} />
          <Route path="/photos" element={<Photography />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;